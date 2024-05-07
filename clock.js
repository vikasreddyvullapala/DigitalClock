function clock(){
    const currentdate=new Date();
    let sys_hrs=currentdate.getHours();
    let sys_min=currentdate.getMinutes();
     document.querySelector('#hrs').innerHTML=`${sys_hrs}`
     document.querySelector('#min').innerHTML=`${sys_min}`
     document.querySelector('#sec').innerHTML=`${currentdate.getSeconds()}`
     let wish;
     if(sys_hrs>=0 && sys_hrs<=12)
     wish=`goodmonin...........`;
    else if(sys_hrs>12 && sys_hrs <=16)
     wish=`good afternoonn...`;
    else if(sys_hrs>16 && sys_hrs<=19)
    wish=`good evening!!!!!!!!!`;
    else
    wish=`good nyttttt.......`;
document.querySelector('.wish').innerHTML=`Hello, ${wish}`;
   document.querySelector('#year').innerHTML=`${currentdate.getFullYear()}`;
   document.querySelector('#day').innerHTML=`${currentdate.getDate()},`
   let sys_month=currentdate.getMonth();
   let sys_weekday=currentdate.getDay();
   
   switch(sys_weekday)
   {
    case 0:week=`Monday`;
    case 1:week=`Tuesday`;
    case 2:week=`Wednesday`;
    case 3:week=`Thursday`;
    case 4:week=`Friday`;
    case 5:week=`Saturday`;
    case 6:week=`Sunday`;
    default :`invalid`;
   }
   document.querySelector('#weekday').innerHTML=` ${week}`;
   switch(sys_month)
   {
    case 0: month=`Jan`;
    case 1: month=`Feb`;
    case 2: month=`Mar`;
    case 3: month=`Apr`;
    case 4: month=`May`;
    case 5: month=`June`;
    case 6: month=`July`;
    case 7: month=`Aug`;
    case 8: month=`Sep`;
    case 9: month=`Oct`;
    case 10: month=`Nov`;
    case 11: month=`Dec`;
   }
  document.querySelector('#month').innerHTML=`${month}`;

}
setInterval(clock,1000)