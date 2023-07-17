import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsFillPersonFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import {  message} from 'antd';

const Contact = () => {

    const form = useRef();



    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_p66hg6o', 'template_w97bemc', form.current, '6TFrp0NwXYi2Fqp9-')
        .then((result) => {
           
                console.log(result.text);
                message.success("Message Sent")
                

        }, (error) => {
            console.log(error.text);
            console.log("message not sent")
            message.error("Message Not Sent")
            
        });
    };
    return (
        <>
        <h4 className=" my-lg-4 text-center">Contact Me </h4>
            <div className="container d-lg-flex d-block justify-content-between mb-5 pb-5 ">
                
                <div className='container'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" name="user_name" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <input type="submit" value="Send" className='btn btn-warning px-5  btn' />


                    </form>
                </div>
                <div className="container m-auto text-center text-bold my-5">
                    <h5> <BsFillPersonFill />   <span className="mx-lg-2"> Abhisheka H B</span></h5>
                    <h5>  <MdEmail />     <span className="mx-lg-2"> hbabhisheka15@gmail.com</span></h5>
                </div>
            </div>

        </>
    )
}

export default Contact
