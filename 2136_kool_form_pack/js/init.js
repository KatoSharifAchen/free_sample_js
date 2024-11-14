//Hook up the tweet display

$(document).ready(function() {
                           
    $(".countdown").countdown({
                date: "13 NOVEMBER 2024 20:30:00",
                format: "on"
            },
            
            function() {
                // callback function
            });

}); 