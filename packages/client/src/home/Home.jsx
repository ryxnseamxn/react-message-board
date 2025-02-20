import React, { useEffect, useState } from "react";
import AddMessage from "./AddMessage";
import config from '../config';

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
                    <li key={message.id}>
                        <h3>{message.user}</h3>
                        <p>{message.text}</p>
                        <p>{message.added}</p>
                    </li>
                ))
            ) : (
                <p>Uh oh! No posts found</p>
            )}
        </div>
    );
}

export default Home; 