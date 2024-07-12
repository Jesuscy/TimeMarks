const express = require('express');
const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/users', getUsers);
userRouter.post('/users', createUser);
userRouter.get('/users/:id', getUserById);
userRouter.put('/users/:id', updateUser);
userRouter.delete('/users/:id', deleteUser);

module.exports = userRouter;