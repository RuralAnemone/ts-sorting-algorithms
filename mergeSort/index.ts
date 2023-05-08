function mergeSort(inputArray: number[]): number[] {
	if (inputArray.length === 1) return inputArray;
	
	let leftHalf: number[] = inputArray.filter((_e, i) => i < inputArray.length / 2);
	let rightHalf: number[] = inputArray.filter((_e, i) => i >= inputArray.length / 2);
	let sortedLeftHalf: number[] = mergeSort(leftHalf);
	let sortedRightHalf: number[] = mergeSort(rightHalf);
	
	let sortedArray: number[] = [];
	let leftIndex: number = 0;
	let rightIndex: number = 0;

	debugger;

	while (leftIndex < sortedLeftHalf.length || rightIndex < sortedRightHalf.length) {
		if ((sortedLeftHalf[leftIndex] < sortedRightHalf[rightIndex]) || rightIndex >= sortedRightHalf.length) {
			sortedArray.push(sortedLeftHalf[leftIndex]);
			leftIndex++;
		} else {
			sortedArray.push(sortedRightHalf[rightIndex]);
			rightIndex++;
		}
	}

	return sortedArray;
}

export default mergeSort;