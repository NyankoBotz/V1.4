const fs = require('fs')
const chalk = require('chalk')

global.apikey = '794370bf166df605baf7ef07' //https://api.lolhuman.xyz
global.rosekey = '1dba55ed01be5c69e2b930c0' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'NyankoBotz-Md'
global.namaowner = 'Razzorz'

//—————「 Setting Owner 」—————//
global.owner = '6287762376734'
global.ownernomer = ["6287762376734"]
global.premium = ['6287762376734']

//—————「 Set Wm 」—————//
global.packname = ''
global.author = 'Razzorz'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/e8622743a94dfd065aadf.jpg'
global.isLink = `https://info.veyrazzorz.xyz`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
