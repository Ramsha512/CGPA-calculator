function calcu(){
var  a = document.getElementById("subMarks1").value;
var b = document.getElementById("subMarks2").value;
var  c = document.getElementById("subMarks3").value;
var d = document.getElementById("subMarks4").value;
var  e = document.getElementById("subMarks5").value;
var f = document.getElementById("subMarks6").value;
var grade ="";


var total = parseFloat(a)+ parseFloat(b)+ parseFloat(c)+parseFloat(d)+parseFloat(e)+parseFloat(f);
alert(total);

var per= (total/600) * 100;
alert(Math.floor(per) );

if(per <= 100 && per >=80){
    grade='A';

}else if(per <= 79 && per >=60){
    grade ='B';

}else if(per <=59 && per >=40){
    grade = 'C';

}else{
    grade = 'F'
}
var gp =  per / 20 -1;
if(per >=50){
  document.getElementById('showdata').innerHTML = `your total is ${total} and percentage is ${per}%.<br> your grade is ${grade} <br><br>your CGPA is ${gp} passed <br> CONGRATULATIONS`
}
else{
    document.getElementById('showdata').innerHTML = `your total is ${total} and percentage is ${per}%.<br> your grade is ${grade}<br><br> and your CGPA is ${gp} failed`


}
}












