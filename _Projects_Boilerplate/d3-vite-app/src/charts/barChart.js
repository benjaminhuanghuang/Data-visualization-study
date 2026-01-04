import * as d3 from "d3";

/**
 * Draw a bar chart
 * @param {string} selector - CSS selector for svg
 * @param {number[]} data
 */
export function barChart(selector, data) {
  const width = 400;
  const height = 250;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  const svg = d3.select(selector).attr("width", width).attr("height", height);

  // clear old content
  svg.selectAll("*").remove();

  const xScale = d3
    .scaleBand()
    .domain(data.map((_, i) => i))
    .range([margin.left, width - margin.right])
    .padding(0.2);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  // bars
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", (_, i) => xScale(i))
    .attr("y", (d) => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => height - margin.bottom - yScale(d))
    .attr("fill", "steelblue");

  // x axis
  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale));

  // y axis
  svg
    .append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale));
}
