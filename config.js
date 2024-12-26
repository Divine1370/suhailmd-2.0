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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348109243618";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_34_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTI4LFxuICAgICAgICA0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICA0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDczLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MixcbiAgICAgICAgODEsXG4gICAgICAgIDg4LFxuICAgICAgICA1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg3LFxuICAgICAgICA1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEwLFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRjZubzQ3eHRZK1FpREEwK3kyZXBteHJIUURXcDJGTWtOZFZVdFNhbEpUWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ0d3RnhLSG5TdWFycG8yNl9oSG93d1wiLFxuICBcInBob25lSWRcIjogXCI2ZjhlMTk3My05MGZmLTQxNTQtYmI4Ni0xNmNjOTcwMzM4ZjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgMjAsXG4gICAgICAyMjYsXG4gICAgICAyNDIsXG4gICAgICAzOCxcbiAgICAgIDEwLFxuICAgICAgMTYsXG4gICAgICAyNixcbiAgICAgIDEzOSxcbiAgICAgIDgyLFxuICAgICAgNDcsXG4gICAgICAyMjIsXG4gICAgICAxNDYsXG4gICAgICAxNTUsXG4gICAgICAxODMsXG4gICAgICA1LFxuICAgICAgMTc3LFxuICAgICAgMTYxLFxuICAgICAgMTQ2LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICA0MCxcbiAgICAgIDQwLFxuICAgICAgNixcbiAgICAgIDEzNCxcbiAgICAgIDE2MSxcbiAgICAgIDYsXG4gICAgICAxMzIsXG4gICAgICAzNyxcbiAgICAgIDQ5LFxuICAgICAgNixcbiAgICAgIDk4LFxuICAgICAgMjE4LFxuICAgICAgMTg0LFxuICAgICAgMTQ2LFxuICAgICAgMTc3LFxuICAgICAgMzMsXG4gICAgICAxMTksXG4gICAgICA5NixcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFUDY1RjZMVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwOTI0MzYxODo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjI2ODk4Nzk1NjQ0ODg6NzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTZ5MTg4RUVQL3V0YnNHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXTDJSNTlFcUIxOUhTeFhRenp2UkVtNWtyTVRRb1VIZ2EyT2pDUE5YcWpnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkw0bjJ5eVF3aWFYVWZzcCtkL1Z0cWNEOXg3dGVyMlM5eWtmVUlMb0lramFjdTN0Y05xSDUycHJOcFEwU1UwZ3hGNWRjZFB4alFPa1VWenNZZTAyTkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjc5S0ZjZGlhYmNaTk1tS2hZZlhGcm9WcXhjd0VTZVNTMVBkTTZuUG5pWTJGYlltNHBLTUlGSUZRV3RoajB2SXZ3U3lodDNEcStSMmQvU3o0cG5rTGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDkyNDM2MTg6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTIyNzI2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ4MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQngwLmpzb24iOiAie1wia2V5RGF0YVwiOlwicU5oYXI5elo2VWZjNCtLcFI1Q1pYTTVvazR4YTlTK3lvKzJqU1BMM05Vcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQwODQ4NzE4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝕯𝖆𝖛𝖎𝖉",
  packname: process.env.PACK_NAME || "𝕵𝖊 𝖛𝖔𝖎𝖘 𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖕𝖆𝖈𝖐",
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
