
function button(){
    let year = document.getElementById("input").value;
    if  ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        alert("This is a leap year")
    }else{
        alert("Not a Leap year")
    }
}