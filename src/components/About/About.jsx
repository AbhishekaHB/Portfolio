import './About.css'
import img2 from "../../photos/Hire-MERN-Stack-Developers-from-us.png"

const About = () => {
  return (
    <div className='container my-lg-5'>
      <h4 className="about-heading">About Me</h4>

      <div className="container grid d-lg-flex justify-content-between my-5 py-lg-5 ">
        <div className="card border-0 w-lg-25 col-lg-6 border-0  p-3">
          <img className='' src={img2} alt="" />
        </div>
        <div className="card col-lg-6 border-0 text-center  p-3">
          <p>
            Hi There! i'm <span className='span'>Abhisheka H B</span>. A <span className='span'>Full Stack Web Developer </span> Having
            specialization in <span className='span'>Back end & Front end Development.</span> i have 8 Month of experiance in <span className='span'>Web Development</span>
            I having Backend Skills in Node, ExpressJs. I also have Frontend Skills in Javascript, ReactJs,CSS, Bootstrap and Foundation and For Database i have MongoDb,
            Sql
          </p>

        </div>

      </div>
    </div>


  )
}

export default About
