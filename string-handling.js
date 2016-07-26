var commonWords = ["of","in","to","for","with","on","at","from","by","about","as","into","like","through","the","a","an","and","my","i","was","his","her","he","she","that","which","had","but","this","were","we","when","our","him","be","have","is","these","their","or","me","you","your","so","been","they","will","if","would","are"];

function countWords(stringArray){

  var words = [];
  var count = [];
  
// if word has not been seen, store in words array
// and increment count array by one, otherwise increment 
// count array by one 
  stringArray.forEach(function (element, index, array) {
    if (words.indexOf(element) == -1) {
      //console.log("In loop with element: " + element);
      words.push(element);
      count.push(1);
    }
    else
    {
      var idx = words.indexOf(element);
      count[idx] += 1;
    }
  })

/* print out each word and how many times it appears
  words.forEach(function (element, index, array) {
  var idx2 = words.indexOf(element);
  var numCount = count[idx2];
  var node2 = document.getElementById('words');
  node2.innerText += element + " appeared: " + numCount + " times. \n"; 
})
*/
return {count: count, words: words };

};

//return max num in array
function getMaxOfArray(numArray) {
              return Math.max.apply(null, numArray);
            }

function getMaxNoCommon(inputArray, wordArray, num) {
  var arrayCopy = inputArray.slice();
  var wordCopy = wordArray.slice();

  for (var i = 0; i<commonWords.length+1; i++)
  {
    var toRemove = commonWords[i];
    var idx = wordCopy.indexOf(toRemove);
    wordCopy.splice(idx, 1);
    arrayCopy.splice(idx, 1);

  }

  var maxArray = [];

  for (var i = 0; i<num; i++) {
    var currMaxCount = getMaxOfArray(arrayCopy);
    var currPos = arrayCopy.indexOf(currMaxCount);
    var currMaxName = wordCopy[currPos];
    var currMax = {word: currMaxName, count: currMaxCount};
    maxArray.push(currMax);
    arrayCopy.splice(currPos, 1);
    wordCopy.splice(currPos, 1);
  }

  
  return maxArray;
}


function getMaxNum(inputArray, wordArray, num) {
  var arrayCopy = inputArray.slice();
  var wordCopy = wordArray.slice();

  var maxArray = [];

  for (var i = 0; i<num; i++) {
    var currMaxCount = getMaxOfArray(arrayCopy);
    var currPos = arrayCopy.indexOf(currMaxCount);
    var currMaxName = wordCopy[currPos];
    var currMax = {word: currMaxName, count: currMaxCount};
    maxArray.push(currMax);
    arrayCopy.splice(currPos, 1);
    wordCopy.splice(currPos, 1);
  }


  return maxArray;

}

function printMaxNum(inputArray, wordArray, num) {
 
  var allMax = getMaxFive(inputArray, wordArray, num);
  var node = document.getElementById('maxWords');

  for (var i = 0; i<allMax.length; i++) {
    var currMaxWord = allMax[i];
    node.innerText += i+1 + ". '" + currMaxWord.word + "' with '" + currMaxWord.count + " uses\n";

  }


}

function printMaxNoCommon(inputArray, wordArray, num) {

  var allMax = getMaxNoCommon(inputArray, wordArray, num);
  var node = document.getElementById('maxWords');

  for (var i = 0; i<allMax.length; i++) {
    var currMaxWord = allMax[i];
    node.innerText += i+1 + ". '" + currMaxWord.word + "' with '" + currMaxWord.count + " uses\n";

  }



}


