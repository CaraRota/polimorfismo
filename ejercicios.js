// Metodo reverse() como fn

array = [1, 2, 3, 4, 5, 6, 7, 8]
newArray = []

const reverse = (array) => {
    for (let i = array.length; i > 0; i--) {
        result = newArray.push(i)
    }
    return result
}

reverse(array)
console.log(newArray)

// Metodo filter() como fn
// Queremos filtrar solo la posicion 4 y 6 del array

filterArray = []

const filter = (array) => {
    result = filterArray.push(array[4], array[6])
}

filter(array)
console.log(filterArray)