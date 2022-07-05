const bubbleSort = (originalArray) => {
    let swapped = false
  
    const a = [...originalArray]
  
    for (let i = 1; i < a.length - 1; i++) {
      swapped = false
  
      for (let j = 0; j < a.length - i; j++) {
        if (a[j + 1] < a[j]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]]
          swapped = true
        }
      }
  
      if (!swapped) {
        return a
      }
    }
  
    return a
  }

let result=bubbleSort([23,12,22,10,8,1])
console.log(result)