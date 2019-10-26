const router = require('express').Router();

// Models
const Admin = require('../models/Admin');

router.get('/', async (req, res) => {    
    const admins = await Admin.find({});
    res.json(admins);
});

router.get('/:id', async (req, res) => {
    const admin = await Admin.findById(req.params.id);
    res.json(admin);
});

router.post('/', async (req, res) => {
    const admin = new Admin(req.body);
    await admin.save();
    res.json({
      status: 'Admin saved'
    });
});

router.put('/:id', async (req, res) => {
    await Admin.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: 'Admin Updated'
    });
});

router.delete('/:id', async (req, res) => {
    await Admin.findByIdAndRemove(req.params.id);
    res.json({
      status: 'Admin deleted'
    });
});

module.exports = router;