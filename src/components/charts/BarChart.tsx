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
import type { ReactNode } from "react";
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

interface BarChartProps {
	labels: (string | ReactNode)[];
	data: number[];
	label?: string;
	horizontal?: boolean;
	color?: string;
	highlightColor?: string;
	highlightIndex?: number;
	suffix?: string;
}

export const BarChart = ({
	labels,
	data,
	label = "Data",
	horizontal = false,
	color = chartColors.primary,
	highlightColor = chartColors.highlight,
	highlightIndex = -1,
	suffix = "",
}: BarChartProps) => {
	const backgroundColors = data.map((_, index) =>
		index === highlightIndex ? highlightColor : color,
	);

	const chartData = {
		labels: labels.map((l) => (typeof l === "string" ? l : "")), // Chart.js needs string labels
		datasets: [
			{
				label,
				data,
				backgroundColor: backgroundColors,
				borderRadius: 4,
				maxBarThickness: 50,
			},
		],
	};

	const options: ChartOptions<"bar"> = {
		responsive: true,
		maintainAspectRatio: false,
		indexAxis: horizontal ? ("y" as const) : ("x" as const),
		plugins: {
			legend: {
				position: "top" as const,
				align: "end",
				labels: {
					color: chartColors.text,
					font: {
						family: "'Be Vietnam Pro', sans-serif",
					},
				},
			},
			datalabels: {
				display: true,
				color: chartColors.text,
				anchor: "center",
				align: "center",
				font: {
					weight: "bold",
				},
				formatter: (value) => {
					return value + (suffix || "");
				},
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
				},
				ticks: {
					display: false,
				},
			},
			y: {
				beginAtZero: true,
				grid: {
					display: !horizontal,
					color: chartColors.grid,
				},
				ticks: {
					display: false,
				},
				border: {
					display: false,
				},
			},
		},
	};

	return (
		<div className="w-full max-w-2xl mx-auto">
			<div className="relative h-80">
				<Bar data={chartData} options={options} />
			</div>
			{!horizontal && (
				<div className="flex justify-around mt-4 pt-2">
					{labels.map((label, index) => {
						const key =
							typeof label === "string" ? label : `icon-${data[index]}`;
						return (
							<div key={key} className="w-1/5 text-center text-gray-600">
								{label}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
