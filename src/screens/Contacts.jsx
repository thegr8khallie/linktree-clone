const Contacts = () => {
    return (
        <section className="form-container">
            <h1 className="form-header">Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form className="contacts-form">
                <div className="name-fields">
                    <div className="first-name-field">
                        <label htmlFor="first_name">First name</label>
                        <input type="text" id="first_name" placeholder="Enter your first name" />
                    </div>
                    <div className="last-name-field">
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" id="last_name" placeholder="Enter your last name" />
                    </div>
                </div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="yourname@email.com" />
                <label htmlFor="message">Message</label>
                <textarea id="message" cols="30" rows="6" placeholder="Send me a message and I'll reply you as soon as possible..." />
                <div className="agreement">
                    <input type="checkbox" id="agreement" />
                    <label htmlFor="agreement">You agree to providing your data to Chiamaka Opara who may contact you.</label>
                </div>
                <button type="submit" id="btn__submit">Send Message</button>
            </form>
        </section>
    )
}

export default Contacts