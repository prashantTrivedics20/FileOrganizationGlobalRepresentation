#!/usr/bin/env node

let inputarr = process.argv.slice(2); // to use for user input in the terminal
let fs = require("fs");
let path = require("path"); // this is the linking
let helpObj = require("./commands/help");
let treeobj = require("./commands/tree");
let organizeobj = require("./commands/organize");
let types = {
        media: ["mp4", "mkv"],
        archives: ['zip', 'rar', 'iso', 'xz'],
        documents: ['docx', 'doc', 'pdf', 'xlsx', 'txt'],
        app: ['exe', 'dmg', 'pkg', 'deb']
    }
    //console.log(inputarr);
    //node main.js tree "directiryPath"
    // node main.js organize "directoryPath"
    //node main.js help
let command = inputarr[0];
switch (command) {
    case "tree":
        treeobj.treeKey(inputarr[1])
        break;
    case "organize":
        organizeobj.organizeKey(inputarr[1])
        break;
    case "help":
        helpObj.helpKey;
        break;
    default:
        console.log("hello ");
        console.log("Please🙏Input Right  command");
}

// function treeFn(dirPath) {
//     //console.log("Tree command implemented for", dirPath);
//     let destPath;
//     if (dirPath == undefined) {
//         //process.cwd() // to make globle we use this.. last task of vedio
//         treeHelper(process.cwd(), ""); // this is for globle
//         //treeHelper(dirPath, "");
//         //console.log("kindly enter the path");
//         return;

//     } else {
//         let doesExist = fs.existsSync(dirPath);
//         if (doesExist) {
//             treeHelper(dirPath, "");

//         } else {
//             console.log("kindly enter the path");
//             return;

//         }
//     }

// }

// function getCategory(name) { // it will give the category of the file
//     let ext = path.extname(name);
//     ext = ext.slice(1);
//     //console.log(ext);
//     for (let type in types) {
//         let cTypearr = types[type];
//         for (let i = 0; i < cTypearr.length; i++) {
//             if (ext == cTypearr[i]) {
//                 return type;
//             }

//         }

//     }
//     return "other types";

// }

// function organize(dirPath) {
//     //console.log("organize command implemented for", dirPath);
//     // 1- input-> directory path given
//     let destPath;
//     if (dirPath == undefined) {
//         console.log("kindly enter the path");
//         destPath = process.cwd();
//         //this is for globle
//         return;

//     } else {
//         let doesExist = fs.existsSync(dirPath);
//         if (doesExist) {
//             // 2- create -> organized_files -> directory
//             destPath = path.join(dirPath, "organize_file"); // it will make the folder with the  dirPath
//             if (fs.existsSync(destPath) == false) {
//                 fs.mkdirSync(destPath);
//             }
//         } else {
//             console.log("kindly enter the path");
//             return;

//         }
//     }
//     organizeHelper(dirPath, destPath);
//     // // 1- input-> directory path given
//     // 2- create -> organized_files -> directory
//     // 3- identify categories of all the files present in that input directory ->
//     // 4.copy /cut files to that organize directory inside of any of categor folder
// }

// function treeHelper(dirPath, indent) {
//     // is file or folder
//     let isfile1 = fs.lstatSync(dirPath).isFile() // it will check weather it is file or directory
//     if (isfile1 == true) {
//         let filename = path.basename(dirPath);
//         console.log(indent + "|``````" + filename);

//     } else {
//         let dirName = path.basename(dirPath);
//         console.log(indent + "\~~~~~~~~~~~~" + dirName);
//         let childrens = fs.readdirSync(dirPath);
//         for (let i = 0; i < childrens.length; i++) {;
//             let childPath = path.join(dirPath, childrens[i]); // here we are using recursion for all child
//             treeHelper(childPath, indent);
//         }


//     }


// }

// function organizeHelper(src, dest) {
//     // 3- identify categories of all the files present in that input directory ->
//     let childname = fs.readdirSync(src); // it will give the all file present int src folder
//     //console.log(childname);
//     for (let i = 0; i < childname.length; i++) {
//         let childAddress = path.join(src, childname[i]); // address
//         let isfile = fs.lstatSync(childAddress).isFile(); // if it is file then
//         if (isfile) {
//             //console.log(childname[i]); // it will display all the file
//             let category = getCategory(childname[i]);
//             console.log(childname[i], "belons to--> ", category);
//             // 4.copy /cut files to that organize directory inside of any of categor folder
//             sendFiles(childAddress, dest, category);

//         }
//     }
// }

// function sendFiles(srcfilePath, dest, category) {
//     //
//     let categoryPath = path.join(dest, category);
//     if (fs.existsSync(categoryPath) == false) {
//         fs.mkdirSync(categoryPath);
//     }
//     let filename = path.basename(srcfilePath); // name of the file 
//     let destFilePath = path.join(categoryPath, filename);
//     fs.copyFileSync(srcfilePath, destFilePath); // it is used to copy the file from one location to another
//     console.log(filename, "coppied to", category);
//     // how to cut the file after coppied 
//     fs.unlinkSync(srcfilePath); // by using this you can cut your file..

// }
// // help implemented
// function help() {
//     console.log(`List of all command:
//                      node main.js tree "directiryPath"
//                      node main.js organize "directoryPath"
//                      node main.js help
//     `);

// }