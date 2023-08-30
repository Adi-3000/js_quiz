/* for taking input
let question = [];

const create2Darr = (arr,rows, columns) => {
    value=0;
    // creating two-dimensional array
    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < columns; j++) {
        arr[i][j] = value;
      }
    }
  };
create2Darr(question,3,4);
*/

var question=[
    ["what is 2+2","1","2","3","4","4"],
    ["4+4=??","2","5","8","6",3],
    ["13-3=??","4","10","14","5","2"]
];
//retriving data
addEventListener("message", e => {
    const qno = e.data[1];
    const pages=e.data[0];
    loadq(qno);
  })
  
  function loadq(qno){
    var q=question[qno];
    postMessage(q);
    close();
  }