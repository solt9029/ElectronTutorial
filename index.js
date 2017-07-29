var TARGET_URL="http://editmaster.solt9029.com";
var app=require("app");
var BrowserWindow=require("browser-window");

var mainWindow=null;

app.on("ready",function(){
  mainWindow=new BrowserWindow({width:800,height:600});
  mainWindow.loadUrl(TARGET_URL);
});