import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './style.scss';
import {dsnCN} from "../../hooks/helper";

function ContactForm({className}) {

    const form = useRef();
    const [loading, setLoading] = useState();
    const [result, setResult] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
        setResult(false);
        setLoading(true);
        emailjs.sendForm(
            'service_rkv4miq',
            'template_t3niway',
            form.current,
            '4RMueB5KLxcm6MLb9')
            .then((result) => {
                setLoading(false);
                setResult(true);
                form.current.reset();
            }, (error) => {
                setLoading(false);
            });
    };

    setTimeout(() => setResult(false), 5000);


    return (
        <div className={dsnCN('form-box', className)}>
            <h3 className="mb-30">Write A Request</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div className="input__wrap controls">
                    <div className="form-group">
                        <label>What's your name?</label>
                        <input id="user_name" type="text" name="user_name" placeholder="Type your name"
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>What's your email address?</label>
                        <input id="user_email" type="email" name="user_email" placeholder="Type your Email Address"
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>Your needs..</label>
                        <textarea id="message" className="form-control" name="message"
                                  placeholder="Tell me about your business and what you need" required="required"
                        />
                    </div>

                    <div className="image-zoom">
                        <button type="submit">Send Message</button>
                    </div>
                    {loading && <div className="loading-message mt-20">Message Send ...</div>}
                    {result &&
                    <p className="success-message mt-20">Your Message has been successfully sent. I will contact you
                        soon.</p>}
                </div>
            </form>
        </div>
    );
}

export default ContactForm;