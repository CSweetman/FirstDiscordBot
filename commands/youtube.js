module.exports = {
    name: 'youtube',
    description: 'sends the youtube link',
    execute(message, args){

        
        /*Check if user has permission
        if(message.member.permissions.has("KICK_MEMBERS")){ //Passes in discord flag
            message.channel.send("You have the permission to kick members");
        } 
        */     
        if(message.member.roles.cache.has('742188193088012348')){
            message.channel.send('https://youtube.com')
        }
        else{
            message.channel.send('You do not have the correct role, let me change that.');

            //The catch catches errors that may happen while the bot is up while accessing role ID, etc.
            message.member.roles.add('742188193088012348').catch(console.error); //Gives the user that called the command the role/permission to call the command
            
            /*To delete roles
            message.member.roles.remove('742188193088012348');
            */
        }



        /*
        *To check if someone has a role NAME rather than a specific role
        *Not recommended for maintence in case names of roles changes or there are multiple roles with the same name
        *
        * if(message.member.roles.cache.some(r => r.name === "Mod"))
        */


    }

}