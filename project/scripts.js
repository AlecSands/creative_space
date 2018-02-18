var svg = d3.select("svg")

var group = svg.append("g")
  .attr("transform", "translate(250, 250)");

var data = [
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
  .attr("stroke-width", "5")
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
