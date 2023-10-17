// алгоритм бинарного поиска. 
let mas = [1,2,3,4,5,14,7,8,9,10];
function BinarySearch(arr, value){
    //границы поиска
    let start = -1;
    let end = arr.length;
    //цикл
    while(end - start > 1){
        const mid = Math.floor((start+end)/2);
        if(value === arr[mid]){
            //возвращаем индекс нужного элемента.
            return mid; 
        }
        else if(value < arr[mid]){
            end = mid;
        }
        else{
            start = mid;
        }
        
    }
    return -1;
} 

function linearSearch(arr, value){
    while(i<arr.length){
        if(value === arr[i]){
            return i;
        }
        i++;
    }
}

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(linearSearch(mas, 2));
console.log(BinarySearch(mas, 2));
console.log(bubbleSort(mas));
//
//
//
//
//
//
//
//