const { SlashCommandBuilder, hyperlink, EmbedBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Explains how cube notations work!'),
	async execute(interaction) {

        const embed = new EmbedBuilder()
        .setTitle('How cube notations work?')
        .setURL('https://jperm.net/3x3/moves')
        .setDescription(`The basic moves are Up, Down, Right, Left, Front, Back.
        In notations, they are all represented by their first letter.
        
        Each move means to turn that side clockwise, as if you were facing that side.
        An apostrophe (pronounced as prime) means to turn the face in the opposite direction (counterclockwise).
        The number 2 means to turn that face twice.

        For example, in the image below, that's a U move
        `)
        .setImage('https://i.imgur.com/CpRwHlk.png')
        .setFooter({ text: 'To learn more, click at this embed\'s title'});
    await interaction.reply({ embeds: [embed] })
	},
};