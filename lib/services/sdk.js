"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotSdk = void 0;
const user_1 = __importDefault(require("./user"));
class BotSdk {
    constructor() {
        this.user = new user_1.default();
    }
}
exports.BotSdk = BotSdk;
//# sourceMappingURL=sdk.js.map