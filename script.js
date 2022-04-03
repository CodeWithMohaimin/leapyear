


function button(){
    let year = document.getElementById("input").Value;
    if ((year % 4 ==0) && (year % 400 !== 0)(year % 100 ==0)) {
        alert("This is a leap year")
    }else{
        alert("Not a Leap year")
    }
}