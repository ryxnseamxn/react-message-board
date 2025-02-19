class Storage {
    constructor() {
        this.storage = {
            [crypto.randomUUID()]: {
                text: "Hi there!",
                user: "Amando",
                added: new Date()
            },
            [crypto.randomUUID()]: {
                text: "Hello World!",
                user: "Charles",
                added: new Date()
            }
        };
        
    }

    addMessage(text, user) {
        const date = new Date();
        const id = crypto.randomUUID(); 
        this.storage[id] = { text: text, user: user, added: date }; 
        return id; 
    }
    
    
    getMessages() {
        return this.storage;
    }

    getMessage(id) {
        return this.storage[id]; 
    }
}

export default new Storage(); 