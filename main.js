const Discord = require('discord.js');  //Lets us communicate with Discord tools
const client = new Discord.Client();    //Instance of our bot object interacting that contains discord tools

const prefix = '-';     //prefix of commands it is listening for

const fs = require('fs');

client.commands = new Discord.Collection(); //Creates a discord collection

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));    //looks into command files and ensures we are reading a javascript file.
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', ()=> {
    console.log('Starter is online!');
});

client.on('message', message =>{        //Look up arrow function
    if(!message.content.startsWith(prefix) || message.author.bot) return;       

    const args = message.content.slice(prefix.length).split(/ +/);      //Look up syntax of this
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command === 'youtube'){
        client.commands.get('youtube').execute(message,args);
    }
});




//BE SURE TO DELETE BEFORE PUSHING
client.login();

//Each role on discord has an ID, to access \@role

