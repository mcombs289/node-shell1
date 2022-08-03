const pwdObj = require("./pwd");
const lsObj = require("./ls");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwdObj.pwd();
  }
  if (cmd === "ls") {
    lsObj.ls();
  } else {
    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
