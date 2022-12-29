let sound_failure=()=>{
   var snd = new Audio('./mixkit-wrong-electricity-buzz-955.wav');  
    snd.play(); 
}
let sound_success=()=>{
    var snd = new Audio('./success-1-6297.mp3');  
     snd.play(); 
 }
let number=Math.trunc(Math.random()*100+1) 
console.log(number)


let count=0
let callotherFn=()=>{
    if(number==document.getElementById("textarea").value){
        document.getElementById("success").setAttribute('class',"bg-white rounded-pill text-center container")
        document.getElementById("score").innerText=100-count
        document.getElementById('enter-button').setAttribute('class','d-none')
        document.getElementById("End_Notifiction").innerHTML="<h6>Reloading To Play again in 3 sec</h6>" 
        sound_success()
        setTimeout(()=>{
            window.location.reload();
        },3000)
    }
    else{
        document.getElementById("failure").setAttribute('class',"bg-white rounded-pill text-center  container")
        document.getElementById('enter-button').setAttribute('class','d-none')
        if(document.getElementById("textarea").value>number){
            document.getElementById('notification').innerHTML=`<h3 style="margin:4vw; text-align:center;"> Your number is greater than actual number</h3>`
            sound_failure()
        }
        if(document.getElementById("textarea").value<number){
            let a=document.getElementById('notification').innerHTML=`<h3 style="margin:4vw; text-align:center;"> Your number is lesser than actual number</h3>`
               sound_failure() 
        }
        count++
    }
}

let Terminate1=()=>{
    document.getElementById("success").setAttribute('class',"bg-white rounded-pill text-center container d-none")
    document.getElementById('enter-button').setAttribute('class','btn btn-primary fs-3')
    document.getElementById('notification').innerHTML=`<h3></h3>`

}
let Terminate2=()=>{
    document.getElementById("failure").setAttribute('class',"bg-white rounded-pill text-center  container d-none")
    document.getElementById('enter-button').setAttribute('class','btn btn-primary fs-3')
    document.getElementById('notification').innerHTML=`<h3></h3>`


}
