"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventService {
    sendUserInfo(payload) {
        const { userName, userEmail, ...additionalProps } = payload;
        const message = {
            userName: userName,
            userEmail: userEmail,
            ...additionalProps,
        };
        window.postMessage(message, "*");
    }
}
exports.default = EventService;
//# sourceMappingURL=events.js.map