import './Contact.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
    return (
        <>
            <div className="footer text-center my-5 py-5">
                <h4 className="text-center my-4">Contact Me </h4>
                <div className="py-4 text-bold">
                    <h4> <BsFillPersonFill/>   <span className="mx-4"> Abhisheka H B</span></h4>
                    <h4>  <AiOutlineMail/>     <span className="mx-4"> hbabhisheka15@gmail.com</span></h4>

                
                </div>
            </div>

        </>
    )
}

export default Contact
