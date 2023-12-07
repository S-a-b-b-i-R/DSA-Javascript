# In this challange, the task is to debug the existing code to successfully execute all provided test files.

# Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first k elements in the sequence are in increasing order and the last k elements are in decreasing order, where k=(n+1)/2. You need to find the lexicographically smallest zig zag sequence of the given array.

# For example let's say arr=[2,3,5,1,4]. The transformed array should be [1,4,5,3,2]. Here first 2 elements are in increasing order and last 2 elements are in decreasing order, so it's a zig zag sequence.

def findZigZagSequence(a, n):
    a.sort()
    mid = int((n + 1)/2)
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 1
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed + 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return

findZigZagSequence([2,3,5,1,4], 5)