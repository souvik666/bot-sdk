"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    updateUserInfo(payload) {
        const { userName, userEmail, ...additionalProps } = payload;
        const message = {
            userName: userName,
            userEmail: userEmail,
            ...additionalProps,
        };
        window.postMessage(message, "*");
    }
}
exports.default = UserService;
//# sourceMappingURL=user.js.map