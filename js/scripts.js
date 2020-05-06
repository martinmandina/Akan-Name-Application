const queryString = window.location.search;
console.log(queryString);
function getbirthday(){

}

function getakanname(){

var female_names = {0:"Akosua",1:"Adwoa",2:"Abenaa",3:"Akua",4:"Yaa",5:"Afua",6:"Ama"};
var male_names = {0:"Kwasi",1:"Kwadwo",2:"Kwabena",3:"Kwaku",4:"Yaw",5:"Kofi",6:"Kwame"};


var dob=new Date("May,5, 2020");
var normal_day = dob.getDay();
var theday=normal_day; 
document.write("today is : "+theday);

}
var akan_name=female_names[normal_day];
