function getStartYearMonthDay(startDate) {
  const startFiscalYear = new Date(startDate);

  const startFYDate = {
    startFYYear: startFiscalYear.getFullYear(),
    // startFYMonth: startFiscalYear.getMonth() + 1,
    startFYMonth: getMonthFromDateString(startDate),
    startFYDay: startFiscalYear.getDate(),
  };

  return startFYDate;
}

function getEndYearMonthDay(endDate) {
  const endFiscalYear = new Date(endDate);

  const endFYDate = {
    endFYYear: endFiscalYear.getFullYear(),
    // endFYMonth: endFiscalYear.getMonth() + 1,
    endFYMonth: getMonthFromDateString(endDate),
    endFYDay: endFiscalYear.getDate(),
  };

  return endFYDate;
}

function getMonthFromDateString(dateString) {
  // console.log("dateString", dateString);
  const [, month] = dateString.match(/-(\d{2})-/);
  return parseInt(month, 10);
}

module.exports = { getStartYearMonthDay, getEndYearMonthDay };
