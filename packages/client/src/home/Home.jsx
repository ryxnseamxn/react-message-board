import React, { useEffect, useState } from "react";
import AddMessage from "./AddMessage";
import { Link } from "react-router-dom";
import config from '../config';
import '../App.css';

const Home = () => {
    const [messages, setMessages] = useState([]); 

    const fetchMessages = async () => {
        try {
            const response = await fetch(`${config.API_URL}/api/messages`, {
                //headers
            });    

            const data = await response.json(); 

            const messagesArray = Object.entries(data.messages).map(([id, message]) => ({
                id,
                ...message
            }));

            setMessages(messagesArray);
            
        } catch (error) {
            console.log(`Error occured when fetching: ${error.message}`)
        }
    } 
    
    useEffect(() => {
        fetchMessages(); 
    }, []);

    return (
        <div>
            <AddMessage onMessageAdded={fetchMessages}/>
            {messages.length > 0 ? (
                messages.map((message) => (
                    <div key={message.id} className="message-container">
                        <h3>{message.user}</h3>
                        <p>{message.text}</p>
                        <p>{message.added}</p>
                        <Link to={`/message/${message.id}`}>
                            <button>View Message</button>
                        </Link>
                    </div>
                ))
            ) : (
                <p>Uh oh! No posts found</p>
            )}
        </div>
    );
}

export default Home; 