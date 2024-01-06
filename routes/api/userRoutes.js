const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller.js');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById);

module.exports = router;