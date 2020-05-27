/* returns 0-6 where 0=sunday, 1=monday, etc....*/
function siku(month, day, year) {
   if (month < 3) {
      month += 12; year -= 1;
   }
   var h = (day + parseInt(((month + 1) * 26) / 10) +
      year + parseInt(year / 4) + 6 * parseInt(year / 100) +
      parseInt(year / 400) - 1) % 7;
   return h;
}
function female(month, day, year) {
/*  var female_names = {0:"Akosua",1:"Adwoa",2:"Abenaa",3:"Akua",4:"Yaa",5:"Afua",6:"Ama"};*/
   var mons =
       ['January','February','March','April','May','June',
      'July','August','September','October','November','December'];
   var days =
      ['Akosua', 'Adwoa', 'Abeena', 'Akua',
      'Yaa', 'Afua', 'Ama'];
   return mons[month-1] + ' ' + day + ', ' + year +
      ' = ' + days[siku(month, day, year)];
}
function doFemale() {
   var m = parseInt(document.getElementById('month').value);
   var d = parseInt(document.getElementById('day').value);
   var y = parseInt(document.getElementById('year').value);
   document.getElementById('result').innerHTML = female(m,d,y);
}
//------------------------------------------------------------male---//
/* returns 0-6 where 0=sunday, 1=monday, etc....*/
function siku(month, day, year) {
   if (month < 3) {
      month += 12; year -= 1;
   }
   var h = (day + parseInt(((month + 1) * 26) / 10) +
      year + parseInt(year / 4) + 6 * parseInt(year / 100) +
      parseInt(year / 400) - 1) % 7;
   return h;
}

function male(month, day, year) {
 /*  var male_names = {0:"Kwasi",1:"Kwadwo",2:"Kwabena",3:"Kwaku",4:"Yaw",5:"Kofi",6:"Kwame"};*/
   var mons =
       ['January','February','March','April','May','June',
      'July','August','September','October','November','December'];
   var days =
      ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku','Yaw', 'Kofi', 'Kwame'];
   return mons[month-1] + ' ' + day + ', ' + year +
      ' = ' + days[siku(month, day, year)];
}

function doMale() {
   var m = parseInt(document.getElementById('month').value);
   var d = parseInt(document.getElementById('day').value);
   var y = parseInt(document.getElementById('year').value);
   document.getElementById('result').innerHTML = male(m,d,y);
}
