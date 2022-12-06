const findMinimum = arr => {

  // Your code here
  let smallestNum = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < smallestNum){
      smallestNum = arr[i];
    }
  }
  return smallestNum;

};

const runningSum = arr => {

  // Your code here
  for(let i = 0; i <  arr.length-1; i++){
    let temp = arr[i] + arr[i+1];
    arr[i+1] = temp;
  }
  return arr;
};

const evenNumOfChars = arr => {

  // Your code here
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length % 2 == 0){
      count++;
    }
  }
  return count;
};

const smallerThanCurr = arr => {

  // Your code here
  let answer = [];
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[i] > arr[j]){
        count++;
      }
    }
    answer.push(count);
    count = 0;
  }
  return answer;

};

const twoSum = (arr, target) => {

  // Your code here
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[i]  + arr[j] == target){
        return true;
      }
    }
  }
  return false;
};

const secondLargest = arr => {

  // Your code here
  if(arr.length < 2){
    return undefined;
  }
  let greatestNum = arr[1];
  let secondLargest = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > greatestNum){
      secondLargest = greatestNum;
      greatestNum = arr[i];
    }
  }
  return secondLargest;
};

const shuffle = (arr) => {

  // Your code here
  let answer = arr.slice();
  let currentIndex = answer.length;
  let temp;
  let randomIndex;
  while(currentIndex !== 0){
    randomIndex = Math.floor(Math.random()*currentIndex);
    currentIndex--;

    temp = answer[currentIndex];
    answer[currentIndex] = answer[randomIndex];
    answer[randomIndex] = temp;
  }
  return answer;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];