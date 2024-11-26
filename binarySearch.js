// recursive binary search
const binarySearch = (arr, x, left = 0, right = arr.length) => {
    if (left > right) {
        return "Not found";
    }
    let mid = (left + right) / 2;

    if (arr[mid] == x) {
        return mid;
    }

    if (x < arr[mid]) {
        return binarySearch(arr, x, left, mid - 1);
    } else {
        return binarySearch(arr, x, mid + 1, right);
    }
};

//iterative binary search
const binarySearchIterative = (arr, x) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == x) {
            return mid;
        }
        if (arr[mid] > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return "Not found";
};

console.log(binarySearchIterative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
