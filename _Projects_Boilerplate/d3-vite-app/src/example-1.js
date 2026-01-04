import * as d3 from "d3";

const data = [30, 80, 45, 60, 20, 90];

const width = 500;
const height = 300;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const svg = d3.select("#chart").attr("width", width).attr("height", height);

// x 轴比例尺
const xScale = d3
  .scaleBand()
  .domain(data.map((_, i) => i))
  .range([margin.left, width - margin.right])
  .padding(0.2);

// y 轴比例尺
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .range([height - margin.bottom, margin.top]);

// 画柱子
svg
  .selectAll("rect")
  .data(data)
  .join("rect")
  .attr("x", (_, i) => xScale(i))
  .attr("y", (d) => yScale(d))
  .attr("width", xScale.bandwidth())
  .attr("height", (d) => height - margin.bottom - yScale(d))
  .attr("fill", "steelblue");

// x 轴
svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(xScale));

// y 轴
svg
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(yScale));

// Hover effect
svg
  .selectAll("rect")
  .on("mouseenter", function () {
    d3.select(this).transition().duration(200).attr("fill", "orange");
  })
  .on("mouseleave", function () {
    d3.select(this).transition().duration(200).attr("fill", "steelblue");
  });
