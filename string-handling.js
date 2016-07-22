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

function getMaxFive(inputArray) {
  
}

