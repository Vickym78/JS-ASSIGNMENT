/* j/ You are 2iven an array of numbers and strin2s. Your task is to find the first strin2 in the array. On findin2 the
first strin2 print “Found the First Strin2” and its value. */

const arr =[1,2,3,999,56,"Mithun",1234,"pw"];

for (let i=0;i<arr.length ;i++){
    if(typeof arr[i] =='string') {console.log("First string found :", arr[i]); break;} 
}