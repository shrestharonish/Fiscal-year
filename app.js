const callQuarter = require("./quarter/Main");

// Importing required modules
const express = require("express");
const path = require("path");
const cors = require("cors");

// Creating an Express application
const app = express();
app.use(cors());
app.use(express.json()); // this line parse JSON in the request body
app.use(express.static(__dirname));

// Middleware to parse incoming request bodies as FormData
app.use(express.urlencoded({ extended: true }));

const data = [
  {
    year: "2026/2027",
    quarter: ["Jan", "Feb"],
  },
  {
    year: "2027/2028",
    quarter: ["Mar", "Apr"],
  },
];

// Set up a route to serve your HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "fiscalYear.html"));
});

// Define a route for the GET request
app.get("/api/fiscalyear", async (req, res) => {
  await res.json(data);
});

app.post("/api/searchFiscalYear", async (req, res) => {
  try {
    // Call the asynchronous function and wait for it to complete
    const output = await callQuarter(req);

    // Send the output as the response
    res.json(output);
  } catch (error) {
    console.error("Error:", error);
    // Handle errors and send an appropriate response
    res.status(500).send("Internal Server Error");
  }
});

app.post(
  "/api/searchFY",
  express.urlencoded({ extended: true }),
  async (req, res) => {
    try {
      // Call the asynchronous function and wait for it to complete
      const output = await callQuarter(req);

      // Send the output as the response
      return res.json(output);
    } catch (error) {
      console.error("Error:", error);
      // Handle errors and send an appropriate response
      res.status(500).send("Internal Server Error");
    }
  }
);

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
