//author: tianyi
//instruction to interact-
//when the mouse move to the left - rotate counterclockwise
//when the mouse move to the right - rotate closewise

let gap=10;
let cirNum=40;
let cirSize=400;
let arcAngle1=[Math.random() * 361,Math.random() * 361,Math.random() * 361,Math.random() * 361,Math.random() * 361,Math.random() * 361,Math.random() * 361,Math.random() * 361,Math.random() * 361,Math.random() * 361];
let arcAngle2=Math.random() * 11;
let arcAngle3=Math.random() * 11;

let r;
let g;
let b;

let angle=0;
let ptNum=1000;
let rectSize=600;

let sound1=[72, 58, 58, 58, 58, 58, 58, 58, 58, 48, 49, 49, 60, 48,
   48, 49, 49, 48, 49, 48, 48, 49, 49, 49, 49, 49, 49, 49, 61, 60, 
   49, 49, 48, 48, 48, 72, 72, 70, 72, 71, 69, 70, 70, 71, 71, 70, 
   69, 70, 69, 71, 69, 71, 71, 71, 69, 69, 69, 69, 69, 69, 70, 69, 
   69, 69, 69, 71, 69, 69, 69, 69, 49, 69, 69, 51, 58, 58];
let time1=[12,2,8,5,1,7,15,3,9,12,3,20,8];
let sound2=[600,530,678,559,491,537,452,630,700,440,630,578];
let time2=[6,9,12,3,20,8,7,15,3,9,12,3];
// let sound2=[0];
// let time2=[0];
// const midies = localStorage["midi"];
// console.log(midies);
// let midies_list = midies.split(",");
// let length_midies = midies_list.length;
// let midi_list = []
// for (let i = 0; i < length_midies; i++) {
//   integer_midi = parseInt(midies_list[i]);
//   midi_list.push(integer_midi)
// }

// console.log('sketch.js')
// console.log(midi_list)

// let x = midi_list.length
// var randoms = Array(x).fill(Math.floor(Math.random() * 9));

// console.log("random")
// console.log(randoms)
let sound3=[3,1,12,19,15,9]
let time3=[10,45,78,9,19,3];

let start1=0;
let start2;
let start3;
let end1;
let end2;
let end3;



function setup(){
  createCanvas(windowWidth,windowHeight);
  // angleMode(degrees);
}

