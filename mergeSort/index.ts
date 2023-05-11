/**
 * ## Merge Sort
 * features:
 * - recursive
 * - $\Theta(n \cdot log_{2}(n))$
 * 
 * ---
 * 
 * ### How it works:
 * 
 * 1. Sorts the left half of the array using Merge Sort
 * 2. Sorts the right half of the array using Merge Sort
 * 3. Merges the two halves together
 *    - Goes through both sorted halves, and puts them into a new array in ascending order
 * 
 * (edge cases)
 * 
 * - if `inputArray.length` <= 1, immediately `return inputArray`
 *   - (i.e. can't split array further; therefore it's already sorted);
 * 
 * ---
 * 
 * @param inputArray unsorted array to be sorted
 * @returns a sorted array
 */
function mergeSort(inputArray: number[]): number[] {
	if (inputArray.length <= 1) return inputArray;
	
	let leftHalf: number[] = inputArray.filter((_e, i) => i < inputArray.length / 2);
	let rightHalf: number[] = inputArray.filter((_e, i) => i >= inputArray.length / 2);
	let sortedLeftHalf: number[] = mergeSort(leftHalf);
	let sortedRightHalf: number[] = mergeSort(rightHalf);
	
	let sortedArray: number[] = [];
	let leftIndex: number = 0;
	let rightIndex: number = 0;

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
