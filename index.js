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



let randNewColor = Math.floor(Math.random() * newColor.length)


document.querySelector('.class').innerHTML =' " ' + who[randWho] + ' ' + action[randAction]+ ' ' + what[randWhat] + ' ' + when[randWhen] + '" '


































