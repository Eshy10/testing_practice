const analyze = (arr) => {
    let min = arr[0]
    let max = arr[0]
    let total = 0;
    for (let i = 0; i < arr.length; i += 1){
        if (min > arr[i]){
            min = arr[i]
        }
        else if (max < arr[i]){
            min = arr[i]
        }
        total += arr[i]
    }
    let length = arr.length
    let average = total / length;
    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

export default analyze