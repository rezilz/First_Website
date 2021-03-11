var today = new Date();
        var day = today.getDay();
        var dd = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        var hr = today.getHours();
        var min = today.getMinutes();
//Check 0
if(hr < 10){
    hr = "0" + hr;
}
if(min < 10){
    min = "0" + min;
}

var time = hr + ":" + min;
        // Print Day
        switch (day){
            case 0: day = "Sunday";
            break;
            case 1: day = "Monday";
            break;
            case 2: day = "Tuesday";
            break;
            case 3: day = "Wednesday";
            break;
            case 4: day = "Thursday";
            break;
            case 5: day = "Friday";
            break;
            case 6: day = "Saturday";
            break;}document.write(day);

        //Print Month
        switch (month){
            case 1: month = "January";
            break;
            case 2: month = "Febuary";
            break;
            case 3: month = "March";
            break;
            case 4: month = "April";
            break;
            case 5: month = "May";
            break;
            case 6: month = "June";
            break;
            case 7: month = "July";
            break;
            case 8: month = "August";
            break;
            case 9: month = "September";
            break;
            case 10: month = "October";
            break;
            case 11: month = "November";
            break;
            case 12: month = "December";
            break;} document.write(", "+month+" "+dd+", "+year +" @ "+time);

            if (hr >= 0 && hr < 12) {
                document.write(" ☀");
            } else if (hr == 12) {
                document.write(" 🌙");
            } else if (hr >= 12 && hr <= 17) {
                document.write(" ⛅");
            } else {
                document.write(" ☁");
            }

            document.write("</font></center>");  

