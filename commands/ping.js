module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        //types code of the command
        message.channel.send('pong!');
    }
}