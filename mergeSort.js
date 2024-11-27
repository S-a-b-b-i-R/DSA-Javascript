const mergeSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
    return arr;
};

const merge = (arr, left, mid, right) => {
    let newArr = [];
    let i = left;
    let j = mid + 1;
    let k = 0;
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            newArr[k++] = arr[i++];
        } else {
            newArr[k++] = arr[j++];
        }
    }
    while (i <= mid) {
        newArr[k++] = arr[i++];
    }
    while (j <= right) {
        newArr[k++] = arr[j++];
    }
    for (i = left; i <= right; i++) {
        arr[i] = newArr[i - left];
    }
};

console.log(mergeSort([1, 9, 3, 5, 0, 4, 8, -3]));
