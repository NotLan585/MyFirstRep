const lunchWaves = {
  lunchWave1:{
    name:'Lunch Wave 1',
    email:'lunch.norwalk.supportgroup1@datto.com',
    order:2,
    status: 'Not Ready'
  },
  lunchWave2:{
    name:'Lunch Wave 2',
    email:'lunch.norwalk.supportgroup2@datto.com',
    order:1,
    status: 'Not Ready'
  },
  lunchWave3:{
    name:'Lunch Wave 3',
    email:'lunch.norwalk.supportgroup3@datto.com',
    order:3,
    status: 'Not Ready'
  },
  lunchWave4:{
    name:'Lunch Wave 4',
    email:'lunch.norwalk.group1@datto.com',
    order:4,
    status: 'Not Ready'
  },
  lunchWave5:{
    name:'Lunch Wave 5',
    email:'lunch.norwalk.group2@datto.com',
    order:5,
    status: 'Not Ready'
  },
  lunchWave6:{
    name:'Lunch Wave 6',
    email:'lunch.norwalk.group3@datto.com',
    order:6,
    status: 'Not Ready'
  },
    secondsWave:{
    name:'Seconds',
    email:'',
    order:7,
    status: 'Not Ready'
  },
    leftoversWave:{
    name:'Leftovers!',
    email:'',
    order:8,
    status: 'Not Ready'
  },
}

var lunchArray = Object.keys(lunchWaves).map(i => lunchWaves[i]);


function list() {
    // var lunchArray = Object.keys(lunchWaves).map(i => lunchWaves[i]);
    console.log(lunchArray);
    // shuffle()
    var waveTarget = $('#waves');
    var statusTarget = $('#status')
    waveTarget.html('');
    statusTarget.html('');
    for (var lunchWave in lunchWaves) {
      let obj = lunchWaves[lunchWave]
      console.log(obj);
    // lunchArray.foreach(function(obj) {
    for (var key in obj) {
      if (key == `name`) {
        //console.log(obj[key]);
        var waveItem = $('<li>', {
          class:  'box',
        });
        var waveText = $('<span>', {
            html:   obj[key]
          })
        }
      if (key == `status`) {
        var statusItem = $('<li>', {
          class:  'readyButton',
        }).click(function(obj) {
          test()
          if (this.textContent == 'Not Ready') {
            this.innerText = 'GO GO GO!'
            this.className = 'goButton'
          } else if (this.textContent == 'GO GO GO!') {
            this.innerText = 'Not Ready'
            this.className = 'readyButton'
          }
        })
        var statusText = $('<span>', {
            html:   obj[key]
          })
          statusItem.append(statusText)
          statusTarget.append(statusItem)
        }
        if (key == 'order') {
            var pos = obj[key]
        }
      waveItem.append(waveText)
      waveTarget.append(waveItem)
      // $('#waves:eq(pos)').after(waveItem)
    }
}//)
  console.log(lunchWaves);
}

list()
