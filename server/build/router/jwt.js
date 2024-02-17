import express from 'express';
const router = express.Router();
const { jwtValidateToken } = require('../controllers/jwt/jwtController');
router.post('/jwtValidateToken', jwtValidateToken);
module.exports = router;
//# sourceMappingURL=jwt.js.map