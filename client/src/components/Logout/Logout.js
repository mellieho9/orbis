import { useHistory } from "react-router-dom"
import { useEffect } from "react"
const Logout = ({setLoggedIn}) => {
    const history = useHistory() 
    useEffect(()=> {
        setLoggedIn(false)
        sessionStorage.clear()
        history.push("/")
    })
    return (
        <div>
            
        </div>
    )
}

export default Logout
