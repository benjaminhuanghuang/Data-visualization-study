/*
D3 draws scale & axis，React renders SVG
*/
import * as d3 from "d3";
import { useRef, useEffect } from "react";

export default function BarChart({ data }) {
  const svgRef = useRef();

  const width = 500;
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // scales (D3 math)
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

  // axis (D3 needs DOM)
  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg
      .select(".x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg
      .select(".y-axis")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));
  }, [data]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      {/* Bars */}
      {data.map((d, i) => (
        <rect
          key={i}
          x={xScale(i)}
          y={yScale(d)}
          width={xScale.bandwidth()}
          height={height - margin.bottom - yScale(d)}
          fill="steelblue"
        />
      ))}

      {/* Axis containers */}
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}
