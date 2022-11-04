const Contacts = () => {
    return (
        <section className="form-container">
            <h1 className="form-header">Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form className="contacts-form">
                <label htmlFor="first_name">First name</label>
                <input type="text" id="first_name" />
                <label htmlFor="last_name">Last name</label>
                <input type="text" id="last_name" />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
                <label htmlFor="message">Message</label>
                <textarea id="message" cols="30" rows="10"></textarea>
                <label htmlFor="agreement">You agree to providing your data to Chiamaka Opara who may contact you.</label>
                <input type="checkbox" id="agreement" />
                <button type="submit" id="btn__submit">Send Message</button>
            </form>
        </section>
    )
}

export default Contacts