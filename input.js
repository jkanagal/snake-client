const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    const stdout = process.stdout;
    if (key === '\u0003') {
      stdout.write("Exiting");
      process.exit();
    }
  });

};

setupInput();

module.exports = { setupInput };
