const net = require("net");

const connect = function (data) {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", (data) => {
    conn.write("Successfully connected to game server");
    conn.write("Name:SNK");
  });

  

  // conn.on("Move up", (data) => {
  //   conn.write("Move up:",data);
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect, net };
