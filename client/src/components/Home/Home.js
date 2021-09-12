import "./Home.css"
import check from '../../assets/images/check.svg'
import square from '../../assets/images/square.svg'


const Home = () => {
    return (
        <div className = "home">
           <div className = "header">
           <h1>Study at your own pace without ever worrying about finding a study group!</h1>

            <h3>This is your one stop to meet new people. 👩‍💻 Create a room and share the link with your peers! 🚪 Log in using the link at any time and find other available peers to study with!🔑</h3>

            </div>

            <div className = "features">
                <h1>For students, by students</h1>

                <div className = "twoFeatures">
                    <div className = "oneFeature">
                    <img src={square} alt="square" width="30" height="30"></img>
                    <h2>Work harder, not smarter</h2>
                    <h4>Using our pomodoro timer, you can accomplish what you want to do in the way you want</h4>
                    </div>

                    <div className = "twoFeature">
                    <img src={square} alt="square" width="30" height="30"></img>
                    <h2>Stay Social and Productive</h2>
                    <h4>Create a room, select games, set background music, and invite your friends for your DREAM study session</h4> 
                    </div>

                </div>

                <div className = "otherTwoFeatures">
                    <div className = "threeFeature">
                    <img src={square} alt="square" width="30" height="30"></img>
                    <h2>Inspiration</h2>
                    <h4>Want straight As? Check out our motivational corner for study inspo, tips, and our Orbis community!</h4>
                    </div>

                    <div className = "fourFeature">
                    <img src={square} alt="square" width="30" height="30"></img>
                    <h2>Do You Procastinate?</h2>
                    <h4>Instead of scrolling through Tiktok for endless procastionation, watch some motivational content during your breaks!</h4> 
                    </div>

                </div>


                
            </div>

            <div className = "plans">
                <h1>Plans and Features</h1>
                <div className = "planOptions">
                    <div className = "free">
                        <h2>Free</h2>
                        <h1>$0</h1>
                        <button>Get Started</button>

                        <h4>With the free plan comes:</h4>

                        <div className = "freeFeatures">
                            <h4>- Create rooms with limited pariticipants</h4>
                            <h4>- Join public and private rooms to meet new people or work with your peers</h4>
                            <h4>- Watch content on motivational corner to ensure meaningful breaks</h4>
                            <h4>- Work for 25 minutes and take 5 minute breaks using the pomodoro timer</h4>
                            
                        </div>

                        
        
                    </div>

                    <div className = "paid">
                        <h2>Premium</h2>
                        <h1>$4 /month</h1>
                        <button>Get Started</button>
                        <h4>With the premium plan comes:</h4>
                        <div className = "paidFeatures">
                            <h4>- Create unlimited rooms with unlimited participants</h4>
                            <h4>- Join public and private rooms to meet new people or work with your peers</h4>
                            <h4>- Access inspirational content on the motivational conent, play music during study sessions, and more</h4>
                            <h4>- Customizable pomodoro timers and choose how long you study and take breaks</h4>

                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        

    )



}
export default Home