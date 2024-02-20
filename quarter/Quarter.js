//  This is the actual quarter in a year
// function getActualQuarter() {
//   const Quarters = [
//     {
//       quarterName: "Q1",
//       quartersByMonth: ["Shrawan - Ashoj"],
//       quartersByCount: [4, 5, 6],
//     },
//     {
//       quarterName: "Q2",
//       quartersByMonth: ["Kartik - Poush"],
//       quartersByCount: [7, 8, 9],
//     },
//     {
//       quarterName: "Q3",
//       quartersByMonth: ["Magh - Chaitra"],
//       quartersByCount: [10, 11, 12],
//     },
//     {
//       quarterName: "Q4",
//       quartersByMonth: ["Baisakh - Asadh"],
//       quartersByCount: [1, 2, 3],
//     },
//   ];
//   return Quarters;
// }

// This is the required custom quarter in a year
function getCustomQuarter() {
  const Quarters = [
    {
      quarterName: "Q1",
      quartersByMonth: ["Shrawan - kartik"],
      quartersByCount: [4, 5, 6, 7],
    },
    {
      quarterName: "Q2",
      quartersByMonth: ["Mangsir - Falgun"],
      quartersByCount: [8, 9, 10, 11],
    },
    {
      quarterName: "Q3",
      quartersByMonth: ["Chaitra - Asadh"],
      quartersByCount: [12, 1, 2, 3],
    },
  ];
  return Quarters;
}

module.exports = { getCustomQuarter };
