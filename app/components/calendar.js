function renderHTML(calendar, number, holidays) {
  // Declare and initialize variables and constants
  var weekdays = new Array('S','M','T','W','T','F','S');
  var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
  var DAYS_OF_WEEK = 7;
  var DAYS_OF_MONTH = 31;
  var TOTAL = 35;
  var TR_start = '<tr>';
  var TR_end = '</tr>';
  var TD_start = '<td width="30"><center>';
  var TD_start_weekdays = '<td width="30" class="weekdays"><center>';
  var TD_start_weekend = '<td width="30" class="weekend"><center>';
  var TD_start_holidays = '<td width="30" class="holidays"><center>';
  var TD_start_invalid = '<td width="30" class="invalid"><center>';
  var TD_end = '</center></td>';
  var cal = '';

  // Repeat until the correct number of days are rendered
  while (number != 0) {
    var year = calendar.getFullYear();
    var month = calendar.getMonth();
    calendar.setDate(1);
    calendar.setMonth(month);

    cal += '<table border=1 cellspacing=0 cellpadding=0 bordercolor=BBBBBB><tr><td>';
    cal += '<table border=0 cellspacing=0 cellpadding=2>' + TR_start;
    cal += '<td colspan="' + DAYS_OF_WEEK + '" bgcolor="#EFEFEF"><center><b>';
    cal += months[month]  + '   ' + year + '</b>' + TD_end + TR_end;
    cal += TR_start;

    for (index = 0; index < DAYS_OF_WEEK; index++) cal += TD_start + weekdays[index] + TD_end;

    cal += TD_end + TR_end;
    cal += TR_start;

    // Customization for days
    // Days previous to date (invalid)
    for (index = 0; index < calendar.getDay(); index++) {
      cal += TD_start_invalid + '  ' + TD_end;
      TOTAL--;
    };

    // Days of the month
    for (index = 0; index < DAYS_OF_MONTH; index++) {
      if (calendar.getDate() > index) {
        if (number == 0) break;
        var day = calendar.getDay();

        if (day == 0) cal += TR_start;

        if (day != DAYS_OF_WEEK) {
          var date  = calendar.getDate();
          if (day == 0 || day == 6) cal += TD_start_weekend + date + TD_end;
          else cal += TD_start_weekdays + date + TD_end;
          number--;
          TOTAL--;
        };

        if (day == DAYS_OF_WEEK) cal += TR_end;

        calendar.setDate(calendar.getDate()+1);
      };
    };

    // Days after the last rendered day
    var day = calendar.getDay();
    for (index = 0; index < TOTAL; index++) {
      if (day == 0) cal += TR_start;

      if (day != DAYS_OF_WEEK) cal += TD_start_invalid + '  ' + TD_end;

      if (day == DAYS_OF_WEEK) cal += TR_end;

      day++;

      if (day == 8) day = 0;
    }

    cal += '</td></tr></table></table>';
  };

  return cal;
};
