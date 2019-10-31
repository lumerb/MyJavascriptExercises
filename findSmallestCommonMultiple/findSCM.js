const findSCM = (arr) => {
  let num = null;
  let newArr = [];
  let counter = 1;
  let notFound = true

  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      newArr = [...newArr, i]
    }
  } else if (arr[0] > arr[1]) {
    for (let i = arr[1]; i <= arr[0]; i++) {
      newArr = [...newArr, i]
    }
  }

  while (notFound) {
    let commonArr = newArr.filter((n) => {
      return counter % n == 0
    })

    if (commonArr.length == newArr.length) {
      notFound = false;
      num = counter;
      break;
    }

    counter += 1
  }

  return num;
}

console.log(findSCM([5, 1]));

module.exports = findSCM