const userModel = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');

const getAllUsers = async (req, res) => {
  try {
    const [users] = await userModel.getAllUsers();
    res.render('index', { users });
  } catch (err) {
    res.status(500).send('Error al obtener los usuarios.');
  }
};

const showCreateUserForm = (req, res) => {
  res.render('createUser');
};

const createUser = async (req, res) => {
  try {
    const {
      nombre,
      aPaterno,
      aMaterno,
      tDocumento,
      nDocumento,
      telefono,
      correo,
    } = req.body;
    await userModel.createUser({
      id: uuidv4(),
      nombre,
      apellido_paterno: aPaterno,
      apellido_materno: aMaterno,
      dni: nDocumento,
      tipo_documento: tDocumento,
      telefono,
      correo,
    });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error al crear el usuario.');
  }
};

const showUpdateUserForm = async (req, res) => {
  const { id } = req.params;
  const [user] = await userModel.getUserById(id);
  res.render('updateUser', { user: user[0] });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    aPaterno,
    aMaterno,
    tDocumento,
    nDocumento,
    telefono,
    correo,
  } = req.body;
  try {
    await userModel.updateUser(id, {
      nombre,
      apellido_paterno: aPaterno,
      apellido_materno: aMaterno,
      dni: nDocumento,
      tipo_documento: tDocumento,
      telefono,
      correo,
    });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error al actualizar el usuario.');
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.deleteUser(id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error al eliminar el usuario.');
  }
};

module.exports = {
  getAllUsers,
  showCreateUserForm,
  createUser,
  showUpdateUserForm,
  updateUser,
  deleteUser,
};
