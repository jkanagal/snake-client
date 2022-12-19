const { MSG, BYE, UP, DOWN, LEFT, RIGHT } = require("./constant");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    const stdout = process.stdout;
    if (key === '\u0003') {
      stdout.write("Exiting");
      process.exit();
    }
    if (key === UP) {
      connection.write("up");
    }
    if (key === LEFT) {
      connection.write("left");
    }
    if (key === DOWN) {
      connection.write("down");
    }
    if (key === RIGHT) {
      connection.write("right");
    }
    if (key === 'n') {
      connection.write(MSG);
    }
    if (key === 'b') {
      connection.write(BYE);
    }
  });

};


module.exports = { setupInput };
