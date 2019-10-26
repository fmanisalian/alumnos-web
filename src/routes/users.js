const router = require('express').Router();

// Models
const User = require('../models/User');

router.get('/', async (req, res) => {    
    const users = await User.find({});
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

router.post('/', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
      status: 'User saved'
    });
});

router.put('/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: 'User Updated'
    });
});

router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
      status: 'User deleted'
    });
});

module.exports = router;