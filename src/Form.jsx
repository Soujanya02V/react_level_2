import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import { useState } from 'react'





const Form =()=>{

    const [ name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const [ text, setText] = useState("");

   
    
    

    const onSubmit=(event)=>
    {
        event.preventDefault();
        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)

     
    };
  
    return(
        <div>
        <div className="containerr">
              <div className='contact-form'>
           <div className="top-btn">
            <button className="primary-btn">
                <MdMessage fontSize="24px"/>
                VIA SUPPORT CHAT
            </button>
            <button 
            
            className="primary-btn">
                <FaPhoneAlt fontsize="24px"/>
                VIA CALL
            </button>
           </div>
           <div className="">
            <button className='outline-btn'><HiMail fontSize="24px" />VIA YOUR EMAIL</button>
           </div>
           <form onSubmit={onSubmit}>
            <div className='form-control'>
            <label htmlFor="name">Name</label>
            <input type='text' name="name" />
            </div>
            <div className='form-control'>
            <label htmlFor="name">Email</label>
            <input type='email' name="Email" />
            </div>
            <div className='form-control'>
            <label htmlFor="name">Text</label>
            <textarea  name="Text" />
            </div>
             <button className='primary-btn'>Submit</button>
             <div>{name + "" }</div>
             <div>{email + "" }</div>
             <div>{text + "" }</div>
           </form>
           
      
         </div>


           <div className="mojo">
            <img src="/images/service.jpg" alt="img"/>
           </div>

           </div>

          

        </div>

         
    )
}
export default Form;