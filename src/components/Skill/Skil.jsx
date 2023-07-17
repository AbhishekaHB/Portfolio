import React from 'react'
import "./skill.css"
import img1 from "../../photos/html.png"
import img2 from "../../photos/css.png"
import img3 from "../../photos/js1.png"
import img4 from "../../photos/react.png"
import img5 from "../../photos/java2.png"
import img6 from "../../photos/node.png"
import img7 from "../../photos/expressjs.png"
import img8 from "../../photos/md1.png"
import img9 from "../../photos/sql.png"

const Skil = () => {
  return (
    <div >
        <h4 className='text-center my-4'>My Skills</h4>
        <div className='container skill my-5 d-flex justify-content-between'>
         <div>
         <div className='container m-auto d-block text-center d-lg-flex justify-content-around'>
                <span className='fs-2'>HTML</span>
                <div className=' w-lg-25 w-50 mx-2'>
                    <img className='w-50' src={img1}/>
                </div>
            </div>
            <div className='container m-auto d-block text-center d-lg-flex justify-content-around my-5'>
                <span className='fs-2'>CSS</span>
                <div className=' w-lg-25 w-50 mx-2'>
                    <img className='w-50' src={img2}/>
                </div>
            </div>
            <div className='container m-auto d-block text-center d-lg-flex justify-content-around my-5'>
                <span className='fs-2'>JavaScript</span>
                <div className=' w-lg-25 w-50 mx-2'>
                    <img className='w-50' src={img3}/>
                </div>
            </div>
            <div className='container m-auto d-block text-center d-lg-flex justify-content-around my-5'>
                <span className='fs-2'>ReactJs</span>
                <div className=' w-lg-25 w-50 mx-2'>
                    <img className='w-50' src={img4}/>
                </div>
            </div>
         </div>
         <div>
         <div className='container m-auto d-block text-center d-lg-flex justify-content-around '>
                <span className='fs-2'>Core Java</span>
                <div className=' w-lg-25 w-50 mx-2'>
                    <img className='w-50' src={img5}/>
                </div>
            </div>
            
            <div className='container m-auto d-block text-center d-lg-flex justify-content-around my-5'>
                <span className='fs-2'>ExpressJs</span>
                <div className=' w-lg-25 w-50 mx-2'>
                    <img className='w-50' src={img7}/>
                </div>
            </div>
            <div className='container m-auto d-block text-center d-lg-flex justify-content-around my-5'>
                <span className='fs-2'>NodeJs</span>
                <div className=' w-lg-25 w-50 mx-2'>
                    <img className='w-50' src={img6}/>
                </div>
            </div>
            <div className='container m-auto d-block text-center d-lg-flex justify-content-around my-5'>
                <span className='fs-2'>Mongodb</span>
                <div className=' w-lg-25 w-50 mx-2'>
                    <img className='w-50' src={img8}/>
                </div>
            </div>
            {/* <div className='container m-auto d-flex justify-content-around my-5'>
                <span className='fs-2'>SQL</span>
                <div className=' w-25'>
                    <img className='w-25' src={img9}/>
                </div>
            </div> */}
         </div>
           




        </div>
      
    </div>
  )
}

export default Skil
