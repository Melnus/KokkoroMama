// Response for Uptime Robot
const http = require('http');
http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Discord bot is active now \n');
}).listen(3000);

// Discord bot implements
const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', message =>
{
  client.user.setActivity('主さま管理(*help)', { type: 'PLAYING', url: 'https://discordapp.com/' }); 
	console.log('bot is ready!');
});

client.on('message', message =>
{
  //help集
  if(message.content ==='*help')
  {
   message.reply('\n主さま、何か御用でしょうか？\n */koryaku - Wikiを張り出します。*\n');
  }
  
  if(message.content ==='/ping')
  {
   message.reply('pong');
  }
  
  if(message.content ==='/koryaku')
  {
    message.reply('https://rwiki.jp/priconne_redive/')
  }
  
    if(message.content ==='ママ'||message.content ==='ママ～'||message.content ==='まま'||message.content ==='まま～'||message.content ==='コッコロ'||message.content ==='コッコロママ'||message.content ==='コッコロママ～')
  {
   message.reply('はい、ママですよ。');
  }
  
  if(message.author.bot)
  {return;}
  
	if(message.mentions.has(client.user))
	{
		message.reply( '呼びましたか？' );
		return;
	}
});





if(process.env.DISCORD_BOT_TOKEN == undefined)
{
	console.log('please set ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );