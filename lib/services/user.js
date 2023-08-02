"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    /**
     * Function to update user values
     * @param payload Contains two required strings `userName` and `userEmail`,
     * values of the user to be updated
     */
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