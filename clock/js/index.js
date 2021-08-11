setInterval(() => {
   d= new Date();
   tdate = d.getDate();
   tmonth = d.getMonth();
   tyear = d.getYear();
   console.log(tdate,tmonth+1,tyear+1900);
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   // console.log(htime,mtime,stime);
   hrotation=30*htime+ mtime/2;
   mrotation=6*mtime;
   srotation=6*stime;

   hour.style.transform= `rotate(${hrotation}deg)`; 
   minute.style.transform= `rotate(${mrotation}deg)`;
   second.style.transform= `rotate(${srotation}deg)`;
   document.getElementById('date1').innerHTML=tdate+"-"+(tmonth+1)+"-"+(tyear+1900);

}, 1000);