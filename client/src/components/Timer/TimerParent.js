import { useState } from "react"
import Timer from "./Timer"
import "./Timer.css"

const TimerParent = () => {
    const [selection, setSelection] = useState(0)
    const times = [1500000, 900000, 300000]
    return (
        <div className="timer">
        {selection===0 && <Timer time={times[0]}/>}
        {selection===1 && <Timer time={times[1]}/>}
        {selection===2 && <Timer time={times[2]}/>}

        <div className="timerOptions">
            <p style={selection===0 ? {borderBottom: "2px solid #00474B"}:{}} onClick={()=>setSelection(0)}>Pomodoro</p>
            <p style={selection===1 ? {borderBottom: "2px solid #00474B"}:{}} onClick={()=>setSelection(1)}>Long Break</p>
            <p style={selection===2 ? {borderBottom: "2px solid #00474B"}:{}} onClick={()=>setSelection(2)}>Short Break</p>
        </div>
        </div>
    )
}

export default TimerParent
