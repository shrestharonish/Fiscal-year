function getActualQuarter() {
  const Quarters = [
    {
      quarterName: "Q1",
      quartersByMonth: ["Shrawan", "Bhadra", "Ashoj"],
      quartersByCount: [4, 5, 6],
    },
    {
      quarterName: "Q2",
      quartersByMonth: ["Kartik", "Mangsir", "Poush"],
      quartersByCount: [7, 8, 9],
    },
    {
      quarterName: "Q3",
      quartersByMonth: ["Magh", "Falgun", "Chaitra"],
      quartersByCount: [10, 11, 12],
    },
    {
      quarterName: "Q4",
      quartersByMonth: ["Baisakh", "Jestha", "Asadh"],
      quartersByCount: [1, 2, 3],
    },
  ];
  return Quarters;
}

function getCustomQuarter() {
  const Quarters = [
    {
      quarterName: "Q1",
      quartersByMonth: ["Shrawan", "Bhadra", "Ashoj", "kartik"],
      quartersByCount: [4, 5, 6, 7],
    },
    {
      quarterName: "Q2",
      quartersByMonth: ["Mangsir", "Poush", "Magh", "Falgun"],
      quartersByCount: [8, 9, 10, 11],
    },
    {
      quarterName: "Q3",
      quartersByMonth: ["Chaitra", "Baisakh", "Jestha", "Asadh"],
      quartersByCount: [12, 1, 2, 3],
    },
  ];
  return Quarters;
}

module.exports = { getActualQuarter, getCustomQuarter };
