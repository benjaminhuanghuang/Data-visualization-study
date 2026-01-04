import { barChart } from "./charts/barChart";
import { lineChart } from "./charts/lineChart";
import data from "./data/data.json";

// Create SVGs dynamically
const barSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
barSvg.id = "bar-chart";

const lineSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
lineSvg.id = "line-chart";

document.body.append("Bar Chart", barSvg);
document.body.append("Line Chart", lineSvg);

// Draw charts
barChart("#bar-chart", data.barData);
lineChart("#line-chart", data.lineData);
