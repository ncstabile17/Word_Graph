function countWords(stringArray){

  var words = [];
  var count = [];
  
// if word has not been seen, store in words array
// and increment count array by one, otherwise increment 
// count array by one 
  stringArray.forEach(function (element, index, array) {
    if (words.indexOf(element) == -1) {
      console.log("In loop with element: " + element);
      words.push(element);
      count.push(1);
    }
    else
    {
      var idx = words.indexOf(element);
      count[idx] += 1;
    }
  })

// print out each word and how many times it appears
  words.forEach(function (element, index, array) {
  var idx2 = words.indexOf(element);
  var numCount = count[idx2];
  var node2 = document.getElementById('words');
  node2.innerText += element + " appeared: " + numCount + " times. \n"; 
})

};

//return max num in array
function getMaxOfArray(numArray) {
              return Math.max.apply(null, numArray);
            }


function getMaxFive(inputArray, wordArray) {
  var arrayCopy = inputArray.slice();
  var wordCopy = wordArray.slice();

  var maxCount1 = getMaxOfArray(arrayCopy);
  var pos1 = arrayCopy.indexOf(max1);
  var maxName1 = wordCopy[pos1];
  var maxWord1 = {word: maxName1, count: maxCount1 };
  arrayCopy.splice(pos1, 1);
  wordCopy.splice(pos1, 1);

  var maxCount2 = getMaxOfArray(arrayCopy);
  var pos2 = arrayCopy.indexOf(max2);
  var maxName2 = wordCopy[pos2];
  var maxWord2 = {word: maxName2, count: maxCount2 };
  arrayCopy.splice(pos2, 1);
  wordCopy.splice(pos2, 1);

  var maxCount3 = getMaxOfArray(arrayCopy);
  var pos3 = arrayCopy.indexOf(max3);
  var maxName3 = wordCopy[pos3];
  var maxWord3 = {word: maxName3, count: maxCount3 };
  arrayCopy.splice(pos3, 1);
  wordCopy.splice(pos3, 1);

  var maxCount4 = getMaxOfArray(arrayCopy);
  var pos4 = arrayCopy.indexOf(max4);
  var maxName4 = wordCopy[pos4];
  var maxWord4 = {word: maxName4, count: maxCount4 };
  arrayCopy.splice(pos4, 1);
  wordCopy.splice(pos4, 1);

  var maxCount5 = getMaxOfArray(arrayCopy);
  var pos5 = arrayCopy.indexOf(max5);
  var maxName5 = wordCopy[pos5];
  var maxWord5 = {word: maxName5, count: maxCount5 };
  arrayCopy.splice(pos5, 1);
  wordCopy.splice(pos5, 1);

  var maxFive = [maxWord1, maxWord2, maxWord3, maxWord4, maxWord5];

  return maxFive;

}

