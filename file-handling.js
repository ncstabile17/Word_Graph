
function getGraph() {
      document.getElementById('numWords').innerText = '';

        //Used from Chart.js to create colors for graph
        var randomColorFactor = function() {
            return Math.round(Math.random() * 255);
        };
        var randomColor = function(opacity) {
            return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
        };

        //get inputFile from user selection and read in as string
        var input = document.getElementById('inputFile').files[0];
        var reader = new FileReader();
        reader.onload = function(){
        var str = reader.result;

          //chapArray is an array where each element
          //is an array containing the entire text in that chapter
          //chapters is an array where each element
          //is an array containing an array of the words in that chapter
          var chapArray = str.split(/CHAPTER/);
          var chapters = new Array(chapArray.length);
          
          chapArray.forEach(function (element, index, array) {
            chapters[index] = element.toLowerCase().replace(/[^a-zA-Z '\n]/g, '').split(/\s+/);
          })
          
          //create the labels for the x-axis
          var xLabels = [];
          for (var i = 0; i<chapArray.length; i++)
          {
            var current = "Chapter " + i;
            xLabels.push(current);
          }

          //get user input for word to graph
          var wordInput = document.getElementById('wordInput').value;
          wordInput = wordInput.toString().toLowerCase().split(/, */);
          
          var datasets = [];

          //for each input word, go through each chapter counting 
          //the occurences of the word and push to count array
          wordInput.forEach(function(element, index, array) {
            var wordTotal = 0;
            var wordData = [];
            chapters.forEach(function(element2, index2, array2) {
              var wordCount = countWords(array2[index2]);
              var idx = wordCount.words.indexOf(element);
              if (idx != -1) {
                var numCount = wordCount.count[idx];
                wordData.push(numCount);

              }
              else {
                wordData.push(0);
              }
            })

            //count total occurence of word
            for (var j = 0; j<wordData.length; j++) {
             var currNum = Number(wordData[j]);
             wordTotal += currNum;
            }

            //make new dataset from wordData
            var newDataset = {
                label: element,
                borderColor: randomColor(0.4),
                pointBorderColor: randomColor(0.7),
                pointBorderWidth: 1,
                data: wordData,
            };

            datasets.push(newDataset);
            console.log(datasets);

            document.getElementById('numWords').innerText += element + ": " + wordTotal + " appearances\n";
              
              

          })

            //call makeGraph function from create-graph.js to make
            //graph from given x-axis labels and datasets
            makeGraph(xLabels, datasets);

          
        };

        if (input != null) {
          document.getElementById('frankenimage').style.height=0;
          reader.readAsText(input);

          }

        else {
          document.getElementById('error').innerText = "Please select a text file";
        }
        
      };


