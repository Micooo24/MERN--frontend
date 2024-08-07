import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/user");
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log("Error:", error.message);
            }
        };
        fetchUsers();
    }, []);

    const handleUpdate = async (userId) => {
        navigate(`/user/${userId}`);
    };

    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Displaying fetched users */}
            <div>
                <h2>Users</h2>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            {user.name} - {user.email} - {user.phone}
                            <Button 
                                variant="dark"
                                onClick={() => handleUpdate(user._id)}
                                style={{ marginLeft: '10px' }}
                            >
                                Edit
                            </Button>
                            <Button 
                                variant="danger"
                                onClick={() => handleDelete(user._id)}
                                style={{ marginLeft: '10px' }}
                            >
                                Delete
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
