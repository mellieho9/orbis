import io from "socket.io-client";
import { useRef, useEffect, useState } from "react";
import "./Chat.css"
import {Link} from "react-router-dom"
import {CrossIcon, FullscreenIcon, VolumeDownIcon} from "evergreen-ui"
import TimerParent from "../Timer/TimerParent";
import Motivate from "../Motivate/Motivate";
import cam from "../../assets/images/cam.svg"
import mic from "../../assets/images/mic.svg"

const ENDPOINT = "http://127.0.0.1:8080";

const mediaConstraints = {
    audio: true,
    video: { width: 500, height: 500 },
}

const iceServers = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
        { urls: 'stun:stun2.l.google.com:19302' },
        { urls: 'stun:stun3.l.google.com:19302' },
        { urls: 'stun:stun4.l.google.com:19302' },
    ],
}

const Chatnew = () => {
    const token = sessionStorage.getItem("token");
    const socket = io(ENDPOINT, { transport: ["websocket"], query: {token}});

    let localStream
    let remoteStream
    let isRoomCreator
    let rtcPeerConnection
    let roomId

    const roomSelectionContainer = useRef(null)
    const roomInput = useRef(null)
    const connectButton = useRef(null)
    const videoChatContainer = useRef(null)
    const localVideoComponent = useRef(null)
    const remoteVideoComponent = useRef(null)

    async function setLocalStream(mediaConstraints) {
        let stream
        try {
          stream = await navigator.mediaDevices.getUserMedia(mediaConstraints)
        } catch (error) {
          console.error('Could not get user media', error)
        }
      
        localStream = stream
        localVideoComponent.current.srcObject = stream
      }

    function addLocalTracks(rtcPeerConnection) {
        localStream.getTracks().forEach((track) => {
            rtcPeerConnection.addTrack(track, localStream)
        })
    }

    async function createOffer(rtcPeerConnection) {
        let sessionDescription
        try {
            sessionDescription = await rtcPeerConnection.createOffer()
            rtcPeerConnection.setLocalDescription(sessionDescription)
        } catch (error) {
            console.error(error)
        }

        socket.emit('webrtc_offer', {
            type: 'webrtc_offer',
            sdp: sessionDescription,
            roomId,
        });
    }

    async function createAnswer(rtcPeerConnection) {
        let sessionDescription
        try {
            sessionDescription = await rtcPeerConnection.createAnswer()
            rtcPeerConnection.setLocalDescription(sessionDescription)
        } catch (error) {
            console.error(error)
        }

        socket.emit('webrtc_answer', {
            type: 'webrtc_answer',
            sdp: sessionDescription,
            roomId,
        })
    }

    function setRemoteStream(event) {
        remoteVideoComponent.current.srcObject = event.streams[0]
        remoteStream = event.stream
    }

    function sendIceCandidate(event) {
        if (event.candidate) {
            socket.emit('webrtc_ice_candidate', {
                roomId,
                label: event.candidate.sdpMLineIndex,
                candidate: event.candidate.candidate,
            })
        }
    }

    function joinRoom(room) {
        if (room === '') {
            alert('Please type a room ID')
        } else {
            roomId = room
            socket.emit('join', room)
            showVideoConference()
        }
    }

    function showVideoConference() {
        roomSelectionContainer.current.style = 'display: none'
        videoChatContainer.current.style = 'display: flex'
    }

    useEffect(()=> {
        socket.on('room_created', async () => {
            console.log('Socket event callback: room_created')
            await setLocalStream(mediaConstraints)
            isRoomCreator = true
        });

        socket.on('room_joined', async () => {
            console.log('Socket event callback: room_joined')
            await setLocalStream(mediaConstraints)
            socket.emit('start_call', roomId)
        });

        socket.on('start_call', async () => {
            console.log('Socket event callback: start_call')

            if (isRoomCreator) {
                rtcPeerConnection = new RTCPeerConnection(iceServers)
                addLocalTracks(rtcPeerConnection)
                rtcPeerConnection.ontrack = setRemoteStream
                rtcPeerConnection.onicecandidate = sendIceCandidate
                await createOffer(rtcPeerConnection)
            }
        });

        socket.on('webrtc_offer', async (event) => {
            console.log('Socket event callback: webrtc_offer')

            if (!isRoomCreator) {
                rtcPeerConnection = new RTCPeerConnection(iceServers)
                addLocalTracks(rtcPeerConnection)
                rtcPeerConnection.ontrack = setRemoteStream
                rtcPeerConnection.onicecandidate = sendIceCandidate
                 rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event))
                await createAnswer(rtcPeerConnection)
            }
        })

        socket.on('webrtc_answer', (event) => {
            console.log('Socket event callback: webrtc_answer')

            rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event))
        })

        socket.on('webrtc_ice_candidate', (event) => {
            console.log('Socket event callback: webrtc_ice_candidate')

            let candidate = new RTCIceCandidate({
                sdpMLineIndex: event.label,
                candidate: event.candidate,
            })
            rtcPeerConnection.addIceCandidate(candidate)
        });
    }, [])

    return (

        <div className="chat">
        <div id="room-selection-container" ref={roomSelectionContainer} className="centered roomNo">
            <h1>Enter your Room Code</h1>
            <input id="room-input" ref={roomInput} type="text"/>
            <button id="connect-button" ref={connectButton} onClick={()=>joinRoom(roomInput.current.value)}>CONNECT</button>
        </div>

        <div id="video-chat-container" ref={videoChatContainer} className="video-position video" style={{display: "none"}}>
            <div className="sidebar">
                <TimerParent/>
                <div className="sidebarControls">
                    <div className="left">

                    <VolumeDownIcon/>
                    <input type="range" />
                    </div>
                    <div className="right">

                    <img src={mic} alt="mic icon" />
                    <img src={cam} alt="cam icon" />
                    </div>
                </div>
                <Motivate/>
            </div>
            <div className="bothVids">
                <div className="videoheader">
                    <FullscreenIcon style={{color: "#FFF", cursor: "pointer"}} onClick={()=>{
                        if (!document.fullscreenElement) {
                            videoChatContainer.current.requestFullscreen().catch(err => {
                              alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                            });
                          } else {
                            document.exitFullscreen();
                          }
                        
                        }}/>
                    <Link to="/"><CrossIcon/> &nbsp;Exit</Link>
                </div>
                <div className="vidWrapper">
                    <video id="local-video" ref={localVideoComponent} autoPlay="autoplay" muted="muted"></video>
                    <video id="remote-video" ref={remoteVideoComponent} autoPlay="autoplay"></video>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Chatnew
