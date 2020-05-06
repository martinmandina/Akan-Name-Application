const queryString = window.location.search;
console.log(queryString);
function getbirthday(){

}
function getdayoftheweek (){
var dd = document.getElementById("DD").value;
if(dd<=0 || dd>31){window.alert("Day Invalid Error")}
else{
var theday= var dd;
}

var mm = document.getElementById("MM").value;

if(mm<=0 || mm>12){window.alert("Month Invalid Error")}
else{
var theday= var dd;
}
var yy = document.getElementById("YY").value;
var dayofweek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
}



var female_names = {0:"Akosua",1:"Adwoa",2:"Abenaa",3:"Akua",4:"Yaa",5:"Afua",6:"Ama"};
var male_names = {0:"Kwasi",1:"Kwadwo",2:"Kwabena",3:"Kwaku",4:"Yaw",5:"Kofi",6:"Kwame"};


var dob=new Date("May,5, 2020");
var normal_day = dob.getDay();
var theday=normal_day;
document.write("today is : "+theday);


var akan_name=female_names[normal_day];
