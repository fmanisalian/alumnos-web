const express = require('express');
const router = express.Router();

//Models
const Alumno = require('../models/Alumno');

router.get('/', async (req, res) => {
    const alumnos = await Alumno.find({});
    res.json(alumnos);
});

router.get('/:id', async (req, res) => {
    const alumno = await Alumno.findById(req.params.id);
    res.json(alumno);
});

router.post('/', async (req, res) => {
    const alumno = new Alumno(req.body);
    await alumno.save();
    res.json({
      status: 'Alumno saved'
    });
});

router.put('/:id', async (req, res) => {
    await Alumno.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: 'Alumno Updated'
    });
});

router.delete('/:id', async (req, res) => {
    await Alumno.findByIdAndRemove(req.params.id);
    res.json({
      status: 'Alumno deleted'
    });
});

module.exports = router;
