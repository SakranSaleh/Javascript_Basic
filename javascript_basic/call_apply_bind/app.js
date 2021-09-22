//Bind


function a(a,b,c,d, ...args){
   console.log( arguments); // 13, 17
}

function b(){
    // with all arguments positioned in even numbers
   // console.log(...arguments);
   let arr = [...arguments];
   let newArr = [];
    arr.forEach((item,index) =>{
      if(index % 2 === 0){
         newArr.push(index);
      }
   })
  let x =  a.bind(this, newArr);
  x()


}

b(11,13,15,17,22,43,50)


//Apply

function a(a,b,c,d, ...args){
   console.log( arguments); // 13, 17
}

function b(){
    // with all arguments positioned in even numbers
   // console.log(...arguments);
   let arr = [...arguments];
   let newArr = [];
    arr.forEach((item, index) =>{
      if(index % 2 === 0){
         newArr.push(index);
      }
   })
   a.apply(this, newArr);


}
b(11,13,15,17,22,43,50)



//Call
function a(a,b,c,d, ...args){
   console.log( arguments); // 13, 17
}

function b(){
    // with all arguments positioned in even numbers
   // console.log(...arguments);
   let arr = [...arguments];
   let newArr = [];
    arr.forEach((item, index) =>{
      if(index % 2 === 0){
         newArr.push(index);
      }
   })
   a.call(this, ...newArr);


}
b(11,13,15,17,22,43,50)

// study call(), apply(), bind()


