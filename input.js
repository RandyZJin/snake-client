const { uptime } = require("process");
const { clearInterval } = require("timers");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // stdin.on("data", handleUserInput);

  connection.on("connect", () => {
    stdin.on("data", handleUserInput);

  });

  return stdin;
};

// const move_up = connection.write("Move: up");
let prevMove;
let move_up = connection.write("Move: up");

// console.log(IntervalID)
const handleUserInput = function (key) {
  switch (key) {
    case "\u0003":
      process.exit();

    case "w":
      // console.log(prevMove)
      clearInterval(prevMove);
        prevMove = setInterval(() => { move_up }, 300);;
      // prevMove += setInterval(() => { connection.write("Move: up"); }, 300);
      // connection.write("Move: up");
      break;

    case "a":

      clearInterval(prevMove);

        prevMove = setInterval(() => { connection.write("Move: left"); }, 300);

      // connection.write("Move: left");
      break;

    case "s":

      clearInterval(prevMove);

        prevMove = setInterval(() => { connection.write("Move: down"); }, 300);

      // connection.write("Move: down");
      break;

    case "d":

      clearInterval(prevMove);

        prevMove = setInterval(() => { connection.write("Move: right"); }, 300);

      // connection.write("Move: right");
      break;


    case "q":
      connection.write("Say: FF@20");
      break;

    case "e":
      connection.write("Say: Open Mid");
      break;

  }
};

module.exports = setupInput;

