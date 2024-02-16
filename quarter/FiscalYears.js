const { getCustomQuarter } = require("./Quarter");
const quarters = getCustomQuarter();

function getAllFiscalYears(
  startingQuarter,
  endingQuarter,
  yearDifference,
  startingMonth,
  endingMonth,
  startingYear,
  endingYear
) {
  // console.log("yearDiff: ", yearDifference);
  // console.log("quarter: ", startingQuarter, endingQuarter);
  const startingQuarterIndex = quarters.findIndex((item) => {
    return (
      item.quarterName === startingQuarter.quarterName &&
      JSON.stringify(item.quartersByMonth) ===
        JSON.stringify(startingQuarter.quartersByMonth) &&
      JSON.stringify(item.quartersByCount) ===
        JSON.stringify(startingQuarter.quartersByCount)
    );
  });

  const endingQuarterIndex = quarters.findIndex((item) => {
    return (
      item.quarterName === endingQuarter.quarterName &&
      JSON.stringify(item.quartersByMonth) ===
        JSON.stringify(endingQuarter.quartersByMonth) &&
      JSON.stringify(item.quartersByCount) ===
        JSON.stringify(endingQuarter.quartersByCount)
    );
  });

  let zeroDifferenceOutput = [];
  let startingQuarters = [];
  let inBetweenQuarters = [];
  let endingQuarters = [];

  let year = startingYear;
  startingQuarters = [
    {
      quarter: quarters
        .filter((item, index) => index >= startingQuarterIndex)
        .map(
          ({ quarterName, quartersByMonth }) =>
            `${quarterName} - [${quartersByMonth}]`
        ),
    },
  ];
  // console.log("🚀 ~ startingQuarterindex:", startingQuarterIndex);
  // console.log("🚀 ~ endingQuarterindex:", endingQuarterIndex);
  endingQuarters = [
    {
      quarter: quarters
        .filter((item, index) => index <= endingQuarterIndex)
        .map(
          ({ quarterName, quartersByMonth }) =>
            `${quarterName} - [${quartersByMonth}]`
        ),
    },
  ];
  for (let i = 1; i < yearDifference; i++) {
    inBetweenQuarters.push({
      quarter: quarters.map(
        ({ quarterName, quartersByMonth }) =>
          `${quarterName} - [${quartersByMonth}]`
      ),
    });
  }
  if (yearDifference <= 0) {
    zeroDifferenceOutput = [
      {
        quarter: quarters
          .filter(
            (item, index) =>
              index >= startingQuarterIndex && index <= endingQuarterIndex
          )
          .map(
            ({ quarterName, quartersByMonth }) =>
              `${quarterName} - [${quartersByMonth}]`
          ),
      },
    ];
  }
  console.clear();
  return [
    startingQuarters,
    endingQuarters,
    inBetweenQuarters,
    zeroDifferenceOutput,
  ];
}

// getAllFiscalYears();
module.exports = { getAllFiscalYears };
