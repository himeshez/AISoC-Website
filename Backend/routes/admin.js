const express = require("express") ; 
const router = express.Router() ; 
const multer = require("multer") ; 

const {getMembers , addMember} = require("../controller/memberController")
const {adminSignup, adminLogin } = require("../controller/adminController"); 

const {verifyTokenMiddleware} = require("../utils/verifyToken") ;


router.get("/get/members" , getMembers) ; 
router.post("/admin/signup" , adminSignup) ; 
router.post("/admin/login" , adminLogin) ; 

router.post("/verifyToken" , verifyTokenMiddleware, async (req, res) => {
    res.json({ isValid: true });
  });



  const storage = multer.memoryStorage(); // Store files in memory as buffers

  const upload = multer({ storage });
  
  router.post('/admin/addmembers', upload.single('image') , addMember ) ; 

module.exports = router ;   
