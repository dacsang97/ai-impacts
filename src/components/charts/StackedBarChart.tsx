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

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartDataLabels,
);

interface StackedChartData {
	saved: number;
	remaining: number;
}

interface StackedBarChartProps {
	data: StackedChartData[];
	labels: string[];
	label?: string;
	color?: string;
	backgroundColor?: string;
	suffix?: string;
}

export const StackedBarChart = ({ data, labels }: StackedBarChartProps) => {
	const options: ChartOptions<"bar"> = {
		indexAxis: "y",
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				stacked: true,
				display: false,
			},
			y: {
				stacked: true,
				grid: {
					display: false,
				},
				border: {
					display: false,
				},
				ticks: {
					font: {
						family: "IBM Plex Mono",
						size: 14,
						weight: "bold",
					},
					color: "#000000",
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
			},
			datalabels: {
				color: "#000000",
				font: {
					family: "IBM Plex Mono",
					weight: "bold",
				},
				formatter: (value: number) => {
					return value > 0 ? `${value}%` : "";
				},
			},
		},
	};

	const chartData = {
		labels,
		datasets: [
			{
				label: "Thời gian tiết kiệm",
				data: data.map((d) => d.saved),
				backgroundColor: "#D7F344",
				borderColor: "#000000",
				borderWidth: 2,
			},
			{
				label: "Thời gian còn lại",
				data: data.map((d) => d.remaining),
				backgroundColor: "#E0E0E0", // A light grey for the rest
				borderColor: "#000000",
				borderWidth: 2,
			},
		],
	};

	return (
		<div className="p-4 border-2 border-black bg-white shadow-[4px_4px_0px_#000000]">
			<Bar options={options} data={chartData} />
		</div>
	);
};
