'use client';
import React from 'react';
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
        twoFactorAuth: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log("Form data submitted:", formData);

        // Example of submitting form data to an API endpoint
        try {
            const response = await fetch('/api/submit-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Form submitted successfully:', result);
            } else {
                console.error('Failed to submit form:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const SettingsForm = () => (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div style={styles.inputGroup}>
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div style={styles.inputGroup}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div style={styles.inputGroup}>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <div style={styles.inputGroup}>
                <label>
                    <input
                        type="checkbox"
                        name="twoFactorAuth"
                        checked={formData.twoFactorAuth}
                        onChange={handleChange}
                    />
                    2 Factor Authentication
                </label>
            </div>
            <button type="submit">Save</button>
        </form>
    );

  return (
    <>
        <SettingsForm />
    </>
  )
}

export default Form

const styles = {
    card: {
        backgroundColor: '#87CEEB',
        padding: '20px',
        borderRadius: '10px',
        width: '350px',
        margin: '20px auto',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    },
    header: {
        textAlign: 'center',
    },
    profileImage: {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
    },
    infoContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    form: {
        backgroundColor: '#87CEEB',
        padding: '20px',
        borderRadius: '10px',
        width: '350px',
        margin: '20px auto',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    }
};