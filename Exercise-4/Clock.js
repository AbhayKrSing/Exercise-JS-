
setInterval(()=>{
    let clock=new Date()
  document.getElementsByTagName('p')[1].innerHTML= clock.getHours()
  document.getElementsByTagName('p')[3].innerHTML = clock.getMinutes()
  document.getElementsByTagName('p')[5].innerHTML = clock.getSeconds()
  document.getElementsByTagName('p')[7].innerHTML= clock.getMilliseconds()
},10)
