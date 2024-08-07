import React, { useState } from 'react'; 
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./postUser.css";

const PostUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '' 
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,   
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }

            const data = await response.json();
            console.log(data);
            navigate("/");
        } catch (error) {
            console.log("Error:", error.message);
        }
    }

    return (
        <>
            <div className="center-form">
                <h1>Post User</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="name"
                            placeholder="Enter Name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="email"
                            placeholder="Enter email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                        />
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="phone"
                            placeholder="Enter phone" 
                            value={formData.phone} 
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button variant="dark" type="submit" className="w-100">
                        Post user
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default PostUser;
