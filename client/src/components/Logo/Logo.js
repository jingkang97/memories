import Tilt from 'react-parallax-tilt';
import './styles.css'


const Logo = () => {
    return ( 
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', height:'100%'}}>
            <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
            glareEnable={false}
            glareColor='#ffffff'
            glarePosition="all"
            >
            <div className="inner-element">P</div>
        {/* <img className="inner-element" src="logop.svg" style={{height:'20px', width:'20px'}}/> */}
    </Tilt>
            
        </div>
     );
}
 
export default Logo;