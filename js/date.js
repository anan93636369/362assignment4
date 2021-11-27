// date is 
$(function (){
    months = ['January', 'February', 'March', 
    'April', 'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'];
    var current = new Date();
    current_month = current.getMonth()
    current_date = current.getDate()
    current_year = current.getFullYear()

    document.getElementById("date").textContent = months[current_month] + ' ' + current_date + ', ' + current_year
})