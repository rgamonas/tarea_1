const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUsers);

router.get('/create', userController.showCreateUserForm);

router.post('/create', userController.createUser);

router.get('/edit/:id', userController.showUpdateUserForm);

router.post('/edit/:id', userController.updateUser);

router.get('/delete/:id', userController.deleteUser);

module.exports = router;
