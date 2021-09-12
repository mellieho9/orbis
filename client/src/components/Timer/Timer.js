import React from "react"
import Timer from "react-compound-timer"
import "./Timer.css"
import {ResetIcon, StopIcon} from "evergreen-ui"

const Pomo = ({time}) => {
 
    return (
        <div>
            <Timer
    initialTime={time}
    startImmediately={false}
    lastUnit="m"
    direction="backward"
        >
    {({ start,reset, stop }) => (
        <div className="timerBox">
            <div className="time">
                <Timer.Minutes />:
                <Timer.Seconds /> 
            </div>
            <div className="controls">
                <button onClick={start}>Start</button>
                <ResetIcon onClick={reset} style={{cursor: "pointer"}}/>
                <StopIcon onClick={stop} style={{cursor: "pointer"}}/>
            </div>
        </div>
    )}
</Timer>

        </div>
    )
}

export default Pomo