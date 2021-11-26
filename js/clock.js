// Clock js
$(function () {
    setTime();
    setInterval(function () {
        setTime();
    }, 1000)


    // Set Time
    function setTime() {
        // get the current time
        var myDate = new Date();
        var hours = myDate.getHours();//Hours(0-23)
        var min = myDate.getMinutes();//Minutes(0-59)
        var sec = myDate.getSeconds();//Seconds (0-59)

        // split 360 degress to 60 parts 
        var degrees = 360 / 60;

        // Second style
        $(".pointer_second").css("transform", "rotate(" + degrees * sec + "deg)")
        // Minute hand style
        $(".pointer_minute").css("transform", "rotate(" + degrees * min + "deg)")

        // Hour hand style
        let hoursDeg = 0;
        // Convert to 12-hour clock
        if (hours > 12) {
            hours = hours - 12
        }
        // Notes: Hour is 12 servings, not 60 servings ~
        hoursDeg = 360 / 12 * hours;
        $(".pointer_hour").css("transform", "rotate(" + hoursDeg + "deg)")
    }
})