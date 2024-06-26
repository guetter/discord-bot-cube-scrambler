# Rubik's Cube Scramble Bot

This project is a simple Discord bot that generates random Rubik's Cube scrambling notations to provide users with a new puzzle to solve. It is built with Node.js and uses the Discord.js library to interact with the Discord API.

## Technologies Used

- **Node.js**: The bot is built with Node.js, which provides a JavaScript runtime for building scalable and efficient applications.
- **Discord.js**: A JavaScript library that allows the bot to interact with the Discord API, handling commands and managing bot interactions in Discord servers.
- **Discord API**: The bot uses the Discord API to send and receive messages and commands within Discord servers.
- **Lodash**: Lodash is a JavaScript utility library that provides a range of functions for common programming tasks. The bot uses lodash for generating random elements.

## Bot Commands

- `/help`: Explains how cube notations work and how to properly read the scrambles.

- `/scramble length`: Generates a random Rubik's Cube scramble notation based on the provided length. The length options are:
    - `short`: Generates a short scramble.
    - `average`: Generates an average-length scramble.
    - `long`: Generates a long scramble.
 
An average scramble will return something like this:

![image](https://github.com/guetter/discord-bot-cube-scrambler/assets/141455361/e4e1a1e7-6d9b-4bc8-a6de-61d9032a374b)


