const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {
  // Your code in here ...
  let paradeRoute = [0, 0]

  for (move of moves) {
    if (move === 'north') {
      // console.log('north')
      paradeRoute[1] = paradeRoute[1] += 1

    } else if (move === 'south') {
      // console.log('south')
      paradeRoute[1] = paradeRoute[1] -= 1

    } else if (move === 'east') {
      // console.log('east')
      paradeRoute[0] = paradeRoute[0] += 1

    } else if (move === 'west') {
      // console.log('west')
      paradeRoute[0] = paradeRoute[0] -= 1

    }
  }
  return paradeRoute
}

finalPosition(moves);
// conditionals structure - done

// code to be run if condition meet - underway
// for each item in array
// if north - paradeRoute[1] += 1
// if west - paradeRoute[0] -= 1
// if south - paradeRoute[1] -= 1
// if east - paradeRoute[0] += 1


// expected output [-1, 4]
