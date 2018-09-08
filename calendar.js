var UIcontroller = (function() {

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return {

        displayDates: function() {
            var firstDay, numOfDays, date, datePrevMonth;

            // 1. Determine 1st day of the month
            firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

            // 2. Determine the number of days of the month
            numOfDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

            // 3. Initial Date Value
            date = 1;

            // 4. Set up date of previous month
            datePrevMonth = -(6 - (7 - firstDay));

            
        }
    }

})();


var calController = (function(UIctrl) {

    

})(UIcontroller);