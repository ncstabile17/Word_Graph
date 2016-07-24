var commonWords = ["of","in","to","for","with","on","at","from","by","about","as","into","like","through","the","a","an","and","my","i","was","his","her","he","she","that","which","had","but","this","were","we","when","our"];

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

function getMaxNoCommon(inputArray, wordArray) {
  var arrayCopy = inputArray.slice();
  var wordCopy = wordArray.slice();

  for (var i = 0; i<commonWords.length+1; i++)
  {
    var toRemove = commonWords[i];
    var idx = wordCopy.indexOf(toRemove);
    wordCopy.splice(idx, 1);
    arrayCopy.splice(idx, 1);

  }

  var maxCount1 = getMaxOfArray(arrayCopy);
  var pos1 = arrayCopy.indexOf(maxCount1);
  var maxName1 = wordCopy[pos1];
  var maxWord1 = {word: maxName1, count: maxCount1 };
  arrayCopy.splice(pos1, 1);
  wordCopy.splice(pos1, 1);

  var maxCount2 = getMaxOfArray(arrayCopy);
  var pos2 = arrayCopy.indexOf(maxCount2);
  var maxName2 = wordCopy[pos2];
  var maxWord2 = {word: maxName2, count: maxCount2 };
  arrayCopy.splice(pos2, 1);
  wordCopy.splice(pos2, 1);

  var maxCount3 = getMaxOfArray(arrayCopy);
  var pos3 = arrayCopy.indexOf(maxCount3);
  var maxName3 = wordCopy[pos3];
  var maxWord3 = {word: maxName3, count: maxCount3 };
  arrayCopy.splice(pos3, 1);
  wordCopy.splice(pos3, 1);

  var maxCount4 = getMaxOfArray(arrayCopy);
  var pos4 = arrayCopy.indexOf(maxCount4);
  var maxName4 = wordCopy[pos4];
  var maxWord4 = {word: maxName4, count: maxCount4 };
  arrayCopy.splice(pos4, 1);
  wordCopy.splice(pos4, 1);

  var maxCount5 = getMaxOfArray(arrayCopy);
  var pos5 = arrayCopy.indexOf(maxCount5);
  var maxName5 = wordCopy[pos5];
  var maxWord5 = {word: maxName5, count: maxCount5 };
  arrayCopy.splice(pos5, 1);
  wordCopy.splice(pos5, 1);

  var maxFive = [maxWord1, maxWord2, maxWord3, maxWord4, maxWord5];

  return maxFive;
}


function getMaxFive(inputArray, wordArray) {
  var arrayCopy = inputArray.slice();
  var wordCopy = wordArray.slice();

  var maxCount1 = getMaxOfArray(arrayCopy);
  var pos1 = arrayCopy.indexOf(maxCount1);
  var maxName1 = wordCopy[pos1];
  var maxWord1 = {word: maxName1, count: maxCount1 };
  arrayCopy.splice(pos1, 1);
  wordCopy.splice(pos1, 1);

  var maxCount2 = getMaxOfArray(arrayCopy);
  var pos2 = arrayCopy.indexOf(maxCount2);
  var maxName2 = wordCopy[pos2];
  var maxWord2 = {word: maxName2, count: maxCount2 };
  arrayCopy.splice(pos2, 1);
  wordCopy.splice(pos2, 1);

  var maxCount3 = getMaxOfArray(arrayCopy);
  var pos3 = arrayCopy.indexOf(maxCount3);
  var maxName3 = wordCopy[pos3];
  var maxWord3 = {word: maxName3, count: maxCount3 };
  arrayCopy.splice(pos3, 1);
  wordCopy.splice(pos3, 1);

  var maxCount4 = getMaxOfArray(arrayCopy);
  var pos4 = arrayCopy.indexOf(maxCount4);
  var maxName4 = wordCopy[pos4];
  var maxWord4 = {word: maxName4, count: maxCount4 };
  arrayCopy.splice(pos4, 1);
  wordCopy.splice(pos4, 1);

  var maxCount5 = getMaxOfArray(arrayCopy);
  var pos5 = arrayCopy.indexOf(maxCount5);
  var maxName5 = wordCopy[pos5];
  var maxWord5 = {word: maxName5, count: maxCount5 };
  arrayCopy.splice(pos5, 1);
  wordCopy.splice(pos5, 1);

  var maxFive = [maxWord1, maxWord2, maxWord3, maxWord4, maxWord5];

  return maxFive;

}

function printMaxFive(inputArray, wordArray) {
  var maxFive = getMaxFive(inputArray, wordArray);

  var maxWord1 = maxFive[0];
  var maxWord2 = maxFive[1];
  var maxWord3 = maxFive[2];
  var maxWord4 = maxFive[3];
  var maxWord5 = maxFive[4];

  var node = document.getElementById('maxWords');
  node.innerText = "These words appeared most frequently:\n  1. '" + maxWord1.word + "' with " + maxWord1.count + " uses\n" +
  "2. '" + maxWord2.word + "' with " + maxWord2.count + " uses\n" +
  "3. '" + maxWord3.word + "' with " + maxWord3.count + " uses\n" +
  "4. '" + maxWord4.word + "' with " + maxWord4.count + " uses\n" +
  "5. '" + maxWord5.word + "' with " + maxWord5.count + " uses\n";



}

function printMaxNoCommon(inputArray, wordArray) {
  var maxFive = getMaxNoCommon(inputArray, wordArray);

  var maxWord1 = maxFive[0];
  var maxWord2 = maxFive[1];
  var maxWord3 = maxFive[2];
  var maxWord4 = maxFive[3];
  var maxWord5 = maxFive[4];

  var node = document.getElementById('maxWords');
  node.innerText = "These words appeared most frequently:\n  1. '" + maxWord1.word + "' with " + maxWord1.count + " uses\n" +
  "2. '" + maxWord2.word + "' with " + maxWord2.count + " uses\n" +
  "3. '" + maxWord3.word + "' with " + maxWord3.count + " uses\n" +
  "4. '" + maxWord4.word + "' with " + maxWord4.count + " uses\n" +
  "5. '" + maxWord5.word + "' with " + maxWord5.count + " uses\n";



}


