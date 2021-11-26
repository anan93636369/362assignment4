// Time_Recorder js
$(function () {
    var t_hour = 0; //Hour
    var t_min = 0; //Minute
    var t_sec = 0; //Second
    var t_mil = 0; //MilliSecond

    var isStop = false;

    var timerSetInter = null;

    // Click start
    $(".btn_start").click(function () {
        
        $(this).hide();
        $(".btn_suspend").show();

        if (isStop) {
            isStop = false;
            // Reset timer
            clearTimer();
        }
        // Start Timer 1000 MilliSecond = 1 Second
        clearInterval(timerSetInter);
        timerSetInter = setInterval(function () {
            startTimer();
        }, 10)
    })
    // Pause
    $(".btn_suspend").click(function () { 
        $(this).hide();
        $(".btn_start").show();
        // puase
        clearInterval(timerSetInter);
    })
    // End
    $(".btn_stop").click(function () {
        isStop = true;  
        $(".btn_suspend").hide();
        $(".btn_start").show();
        clearInterval(timerSetInter);
    })
    // Clear
    $(".btn_clear").click(function () {
        clearTimer();
    })


    // Start TimeRecord
    function startTimer() {
        // Transfer to Numbers
        t_mil = Number(t_mil);
        t_sec = Number(t_sec);
        t_min = Number(t_min);
        t_hour = Number(t_hour);

        // Milliseconds -> Second
        ++t_mil;
        // Conditions whehter milliseconds > 99
        if (t_mil >= 100) {
            t_mil = 0;
            // Second + 1
            ++t_sec;
        }

        // Conditions whether seconds > 59
        if (t_sec >= 60) {
            t_sec = 0;
            // minutes + 1
            ++t_min
        }

        // Conditions whether minutes > 59
        if (t_min >= 60) {
            t_min = 0;
            // Hour plus 1
            ++t_hour
        }


        // Ad 0 infront if < 10 
        // Conditions whether milliseconds > 10
        if (t_mil <= 9) {
            t_mil = "0" + t_mil;
        }
        // Conditions whether seconds > 10
        if (t_sec <= 9) {
            t_sec = "0" + t_sec;
        }
        // Conditions whether minutes > 10
        if (t_min <= 9) {
            t_min = "0" + t_min;
        }
        // Conditions whether hours > 10
        if (t_hour <= 9) {
            t_hour = "0" + t_hour;
        }

        //  00:00:00.00
        $(".time_box").text(t_hour + ":" + t_min + ":" + t_sec + "." + t_mil)
    }

    // Reset Timer 
    function clearTimer() {
        t_hour = 0;
        t_min = 0;
        t_sec = 0;
        t_mil = 0;
        $(".time_box").text("00:00:00.00")
    }
})




