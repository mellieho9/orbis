import "./Motivate.css"
import motivate1 from "../../assets/images/motivate1.png"
import motivate2 from "../../assets/images/motivate2.png"
import motivate3 from "../../assets/images/motivate3.png"
import motivate4 from "../../assets/images/motivate4.png"
import Slider from "react-slick"
const Motivate = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000
    }

    return (
        <div className="motivate">
            <Slider {...settings}>
                <div>
                    <img src={motivate1} alt="motivational slide" height="300px" width="300px"/>
                </div>
                <div>
                    <img src={motivate2} alt="motivational slide" height="300px" width="300px"/>
                </div>
                <div>
                    <img src={motivate3} alt="motivational slide" height="300px" width="300px"/>
                </div>
                <div>
                    <img src={motivate4} alt="motivational slide" height="300px" width="300px"/>
                </div>
            </Slider>
        </div>
    )
}

export default Motivate
