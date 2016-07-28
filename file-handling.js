
function getFiles() {
      

        //get inputFile from user selection and read in as string

        var fileArray = [];
        var nameArray = [];
        var fileInput = document.getElementById('inputFile');
        var files = fileInput.files;
        var bookArray = [];

        for (var i = 0; i < files.length; i++) {
          var currFile = files.item(i);
          fileArray.push(currFile);
          var currName = currFile.name;
          nameArray.push(currName);
        }

        fileArray.forEach(function(element, index, array) {
              var reader = new FileReader();
              reader.onload = function(){
              
              var currentFile = reader.result;
              bookArray.push(currentFile);

          }

              
        

        if (element != null) {
                document.getElementById('frankenimage').style.height=0;
                reader.readAsText(element);
                reader.result;

                }
        else {
                document.getElementById('error').innerText = "Please select a text file";
              }

        })

        var fileArrayObject = {contents: fileArray,
                              bookName: nameArray};
        
        return fileArrayObject;
          
        };


        
        


