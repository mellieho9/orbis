import React, {useState, useEffect} from "react";
import io from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8080";

const Chat = ({email}) =>{
    const [response, setResponse] = useState("");
    useEffect(() => {

        const token = sessionStorage.getItem(email);
        const socket = io(ENDPOINT, { transport: ["websocket"], query: {token}});
        socket.on("message", data => {
            setResponse(data);
            console.log('client connected');
        });

        return () => socket.disconnect()

    }, []);

    return(<p>It's <time dateTime={response}>{response}</time></p>);
}

export default Chat
