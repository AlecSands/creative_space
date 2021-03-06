var svg = d3.select("svg")

var group = svg.append("g")
  .attr("transform", "translate(250, 250)")
  .attr("class", "first");

var group4 = svg.append("g")
  .attr("transform", "translate(250, 250), scale(.92)")
  // .attr("transform", "scale(.7)")
  .attr("class", "first");

var group2 = svg.append("g")
  .attr("transform", "translate(250, 440)")
  .attr("class", "first");

var group3 = svg.append("g")
  .attr("transform", "translate(415, 345)")
  .attr("class", "first");

var data = [
  {x: 50, y: 87},
  {x: -50, y: 87},
  {x: -100, y: 0},
  {x: -100, y: 0},
  {x: -50, y: -87},
  {x: 50, y: -87},
  {x: 100, y: 0},
  // {x: -50, y: -87},
];

var data4 = [
  {x: 50, y: 87},
  {x: 100, y: 0},
  {x: 50, y: -87},
  {x: -50, y: -87},
  {x: -100, y: 0},
  {x: -100, y: 0},
  {x: -50, y: 87},
];

var data2 = [
  {x: 50, y: -87},
  {x: 100, y: 0},
  {x: 50, y: 87},
  {x: -50, y: 87},
  {x: -100, y: 0},
  {x: -100, y: 0},
  {x: -50, y: -87},
  // {x: -50, y: -87},
];

var data3 = [
  {x: -100, y: 0},
  {x: -50, y: -87},
  {x: 50, y: -87},
  {x: 100, y: 0},
  {x: 50, y: 87},
  {x: -50, y: 87},
  {x: -100, y: 0},
  // {x: -50, y: -87},
];

var line = d3.line()
  .x(function(d) {return d.x})
  .y(function(d) {return d.y});

// var path2 = d3.path();
// path2.moveTo(50, 50);
// path2.lineTo(100, 50);
// path2.lineTo(200, 100);
// path2.closePath();

var path = group.append("path")
  .attr("d", line(data) + "z")
  .attr("stroke", "steelblue")
  .attr("stroke-width", "8")
  .attr("fill", "none");

var totalLength = path.node().getTotalLength();

path
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
    .duration(4000)
    // .ease("linear")
    .attr("stroke-dashoffset", 0)
  .on("end", function() {
    path.attr("stroke-dasharray", "none");
  });

var path4 = group4.append("path")
  .attr("d", line(data4) + "z")
  .attr("stroke", "#679ef7")
  .attr("stroke-width", "8")
  .attr("fill", "none");

var totalLength = path4.node().getTotalLength();

path4
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
    .duration(4000)
    // .ease("linear")
    .attr("stroke-dashoffset", 0)
  .on("end", function() {
    path4.attr("stroke-dasharray", "none");
  });

var path2 = group2.append("path")
  .attr("class", "pathTwo")
  .attr("d", line(data2) + "z")
  .attr("stroke", "steelblue")
  .attr("stroke-width", "8")
  .attr("fill", "url(#image)")
  .on("mouseover", function() {
    d3.select(".pathTwo")
      .transition()
      .attr("stroke", "gold")
      .duration(2000);

    d3.select("#boromir")
      .transition()
      .attr("width", "250")
      .attr("height", "250")
      .attr("x", "-25")
      .attr("y", "-25")
      .duration(2000);
  })
  .on("mouseout", function() {
    d3.select(".pathTwo")
      .transition()
      .attr("stroke", "steelblue")
      .duration(2000);

    d3.select("#boromir")
      .transition()
      .attr("width", "200")
      .attr("height", "200")
      .attr("x", "0")
      .attr("y", "0")
      .duration(2000);
  });

var totalLength = path.node().getTotalLength();

path2
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
    .duration(4000)
    // .ease("linear")
    .attr("stroke-dashoffset", 0)
  .on("end", function() {
    path2.attr("stroke-dasharray", "none");
  });

var path3 = group3.append("path")
  .attr("d", line(data3) + "z")
  .attr("stroke", "steelblue")
  .attr("stroke-width", "8")
  .attr("fill", "url(#starwars)");

var totalLength = path.node().getTotalLength();

path3
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
    .duration(4000)
    // .ease("linear")
    .attr("stroke-dashoffset", 0)
  .on("end", function() {
    path3.attr("stroke-dasharray", "none");
  });
