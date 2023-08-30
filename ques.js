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
    ["what should replace apple which fell on newtons head!","watermelon","papaya","melody","tree","3"],
    ["how many months have 28 days??","1","2","all of them","depends on leap year","3"],
    ["who was the first to go to moon from india","krish's stepbro","navazudin siddiki","jaadooo","shaktiman","2"],
    ["was he blind in end of andhadhun?","yes","no","dont know bcz i was","havent seen","3"],
    ["rete of shoe in phir hera pheri??","200","150","350","250","2"]
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