function isValidSubsequence(array, sequence) {
	let sequenceNum = 0;
	for(let i = 0; i < array.length; i++){
		if(sequence[sequenceNum] === array[i]){
			sequenceNum++;
			if(sequenceNum === sequence.length){
				return true;
			}
		}
	}
	return false;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
