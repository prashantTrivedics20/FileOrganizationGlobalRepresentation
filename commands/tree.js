function treeFn(dirPath) {
    //console.log("Tree command implemented for", dirPath);
    let destPath;
    if (dirPath == undefined) {
        //process.cwd() // to make globle we use this.. last task of vedio
        treeHelper(process.cwd(), ""); // this is for globle
        //treeHelper(dirPath, "");
        //console.log("kindly enter the path");
        return;

    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, "");

        } else {
            console.log("kindly enter the path");
            return;

        }
    }

}

function treeHelper(dirPath, indent) {
    // is file or folder
    let isfile1 = fs.lstatSync(dirPath).isFile() // it will check weather it is file or directory
    if (isfile1 == true) {
        let filename = path.basename(dirPath);
        console.log(indent + "|``````" + filename);

    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + "\~~~~~~~~~~~~" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {;
            let childPath = path.join(dirPath, childrens[i]); // here we are using recursion for all child
            treeHelper(childPath, indent);
        }


    }


}

module.exports = {
    treeKey: treeFn
}