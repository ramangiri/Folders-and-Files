const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    const fs = require('fs');
    fs.readdir('./dummy',(error,folder)=>{
        if(error){
            console.error();
        }
        var result = ``;
        var reg = /^[a-zA-Z0-9-]*$/;
   
        folder.map(file=>{
            if(file.match('.json')){
                result+=`
                <th>
                <img src="https://cdn.iconscout.com/icon/free/png-512/json-file-1-504451.png" alt="json" width="75" height="75">
                <br>${file}&emsp;
                </th>            
                `
            }
            if(file.match('.txt')){
                result+=`
                <th>
                <img src="https://img.flaticon.com/icons/png/512/32/32329.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="json" width="75" height="75">
                <br>${file}&emsp;
                </th>            
                `
            }
            if(file.match('.docx')){
                result+=`
                <th>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/.docx_icon.svg/1200px-.docx_icon.svg.png" alt="docx" width="75" height="75">
                <br>${file}&emsp;
                <th>
                `
            }
            if(file.match('.jpg')){
                result+=`
                <th>
                <img src="https://image.flaticon.com/icons/png/512/136/136524.png" alt="json" width="75" height="75">
                <br>${file}&emsp;
                </th>            
                `
            }
            if(file.match('.mp4')){
                result+=`
                <th>
                <img src="https://image.flaticon.com/icons/png/512/136/136545.png" alt="json" width="75" height="75">
                <br>${file}&emsp;
                </th>            
                `
            }
            if(file.match(reg)){
                result+=`
                <th>
                <img src="https://img.icons8.com/emoji/452/open-file-folder-emoji.png" alt="json" width="75" height="75">
                <br>${file}&emsp;
                </th>            
                `
            }   
        })
        result = `<table><tr>${result}<tr><table>`
        res.send(result);
    })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})