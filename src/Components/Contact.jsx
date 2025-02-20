import React from 'react'
import '../Styles/ContactStyle.css'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'

const Contact = () => {
  return (
    <>
    <Header/>
    <div className='form'>
        <h2 className='text-center'>Contact Form</h2>
      <form>
        <label htmlFor="">Your Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Message</label>
        <textarea name="" id="" rows={6} placeholder='Type Your Message Here..'></textarea>
        <button className='btn btn-warning'>Submit</button>
      </form>
      
    </div>
    <Footer/>
    </>
  )
}

export default Contact
