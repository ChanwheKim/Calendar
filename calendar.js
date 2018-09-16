var UIcontroller = (function() {

    var months, currentYear, currentMonth;

    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    currentYear = -1;
    currentMonth = -1;

    return {

        displayDates: function(curMonth, curYear) {
            var firstDay, numOfDays, date, datePrevMonth, html;

            // 1. Determine 1st day of the month
            firstDay = new Date(curYear, curMonth, 1).getDay();

            // 2. Determine the number of days of the month
            numOfDays = new Date(curYear, curMonth + 1, 0).getDate();

            // 3. Initial Date Value
            date = 1;

            // 4. Set up date of previous month
            datePrevMonth = -(6 - (7 - firstDay));

            // 5. Create HTML string
            html = '<tr>';
            for(var i = 0; i < 42; i++) {

                if( i === firstDay || (date !== 1 && date <= numOfDays)) {
                    html += '<td>' + date + '</td>';
                    date++;
                } else if (i < firstDay) {
                    html += "<td class='pre'>" + new Date(curYear, curMonth, datePrevMonth).getDate() + '</td>'
                    datePrevMonth += 1;
                } else if (i >= numOfDays) {
                    html += "<td class='next'>" + new Date(curYear, curMonth, date).getDate() + '</td>';
                    date += 1;
                }
                
                if(i === 6 || i === 13 || i === 20 || i === 27 || i === 34 || i === 41) {
                    html += '</tr>'
                }
            }
            
            // 6. Insert HTML strings into the DOM
            document.querySelector('.calendar__frame--days').innerHTML = html;

            // 7. Display month and year label
            document.querySelector('.month-year').textContent = months[curMonth] + ' ' + curYear;

            // Update data of month and year
            currentMonth = curMonth;
            currentYear = curYear;
        }
    }

})();


var calController = (function(UIctrl) {

    var setupEventListener = function() {
        document.getElementById('prev').addEventListener('click', ctrlAddMonth);
        document.getElementById('next').addEventListener('click', ctrlAddMonth);
    };

    var ctrlAddMonth = function() {
        console.log('It works!');
    };

    return {
        init: function() {
            UIctrl.displayDates(new Date().getMonth(), new Date().getFullYear());
            setupEventListener();
        }
    }

})(UIcontroller);

calController.init();