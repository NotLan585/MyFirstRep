function randomize(array) {
  var m = array.length, t, i
  //while there are still elements remaining
  while (m) {
    //randomly pick one...
    i = Math.floor(Math.random() * m--)

    //and swap it with the current
    if (array[m]["name"] == "Leftovers!" || array[m]["name"] == "Seconds") {
      console.log("Leftovers or Seconds");
    } else {
      console.log("random");
      t = array[m]
      array[m] = array[i]
      array[i] = t
    }
  }
}

function shuffle() {
    randomize(lunchArray)
    console.log(lunchArray);
    const randomWaves = Object.assign({}, ...lunchArray)
    // for (let i = 0; i < lunchArray.length; i++) {
    //   console.log(lunchArray[i]);
    //   console.log(lunchArray[i].value);
    //   randomWaves[lunchArray[i]['name']] = lunchArray[i].value
    // }
    console.log(randomWaves);
}
// Fisher-Yates shuffle
// function shuffle(array) {
//   var m = array.length, t, i;
//
//   // While there remain elements to shuffle…
//   while (m) {
//
//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);
//
//     // And swap it with the current element.
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
//
//   return array;
// }

function test () {
  // body...
  console.log("test");
}
