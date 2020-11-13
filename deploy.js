const execSync = require('child_process').execSync;

const d = new Date();
const dateTime = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

execSync(`git pull origin master && git add . && git commit -m "Automate commit ${dateTime}" && git push origin master`);