/*
let test = ['maria','joao','francisco','jose'];
let test2;

//for ( let i=0 ; i < test.length; i++ ) {

  let result = Math.floor(Math.random() * test.length ) 

//}

document.querySelector('.class').innerHTML = test[result]   
*/

let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
let newColor = ['green','blue','red','black','orange']
 
let randWho = Math.floor(Math.random() * who.length ) 
let randAction = Math.floor(Math.random() * action.length ) 
let randWhat = Math.floor(Math.random() * what.length ) 
let randWhen = Math.floor(Math.random() * when.length ) 

let excuseScore= Math.floor(Math.random() *100)

let randNewColor = Math.floor(Math.random() * newColor.length)


document.querySelector('.class').innerHTML = who[randWho] + ' ' + action[randAction]+ ' ' + what[randWhat] + ' ' + when[randWhen]

document.querySelector('.class2').innerHTML = `${who[randWho]} e mucho louco`


document.querySelector('#test').innerHTML ='Excuse score:' +  excuseScore

function trocaCor() {  
  
  document.querySelector('#bode').style.background = newColor[randNewColor]; 

}

function tiraCor() {  
  document.querySelector('#bode').style.background = ''; 

}

function trocaCor2() {  
  
  document.querySelector('#bode').style.background = newColor[randNewColor]; 

}




























