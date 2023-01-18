const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game");
    conn.write("Name: NYY");
    // setInterval(()=> {conn.write("Move: up");}, 150)
    // setInterval(()=> {conn.write("Move: up");}, 100)
    // setInterval(()=> {conn.write("Move: up");}, 150)
    
    
    
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  

  return conn;
};

module.exports = connect;