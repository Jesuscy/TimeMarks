const express = require('express');
const mongoose = require('mongoose');
const { User } = require('../models/user.model');
const HTTPSTATUSCODE = require('../utils/httpStatusCode');

// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            return res.status(200).json({ message: 'No users found.' });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: HTTPSTATUSCODE[500] });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { userMail, userName, userAlias, password } = req.body;
        const newUser = new User({
            userMail,
            userName,
            userAlias,
            password
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: HTTPSTATUSCODE[500] });
    }
};

// Actualizar un usuario por ID
const updateUser = async (req, res) => {
    try {
        const { userMail, userName, userAlias, password } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                userMail,
                userName,
                userAlias,
                password
            },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un usuario por ID
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: HTTPSTATUSCODE[500] });
    }
};

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};