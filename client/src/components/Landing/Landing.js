import "./Landing.css"
import study from '../../assets/images/study.svg';
import motivated from '../../assets/images/motivated.svg'
import watch from '../../assets/images/watch.svg'


const Landing = () => {
    return (
   
        <div className = "landing">
            <h1>Hello, what are you up to?</h1>

         
         <div className="productive">
    
             <div className = "productiveDescription">
             <h1>Be Productive</h1>
             <h6>Using our pomodoro timer, you can accomplish what you want to do in the way you want</h6>
             </div>

             <img src={watch} alt="watch" width="100" height="100"></img>
             
         </div>

         <div className = "study">
            <div className= "studyDescription">
            <h1>Study With Friends</h1>
             <h6>Create a room, select games, set background music, and invite your friends for your DREAM study session</h6>
            </div>

            <img src={study} alt="study" width="100" height="100"></img>
   
         </div>

         <div className = "motivated">
             <div className = "motivatedDescription">
             <h1>Get Motivated</h1>
             <h6>Check out our motivational corner for study inspo, tips, and our Orbis community!</h6>
             </div>

             <img src={motivated} alt="motivated" width="100" height="100"></img>
             
    
         </div>

   
      
     </div>



    )
}

export default Landing
