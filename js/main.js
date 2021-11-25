window.onload = function () {
  document.getElementById("cmdline").onclick = function terminal() {
    new WinBox({
      title: "Terminal",
      background: "#64e3df",
      height: 500,
      width: 950,
      x: "center",
      y: "center",
      url: "./terminal.html",
    });
  };
  document.getElementById("recycle").onclick = function bin() {
    new WinBox({
      title: "Recycle Bin",
      background: "#64e3df",
      height: 400,
      width: 500,
      x: "center",
      y: "center",
      url: "./recycle-bin.html",
    });
  };
  document.getElementById("database").onclick = function bin() {
    new WinBox({
      title: "Database",
      background: "#64e3df",
      height: 500,
      width: 900,
      x: "center",
      y: "center",
      url: "./database.html",
    });
  };
};
