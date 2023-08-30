const router = require('express').Router();
const { User } = require('../../models'); // Update the model import to use Actor and Character models


// all of these routes are at '/api/users'

router.get('/', (req, res) => {
    // REQUEST to DB for ALL USERS 
});

router.post('/', async (req, res) => {
    // lets validate that wer are GETTING the INCOMING data
    console.log("Server Data: ", req.body);
    
    // Hash the Password (? --> look into adding as a HOOK in the USER MODEL)

    // CREATE NEW USER IN DATABASE
    let newUser = await User.create(req.body);

    // run some validation that a new user is created
    if(!newUser) {
        res.status(500).json({ message: "User not created"});
        return
    }

    // WE need to Authorize the new USER (through the Request Session Object)


    res.redirect('/')

})

router.post('/login', (req, res) => {


    // query the DB for the existing USER email and VALID password (bcrypt library)
    User.findOne({ where: req.body.email});

    // VALIDATE 
    // IF there is a USER --> is there PASSWORD VALID (bcrypt)
    
})


module.exports = router;