const { getCustomQuarter } = require("./Quarter");
const quarters = getCustomQuarter();

function getAllFiscalYears(
  startingQuarter,
  endingQuarter,
  yearDifference,
  startingMonth,
  endingMonth
) {
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
  let startingQuarters = [];
  if (startingMonth < endingMonth && yearDifference == 0) {
    startingQuarters = [];
  } else {
    startingQuarters = quarters.filter(
      (item, index) => index >= startingQuarterIndex
    );
  }
  let endingQuarters = [];
  if (endingMonth < startingMonth && yearDifference == 0) {
    endingQuarters = [];
  } else {
    endingQuarters = quarters.filter(
      (item, index) => index <= endingQuarterIndex
    );
  }
  let inBetweenQuarters = [];
  for (let i = 1; i < yearDifference; i++) {
    inBetweenQuarters.push(quarters);
  }
  return [startingQuarters, endingQuarters, inBetweenQuarters];
}

// getAllFiscalYears();
module.exports = { getAllFiscalYears };
