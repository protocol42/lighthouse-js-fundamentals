const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  function redness(vegetables) {
    let highMetric = 0;
    let highSubmitter = '';
    for (let i in vegetables) {
      // console.log(i);
      for (let i1 of i) {
        if (vegetables[i1].redness > highMetric) {
          highMetric = vegetables[i1].redness;
          highSubmitter = vegetables[i1].submitter;
          // console.log(highSubmitter);
          // console.log(highMetric);
        }
      }
    }
    return highSubmitter;
  }





  function plumpness(vegetables) {
    let highMetric1 = 0;
    let highSubmitter1 = '';
    for (let i in vegetables) {
      console.log(i);
      for (let i1 of i) {
        if (vegetables[i1].plumpness > highMetric1) {
          highMetric1 = vegetables[i1].plumpness;
          highSubmitter1 = vegetables[i1].submitter;
        }
      }
    }
    // console.log(highMetric1);
    // console.log(highSubmitter1);
    return highSubmitter1;
  }

  if (metric === 'redness') {
    return redness(vegetables);
  } else if (metric === 'plumpness') {
    return plumpness(vegetables);
  } else {
    return 'C';
  }
};


// test array - testing judgeVegetable()
const vegetables = [
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  },
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
];


const metric = 'redness';
// const metric = 'plumpness';
console.log(judgeVegetable(vegetables, metric));



// console.log(metric);
// loop through obj properties // compare property that matches var metric
// if property value is higher then var highMetric

// console.log(metric);
// loop through obj properties // compare property that matches var metric
// if property value is higher then var highMetric

