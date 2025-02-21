import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import config from '../config';

const MessagePage = () => {
    const [message, setMessage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch(`${config.API_URL}/api/message/${id}`, {
                    //headers
                });
                const data = await response.json();
                setMessage(data.message);
                console.log(id)
            } catch (error) {
                console.log(`Error occurred when fetching message: ${error.message}`);
            }
        };

        fetchMessage();
    }, [id]);

    if (!message) return <div>Loading...</div>;

    return (
        <div>
            <h1>Message from {message.user}</h1>
            <p>{message.text}</p>
            <p>Added on: {message.added}</p>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
};

export default MessagePage;