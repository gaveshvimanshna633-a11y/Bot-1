const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
  return text === fault;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || '',
  PREFIX: process.env.PREFIX || '.',

  // ---------- bot identity (used by .alive) ----------
  BOT_NAME: process.env.BOT_NAME || 'LUZZ-MD',
  CREATOR: process.env.CREATOR || 'Gavesh Vimanshana',
  BOT_OWNER: process.env.BOT_OWNER || '94742549935', // owner's phone number (country code, no +)

  ALIVE_IMG:
    process.env.ALIVE_IMG ||
    'https://raw.githubusercontent.com/gaveshvimanshna633-a11y/Bot-1/refs/heads/main/file_00000000aabc81f4bdd6f514b9b14978.png',
  // optional custom line shown under the greeting (leave empty to use the default)
  ALIVE_MSG: process.env.ALIVE_MSG || '',

  convertToBool,
};
