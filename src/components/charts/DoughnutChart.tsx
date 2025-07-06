import { Doughnut } from "react-chartjs-2";
import "./ChartSetup";
import { chartColors } from "../../data/chartData";

interface DoughnutChartProps {
	labels: string[];
	data: number[];
	label?: string;
}

export const DoughnutChart = ({
	labels,
	data,
	label = "Data",
}: DoughnutChartProps) => {
	const chartData = {
		labels,
		datasets: [
			{
				label,
				data,
				backgroundColor: chartColors.backgrounds,
				borderColor: "#FDFBF7",
				borderWidth: 2,
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
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
			datalabels: {
				color: "#fff",
				font: {
					weight: "bold",
					size: 14,
				},
				formatter: (
					value: number,
					context: { dataset: { data: number[] } },
				) => {
					const total = context.dataset.data.reduce(
						(a: number, b: number) => a + b,
						0,
					);
					const percentage = ((value / total) * 100).toFixed(0);
					return `${percentage}%`;
				},
			},
		},
	};

	return (
		<div className="relative w-full max-w-md mx-auto h-80">
			<Doughnut data={chartData} options={options} />
		</div>
	);
};
