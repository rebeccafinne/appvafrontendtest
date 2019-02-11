// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var input = document.getElementsByTagName('input')[0];

//If type="date" for input field does not exist in web browser
$(document).ready(function() {
    if ( $('[type="date"]').prop('type') != 'date' ) {
        $('[type="date"]').datepicker();
    }
});

//Events appear not to be working in Safari, but works in Chrome
input.addEventListener('input', function (evt) {
    displayDaysLeft();
});


input.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
        displayDaysLeft();
  }
});

//Make the input as a array with year, month and day
function displayDaysLeft() {
    var date = document.getElementById("id5c604ae70d0f1").value;
    var splitDate = date.split("-");

    //Make split date to the JS type Date
    var chosenDate = new Date(splitDate[0], splitDate[1]-1, splitDate[2])



   checkValidity(chosenDate);


     }

function checkValidity(chosenDate){
    //Make strings for output
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
             document.getElementById("daysContainer").style.display = "none";


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







