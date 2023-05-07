function mergeSort(inputArray: number[]): number[] {
	if (inputArray.length === 1) return inputArray;
	
	let leftHalf: number[] = inputArray.filter((_e, i) => i < inputArray.length / 2);
	let rightHalf: number[] = inputArray.filter((_e, i) => i >= inputArray.length / 2);
	let sortedLeftHalf: number[] = mergeSort(leftHalf);
	let sortedRightHalf: number[] = mergeSort(rightHalf);
	
	let sortedArray: number[] = [];
	let leftIndex: number = 0;
	let rightIndex: number = 0;

	while (leftIndex < sortedLeftHalf.length && rightIndex < sortedRightHalf.length) {
		if (sortedLeftHalf[leftIndex] < sortedRightHalf[rightIndex]) {
			sortedArray.push(sortedLeftHalf[leftIndex]);
		} else {
			sortedArray.push(sortedRightHalf[rightIndex]);
		}
	}

	return sortedArray;
}

const arr0: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr1: number[] = [1,5,0,7,9,8,6,2,3,4];

debugger;

mergeSort(arr0);