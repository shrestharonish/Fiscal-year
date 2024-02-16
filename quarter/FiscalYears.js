const { getCustomQuarter } = require("./Quarter");
const quarters = getCustomQuarter();

function getAllFiscalYears(
  startingQuarter,
  endingQuarter,
  yearDifference,
  startingMonth,
  endingMonth
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
  startingQuarters = quarters
    .filter((item, index) => index >= startingQuarterIndex)
    .map(({ quarterName, quartersByMonth }) => ({
      quarterName,
      // quartersByMonth,
    }));
  // console.log("🚀 ~ startingQuarterindex:", startingQuarterIndex);
  // console.log("🚀 ~ endingQuarterindex:", endingQuarterIndex);
  endingQuarters = quarters
    .filter((item, index) => index <= endingQuarterIndex)
    .map(({ quarterName, quartersByMonth }) => ({
      quarterName,
      // quartersByMonth,
    }));
  for (let i = 1; i < yearDifference; i++) {
    inBetweenQuarters.push(
      quarters.map(({ quarterName, quartersByMonth }) => ({ quarterName }))
    );
    // quarters.forEach(({ quarterName, quartersByMonth }) => {
    //   // Push the quarterName or quartersByMonth into inBetweenQuarters as needed
    //   inBetweenQuarters.push({ quarterName }); // Example: push quarterName
    // });
  }
  if (yearDifference <= 0) {
    zeroDifferenceOutput = quarters
      .filter(
        (item, index) =>
          index >= startingQuarterIndex && index <= endingQuarterIndex
      )
      .map(({ quarterName, quartersByMonth }) => ({
        quarterName,
        // quartersByMonth,
      }));
  }
  return [
    startingQuarters,
    endingQuarters,
    inBetweenQuarters,
    zeroDifferenceOutput,
  ];
}

// getAllFiscalYears();
module.exports = { getAllFiscalYears };
