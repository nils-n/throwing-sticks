/**
 * These functions use d3.js library to render the sticks on the display
 * // based on https://d3-graph-gallery.com/intro_d3js.html
 */

// let's fake some input of some sticks to display.
let sticks = [
  {
    position: 0.85,
    orientation: 90,
    colour: "green",
    sector: 0,
    verticalOffsetOnScreen: 0,
  },
  {
    position: 0.5,
    orientation: 60,
    colour: "red",
    sector: 1,
    verticalOffsetOnScreen: 0,
  },
  {
    position: 0.15,
    orientation: 0,
    colour: "red",
    sector: 2,
    verticalOffsetOnScreen: 0,
  },
];

// this will be variable too later but for testing I will hard-code it.
const diagram = document.getElementById("main-diagram");
var height = diagram.clientHeight;
var width = diagram.clientWidth;

// takes care that the lines at the border of the SVG are drawn fully
const numberOfMidlines = 5;
const spaceAtBorder = 16;
let distanceBetweenMidlines = (width - spaceAtBorder) / (numberOfMidlines - 1);

//  stick length needs to be half the distance between midlines for this to be accurate.
const midlineStrokeWidth = 8;
let stickLengthOnScreen = distanceBetweenMidlines / 2;

// now call the functions to draw the elements
// using a mock display configuration as it is written in commonJS syntax to be testable with Jest.
const mockConfiguration = {
  width: width,
  height: height,
  distanceBetweenMidlines: distanceBetweenMidlines,
  numberOfMidlines: numberOfMidlines,
  spaceAtBorder: spaceAtBorder,
  midlineStrokeWidth: midlineStrokeWidth,
  stickLengthOnScreen: stickLengthOnScreen,
  displaySelector: "#main-diagram",
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};

let svg = drawEmptyDiagram(mockConfiguration);
drawMidlines(svg, mockConfiguration);
drawSticks(svg, sticks, mockConfiguration);

/**
 * This function draws an empty svg element on the DOM, returns d3 SVG element
 */
function drawEmptyDiagram(displayConfiguration) {
  // for now just extract the height from the mock configuration
  const { width, height, margin, displaySelector, spaceAtBorder } =
    displayConfiguration;

  // create empty svg
  d3.select(displaySelector).select("svg").remove();

  // fix overflow bug to make svg fit into the parent div
  // https://chartio.com/resources/tutorials/how-to-resize-an-svg-when-the-window-is-resized-in-d3-js/
  const svg = d3
    .select(displaySelector)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.bottom + margin.top)
    .attr(
      "viewBox",
      `0 0 ${width + spaceAtBorder} ${height - 2 * spaceAtBorder}`
    )
    .attr("preserveAspectRatio", "xMidYMid meet")
    .append("g")
    .attr("transform", `translate( ${margin.left} , ${margin.top} )`);

  // make the background transparent
  svg.fillStyle = "#FF0000";

  return svg;
}

/**
 *  This function will eventually draw all the sticks on the canvas
 * Rotation and Translation based from :
 * https://www.tutorialspoint.com/d3js/d3js_svg_transformation.htm
 */
function drawSticks(svg, sticks, displayConfiguration) {
  const {
    stickLengthOnScreen,
    numberOfMidlines,
    width,
    height,
  } = displayConfiguration;

  // create a scale for the input data
  // twoTimesRadius : comes from he way we do the simulation ( simulating half the circle )
  const xScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, width / (numberOfMidlines - 1) / 2]);

  // add a scaling also for the vertical position of the sticks
  const yScale = d3.scaleLinear().domain([0, 1]).range([0, height]);

  // now create a circle and move its position
  let dataset = [];
  const centerHeight = 0.5;
  for (let i in sticks) {
    dataset.push({
      x: sticks[i].position,
      y: yScale(centerHeight * (1 + sticks[i].verticalOffsetOnScreen)),
      color: sticks[i].colour,
      orientation: sticks[i].orientation,
      sector: sticks[i].sector,
    });
  }

  svg
    .selectAll("test-sticks")
    .data(dataset)
    .enter()
    .append("ellipse")
    .attr("cx", function (d) {
      return xScale(d.x);
    })
    .attr("cy", function (d) {
      return d.y;
    })
    .attr("rx", stickLengthOnScreen)
    .attr("ry", stickLengthOnScreen / 8 / 2)
    .attr("fill", function (d) {
      return d.color;
    })
    .attr("transform", function (d) {
      return `translate( ${
        d.sector * xScale(2)
      } ) rotate (${d.orientation} , ${xScale(d.x)} , ${d.y} )`;
    })
    .attr("stroke-width", "3px")
    .attr("stroke", function (d) {
      return d.color;
    })
    .attr("fill-opacity", "0.3");
}

/**
 * this is a function to visualize the parallel midlines.
 */
function drawMidlines(svg, displayConfiguration) {
  //  extract the height from the mock configuration
  const { width, height, distanceBetweenMidlines, numberOfMidlines } =
    displayConfiguration;

  // create a scale for the input data
  const xScale = d3.scaleLinear().domain([0, 0.5]).range([0, width]);

  // scale the position of the midlines
  let positionOfMidline = 0;
  for (let i = 0; i < numberOfMidlines; i++) {
    // draw the midlines one by one
    svg
      .append("line")
      .style("stroke", "black")
      .style("stroke-width", 8)
      .attr("x1", positionOfMidline)
      .attr("y1", 0)
      .attr("x2", positionOfMidline)
      .attr("y1", height);

    // this is where we want to draw the line
    positionOfMidline += distanceBetweenMidlines;
  }
}

/**
 * This is a function to visualize the sticks that were generated in the simulaion for the first panel using a scatterplot
 * based on https://d3-graph-gallery.com/graph/scatter_basic.html
 */
function drawScatterDiagram(sticks, svgScatter, tempDisplayConfiguration) {
  let { height, width, displaySelector } = tempDisplayConfiguration;

  // reduce the height to make room for axes
  height -= 50;
  width -= 50;

  // prepare the data to be plotted
  // we will just look at the angles between 0 and 90 for this visualization. The other half of 90 to 180 degrees is just mirrored.
  let dataset = [];
  for (let i in sticks) {
    if (sticks[i].orientation > 0 && sticks[i].orientation < 90) {
      dataset.push({
        x: sticks[i].mappedPosition,
        color: sticks[i].colour,
        orientation: sticks[i].orientation,
      });
    }
  }

  function toRadians(angle) {
    return (Math.PI * angle) / 180.0;
  }

  const margin = {
    top: 0,
    left: 40,
  };

  // add scales to the axes
  const xScale = d3.scaleLinear().domain([0, 90]).range([0, width]);

  const yScale = d3.scaleLinear().domain([0, 1]).range([height, 0]);

  svgScatter.append("g").attr("width", width).attr("height", height);

  svgScatter
    .append("g")
    .attr("transform", `translate( ${margin.left} , ${height} )`)
    .call(d3.axisBottom(xScale));

  // https://stackoverflow.com/questions/11189284/d3-axis-labeling
  svgScatter
    .append("text")
    .attr("class", "x label")
    .attr("text-anchor", "middle")
    .attr("x", width - 2 * margin.left)
    .attr("y", height + 40)
    .text("Angle / Degrees ");

  // https://stackoverflow.com/questions/11189284/d3-axis-labeling
  svgScatter
    .append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90) translate(0,40)")
    .text("Position");

  svgScatter
    .append("g")
    .attr("transform", `translate( ${margin.left} )`)
    .call(d3.axisLeft(yScale));

  svgScatter
    .selectAll("scatter-sticks")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
      return xScale(d.orientation);
    })
    .attr("cy", function (d) {
      return yScale(d.x);
    })
    .attr("r", 1.5)
    .attr("fill", function (d) {
      return d.color;
    })
    .attr("transform", `translate( ${margin.left} )`)
    .attr("stroke-width", "3px")
    .attr("stroke", function (d) {
      return d.color;
    })
    .attr("fill-opacity", "0.3")
    .attr("text-anchor", "end");

  // now draw the theoretical data as a line
  //https://www.educative.io/answers/how-to-create-a-line-chart-using-d3/

  // add scales to the axes
  const x = d3.scaleLinear().domain([0, 90]).range([0, width]);

  const y = d3.scaleLinear().domain([0, 0.5]).range([height, 0]);

  // create a second dataset with the true line that separates green and red
  let trueData = [];
  const maxAngle = 90;
  for (let i = 0; i < maxAngle; i++) {
    trueData.push({
      angle: i,
      position: 0.5 * Math.cos(toRadians(i)),
    });
  }

  const line = d3
    .line()
    .x(function (d) {
      return x(d.angle);
    })
    .y(function (d) {
      return y(d.position);
    })
    .curve(d3.curveBasis);

  svgScatter
    .append("path")
    .datum(trueData)
    .attr("class", "line")
    .attr("d", line)
    .attr("transform", `translate( ${margin.left} )`)
    .style("fill", "none")
    .style("stroke", "#CC0000")
    .style("stroke-width", "2");
}

/**
 * if there is time left, try to add zoom from here om https://www.d3indepth.com/zoom-and-pan/
 */
