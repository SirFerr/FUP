const {path}=require('path');
const {url}=require('url');
const {app, BrowserWindow} = require("electron")
require('./Windows.js')

app.whenReady().then(createWindowForDepartment)

app.on("window-all-closed", ()=>{
    if(process.platform!="darwin"){
        app.quit()
    }
})
app.on('activate',()=>{
    if(BrowserWindow.getAllWindows() === 0){
        createWindowForDepartment()
    }
})