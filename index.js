/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map((item)=>console.log(item))
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(console.log)
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id: 4, name: "karen", age: "19", profession: "admin"})
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(obj => obj.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let concatenatedArr = arr[0];
    for(let i = 1; i < arr.length; i++){
        concatenatedArr = Object.assign(concatenatedArr, arr[i]);
    }
    console.log(concatenatedArr)
  }