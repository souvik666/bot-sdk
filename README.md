# Bot SDK Usage Guide

This guide explains how to inject text to the context

## Steps

| Step | Description                                  | Action                                                     |
|------|----------------------------------------------|------------------------------------------------------------|
| 1    | Click on configuration                      | ![Step 1](https://github.com/Baliza-IT-Consultancy/bot-sdk/assets/70321937/425c1d42-1e05-4882-9d34-6312b7f1593d) |
| 2    | Add your desired custom keys                | ![Step 2](https://github.com/Baliza-IT-Consultancy/bot-sdk/assets/70321937/af0ae6f9-01d1-49bd-9c40-4f28d4b55da2) |
| 3    | Inject context using `sendUserInfo`         | Use the `sendUserInfo` method from the BotSdk class to send user information and additional properties to the context. |

## Bot SDK Response

After using the `sendUserInfo` method (by emitting an event with `window.postMessage(message, "*")`) from the BotSdk class, you can expect a response in the following format:

```markdown
| Property       | Description                  |
|----------------|------------------------------|
| userName       | The user's name.             |
| userEmail      | The user's email.            |
| customProperty | Custom property's value.     |
| ...            | Other additional properties. |
