function calendar (dateArr) {
    let day = dateArr[0];
    let month = dateArr[1];
    let year = dateArr[2];

    let date = new Date(year, month - 1, day);

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let monthName = monthNames[date.getMonth()];

    let firstDay = new Date(year, month - 1, 1);
    let lastDay = new Date(year, month, 0);


    let weeksCount = 1;
    let dayOfWeekNum = lastDay.getDay();
    if (dayOfWeekNum == 0) {
        dayOfWeekNum = 7;
    }

    for (let i = 0; i < lastDay.getUTCDate() + 1; i++) {
        if (dayOfWeekNum == 7) {
            dayOfWeekNum = 0;
            weeksCount++;
        }
        dayOfWeekNum++;
        if (i == lastDay.getUTCDate() && dayOfWeekNum != 7) {
            weeksCount++;
        }
    }

    let dayOfWeek = firstDay.getDay();

    let container = $('#content');
    let caption = `${monthName} ${year}`;
    $('<table>').appendTo(container);
    $(`<caption>${caption}</caption>`).appendTo($('table'));
    $('<tbody>').appendTo($('table'));
    $('<tr>').appendTo($('tbody'));
    $('<th>').text('Mon').appendTo($('tr:eq(0)'));
    $('<th></th>').text('Tue').appendTo($('tr:eq(0)'));
    $('<th></th>').text('Wed').appendTo($('tr:eq(0)'));
    $('<th></th>').text('Thu').appendTo($('tr:eq(0)'));
    $('<th></th>').text('Fri').appendTo($('tr:eq(0)'));
    $('<th></th>').text('Sat').appendTo($('tr:eq(0)'));
    $('<th></th>').text('Sun').appendTo($('tr:eq(0)'));

    dayOfWeekNum = firstDay.getDay();
    if (dayOfWeekNum == 0) {
        dayOfWeekNum = 7;
    }

    let dayOfMonth = '';
    let start = true;

    for (let i = 1; i <= weeksCount; i++) {
        $('<tr>').appendTo($('tbody'));
        for (let e = 1; e <= 7; e++) {
            if (dayOfWeekNum == e && start){
                dayOfMonth = 1;
                start = false;
                if (dayOfMonth == day) {
                    $(`<th class="today">${dayOfMonth}</th>`).appendTo($(`tr:eq(${i})`));
                } else {
                    $(`<th>${dayOfMonth}</th>`).appendTo($(`tr:eq(${i})`));
                }

            } else if (dayOfMonth <= lastDay.getUTCDate() + 1){
                if (dayOfMonth == day) {
                    $(`<th class="today">${dayOfMonth}</th>`).appendTo($(`tr:eq(${i})`));
                } else {
                    $(`<th>${dayOfMonth}</th>`).appendTo($(`tr:eq(${i})`));
                }

            } else if (dayOfMonth > lastDay.getUTCDate() + 1) {
                $(`<th></th>`).appendTo($(`tr:eq(${i})`));
            }
            if (dayOfMonth !== '') {
                dayOfMonth++;
            }
        }
    }

}