/*** Functions ***/

function formatHour(hour) {
    return (hour <= 9 ? '0' + hour : hour);
}

function formatMinute(min) {
    return (min <= 9 ? '0' + min : min);
}

function formatDate(date) {
    let dateparts = date.toDateString().split(' ');
    let res = dateparts[0] + ' ' + dateparts[1] + ", " +
              dateparts[2] + ", " + dateparts[3];
    return res;
}

function getDate() {
    
    let today = new Date();
    let date = formatDate(today);
    // let date = today.getFullYear() + '/' + 
    //            (today.getMonth() + 1) + '/' + 
    //            today.getDate();
    timelabel.innerHTML = "« Today: " + date + " »";
}



/*** Current time button ***/
ctime.addEventListener("click", (e) => {
    e.preventDefault();

    // Set Ttime
    let today = new Date();
    let time = formatHour(today.getHours()) + ':' + 
               formatMinute(today.getMinutes());
    let ap = today.getHours() > 12 ? " PM" : " AM";

    // Fill label with calculated time
    timelabel.innerHTML = "« Time: " + time + ap + " »";
});



/*** Current date button ***/
cdate.addEventListener("click", getDate);



/*** City button ***/
city.addEventListener("click", function() {
    this.innerHTML = "Tehran";
});



/*** Onload page ***/
window.addEventListener("onload", getDate());
