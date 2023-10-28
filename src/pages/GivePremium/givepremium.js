// givepremium.js
import React, { useState } from 'react';
import styles from './givepremium.module.css';
import Navbar from '../Home/Navbar/Navbar';

const Loader = () => (
    <div className={styles.loader}>
        <div className={styles.loaderItem}></div>
        <div className={styles.loaderItem}></div>
        <div className={styles.loaderItem}></div>
    </div>
);

const GivePremium = () => {
    var initialEmail = localStorage.getItem("email");
    if (initialEmail !== "adamrubiks@gmail.com") {
      window.location.href = "/home";
    }
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        };

        const apiUrl = 'https://flask-hello-world-theta-green.vercel.app/add_premium';

        try {
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json();
            setResponse(data.message);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
              <Navbar/>
        <div className={styles.container}>
          
            <h2>Give Premium</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" id="submitBtn">Submit</button>
            </form>
            {loading && <Loader />}
            {response && !loading && <div className={styles.response}>{response}</div>}
        </div>
        </div>
    );
};

export default GivePremium;
