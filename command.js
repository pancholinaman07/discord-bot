const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'create',
        description: 'Creates a Short URL',
    } ,
];

const rest = new REST({ version: '10' }).setToken(
    'MTE4NjYzMzE2OTQ0NTg1MTE3Nw.GUm7W_.Nzx8TE-jrx2qzjPWEzD-5iEz-kgwUu76WmVSkQ'
);

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationCommands('1186633169445851177'), { body: commands });

        console.log('Successfully reloaded application (/) commands. ');
    }catch (error) {
        console.error(error);
    }
})();

