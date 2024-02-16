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
    const [
      startingMonth,
      endingMonth,
      year_Difference,
      startingYear,
      endingYear,
    ] = this.getStartingAndEndingYearMonthDay();

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
      year_Difference,
      startingYear,
      endingYear,
    ];
  }

  getStartingAndEndingYearMonthDay() {
    const startingMonth = getStartYearMonthDay(this.starting_year).startFYMonth;
    const endingMonth = getEndYearMonthDay(this.ending_year).endFYMonth;
    // console.log("month:", endingMonth, typeof endingMonth);
    const startingYear = getStartYearMonthDay(this.starting_year).startFYYear;
    const endingYear = getEndYearMonthDay(this.ending_year).endFYYear;
    const year_Difference = endingYear - startingYear;
    return [
      startingMonth,
      endingMonth,
      year_Difference,
      startingYear,
      endingYear,
    ];
  }
}

// This function runs automatically when executing Main.js
function callQuarter(req) {
  // console.log("🚀 ~ callQuarter ~ reqBody:", req.body);
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
    year_Difference,
    startingYear,
    endingYear,
  ] = calculatedStartingAndEndingQuarter;

  console.log("year difference: ", year_Difference);

  console.log("both quarter here:", startingQuarter, endingQuarter);
  if (
    startingQuarter[0].quarterName == "Q3" &&
    endingQuarter[0].quarterName == "Q3" &&
    startingMonth != 12 &&
    endingMonth == 12
  ) {
    year_Difference = year_Difference + 1;
  } else if (
    startingQuarter[0].quarterName == "Q3" &&
    endingQuarter[0].quarterName != "Q3" &&
    startingMonth < endingMonth &&
    startingMonth != 12
  ) {
    year_Difference = year_Difference + 1;
  } else if (
    startingMonth != 1 &&
    startingMonth != 2 &&
    startingMonth != 3 &&
    endingQuarter[0].quarterName == "Q3" &&
    endingMonth < startingMonth
  ) {
    year_Difference = year_Difference - 1;
  } else {
    year_Difference = year_Difference;
  }

  console.log(
    `starting quarter: ${startingQuarter[0].quarterName}, ending quarter: ${endingQuarter[0].quarterName}`
  );
  console.log(`starting month: ${startingMonth}, ending month: ${endingMonth}`);

  const [
    startingQuarters,
    endingQuarters,
    inBetweenQuarters,
    zeroDifferenceOutput,
  ] = getAllFiscalYears(
    startingQuarter[0],
    endingQuarter[0],
    year_Difference,
    startingMonth,
    endingMonth,
    startingYear,
    endingYear
  );
  console.log("startingQuarters:", startingQuarters);
  console.log("inBetweenQuarters:", inBetweenQuarters);
  console.log("endingQuarters:", endingQuarters);
  console.log("zero diff op: ", zeroDifferenceOutput);
  let combinedArray;
  console.log("Final yearDiff: ", year_Difference);
  if (year_Difference <= 0) {
    combinedArray = zeroDifferenceOutput;
  } else {
    combinedArray = startingQuarters.concat(inBetweenQuarters, endingQuarters);
  }
  let year = startingYear;
  let conditionMet = false;
  const finalop = combinedArray.map((item, index) => {
    if (
      !conditionMet &&
      startingQuarter[0].quarterName == "Q3" &&
      startingMonth != 12
    ) {
      year = year - 1;
      conditionMet = true;
    }
    const result = { year: `${year}/${year + 1}`, ...item };
    year += 1;

    return result;
  });
  console.clear();
  return finalop;
}

module.exports = callQuarter;
