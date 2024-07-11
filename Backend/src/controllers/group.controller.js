const { Group } = require('../models/group.model');
const HTTPSTATUSCODE = require('../utils/httpStatusCode');

// Obtener todos los grupos
const getGroups = async (req, res) => {
    try {
        const groups = await Group.find();
        if (!groups || groups.length === 0) {
            return res.status(200).json({ message: 'No groups found.' });
        }
        return res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: HTTPSTATUSCODE[500] });
    }
};

// Crear un nuevo grupo
const createGroup = async (req, res) => {
    try {
        const { groupName, groupUsers } = req.body;
        const newGroup = new Group({
            groupName,
            groupUsers
        });
        await newGroup.save();
        res.status(201).json(newGroup);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener un grupo por ID
const getGroupById = async (req, res) => {
    try {
        const group = await Group.findById(req.params.id).populate('groupUsers');
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ message: HTTPSTATUSCODE[500] });
    }
};

// Actualizar un grupo por ID
const updateGroup = async (req, res) => {
    try {
        const { groupName, groupUsers } = req.body;
        const group = await Group.findByIdAndUpdate(
            req.params.id,
            {
                groupName,
                groupUsers
            },
            { new: true }
        );
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.status(200).json(group);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un grupo por ID
const deleteGroup = async (req, res) => {
    try {
        const group = await Group.findByIdAndDelete(req.params.id);
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.status(200).json({ message: 'Group deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: HTTPSTATUSCODE[500] });
    }
};

module.exports = {
    getGroups,
    createGroup,
    getGroupById,
    updateGroup,
    deleteGroup
};