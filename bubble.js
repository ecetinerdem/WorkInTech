function sortArr(arr, asc) {
    // Create a copy of the array to avoid modifying the original array
    let sortedArr = [...arr];
    
    // Get the length of the array
    let n = sortedArr.length;
    
    // Bubble Sort implementation
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            // Compare elements based on the asc flag
            if ((asc && sortedArr[j] > sortedArr[j + 1]) || (!asc && sortedArr[j] < sortedArr[j + 1])) {
                // Swap elements if they are in the wrong order
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    
    return sortedArr;
}





function siralama(arr,asc) {
  let kutu;
  for (let i = 0; i<arr.length-1; i++) {
      for (let j = i+1; j<arr.length; j++) {
          if (asc===true) {
              if (arr[j]<arr[i]) {
                  kutu = arr[i];
                  arr[i] = arr[j];
                  arr[j]=kutu;
              }
          } else if (asc===false) {
              if (arr[j]>arr[i]) {
                  kutu = arr[i];
                  arr[i] = arr[j];
                  arr[j]=kutu;
              }
          }
      }
  }
  return arr;
}
console.log(siralama(rakamlar,true));
console.log(siralama(kelimeler,false));
function sirala(arr,asc) {
  let kutu;
  if (asc===true) {
      for (let i = 0; i<arr.length-1; i++) {
          for (let j = i+1; j<arr.length; j++) {
              if (arr[j]<arr[i]) {
                  kutu = arr[i];
                  arr[i] = arr[j];
                  arr[j]=kutu;
              }
          }
      }
  } else if (asc===false) {
      for (let i = 0; i<arr.length-1; i++) {
          for (let j = i+1; j<arr.length; j++) {
              if (arr[j]>arr[i]) {
                  kutu = arr[i];
                  arr[i] = arr[j];
                  arr[j]=kutu;
              }
          }
      }
  }
  return arr;
}
console.log(sirala(rakamlar,false));
console.log(sirala(kelimeler,true));