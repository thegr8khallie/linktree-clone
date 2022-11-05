import { useEffect } from "react";
import { useState } from "react"
import { FaCheck } from 'react-icons/fa'

const Contacts = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        message: false,
    })
    const [errorMessage, setErrormessage] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    })
    const [noErrors, setNoErrors] = useState(false)
    useEffect(() => {
        const inputFields = [firstName, lastName, email, message]
        const allFieldsAreFilled = inputFields.every(val => val.length > 0)
        if (allFieldsAreFilled) {
            setNoErrors(true)
        } else {
            setNoErrors(false)
        }
    }, [firstName, lastName, email, message])
    const errorHandlingFunctions = {
        firstName: () => {
            if (firstName === '') {
                setErrors({ ...errors, firstName: true, })
                setErrormessage({ ...errorMessage, firstName: 'Please enter your first name' })
            } else {
                setErrors({ ...errors, firstName: false, })
                setErrormessage({ ...errorMessage, firstName: '' })
            }
        },
        lastName: () => {
            if (lastName === '') {
                setErrors({ ...errors, lastName: true, })
                setErrormessage({ ...errorMessage, lastName: 'Please enter your last name' })
            } else {
                setErrors({ ...errors, lastName: false, })
                setErrormessage({ ...errorMessage, lastName: '' })
            }
        },
        email: () => {
            if (email === '') {
                setErrors({ ...errors, email: true, })
                setErrormessage({ ...errorMessage, email: 'Please enter your Email' })
            } else {
                setErrors({ ...errors, email: false, })
                setErrormessage({ ...errorMessage, email: '' })
            }
        },
        message: () => {
            if (message === '') {
                setErrors({ ...errors, message: true, })
                setErrormessage({ ...errorMessage, message: 'Please enter a message' })
            } else {
                setErrors({ ...errors, message: false, })
                setErrormessage({ ...errorMessage, message: '' })
            }
        },
        checkbox: (e) => {
            if (noErrors) {
                setCheckbox(e.currentTarget.checked)
            } else {
                setCheckbox(false)
            }
        }
    }
    const sendMessageHandler = (e) => {
        e.preventDefault();
        if (noErrors) {
            const userResponse = {
                name: firstName + lastName,
                email: email,
                message: message,
            }
            console.log(userResponse)
        } else {
            return;
        }
    }
    return (
        <section className="form-container">
            <h1 className="form-header">Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form className="contacts-form" onSubmit={sendMessageHandler}>
                <div className="name-fields">
                    <div className="first-name-field">
                        <label htmlFor="first_name">First name</label>
                        <input type="text" id="first_name" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={errors.firstName ? 'error-focused' : ''} onBlur={errorHandlingFunctions.firstName} />
                        <p className="error-message" style={{ margin: `${errors.firstName ? '-2.4rem 0 2.4rem 0' : '0'}` }}>{errorMessage.firstName}</p>
                    </div>
                    <div className="last-name-field">
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" id="last_name" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} className={errors.lastName ? 'error-focused' : ''} onBlur={errorHandlingFunctions.lastName} />
                        <p className="error-message" style={{ margin: `${errors.lastName ? '-2.4rem 0 2.4rem 0' : '0'}` }}>{errorMessage.lastName}</p>
                    </div>
                </div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="yourname@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className={errors.email ? 'error-focused' : ''} onBlur={errorHandlingFunctions.email} />
                <p className="error-message" style={{ margin: `${errors.email ? '-2.4rem 0 2.4rem 0' : '0'}` }}>{errorMessage.email}</p>
                <label htmlFor="message">Message</label>
                <textarea id="message" cols="30" rows="6" placeholder="Send me a message and I'll reply you as soon as possible..." value={message} onChange={(e) => setMessage(e.target.value)} onBlur={errorHandlingFunctions.message} className={errors.message ? 'error-focused' : ''} />
                <p className="error-message" style={{ margin: `${errors.message ? '-2.4rem 0 2.4rem 0' : '0'}` }}>{errorMessage.message}</p>
                <input type="checkbox" id="agreement" checked={noErrors ? checkbox : false} value={noErrors ? checkbox : false} onChange={errorHandlingFunctions.checkbox} />
                <label htmlFor="agreement" className="agreement">
                    <div style={{ backgroundColor: `${noErrors ? '#fff' : '#f2f4f7'}`, border: `${checkbox ? '0.1rem solid #1570ef' : '0.1rem solid #d0d5dd'}` }}><div style={{ opacity: `${checkbox ? 1 : 0}` }}><FaCheck /></div></div>
                    <span>
                        You agree to providing your data to Chiamaka Opara who may contact you.
                    </span>
                </label>
                <button type="submit" id="btn__submit" className={noErrors ? '' : 'btn__disabled'}>Send Message</button>
            </form>
        </section>
    )
}

export default Contacts