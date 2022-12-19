const net = require("net");
const { HOST, PORT } = require("./constant");

const connect = function (data) {
  const conn = net.createConnection({
    host: HOST,
    port: PORT
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
    conn.write("Name:SNK");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });


  return conn;
};

module.exports = { connect };
