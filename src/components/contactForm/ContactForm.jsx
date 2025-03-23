import React from 'react'
import styled from "./contactForm.module.css"
import FormGroupItem from '../formGroupItem/formGroupItem'

function ContactForm() {
  return (
    <div className={`${styled.contactFormBox} p-10`}>
        <form action="">
            <div className='flex flex-col  gap-5'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2' >
                    <FormGroupItem>
                        <input type='text' placeholder='First name'></input>
                    </FormGroupItem>

                    <FormGroupItem>
                        <input type='text' placeholder='Last name'></input>
                    </FormGroupItem>

                    <FormGroupItem>
                        <input type='text' placeholder='Email adress'></input>
                    </FormGroupItem>
        
                    <FormGroupItem>
                        <input type='text' placeholder='Phone Number'></input>
                    </FormGroupItem>
                </div>

                <FormGroupItem>
                    <textarea placeholder='Message'></textarea>
                </FormGroupItem>
                                
                <FormGroupItem>
                    <button className={`${styled.sendMessageBtn}`}> Send Message </button>
                </FormGroupItem>                

            </div>

        </form>
    </div>
  )
}

export default ContactForm
