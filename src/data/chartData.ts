export const chartData = {
	timeAllocation: {
		labels: [
			"Viết code",
			"Chọn giải pháp",
			"Hiểu vấn đề",
			"Test & Sửa lỗi",
			"Lập kế hoạch",
			"Triển khai & Giám sát",
		],
		data: [30, 20, 15, 15, 10, 10],
	},
	chatGPTGrowth: {
		labels: ["Tuần 1-2", "Tuần 3-4", "Tuần 5-6", "Tuần 7-8"],
		data: [5, 25, 60, 100], // Data in millions of users - 2 months total
	},
	timeSaving: {
		labels: [
			"Viết code",
			"Test & Tự động hóa",
			"Lập kế hoạch & Tài liệu",
			"Triển khai & Giám sát",
		],
		data: [50, 50, 40, 30],
	},
	// New data for user growth comparison
	userGrowthComparison: {
		labels: ["ChatGPT", "TikTok", "Instagram", "Spotify", "Telegram"],
		data: [2, 9, 30, 55, 61], // Time in months to reach 100M users
	},
};

export const chartColors = {
	primary: "#4FD1C5", // teal-400
	secondary: "#F6AD55", // orange-300
	highlight: "#F687B3", // pink-400
	text: "#4A5568", // gray-600
	grid: "#E2E8F0", // gray-300
	backgrounds: [
		"#4DB6AC",
		"#FFB74D",
		"#7986CB",
		"#4DD0E1",
		"#BA68C8",
		"#90A4AE",
	],
};
