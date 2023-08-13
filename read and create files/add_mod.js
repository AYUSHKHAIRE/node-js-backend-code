const fs=require("fs");
let text = fs.readFileSync("C:/Users/DELL/Desktop/folderking/THE  PROGRAMING/WEB  DEVELOPMENT/backend/read.txt","utf-8");
console.log(text);
text = text.replace("file","folder");
console.log(text);
console.log("creating a new file");
fs.writeFileSync("C:/Users/DELL/Desktop/folderking/THE  PROGRAMING/WEB  DEVELOPMENT/backend/ayush.txt",text);
