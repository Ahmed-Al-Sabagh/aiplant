// Start Jquery .... 
// --------------------------------------------------------------
// --------------------------------------------------------------

// Start Chatbot
questionFirst = $('[data-question]:first').attr('data-question');
$('#chat-botList ul').append('<li class="admin-mess">' + questionFirst + '</li>');
$('[data-question]:first').appendTo('.mess-box');

$('#send-chat').click(function(event) { 
    
    // Act on The Event ... 
    questionValue = $('.mess-box [data-question]').val();
    $("#chat-botList ul").append('<li class="client-mess">' + questionValue + '</li>')

    dataName = $('.admin-client-mess-wrap [data-name]').attr('data-question');
    // Start IF statement ... 
    if($('.mess-box [name]').attr('name') == "name")
    {
        nameValue = $('.mess-box [name]').val();
        $('.admin-client-mess-wrap [data-name]').attr('data-question',"Hi " + nameValue + " , </br> " + dataName );
    }
    // End   IF statement ... 
    $('.mess-box [data-question]').appendTo('.submit_info');
    
    
    // Start IF statement ... 
    if($('.admin-client-mess-wrap').children().length != 0)
    {
        questionFirst = $('[data-question]:first').attr('data-question');
        $('#chat-botList ul').append('<li class="admin-mess">' + questionFirst + '</li>');
        $('[data-question]:first').appendTo('.mess-box');

        $('#send-chat').css({"pointer-events":"none"});
        $('.mess-box [data-question]').bind('click change keyup', function(event)

        {
        // Start IF Statement ...
        if($(this).val() == "" ) 
        {
            $('#send-chat').css({"pointer-events":"none"});
            
        }else
        {
            $('#send-chat').css({"pointer-events":"auto"});
        }
        // End   IF Statement ...
    
    });


    }
    // End  IF statement ... 


    $('#chat-botList').animate({scrollTop: 5000});

});

    $('.mess-box [data-question]').bind('click change keyup', function(event)

    {

    // Start IF Statement ...
    if($(this).val() == "" ) 
    {
        $('#send-chat').css({"pointer-events":"none"});
        
    }else
    {
        $('#send-chat').css({"pointer-events":"auto"});
    }
    // End   IF Statement ...

});


// for buttons yes or no ... 
$('#con-phone').click(function(event) 
    {
        $('#submit-info').trigger('click');

         
    });

$('#con-no').click(function(event) 
{
    location.reload();

});


$('.chatbot').click(function(event){
    $('.chatbot-box').toggleClass('active');
    
})


// --------------------------------
// --------------------------------

// js for get the time and date ..... 

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// For Time and Date  ...  For Chatbot ...
// get the element by id 
// time ... 
let dateChatbot = document.getElementById("date-chatbot");
// date ... 
let timeChatbot = document.getElementById("time-chatbot");

// create new obj ... for get the current date and time  
let dt = new Date();

// get date ...
dateChatbot.innerText = dt.getDate() + "/" + parseInt(dt.getMonth()+1) + "/" + dt.getFullYear();
let hours = dt.getHours() ; // gives the value in 24 hours format
// convert to from 24  to 12 ... 
let AmOrPm = hours >= 12 ? 'pm' : 'am';
hours = (hours % 12) || 12;
let minutes = dt.getMinutes();
timeChatbot.innerText = hours + ":" + minutes + " " + AmOrPm; 

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------



// End   Chatbot
// ---------------------------------------------------------------
// ---------------------------------------------------------------

















// --------------------------------------------------------------
// --------------------------------------------------------------
// End  Jquery .... 
