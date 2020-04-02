function findMinAndRemove(array){
    let minNumber = array[0]
    let minIndex = 0
    for(let i = 0; i < array.length; i++){
    if(array[i] < minNumber){
        minNumber = array[i]
        minIndex = i
    }
}
array.splice(minIndex, 1)
return minNumber


}

function insertionSort(array){
    let newMin
    let sorted = []
    while(array.length != 0 ){
     newMin = findMinAndRemove(array)
    sorted.push(newMin)
    }
    return sorted
}
