console.log("this is module.js");
function average(arr){
    let sum =0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
module.exports = {
    avg : average,
    name : "ayush",
    repo : "vscode"
};
module.exports.profession = "web developer";