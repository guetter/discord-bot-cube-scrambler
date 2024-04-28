const { SlashCommandBuilder } = require('discord.js');
const _ = require('lodash');
const notationsArray = ['U', 'D', 'R', 'L', 'F', 'B'];
const notationModifiers = ["", "2", "'"];

const generateScramble = (length) => {
    const scramble = [];
    for (let i = 0; i < length; i++) {
        const notation = _.sample(notationsArray);
        const modifier = _.sample(notationModifiers);
        scramble.push(notation + modifier);
    }
    return scramble.join(' ');
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('scramble')
		.setDescription('Gives you a random rubik`s cube scramble!')
        .addIntegerOption(option =>
            option.setName('length')
                .setDescription('Defines the notation length')
                .setRequired(true)
                .addChoices(
                    { name: 'short', value: 10 },
                    { name: 'average', value: 20 },
                    { name: 'long', value: 30 },
                )),
	async execute(interaction) {
        const scramble = generateScramble(interaction.options.getInteger('length'));

		await interaction.reply(`Here's your scramble: ${scramble}`);
	},
};