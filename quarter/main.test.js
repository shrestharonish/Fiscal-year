const callQuarter = require("./Main");

describe("both same quarter and same year", () => {
  test("case 1:", () => {
    const data = {
      body: {
        startDate: "2079-03-05",
        endDate: "2079-03-09",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([{ quarterName: "Q3" }]);
  });

  test("case 2:", () => {
    const data = {
      body: {
        startDate: "2079-12-05",
        endDate: "2080-03-09",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([{ quarterName: "Q3" }]);
  });
});

describe("failed test case from QA", () => {
  test("case 1:", () => {
    const data = {
      body: {
        startDate: "2079-03-05",
        endDate: "2083-01-15",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
    ]);
  });
  test("case 2:", () => {
    const data = {
      body: {
        startDate: "2060-02-15",
        endDate: "2062-03-09",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
    ]);
  });
  test("case 3:", () => {
    const data = {
      body: {
        startDate: "2080-02-15",
        endDate: "2085-03-17",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
    ]);
  });
  test("case 4:", () => {
    const data = {
      body: {
        startDate: "2080-04-05",
        endDate: "2080-08-25",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([{ quarterName: "Q1" }, { quarterName: "Q2" }]);
  });
  test("case 5:", () => {
    const data = {
      body: {
        startDate: "2076-09-20",
        endDate: "2076-09-25",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([{ quarterName: "Q2" }]);
  });

  test("case 6:", () => {
    const data = {
      body: {
        startDate: "2060-02-12",
        endDate: "2062-03-30",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
    ]);
  });

  test("case 7:", () => {
    const data = {
      body: {
        startDate: "2080-01-13",
        endDate: "2080-04-25",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([{ quarterName: "Q3" }, { quarterName: "Q1" }]);
  });
});

describe("passed test case from QA", () => {
  test("case 1:", () => {
    const data = {
      body: {
        startDate: "2079-04-05",
        endDate: "2083-01-05",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
    ]);
  });

  test("case 2:", () => {
    const data = {
      body: {
        startDate: "2080-03-14",
        endDate: "2081-04-05",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
    ]);
  });
  test("case 3:", () => {
    const data = {
      body: {
        startDate: "2057-03-09",
        endDate: "2060-04-15",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
    ]);
  });
  test("case 4:", () => {
    const data = {
      body: {
        startDate: "2057-04-08",
        endDate: "2060-05-15",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
    ]);
  });
  test("case 5:", () => {
    const data = {
      body: {
        startDate: "2065-12-04",
        endDate: "2070-04-18",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
    ]);
  });
  test("case 6:", () => {
    const data = {
      body: {
        startDate: "2060-09-28",
        endDate: "2075-11-15",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q2" },
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
      { quarterName: "Q2" },
    ]);
  });
  test("case 7:", () => {
    const data = {
      body: {
        startDate: "2060-12-18",
        endDate: "2065-03-15",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
    ]);
  });
  test("case 8:", () => {
    const data = {
      body: {
        startDate: "2080-04-09",
        endDate: "2085-12-15",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
    ]);
  });
  test("case 9:", () => {
    const data = {
      body: {
        startDate: "2080-02-19",
        endDate: "2085-07-19",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
    ]);
  });
  test("case 10:", () => {
    const data = {
      body: {
        startDate: "2080-04-06",
        endDate: "2080-06-07",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([{ quarterName: "Q1" }]);
  });
  test("case 11:", () => {
    const data = {
      body: {
        startDate: "2080-04-09",
        endDate: "2080-12-19",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
    ]);
  });
  test("case 12:", () => {
    const data = {
      body: {
        startDate: "2080-04-09",
        endDate: "2080-09-19",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([{ quarterName: "Q1" }, { quarterName: "Q2" }]);
  });
  test("case 13:", () => {
    const data = {
      body: {
        startDate: "2080-04-09",
        endDate: "2080-04-16",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([{ quarterName: "Q1" }]);
  });
  test("case 14:", () => {
    const data = {
      body: {
        startDate: "2079-12-19",
        endDate: "2080-04-01",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([{ quarterName: "Q3" }, { quarterName: "Q1" }]);
  });
  test("case 15:", () => {
    const data = {
      body: {
        startDate: "2079-03-09",
        endDate: "2080-01-04",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
    ]);
  });
  test("case 16:", () => {
    const data = {
      body: {
        startDate: "2079-03-08",
        endDate: "2080-11-11",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
      { quarterName: "Q2" },
    ]);
  });
  test("case 17:", () => {
    const data = {
      body: {
        startDate: "2057-03-08",
        endDate: "2060-04-04",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
    ]);
  });
  test("case 18:", () => {
    const data = {
      body: {
        startDate: "2075-08-14",
        endDate: "2076-03-15",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([{ quarterName: "Q2" }, { quarterName: "Q3" }]);
  });
  test("case 19:", () => {
    const data = {
      body: {
        startDate: "2076-06-09",
        endDate: "2076-08-19",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([{ quarterName: "Q1" }, { quarterName: "Q2" }]);
  });
  test("case 20:", () => {
    const data = {
      body: {
        startDate: "2080-12-09",
        endDate: "2085-12-09",
      },
    };
    const result = callQuarter(data);
    expect(result).toEqual([
      { quarterName: "Q3" },
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      [{ quarterName: "Q1" }, { quarterName: "Q2" }, { quarterName: "Q3" }],
      { quarterName: "Q1" },
      { quarterName: "Q2" },
      { quarterName: "Q3" },
    ]);
  });
});
