function hasTargetSum(array, target) {
  for(i=0;i< array.length;i++){
    let first = array[i]
    for (let j =i+1;j<array.length;j++){
      let second = array[j]
      console.log(second)
      if(first+second === target){
        return true
      }
    }
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  for(i=0,i< array.length,i++){
    let first = array[i]
    for i=1,i<array.length,i++{
      let second = array[i]
      if(first+second !==target){
        break

      }
      else{
        return true
      }
    }
  }
*/

/*
  Add written explanation of your solution here
  needs to define array length
  will iterate through the first element of the array and summing the sequential one, if it matches then it will return true, 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
