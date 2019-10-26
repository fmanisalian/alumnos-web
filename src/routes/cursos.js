const express = require('express');
const router = express.Router();

//Models
const Curso = require('../models/Curso');

router.get('/', async (req, res) => {    
    const cursos = await Curso.find({});
    res.json(cursos);
});

router.get('/:id', async (req, res) => {
    const curso = await Curso.findById(req.params.id);
    res.json(curso);
});

router.post('/', async (req, res) => {
    const curso = new Curso(req.body);
    await curso.save();
    res.json({
      status: 'Curso saved'
    });
});

router.put('/:id', async (req, res) => {
    await Curso.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: 'Curso Updated'
    });
});

router.delete('/:id', async (req, res) => {
    await Curso.findByIdAndRemove(req.params.id);
    res.json({
      status: 'Curso deleted'
    });
});

module.exports = router;