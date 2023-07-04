import './About.css'
import img2 from "../../photos/c.webp"

const About = () => {
  return (
    <>
    <h4 className="about-heading">About Me</h4>
 
    <div className="about">
        <div className="about-right">
            <img src={img2} alt=""/>




        </div>
        <div className="about-left">
            <p>
                Hi There! i'm <span className='span'>Abhisheka H B</span>. A <span className='span'>Full Stack Web Developer </span> Having
                specialization in <span className='span'>Back end & Front end Development.</span> i have 8 Month of experiance in <span className='span'>Web Development</span> 
                I having Backend Skills in Node, ExpressJs. I also have Frontend Skills in Javascript, ReactJs,CSS, Bootstrap and Foundation and For Database i have MongoDb,
                Sql
            </p>

        </div>
      
    </div>
    </>
  )
}

export default About
