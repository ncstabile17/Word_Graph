
function getFiles() {
      

        //get inputFile from user selection and read in as string

        var fileArray = [];
        var nameArray = [];
        var fileInput = document.getElementById('inputFile');
        var files = fileInput.files;
        var bookArray = [];
        console.log(files);
        console.log(files.length);
        var length = files.length;
        console.log(length);

      if (length != 0) {
        document.getElementById('frankenimage').style.height=0;

        for (var i = 0; i < files.length; i++) {
          var currFile = files.item(i);
          fileArray.push(currFile);
          console.log("Adding files to array...");
          console.log(fileArray);
          var currName = currFile.name;
          nameArray.push(currName);
          }

        for (var i = 0; i<fileArray.length; i++) {
              var currFile = fileArray[i];
              var reader = new FileReader();
              reader.readAsText(currFile);
              reader.onload = function(){

             console.log("loading file..."); 
              var currentFile = reader.result;
              bookArray.push(currFile);
              console.log(bookArray);
              console.log(reader.readyState);
              console.log("in getFiles...");
              console.log(bookArray);
              var fileArrayObject = {bookText: bookArray,
                                      bookName: nameArray};

                       makeFunc(fileArrayObject);


                

            }

          }


        
      }

              
        else {
                document.getElementById('error').innerText = "Please select a text file";
              }
        
          
        };


function makeFunc(fileArrayObject) {

  

    console.log("in get graph...");
    var fileArrayObject = getFiles();
    console.log(fileArrayObject);
   // console.log(fileArrayObject[bookText]);
    console.log(fileArrayObject.bookName);
    var bookArray = fileArrayObject.bookText;
    var nameArray = fileArrayObject.bookName;
    console.log(fileArrayObject.book);
    var dataArray = [];
    var retObj; 
    document.getElementById('numWords').innerText = '';
    console.log(bookArray.length);

    for (var j = 0; j<bookArray.length; j++) {
      console.log("In for loop.......");
      var graph = getGraph();
      dataArray = dataArray.concat(graph.datasets);
      retObj = {xLabels: graph.xLabels, datasets: dataArray};
    }

      function getGraph() {

  //bookArray.forEach(function(element, index, array) {
          var datasets = [];
          var element = bookArray[i];
          console.log(element);
          console.log(bookArray);
          var name = nameArray[i];
          var colorCode = name.charCodeAt(2);
          var randomColorFactor = function() {
              return Math.round(Math.random() * (255-colorCode));
          };
          var randomColor = function(opacity) {
              return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
          };

          var n = element.length/10;
          var chapArray = [];

          for (var i = 0; i < element.length; i+=n){
            chapArray.push(element.substring(i, i+n));
          }

            //chapArray is an array where each element
            //is an array containing the entire text in that chapter
            //chapters is an array where each element
            //is an array containing an array of the words in that chapter
           // var chapArray = array.split(/CHAPTER/);
            var chapters = new Array(chapArray.length);
            
            chapArray.forEach(function (element, index, array) {
              chapters[index] = element.toLowerCase().replace(/[^a-zA-Z '\n]/g, '').split(/\s+/);
            })
            
            //create the labels for the x-axis
            var xLabels = [];
            for (var i = 0; i<chapArray.length; i++)
            {
              var current = "Part " + i;
              xLabels.push(current);
            }
            console.log("In bookArray.forEach");
            console.log(xLabels);

            //get user input for word to graph
            var wordInput = document.getElementById('wordInput').value;
            wordInput = wordInput.toString().toLowerCase().split(/, */);

            
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

              fullName = element + " in " + name;

              //make new dataset from wordData
              var newDataset = {
                  label: fullName,
                  borderColor: randomColor(0.4),
                  pointBorderColor: randomColor(0.7),
                  pointBorderWidth: 1,
                  data: wordData,
              };

              datasets.push(newDataset);
              console.log(datasets);

                document.getElementById('numWords').innerText += "In " + name + " " + element + "had " + wordTotal + " appearances\n";
                
                

            })


    
  
  //})
        var graphObj = {xLabels: xLabels, datasets: datasets};
        return graphObj;

  }

console.log(retObj);
return retObj;

}        
        


