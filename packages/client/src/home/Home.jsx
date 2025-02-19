import React from "react"; 

const Home = () => {

    const messages = []; 

    return (
        <div>
            {messages.length > 0 ? (
                messages.map((message) => (
                    <li key={message.id}>
                        <p>message.text</p>
                    </li>
                ))
            ) : (
                <p>Uh oh! No posts found.</p>
            )}
        </div>
    );
}

export default Home; 