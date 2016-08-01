function getCorrel(datasets) {
	document.getElementById('correlation').innerText = "Correlation coefficients: \n"; 
	for (var i = 0; i<datasets.length; i++) {
		for(var j = i+1; j<datasets.length; j++) {
			var xArray = datasets[i].data;
			var yArray = datasets[j].data;
			var coeff = getCoeff(xArray, yArray).toFixed(4);
			var xName = datasets[i].label;
			var yName = datasets[j].label;

			document.getElementById('correlation').innerText += xName + " and " + yName + ": " + coeff + "\n";
		}
	}

	function getCoeff(xArray, yArray){
		var dataArray = [xArray, yArray];
		var coeff = pearsonCorrelation(dataArray,0,1);
		return coeff;
	}


		/**
	 *  Calculate the pearson correlation coefficient between two datasets.
	 *
	 *  @param  {ArrayObject}  dataArray The dataset containing data about both items that
	 *                    	are being compared.
	 *  @param  {string}  xIndex Array index of x data
	 *  @param  {string}  yIndex Array index of y data
	 *  @return {number}  The pearson correlation coefficient (R).
	 */
	function pearsonCorrelation(dataArray, xIndex, yIndex) {
		var xSum=0;
		var ySum=0;
		var xMean=0;
		var yMean=0;
		var xMinusMeanArray=[];
		var yMinusMeanArray=[];
		var xArray = dataArray[xIndex];
		var yArray = dataArray[yIndex];
		var xySum=0;
		var xSquaresSum=0;
		var ySquaresSum=0;

		for (var i = 0; i<xArray.length; i++) {
			xSum += xArray[i];
		}

		for (var i = 0; i<yArray.length; i++) {
			ySum += yArray[i];
		}

		xMean = xSum / xArray.length;
		yMean = xSum / yArray.length;

		for (var i = 0; i<xArray.length; i++) {
			var currVal = xArray[i];
			var currMinus = currVal - xMean;
			xMinusMeanArray.push(currMinus);
		}

		for (var i = 0; i<yArray.length; i++) {
			var currVal = yArray[i];
			var currMinus = currVal - yMean;
			yMinusMeanArray.push(currMinus);
		}

		for (var i = 0; i<xMinusMeanArray.length; i++) {
			var currVal = xMinusMeanArray[i] * yMinusMeanArray[i];
			xySum += currVal;
		}

		for (var i = 0; i<xMinusMeanArray.length; i++) {
			var currVal = xMinusMeanArray[i] * xMinusMeanArray[i];
			xSquaresSum += currVal;
		}

		for (var i = 0; i<yMinusMeanArray.length; i++) {
			var currVal = yMinusMeanArray[i] * yMinusMeanArray[i];
			ySquaresSum += currVal;
		}

		var bottom = xSquaresSum * ySquaresSum;
		var coeff = xySum / Math.sqrt(bottom);

		return coeff;


	}
}