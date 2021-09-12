import "./Home.css"
import check from '../../assets/images/check.svg'
import square from '../../assets/images/square.svg'


const Home = () => {
    return (
        <div className = "home">
           <div className = "header">
           <h1>Orbis</h1>

            <h4>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>

            </div>

            <div className = "features">
                <h1>For students, by students</h1>

                <div className = "twoFeatures">
                    <div className = "oneFeature">
                    <img src={square} alt="square" width="30" height="30"></img>
                    <h2>Lorem ipsum</h2>
                    <h4>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4>
                    </div>

                    <div className = "twoFeature">
                    <img src={square} alt="square" width="30" height="30"></img>
                    <h2>Lorem ipsum</h2>
                    <h4>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4> 
                    </div>

                </div>

                <div className = "otherTwoFeatures">
                    <div className = "threeFeature">
                    <img src={square} alt="square" width="30" height="30"></img>
                    <h2>Lorem ipsum</h2>
                    <h4>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4>
                    </div>

                    <div className = "fourFeature">
                    <img src={square} alt="square" width="30" height="30"></img>
                    <h2>Lorem ipsum</h2>
                    <h4>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4> 
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

                        <h4>Loren ipsum dolar</h4>

                        <div className = "freeFeatures">
                            <h4>Loren ipsum dolar</h4>
                            <h4>Loren ipsum dolar</h4>
                            <h4>Loren ipsum dolar</h4>
                            <h4>Loren ipsum dolar</h4>
                        </div>

                        
        
                    </div>

                    <div className = "paid">
                        <h2>Paid</h2>
                        <h1>$4 /month</h1>
                        <button>Get Started</button>
                        <h4>Loren Ipsum Dolar</h4>
                        <div className = "paidFeatures">
                            <h4>Loren ipsum dolar</h4>
                            <h4>Loren ipsum dolar</h4>
                            <h4>Loren ipsum dolar</h4>
                            <h4>Loren ipsum dolar</h4>

                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        

    )



}
export default Home