const list = ['coconut oil', 'shea butter', 'flaxseed']

console.log(list)

const input = ['avocado oil', 'coconut oil', 'shea butter', 'flaxseed']

console.log(input)

function compare(arr1, arr2) {
  const finalArray = []
  arr1.forEach((e1) => arr2.forEach((e2) => {
    if(e1 === e2) {
      finalArray.push(e1)
    }
  }))
  console.log(finalArray)
}
compare(list, input)
