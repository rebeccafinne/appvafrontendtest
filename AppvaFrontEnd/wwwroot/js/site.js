// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var input = document.getElementsByTagName('input')[0];


$(document).ready(function() {
    if ( $('[type="date"]').prop('type') != 'date' ) {
        $('[type="date"]').datepicker();
    }
});


input.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
        displayDaysLeft();
  }
});

function displayDaysLeft() {
    var date = document.getElementById("id5c604ae70d0f1").value;
    var splitDate = date.split("-");


   checkValidity(splitDate);


     }

function checkValidity(date){
    var chosenDate = new Date(date[0], date[1]-1, date[2])
    var day = chosenDate.getDay();
    var month = chosenDate.getMonth() + 1;
    var year = chosenDate.getFullYear();
    if(month < 10){
        month = '0' + month;
    }if(day < 10){
        day = '0' + day
    }

    if(chosenDate instanceof Date && !isNaN(chosenDate)){
         var daysLeft = howManyDaysLeft(chosenDate);
         //Has the date passed or not
         if(daysLeft <= 0){
             document.getElementById("form-controls__error-message-id5c604ae70d176").style.display = "block";
             document.getElementById("form-controls__error-message-id5c604ae70d176").innerHTML = "Date already passed"

         }else{
             document.getElementById("daysContainer").style.display = "block";

             document.getElementById("daysLeft").innerHTML = daysLeft
             document.getElementById("dateComing").innerHTML =  " days left to the " + year + 
                    "-" + month + "-" + day;
             document.getElementById("form-controls__error-message-id5c604ae70d176").style.display = "none";

         }

    }else{
        //Appears to not be doing anything, need style.display = "block" to work.
        document.getElementById("id5c604ae70d0f1").setAttribute("aria-invalid", "true");
        document.getElementById("form-controls__error-message-id5c604ae70d176").style.display = "block";
        document.getElementById("form-controls__error-message-id5c604ae70d176").innerHTML = "This is not a valid date, please pick another date";

        
    } 
  }

function howManyDaysLeft(chosenDate){
    var today = new Date();

    return datediff(today, chosenDate);
}


function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}







