const jwt = require('jsonwebtoken');
import env from '../utils/env';
export const createJWT = (params) => {
    try {
        return jwt.sign({ params }, env.jwtSecretKey, { expiresIn: '1h' });
    }
    catch (error) {
        return null;
    }
};
export const createdCorrectly = (jwt) => {
    if (jwt !== null) {
        return jwt;
    }
    else {
        return null;
    }
};
//# sourceMappingURL=JWTUtils.js.map