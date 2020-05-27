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
