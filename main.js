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
   message.reply('\n主さま、何か御用でしょうか？\n\nコマンド\n\n*koryaku - Wikiを張り出します。\n*koushiki - 公式Youtubeチャンネルを張り出します。\n*bots - 私の招待を張り出します。 \n\n おはよう. こんにちは. こんばんは. ログイン. ログインボーナス - スタンプを押します。 \n ママ - はい、ママですよ\n\n何かあれば、わたくしを お呼びください 全身全霊で主さまの要求に お応えいたします');
  }
  
  if(message.content ==='*ping')
  {
   message.reply('pong');
  }
  

  if(message.content ==='*bots')
  {
   message.reply('\n\n開発のご連絡はこちらの主さまにご連絡してください。\n\nhttps://github.com/Melnus/KokkoroMama\n\n招待はこちらでございます\n\nhttps://discord.com/oauth2/authorize?client_id=840428547600678912&permissions=8&scope=bot');
  }
  
  
  if(message.content ==='*koryaku')
  {
    message.reply('https://rwiki.jp/priconne_redive/')
  }
  
  if(message.content ==='*koushiki')
  {
    message.reply('https://www.youtube.com/channel/UCiPSajGFI4ja74nYPU1MexA/videos')
  }
  
  if(message.content ==='ママ'||message.content ==='ママ～'||message.content ==='まま'||message.content ==='まま～'||message.content ==='コッコロ'||message.content ==='コッコロママ'||message.content ==='コッコロママ～')
  {
   message.reply('はい、ママですよ。');
  }
  
  if(message.content ==='おはよう'||message.content ==='こんにちは'||message.content ==='こんばんは'||message.content ==='ログイン'||message.content ==='ログインボーナス')
  {
    const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'stamp');
    message.react(emoji);
  }
  
  if(message.author.bot)
  {return;}
  
	if(message.mentions.has(client.user))
	{
		message.reply( '何か御用でしたでしょうか？' );
		return;
	}
});





if(process.env.DISCORD_BOT_TOKEN == undefined)
{
	console.log('please set ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );