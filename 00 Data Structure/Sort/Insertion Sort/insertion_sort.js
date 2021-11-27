function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
        // arr[1] = arr[0] 으로 인덱스 1자리에 2가 들어간 후에 j는 j--로 인해 -1이 된다.
        // for문을 나온 후에 arr[-1+1] = 1 그래서 arr[0] = 1이 할당되는거다. 로직 헷갈리지 말도록.
    }
    return arr;
}

insertionSort([2,1,9,76,4])
           // [1,2,4,9,76]