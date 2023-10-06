const express = require("express")
const ptdinsert=require("../Controllers/Product1")

const router = express.Router();

router.post("/insert",ptdinsert);
module.exports=router;