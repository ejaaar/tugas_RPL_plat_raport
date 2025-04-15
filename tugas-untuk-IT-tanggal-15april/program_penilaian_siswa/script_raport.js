/*
  NILAI 91-100 GRADE A
  NILAI 81-90 GRADE B 
  NILAI 71-80 GRADE B-
  NILAI 61-70 GRADE C
  NILAI 0-60 GRADE D
*/

alert('masukan nilai siswa')
let inputNilai = prompt("input nilai")

//dengan if else
// if(inputNilai >= 101){
//     alert('error')
// }else if(inputNilai >= 91){
//     alert('A')
// }else if(inputNilai >= 81){
//     alert('B')
// }else if(inputNilai >= 71){
//     alert('B-')
// }else if(inputNilai >=61){
//     alert('C')
// }else if(inputNilai >=0){
//     alert('D')
// }

// ---------------------------------------------------------

// dengan switch case
switch (true) {
  case (inputNilai > 100):
    alert("error");
    break;
  case (inputNilai >= 91):
    alert("A");
    break;
  case (inputNilai >= 81):
    alert("B");
    break;
  case (inputNilai >= 71):
    alert("B-");
    break;
  case (inputNilai >= 61):
    alert("C");
    break;
  case (inputNilai >= 0):
    alert("D");
    break;
  default:
    alert("nilai tidak valid");
}
