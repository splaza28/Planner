//moment format from moment website for current time &date
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(today);


//updating current time for conditional statements for hourly color code
let currentHour = parseInt(moment().format('H'));

     //9am color change 
    if (currentHour > 9){
        $("#timeOfDay-9").addClass("past");
     }
     else if (currentHour == 9){
        $("#timeOfDay-9").addClass("present");
         }
         else if (currentHour < 9){
           $("#timeOfDay-9").addClass("future"); 
         }
     //10am color change
     if (currentHour > 10){
        $("#timeOfDay-10").addClass("past");
     }
     else if (currentHour == 10){
        $("#timeOfDay-10").addClass("present");
         }
         else if (currentHour < 10){
           $("#timeOfDay-10").addClass("future"); 
         }
     //11am color change
     if (currentHour > 11){
        $("#timeOfDay-11").addClass("past");
     }
     else if (currentHour == 11){
        $("#timeOfDay-11").addClass("present");
         }
         else if (currentHour < 11){
           $("#timeOfDay-11").addClass("future"); 
         }
     //12pm color change
     if (currentHour > 12){
        $("#timeOfDay-12").addClass("past");
     }
     else if (currentHour == 12){
        $("#timeOfDay-12").addClass("present");
         }
         else if (currentHour < 12){
           $("#timeOfDay-12").addClass("future"); 
         }
     //1pm color change
     if (currentHour > 13){
        $("#timeOfDay-1").addClass("past");
     }
     else if (currentHour == 13){
        $("#timeOfDay-1").addClass("present");
         }
         else if (currentHour < 13){
           $("#timeOfDay-1").addClass("future"); 
         }
     //2pm color change
     if (currentHour > 14){
        $("#timeOfDay-2").addClass("past");
     } else if (currentHour == 14){
        $("#timeOfDay-2").addClass("present");
         } 
         else if (currentHour < 14){
           $("#timeOfDay-2").addClass("future"); 
         }
     //3pm color change
         if (currentHour > 15){
            $("#timeOfDay-3").addClass("past");
         } else if (currentHour == 15){
            $("#timeOfDay-3").addClass("present");
             } 
             else if (currentHour < 15){
               $("#timeOfDay-3").addClass("future"); 
             }

    //4pm color change
    if (currentHour > 16){
        $("#timeOfDay-4").addClass("past");
     } else if (currentHour == 16){
        $("#timeOfDay-4").addClass("present");
         } 
         else if (currentHour < 16){
           $("#timeOfDay-4").addClass("future"); 
         }

    //5pm color change
         if (currentHour > 17){
            $("#timeOfDay-5").addClass("past");
         }
           else if (currentHour == 17){
            $("#timeOfDay-5").addClass("present");
             }
             else if (currentHour < 17){
               $("#timeOfDay-5").addClass("future"); 
             }

     //add event listener to save button and funtion to save data
  $(".saveBtn").on("click", function() {

   
   var data = $(this).siblings(".description").val();
   var hour = $(this).parent().attr("id");
  
      // save in localStorage
      localStorage.setItem(hour, data);
    });



//Retrieve from local storage/Once the page is refreshed the saved data will persist 
$("#timeOfDay-9 .description").val(localStorage.getItem("timeOfDay-9"));
$("#timeOfDay-10 .description").val(localStorage.getItem("timeOfDay-10"));
$("#timeOfDay-11 .description").val(localStorage.getItem("timeOfDay-11"));
$("#timeOfDay-12 .description").val(localStorage.getItem("timeOfDay-12"));
$("#timeOfDay-1 .description").val(localStorage.getItem("timeOfDay-1"));
$("#timeOfDay-2 .description").val(localStorage.getItem("timeOfDay-2"));
$("#timeOfDay-3 .description").val(localStorage.getItem("timeOfDay-3"));
$("#timeOfDay-4 .description").val(localStorage.getItem("timeOfDay-4"));
$("#timeOfDay-5 .description").val(localStorage.getItem("timeOfDay-5"));


 
 
 

      
     
         
      
       
            
     
    
    // $("#timeOfDay-9.data").val(localStorage.getItem("timeOfDay-9"));
   