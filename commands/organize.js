function organize(dirPath) {
    //console.log("organize command implemented for", dirPath);
    // 1- input-> directory path given
    let destPath;
    if (dirPath == undefined) {
        console.log("kindly enter the path");
        destPath = process.cwd();
        //this is for globle
        return;

    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            // 2- create -> organized_files -> directory
            destPath = path.join(dirPath, "organize_file"); // it will make the folder with the  dirPath
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }
        } else {
            console.log("kindly enter the path");
            return;

        }
    }
    organizeHelper(dirPath, destPath);
    // // 1- input-> directory path given
    // 2- create -> organized_files -> directory
    // 3- identify categories of all the files present in that input directory ->
    // 4.copy /cut files to that organize directory inside of any of categor folder
}

function organizeHelper(src, dest) {
    // 3- identify categories of all the files present in that input directory ->
    let childname = fs.readdirSync(src); // it will give the all file present int src folder
    //console.log(childname);
    for (let i = 0; i < childname.length; i++) {
        let childAddress = path.join(src, childname[i]); // address
        let isfile = fs.lstatSync(childAddress).isFile(); // if it is file then
        if (isfile) {
            //console.log(childname[i]); // it will display all the file
            let category = getCategory(childname[i]);
            console.log(childname[i], "belons to--> ", category);
            // 4.copy /cut files to that organize directory inside of any of categor folder
            sendFiles(childAddress, dest, category);

        }
    }
}

function sendFiles(srcfilePath, dest, category) {
    //
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let filename = path.basename(srcfilePath); // name of the file 
    let destFilePath = path.join(categoryPath, filename);
    fs.copyFileSync(srcfilePath, destFilePath); // it is used to copy the file from one location to another
    console.log(filename, "coppied to", category);
    // how to cut the file after coppied 
    fs.unlinkSync(srcfilePath); // by using this you can cut your file..

}

function getCategory(name) { // it will give the category of the file
    let ext = path.extname(name);
    ext = ext.slice(1);
    //console.log(ext);
    for (let type in types) {
        let cTypearr = types[type];
        for (let i = 0; i < cTypearr.length; i++) {
            if (ext == cTypearr[i]) {
                return type;
            }

        }

    }
    return "other types";

}
module.export = {
    organizeKey: organizeFn

}