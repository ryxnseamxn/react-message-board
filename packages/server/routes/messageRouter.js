const { Router } = require("express"); 
const messageController = require("../controllers/messageController");
const router = Router();

router.get("/messages", messageController.getMessages);
router.post("/new", messageController.addMessage); 

module.exports = router; 