"use strict";
function mergeSort(inputArray) {
    if (inputArray.length === 1)
        return inputArray;
    let leftHalf = inputArray.filter((_e, i) => i < inputArray.length / 2);
    let rightHalf = inputArray.filter((_e, i) => i >= inputArray.length / 2);
    let sortedLeftHalf = mergeSort(leftHalf);
    let sortedRightHalf = mergeSort(rightHalf);
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < sortedLeftHalf.length && rightIndex < sortedRightHalf.length) {
        if (sortedLeftHalf[leftIndex] < sortedRightHalf[rightIndex]) {
            sortedArray.push(sortedLeftHalf[leftIndex]);
        }
        else {
            sortedArray.push(sortedRightHalf[rightIndex]);
        }
    }
    return sortedArray;
}
const arr0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr1 = [1, 5, 0, 7, 9, 8, 6, 2, 3, 4];
debugger;
mergeSort(arr0);
