import * as d3 from "d3";

/**
 * Draw a line chart
 * @param {string} selector - CSS selector for svg
 * @param {{x:number,y:number}[]} data
 */
export function lineChart(selector, data) {
  const width = 400;
  const height = 250;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  const svg = d3.select(selector).attr("width", width).attr("height", height);

  svg.selectAll("*").remove();

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d.x))
    .range([margin.left, width - margin.right]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.y)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const line = d3
    .line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  // path
  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "tomato")
    .attr("stroke-width", 2)
    .attr("d", line);

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
