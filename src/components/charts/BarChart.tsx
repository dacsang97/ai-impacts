import type { ReactNode } from "react";
import { Bar } from "react-chartjs-2";
import "./ChartSetup";
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
import { chartColors } from "../../data/chartData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
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
				position: "bottom" as const,
				labels: {
					color: chartColors.text,
					font: {
						family: "'Be Vietnam Pro', sans-serif",
					},
				},
			},
		},
		scales: {
			x: {
				beginAtZero: true,
				grid: {
					display: horizontal,
					color: chartColors.grid,
				},
				ticks: {
					display: !horizontal, // Hide original labels if vertical
					color: chartColors.text,
					callback: function (value) {
						if (horizontal && suffix) {
							const numericValue = this.getLabelForValue(value as number);
							return numericValue + suffix;
						}
						return this.getLabelForValue(value as number);
					},
				},
			},
			y: {
				beginAtZero: true,
				grid: {
					display: !horizontal,
					color: chartColors.grid,
				},
				ticks: {
					display: horizontal, // Hide original labels if horizontal
					color: chartColors.text,
					callback: function (value) {
						if (!horizontal && suffix) {
							const label = this.getLabelForValue(value as number);
							return label + suffix;
						}
						return this.getLabelForValue(value as number);
					},
				},
			},
		},
	};

	return (
		<div className="relative w-full max-w-2xl mx-auto h-80">
			<Bar data={chartData} options={options} />
			{!horizontal && (
				<div className="flex justify-around mt-2">
					{labels.map((label, index) => (
						<div
							key={typeof label === "string" ? label : index}
							className="w-1/5 text-center"
						>
							{label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
