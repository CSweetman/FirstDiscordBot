const Discord = require('discord.js');  //Lets us communicate with Discord tools

const client = new Discord.Client();    //Instance of our bot object interacting that contains discord tools

const prefix = '-';     //prefix of commands it is listening for


client.once('ready', ()=> {
    console.log('Starter is online!');
});

client.on('message', message =>{        //Look up arrow function
    if(!message.content.startsWith(prefix) || message.author.bot) return;       

    const args = message.content.slice(prefix.length).split(/ +/);      //Look up syntax of this
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    }
    else if(command === 'youtube'){
        message.channel.send('https://www.youtube.com');
    }
});





client.login();
