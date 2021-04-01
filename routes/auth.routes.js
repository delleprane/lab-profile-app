const { Router } = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt')

const router = Router();

router.post('/auth/login', async(req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({
            username
        });
        console.log('Usuario encontrado', user);
    } catch (error) {
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

    }
})

router.post('/auth/signup', async(req, res) => {
    const { username, password, course, image, campus } = req.body;
    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password, salt);
    try {
        const user = await User.create({
            username,
            password,
            course,
            campus,
            image
        })


        res.json({ message: `usuário ${user.username} foi criado com sucesso` })

    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário' })
    }
})

router.post('/auth/edit/:id', async(req, res) => {
    try {
        const user = req.body;
        const { id } = req.params;
        const userUpdated = await User.findByIdAndUpdate(id, user, { new: true })

        res.status(201).json(userUpdated)
    } catch (error) {
        res.status(500).json({ message: "Erro ao editar" })

    }
})

module.exports = router;