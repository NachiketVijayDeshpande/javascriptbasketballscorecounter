let count1=0
let count2=0
let homeCount= document.getElementById("home-count")
console.log(homeCount)
let guestCount= document.getElementById("guest-count")
console.log(guestCount)
let lead=document.getElementById("leader")
console.log(lead)

function addone(){
    count1 +=1
    homeCount.textContent = count1
    compare()
}
function addtwo(){
    count1 +=2
    homeCount.textContent = count1
    compare()
}
function addthree(){
    count1 +=3
    homeCount.textContent = count1
    compare()
}


function addone1(){
    count2 +=1
   guestCount.textContent = count2
   compare()
}
function addtwo2(){
    count2 +=2
    guestCount.textContent = count2
    compare()
}
function addthree3(){
    count2 +=3
    guestCount.textContent = count2
    compare()
}

function compare(){
    if (count1 > count2){
        lead.textContent = "Home team is leading"     
    }
    else if (count1 < count2){
        lead.textContent = "Guest team is leading" 
    }
}

