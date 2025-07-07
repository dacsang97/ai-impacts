import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	type ChartOptions,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { chartColors } from "../../data/chartData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartDataLabels,
);

interface StackedBarChartProps {
	labels: string[];
	data: number[];
	label?: string;
	color?: string;
	backgroundColor?: string;
	suffix?: string;
}

export const StackedBarChart = ({
	labels,
	data,
	label = "Data",
	color = chartColors.secondary, // orange
	backgroundColor = "#E2E8F0", // gray-300
	suffix = "%",
}: StackedBarChartProps) => {
	const remainingData = data.map((d) => 100 - d);

	const chartData = {
		labels,
		datasets: [
			{
				label: label,
				data: data,
				backgroundColor: color,
				borderWidth: 0,
				borderRadius: {
					topLeft: 8,
					bottomLeft: 8,
					topRight: 0,
					bottomRight: 0,
				},
				borderSkipped: false,
			},
			{
				label: "Remaining",
				data: remainingData,
				backgroundColor: backgroundColor,
				borderWidth: 0,
				borderRadius: {
					topLeft: 0,
					bottomLeft: 0,
					topRight: 8,
					bottomRight: 8,
				},
				borderSkipped: false,
			},
		],
	};

	const options: ChartOptions<"bar"> = {
		indexAxis: "y" as const,
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				position: "top" as const,
				align: "end" as const,
				labels: {
					color: chartColors.text,
					boxWidth: 20,
					padding: 20,
					// Filter out the 'Remaining' legend item
					filter: (item) => item.text !== "Remaining",
				},
			},
			tooltip: {
				enabled: false,
			},
			datalabels: {
				color: "#1A202C", // gray-800
				font: {
					weight: "bold",
				},
				// Only show labels for the first dataset
				display: (context) => {
					return context.datasetIndex === 0;
				},
				formatter: (value) => value + suffix,
			},
		},
		scales: {
			x: {
				stacked: true,
				display: false,
				min: 0,
				max: 100,
			},
			y: {
				stacked: true,
				grid: {
					display: false,
				},
				ticks: {
					display: true, // Show Y-axis labels
					color: chartColors.text,
					font: {
						size: 14,
						family: "'Be Vietnam Pro', sans-serif",
					},
					padding: 10,
				},
				border: {
					display: false,
				},
			},
		},
	};

	return (
		<div className="relative w-full max-w-2xl mx-auto h-80">
			<Bar data={chartData} options={options} />
		</div>
	);
};
