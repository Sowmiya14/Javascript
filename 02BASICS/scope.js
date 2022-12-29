// let for declaring variables
// const for declaring constants
// var also for declaring variables

let iAmGlobal ='someValue'//(Global Variable)
if (true) {
    var iAmLocal ='someMoreValue' //(Local Variable)
    iAmGlobal ='superMan'
    console.log(iAmGlobal); 
    console.log(iAmLocal); 
}
console.log(iAmLocal); //If we use let variable it gives error
console.log(iAmGlobal);
