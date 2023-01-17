var margin = {
  top: 15,
  bottom: 15,
  left: 70,
  right: 15
}
// Data for the chart
var data = [{
      year: 2010,
      points: 80
  },
  {
      year: 2011,
      points: 70
  },
  {
      year: 2012,
      points: 90
  },
  {
      year: 2013,
      points: 85
  },
  {
      year: 2014,
      points: 75
  },
  {
      year: 2015,
      points: 95
  },
  {
      year: 2016,
      points: 80
  },
  {
      year: 2017,
      points: 90
  },
  {
      year: 2018,
      points: 95
  },
  {
      year: 2019,
      points: 85
  },
  {
      year: 2020,
      points: 75
  }
]

var width = 900;
var height = 600;

var svg = d3.select("#svg-area")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
.domain(data.map(function(d) {
return d.year;
}))
.range([margin.left, width - margin.right])
.padding(0.1);

var y = d3.scaleLinear()
.domain([0, d3.max(data, function(d) {
return d.points;
})])
.range([height - margin.bottom, margin.top]);

var xAxis = d3.axisBottom(x)
var yAxis = d3.axisLeft(y)
svg.append("g")
.attr("transform", "translate(0," + (height - margin.bottom) + ")")
.call(xAxis);
var yAxis = d3.axisLeft(y);
svg.append("g")
.attr("transform", "translate(" + margin.left + ",0)")
.call(yAxis);

var color = d3.scaleOrdinal(d3.schemeCategory10);

var bars = svg.selectAll(".bar")
.data(data)
.enter()
.append("rect")
.attr("class", "bar")
.attr("x", function(d) {
return x(d.year);
})
.attr("y", function(d) {
return y(d.points);
})
.attr("width", x.bandwidth())
.attr("height", function(d) {
return height - margin.bottom - y(d.points);
})
var xAxis = d3.axisBottom(x)
var yAxis = d3.axisLeft(y)
svg.append("g")
.attr("transform", "translate(0," + (height - margin.bottom) + ")")
.call(xAxis);
.text("Year");
var yAxis = d3.axisLeft(y);
svg.append("g")
.attr("transform", "translate(" + margin.left + ",0)")
.call(yAxis);
bars.data(data)
.enter()
.append("text")
.attr("x", function(d) { return x(d.year) + x.bandwidth() / 2; })
.attr("y", function(d) { return y(d.points) + 5; })
.text(function(d) { return d.points; })
.style("text-anchor", "middle");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var bars = svg.selectAll(".bar")
bars.style("fill", function(d) {
  return color(d3.randomUniform(0, 1)());
});
setInterval(function(){
  bars.style("fill", function(d) {
      return color(d3.randomUniform(0, 1)());
  });
}, 1000);

svg.selectAll(".bar")
  .data(data)
  .join("rect")
  .attr("class", "bar")
  .attr("x", function(d) {
      return x(d.year);
  })
  .attr("y", function(d) {
      return y(d.points);
  })
  .attr("width", x.bandwidth())
  .attr("height", function(d) {
      return height - margin.bottom - y(d.points);
  })
var color = d3.scaleOrdinal(d3.schemeCategory10);
var bars = svg.selectAll(".bar")
bars.style("fill", function(d) {
  return color(d3.random.normal());
});
setInterval(function(){
  bars.style("fill", function(d) {
      return color(d3.random.normal());
  });
},1000)

  var color = d3.scaleLinear()
  .domain([0, d3.max(data, function(d) { return d.points; })])
  .range(["red", "green"]);
  var bars = svg.selectAll(".bar")
  bars.data(data)
    .enter()
    .append("text")
    .attr("x", function(d) { return x(d.year) + x.bandwidth() / 2; })
    .attr("y", function(d) { return y(d.points) - 10; })
    .text(function(d) { return d.points; })
    .style("fill", "black")
    .style("text-anchor", "middle")
svg.selectAll(".bar")
  .data(data)
  .join("rect")
  .attr("class", "bar")
  .attr("x", function(d) { return x(d.year); })
  .attr("y", function(d) { return y(d.points); })
  .attr("width", x.bandwidth())
  .attr("height", function(d) { return height - margin.bottom - y(d.points); })
  .style("fill", function(d) { return color(d.points); });

  svg.append("text")
  .attr("text-anchor", "middle")
  .attr("x", width- margin.right)
  .attr("y", height + margin.top + 20)
  .text("Season Year");

svg.append("text")
  .attr("text-anchor", "top")
  .attr("transform", "rotate(-90)")
  .attr("y", -margin.bottom-20)
  .attr("x", -margin.top)
    .text("Points per Season");

var average = d3.sum(data, function(d){ return d.points; })/data.length;
var aboveAverage = data.filter(function(d){ return d.points > average });

var circles = svg.append("g")
  .selectAll("circle")
  .data(aboveAverage)
  .enter()
  .append("circle")
  .attr("cx", function(d) { return x(d.year) + x.bandwidth() / 2; })
  .attr("cy", function(d) { return y(d.points); })
  .attr("r", 8)
  .style("fill", "blue")
  .attr("class", "above-average-circle");
