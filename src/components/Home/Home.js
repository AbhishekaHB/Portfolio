import "./Home.css"
import img from "../../photos/a.svg"
import pdf from "../../pdf/resume.pdf"



const Home = () => {
  return (
   <>
   <div className='home'>
    <div className='home-right'>
        <h1>hi, i am Abhisheka H B</h1>
       <h4>MERN Full Stack Developer</h4>
        <a href={pdf}><button className='btn  p-3'>Downloadn CV</button></a>
    </div>
    <div className='home-left'>
        <img src={img} alt=""/>
    </div>
   </div>
   </>
  )
}

export default Home
