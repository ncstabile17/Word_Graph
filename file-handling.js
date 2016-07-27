import countWords from "string-handling";
import makeGraph from "create-graph";

function getGraph() {
      document.getElementById('numWords').innerText = '';

      console.log("In getGraph...");
        var randomColorFactor = function() {
            return Math.round(Math.random() * 255);
        };
        var randomColor = function(opacity) {
            return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
        };

        var input = document.getElementById('inputFile').files[0];

        var reader = new FileReader();
        reader.onload = function(){
          var str = reader.result;

          //chapArray is an array where each element
          //is an array containing the words in that chapter
          //chapters is a string array with each word being its own element
          var chapArray = str.split(/CHAPTER/);
          console.log(chapArray);
          //console.log(chapArray);
          var chapters = new Array(chapArray.length);
          
          chapArray.forEach(function (element, index, array) {
            chapters[index] = element.toLowerCase().replace(/[^a-zA-Z '\n]/g, '').split(/\s+/);
          })
          

          var xLabels = [];
          for (var i = 0; i<chapArray.length; i++)
          {
            var current = "Chapter " + i;
            xLabels.push(current);
          }

          
          var node = document.getElementById('output');
          //node.innerText = "Chapter One array: " + chapters[1];
          var strArray = chapters[1];
          //var wordCount = countWords(strArray);
          //printMaxNoCommon(wordCount.count, wordCount.words);

          var wordInput = document.getElementById('wordInput').value;
          wordInput = wordInput.toString().toLowerCase().split(/, */);

          console.log(wordInput);
          
          var datasets = [];

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

            for (var j = 0; j<wordData.length; j++) {

             var currNum = Number(wordData[j]);
             wordTotal += currNum;
            }

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




