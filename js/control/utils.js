// Own code
function isNotDate(myDate){

  // YYYY/MM/DD
  var slugs, hasError, day, month, year;
  slugs = myDate.split("/");

  day = parseInt(slugs[2]);
  month = parseInt(slugs[1]);
  year = parseInt(slugs[0]);

  hasError = false;
  // Three positions in the array
  if (slugs.length != 3) {
    hasError = true;
  } else if (isNaN(year) || year < 1970) { // Validate the year
    hasError = true;
  } else if (isNaN(month) || month < 1 || month > 12) { // Validate the month
    hasError = true;
  } else if (isNaN(day) || day < 1 || day > 31) { // Validate the day
    hasError = true;
  }

  // TODO validate special cases
  return hasError;
}

function applyOperationToDates(action, formatedDates, numberOfDays) {

    var resultDates = [];

    switch (action) {
      case 'add':
            resultDates = operationAddDates(formatedDates, numberOfDays);
          break;
      case 'substract':
            // resultDates = operationSubstractDates(formatedDates, numberOfDays);
          break;
      case 'weekDay':
          break;
      case 'daysUntilToday':
      default:
        break;
    }
    return resultDates;
}

// http://stackoverflow.com/questions/3818193/how-to-add-number-of-days-to-todays-date
// someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
// http://stackoverflow.com/questions/6963311/add-days-to-a-date-object
// var newDate = new Date(date.setTime( date.getTime() + days * 86400000 ));
function operationAddDates(formatedDates, numberOfDays) {

  var resultDates = [];
  for (var i = 0; i < formatedDates.length; i++) {
    resultDates.push(new Date(formatedDates[i].setTime( formatedDates[i].getTime() + numberOfDays * 86400000 )));
  }
  return resultDates;
}
