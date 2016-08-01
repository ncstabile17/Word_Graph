function getSamePara(wordInput, paraArray) {
	var newParaArray = [];
	paraArray.forEach(function (element, index, array) {
		newParaArray[index] = element.split(/\s+/);
	})

	wordInput.forEach(function (element, index, array) {
		//document.getElementById('maxWords').innerText += "The words that occur most often in the same paragraph as " + element + " are: \n";
		var allPara = [];
		var currWord = element;

		newParaArray.forEach(function(element2, index2, array2) {
			var currVal = newParaArray[index2];
			if(currVal.includes(currWord)) {
				allPara = allPara.concat(currVal);
				//console.log(allPara);
			}
		})

		console.log(allPara);
		var wordCount = countWords(allPara);
		console.log(wordCount);
		printMaxNoCommon(wordCount.count,wordCount.words,10);

	})
	
}