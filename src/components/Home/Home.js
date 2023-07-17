import "./Home.css"
import img from "../../photos/a.svg"
import pdf from "../../pdf/resume.pdf"



const Home = () => {
  return (
   <>
   <div className='container grid d-lg-flex justify-content-between m-lg-5 '>
    <div className='card col-lg-6 border-0 text-center m-auto p-3'>
        <h1>hi, i am Abhisheka H B</h1>
       <h4>MERN Full Stack Developer</h4>
        <a href={pdf}><button className='navbtn btn p-3'>Downloadn CV</button></a>
    </div>
    <div className='card border-0 w-lg-25 col-lg-6 border-0  p-3 '>
        <img src={img} alt=""/>
    </div>
   </div>
   </>
  )
}

export default Home
