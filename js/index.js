var paramA = Number(prompt('Enter parameter A'));
var paramB = Number(prompt('Enter parameter B'));
var paramC = Number(prompt('Enter parameter C'));
if(isNaN(paramA) || isNaN(paramB) || isNaN(paramC)){
     document.write('<br>Please enter all parameters')
}
else {
var resultX1 = qe(paramA,paramB,paramC);
document.write('<br>The result X1: ' + resultX1);
}
function qe (resultQe){
    var descr=Math.pow(paramB,2)-4*paramA*paramC;
    var res= (-paramB+Math.sqrt(descr))/(2*paramA) + '<br> and X2:' + (-paramB-Math.sqrt(descr))/(2*paramA);
     
    return res;
}

