import { Bar } from "react-chartjs-2";
import "./ChartSetup";
import { chartColors } from "../../data/chartData";

interface BarChartProps {
	labels: string[];
	data: number[];
	label?: string;
	horizontal?: boolean;
	color?: string;
	suffix?: string;
}

export const BarChart = ({
	labels,
	data,
	label = "Data",
	horizontal = false,
	color = chartColors.primary,
	suffix = "",
}: BarChartProps) => {
	const chartData = {
		labels,
		datasets: [
			{
				label,
				data,
				backgroundColor: color,
				borderRadius: 4,
				maxBarThickness: 50,
			},
		],
	};

	const options = {
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
					color: chartColors.text,
					callback: (value: number) => {
						return horizontal && suffix ? value + suffix : value;
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
					color: chartColors.text,
					callback: (value: string | number) => {
						return !horizontal && suffix ? value + suffix : value;
					},
				},
			},
		},
	};

	return (
		<div className="relative w-full max-w-2xl mx-auto h-80">
			<Bar data={chartData} options={options as any} />
		</div>
	);
};
