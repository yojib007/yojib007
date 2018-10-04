
let listLength='';

let returnlength = (...input)=>{

let newinput=input;
listLength=newinput.length;
return listLength;
}

let i=returnlength("A","B","C");

console.log(i);