const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349012640680";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348109243618";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_54_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDExLFxuICAgICAgICA2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODksXG4gICAgICAgIDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMxLFxuICAgICAgICA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTExLFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTczLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImFvZVpyNFV6bHlkUkk1ZTJqVTRiSzB2TTR1QUlrNi9sclRGMVFaQm9lOW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhKT1hfX0hEUmkyMnRmZXdtXzFvRWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWIzMTlhMzMtMzUxMC00NDFiLWE2NGItMTUxN2U3YTk3Y2I2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDEzNCxcbiAgICAgIDI1NCxcbiAgICAgIDIwMyxcbiAgICAgIDI1MCxcbiAgICAgIDgxLFxuICAgICAgMTA1LFxuICAgICAgMTM2LFxuICAgICAgNDYsXG4gICAgICAxNTksXG4gICAgICAxMTMsXG4gICAgICAyMDksXG4gICAgICAyMjEsXG4gICAgICA2NSxcbiAgICAgIDY0LFxuICAgICAgMjA5LFxuICAgICAgMjE0LFxuICAgICAgMTg1LFxuICAgICAgMTIzLFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICAyNDQsXG4gICAgICAxMDEsXG4gICAgICA4MCxcbiAgICAgIDE0OSxcbiAgICAgIDY4LFxuICAgICAgMjE2LFxuICAgICAgMTQ3LFxuICAgICAgMjUzLFxuICAgICAgNzIsXG4gICAgICA0NSxcbiAgICAgIDc5LFxuICAgICAgMTMyLFxuICAgICAgMTEyLFxuICAgICAgMTI4LFxuICAgICAgMjI4LFxuICAgICAgMjI4LFxuICAgICAgMSxcbiAgICAgIDE2OSxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWWkJFNUZWS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwOTI0MzYxODo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjI2ODk4Nzk1NjQ0ODg6NDhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTJ5MTg4RUVMMmh3cmtHR0JvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXTDJSNTlFcUIxOUhTeFhRenp2UkVtNWtyTVRRb1VIZ2EyT2pDUE5YcWpnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIks3bVFtbDJid0hvWmdSWHFpOEk3MTc4SmI1MkRZbkdrL3hxU2FsMElxUGJabzUyMXRzbk1PVFovdmxOR2Vla1Blbk51OTRWamlPTU1GSE1MOERjTkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBiZTUzRThrVkVnajV5cDBtVVlzdFB3TDc1bGVZVXJYWTdrYlExejlrRzBCVy95QTNpSVROa1V6TEhMQnVaVEtyYlhHYW5uenAyNFJ5bTl2bFpPaWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDkyNDM2MTg6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTIzNjAzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ4Y1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnhjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQlMvSURiL3BCY1VRa25uYk5zQ1U3enhWNzZIaWNWdktNVm1DVzlSZWhwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQwODQ4NzE3LFwiY3VycmVudEluZGV4XCI6MjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMjNdfSxcInRpbWVzdGFtcFwiOlwiMTczMTE4MDM1Mzc4MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "DAVID",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
