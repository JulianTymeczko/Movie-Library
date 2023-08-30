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
    console.log("New User Created!!");
    // WE need to Authorize the new USER (through the Request Session Object)


    res.redirect('/')

})

// ** Login
router.post('/login', async (req, res) => {
    console.log("Incoming Data: ", req.body);
    try {
      const dbUserData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }

      res.redirect('/')
      
      /*
      const validPassword = await dbUserData.checkPassword(req.body.password);
      
      if (!validPassword) {
          res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
          return;
        }
        
        res.redirect('/')

        
      req.session.save(() => {
        req.session.loggedIn = true;
        console.log(
          '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
          req.session.cookie
        );
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
      */
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Logout
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
  