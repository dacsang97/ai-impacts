import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";
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
	highlightLabel?: string;
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
	highlightLabel,
}: BarChartProps) => {
	const backgroundColors = data.map((_, index) =>
		index === highlightIndex ? highlightColor : color,
	);

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				ticks: {
					font: {
						family: "IBM Plex Mono",
					},
				},
				grid: {
					display: false,
				},
				border: {
					color: "#000000",
					width: 2,
				},
			},
			y: {
				ticks: {
					font: {
						family: "IBM Plex Mono",
					},
				},
				grid: {
					display: false,
				},
				border: {
					color: "#000000",
					width: 2,
				},
			},
		},
		plugins: {
			legend: {
				position: "top" as const,
				labels: {
					font: {
						family: "IBM Plex Mono",
					},
				},
			},
			tooltip: {
				titleFont: { family: "IBM Plex Mono" },
				bodyFont: { family: "IBM Plex Mono" },
				backgroundColor: "#ffffff",
				titleColor: "#000000",
				bodyColor: "#000000",
				borderColor: "#000000",
				borderWidth: 2,
				padding: 10,
				caretSize: 0,
				displayColors: false,
			},
		},
	};

	const chartData = {
		labels: labels.map(() => ""),
		datasets: [
			{
				label: "Thời gian (tháng)",
				data: data,
				backgroundColor: backgroundColors,
				borderColor: "#000000",
				borderWidth: 2,
				borderRadius: 0,
			},
		],
	};

	return (
		<div className="p-4 border-2 border-black bg-white shadow-[4px_4px_0px_#000000]">
			<div className="h-[250px]">
				<Bar options={options} data={chartData} />
			</div>
			<div className="flex justify-around mt-4">
				{labels.map((label, index) => (
					<div key={`${index}-${data[index]}`} className="w-full text-center">
						{label}
					</div>
				))}
			</div>
		</div>
	);
};
