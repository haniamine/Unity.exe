const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready" , () => console.log(`Logged in as ${client.user.tag}`))

client.on("message", msg => {
  if (msg.content.includes("salam")){
    msg.reply("Wa 3alaykomo salaaam")
  }
  if (msg.content.includes("whitelist")){
    h = new Date().getHours()+1
    let answer = "Whiteliste ON ghir mn 17h tal 22h." 
    if( h>=17 && h<22 ) answer = "Mer7ba douz lwaiting"
    if( h>=22 ) answer = "Noud awa jm3 kerek, kan khedmo mn 17h tal 22h." 
    msg.reply(answer)
  }
})

client.login(process.env.TOKEN)