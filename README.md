# Bot SDK Usage Guide

This guide explains how to inject text into the context `CLIBOT`, and why we even need it, let's talk about a single and simple use-case, suppose we have a registered user who is talking with the `CLIBOT` and you have also disabled the mandatory login so that the user can directly initiate a conversation with our CLIBOT, now here comes the question how the bot will know about the user at whole like the name age or anything else which is super important from the perspective of a business this is the simplest use case that we can visualize,  but possibilities are endless what we can achieve through this feature from suggesting products to generating leads now let's dive into the world of `CLIBOT`, let's learn how to use it, their will be few steps before we can start using the feature 

## step 1
After you have logged in to CLIBOT you will see a button to `create new agent` Please click on that and choose your favorite name to be the project name add some descriptions related to it and please click on save boom! now we have our own Clibot and click on the agent card 


## step 2 

On the left side, you will see a drawer there will be a button called `configuration` please click on that, it will take you to the config page 


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
```

## Example

```ts
const sdk = new BotSdk()

sdk.event.sendUserInfo({
name:"foo",
email:"faa@fpp.com",
//** adtional info that we want to pass
company:"CLIBRAIN"
})
```
