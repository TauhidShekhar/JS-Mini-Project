const span = document.querySelector(".info");
const span2 = document.querySelector(".explore");
const para = document.querySelector(".name");
const anchorList = document.querySelector(".anchor");

const wordList = [
    "Developer.",
    "Designer.",
    "Freelancer.",
];
const wordList2 = [
    "Student.",
    "Learning.",
    "Exploring.",
];
const anchorItems = [
    "Student.",
    "Learning.",
    "Exploring.",
];
const paraList = [
    "TauhidShekhar.",
];

function autoType( wordList,element) {
    let wordIndex=0;
let skipUpdate=0;
let charectorIndex=0;
let reversType=false;

const intervalId=setInterval(()=>{
    if(skipUpdate){
        skipUpdate--;
        return;
    }
    if(!reversType){
        skipUpdate=1
        element.innerText=element.innerText+ wordList[wordIndex][charectorIndex];
        charectorIndex++;
    }else{
        element.innerText=element.innerText.slice(0,element.innerText.length-1);
        charectorIndex--;
    }


    if(element.innerText.length===0 && reversType){
        reversType=false;
        wordIndex++;
        if(wordIndex===wordList.length){
            wordIndex=0;
        }
    }
    if(charectorIndex===wordList[wordIndex].length){
        reversType=true;
        skipUpdate=6
    }
},100);

}
autoType(wordList,span);
autoType(wordList2,span2);
autoType(paraList,para);
autoType(anchorItems,anchorList);

































// let wordIndex=0;
// let letterIndex=0;

// function loop(){
//     setTimeout(()=>{
//         if(wordIndex>=wordList.length){
//             wordIndex=0;
//         }
//         if(letterIndex>=wordList[wordIndex].length){
//             letterIndex=0;
//         }
//         span.innerText=wordList[wordIndex].slice(0,letterIndex+1);
//         letterIndex++;
//         loop();
//     },200);
// }
// loop();