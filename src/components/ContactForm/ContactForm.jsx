import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './contact.css'
import {db} from '../ChatBot/firebase';
import { collection, addDoc } from "firebase/firestore";


function ContactForm() {
    
   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

            addDoc(collection(db, "contacts"), {
                name: name,
                email: email,
                message: message,
            })
                .then(() => {
                    alert('Message submitted 👍');
                    setLoader(false)
                })
                .catch((error) => {
                    alert(error.message);
                });

            setName('');
            setEmail('');
            setMessage('');
        };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Us 📱</h1>

            <label>Name</label>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
                type="submit"
                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;