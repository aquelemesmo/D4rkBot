const guildDB = require('../models/guildDB');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, guild) => {
    await guildDB.findOneAndDelete({ guildID: guild.id });

    const embed = new MessageEmbed()
        .setTitle(':frowning2: Saí de um servidor')
        .setColor('RANDOM')
        .addField('Nome', `\`${guild.name}\``, true)
        .addField(':crown: Dono', `\`${guild.owner.user.tag}\``, true)
        .addField(':closed_book: ID', `\`${guild.id}\``, true )
        .addField(':man: Membros', `\`${guild.members.cache.size}\``, true)
        .setThumbnail(guild.iconURL({ format: 'png', dynamic: true }))
        .setTimestamp()

    client.users.cache.get('334054158879686657').send(embed);
}