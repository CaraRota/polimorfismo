// Metodo reverse() como fn

array = [3, 1, 2, 3, 5, 510, 6, 7, 8, 9]

const reverse = () => {
    newArray = []
    for (let i = (array.length - 1); i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray
}

console.log(reverse(array))

// Metodo filter() como fn
// Queremos filtrar solo la posicion 4 y 6 del array

filterArray = []

const filter = (array) => {
    result = filterArray.push(array[4], array[6])
}

filter(array)
console.log(filterArray)





























