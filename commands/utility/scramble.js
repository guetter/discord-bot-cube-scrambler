const { SlashCommandBuilder, hyperlink, EmbedBuilder} = require('discord.js');
const sample = require('lodash/sample');
const notationsArray = ['U', 'D', 'R', 'L', 'F', 'B'];
const notationModifiers = ["", "2", "'"];

const generateScramble = (length) => {
    const scramble = [];
    for (let i = 0; i < length; i++) {
        let notation;

        do {
            notation = sample(notationsArray);
        } while (i > 0 && notation === scramble[i - 1].charAt(0));

        const modifier = sample(notationModifiers);

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
        const helpLink = hyperlink('[Click Here]', 'https://jperm.net/3x3/moves');

        const embed = new EmbedBuilder()
        .setTitle('Rubik\'s Cube Scramble')
        .setDescription(`Here is your scramble:\n\`\`\`${scramble}\`\`\``)
        .addFields([{ name: 'Learn More', value: `${helpLink}` }])
        .setColor('#00FF00');
    
    await interaction.reply({ embeds: [embed] })
	},
};