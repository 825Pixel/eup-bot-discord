
const { Client } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
})

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "Am Getting Developed",
            type: "WATCHING"
        }
    }); 
});

client.on("message", async message => {
    console.log(`${message.author.username} said: ${message.content}`);
});

client.login(process.env.TOKEN);