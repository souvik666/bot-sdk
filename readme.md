# Bot-Sdk
This sdk allows developers to use the predefined functions to update user information to the bot.

## Installation
RUN: `npm i -s git+ssh://git@github.com/Baliza-IT-Consultancy/bot-sdk.git`

## Example
```
import { BotSdk } from "bot-sdk";

const sdk = new BotSdk();
const payload = {
  userName: "user-name",
  userEmail: "user@example.com",
};
sdk.user.updateUserInfo(payload);
```