const { getCustomQuarter } = require("./Quarter");
const { getStartYearMonthDay, getEndYearMonthDay } = require("./getYMD");
const { getAllFiscalYears } = require("./FiscalYears");

const quarterList = getCustomQuarter();

class Quarter {
  constructor(starting_year, ending_year) {
    this.starting_year = starting_year;
    this.ending_year = ending_year;
    this.calculatedStartingAndEndingQuarter =
      this.calculateStartingAndEndingQuarter();
  }

  calculateStartingAndEndingQuarter() {
    const [startingMonth, endingMonth, yearDifference] =
      this.getStartingAndEndingYearMonthDay();

    const startingQuarter = quarterList.filter((item) =>
      item.quartersByCount.includes(startingMonth)
    );

    const endingQuarter = quarterList.filter((item) =>
      item.quartersByCount.includes(endingMonth)
    );
    return [
      startingQuarter,
      endingQuarter,
      startingMonth,
      endingMonth,
      yearDifference,
    ];
  }

  getStartingAndEndingYearMonthDay() {
    const startingMonth = getStartYearMonthDay(this.starting_year).startFYMonth;
    const endingMonth = getEndYearMonthDay(this.ending_year).endFYMonth;
    console.log("month:", endingMonth, typeof endingMonth);
    const startingYear = getStartYearMonthDay(this.starting_year).startFYYear;
    const endingYear = getEndYearMonthDay(this.ending_year).endFYYear;
    const yearDifference = endingYear - startingYear;
    return [startingMonth, endingMonth, yearDifference];
  }
}

// This function runs automatically when executing Main.js
function callQuarter(req) {
  console.log("🚀 ~ callQuarter ~ reqBody:", req.body);
  const quarter = new Quarter(
    String(req.body.startDate),
    String(req.body.endDate)
  );
  // const quarter = new Quarter("2000-01-02", "2002-04-08");
  const calculatedStartingAndEndingQuarter =
    quarter.calculatedStartingAndEndingQuarter;
  let [
    startingQuarter,
    endingQuarter,
    startingMonth,
    endingMonth,
    yearDifference,
  ] = calculatedStartingAndEndingQuarter;

  console.log("year difference: ", yearDifference);

  console.log("both quarter here:", startingQuarter, endingQuarter);
  if (
    startingQuarter[0].quarterName == "Q3" &&
    endingQuarter[0].quarterName == "Q3" &&
    // endingMonth > startingMonth
    endingMonth == 12
  ) {
    console.log("1st condition");
    yearDifference = yearDifference + 1;
  } else if (
    startingQuarter[0].quarterName == "Q3" &&
    // startingMonth < endingMonth
    endingMonth == 12
  ) {
    console.log("2nd condition");
    yearDifference = yearDifference + 1;
  } else if (
    endingQuarter[0].quarterName == "Q3" &&
    endingMonth < startingMonth
  ) {
    console.log("3rd condition");
    yearDifference = yearDifference - 1;
  } else {
    console.log("4th condition");
    yearDifference = yearDifference;
  }

  console.log(
    `starting quarter: ${startingQuarter[0].quarterName}, ending quarter: ${endingQuarter[0].quarterName}`
  );
  console.log(`starting month: ${startingMonth}, ending month: ${endingMonth}`);

  const [startingQuarters, endingQuarters, inBetweenQuarters] =
    getAllFiscalYears(
      startingQuarter[0],
      endingQuarter[0],
      yearDifference,
      startingMonth,
      endingMonth
    );
  console.log("startingQuarters:", startingQuarters);
  console.log("inBetweenQuarters:", inBetweenQuarters);
  console.log("endingQuarters:", endingQuarters);
  const combinedArray = startingQuarters.concat(
    inBetweenQuarters,
    endingQuarters
  );

  // console.log("Combined Array:", combinedArray);
  return combinedArray;
}

module.exports = callQuarter;
