// @TODO: YOUR CODE HERE!
//You need to create a scatter plot between two of the data variables such as Healthcare vs. Poverty or Smokers vs. Age.

// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("body")
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load data from forcepoints.csv
d3.csv("assets/data/data.csv").then(function(healthData) {

  // Print the forceData
  console.log(healthData);

  // Format the poverty & healthcare and cast the value to a number
  healthData.forEach(function(data) {
    data.poverty = +data.poverty;
    data.healthcare = +data.healthcare;
  });

  
  // d3.extent returns the an array containing the min and max values for the property specified
  var xLinearScale = d3.scaleLinear()
    .domain(d3.extent(healthData, data => data.poverty))
    .range([0, chartWidth]);

  // Configure a linear scale with a range between the chartHeight and 0
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(healthData, data => data.healthcare)])
    .range([chartHeight, 0]);

  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  
  chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .style("font-size", "16px")
    .called(bottomAxis);

  // Append an SVG group element to the chartGroup, create the left axis inside of it
  chartGroup.append("g")
    .style("font-size", "16px")
    .call(leftAxis);

  }).catch(function(error) {
    console.log(error);
  });
  

//Using the D3 techniques we taught you in class, create a scatter plot that represents each state with circle elements. You'll code this graphic in the app.js file of your homework directory—make sure you pull in the data from data.csv by using the d3.csv function. Your scatter plot should ultimately appear like the image at the top of this section.




//Include state abbreviations in the circles.


//Create and situate your axes and labels to the left and bottom of the chart.


//Note: You'll need to use python -m http.server to run the visualization. This will host the page at localhost:8000 in your web browser.


