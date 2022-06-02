// const a = "hsdcgbjhgv";
// console.log(a +"before ")
// a = 123;

// console.log(a)

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {
  let newBookList = [];
  for(let i = 0; i < bookList.length; i++){
    newBookList[i] = bookList[i];
  }
  newBookList.push(bookName);
//   console.log(newBookList);
  return newBookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    let newBookList = [];
    for(let i = 0; i < bookList.length; i++){
        if(i!=book_index){
          newBookList.push(bookList[i]);
        }
    }
    return newBookList;
    // Change code above this line
    }
}
// console.log(add(bookList, "A Brief History of Time"));
// console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));

let objArr = [{size:135},{size:120},{size:130},{size:100},{size:150},{size:160},{size:145},{size:180},{size:190},{size:200}];
// for reversing array
// objArr.sort((a,b)=>{
//   return b.size - a.size;
// });


// for sorting obj array assending;
objArr.sort((a,b)=>{
  return a.size === b.size ? 0 : a.size < b.size ? -1 : 1;
});

// for sorting in decending order 
objArr.sort((a,b)=>{
  return a.size === b.size ? 0 : a.size < b.size ? 1 : -1;})
console.log(objArr);