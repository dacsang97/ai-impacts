import { AICapabilitySlide } from "./AICapabilitySlide";

export const Slide5 = () => {
	const capabilities = [
		{
			name: "Tạo hàm, lớp cơ bản",
			percentage: 95,
			icon: "⚡",
			description: "Functions, classes, boilerplate",
		},
		{
			name: "Chuyển đổi cú pháp",
			percentage: 90,
			icon: "🔄",
			description: "Language conversion, refactoring",
		},
		{
			name: "Gợi ý code theo ngữ cảnh",
			percentage: 80,
			icon: "🧠",
			description: "Context-aware suggestions",
		},
		{
			name: "Tạo API endpoints",
			percentage: 85,
			icon: "🌐",
			description: "REST APIs, GraphQL",
		},
	];

	const impacts = [
		{
			icon: "⚡",
			title: "Tăng tốc 50%",
			description: "trong việc viết code mới",
		},
		{
			icon: "🎯",
			title: "Giảm lỗi syntax",
			description: "AI hiếm khi mắc lỗi cú pháp",
		},
		{
			icon: "🔄",
			title: "Refactor nhanh",
			description: "Chuyển đổi code structure dễ dàng",
		},
	];

	const tips = [
		{ text: "Viết comment rõ ràng để AI hiểu context" },
		{ text: "Sử dụng AI cho boilerplate, tự code logic phức tạp" },
		{ text: "Luôn review và test code do AI tạo ra" },
		{ text: "Kết hợp AI với IDE autocomplete cho hiệu quả tối đa" },
	];

	return (
		<AICapabilitySlide
			title="AI: Trợ Thủ Viết Code Xuất Sắc"
			subtitle="AI tỏa sáng ở việc tạo code boilerplate, gợi ý theo context và chuyển đổi cú pháp, giúp tăng tốc độ viết code lên 50%."
			slideNumber="5"
			slideTitle="AI Giúp Ích: Viết Code"
			backgroundColor="bg-green-50"
			capabilityTitle="✍️ Khả năng của AI trong việc viết code"
			capabilities={capabilities}
			impactTitle="🚀 Tác động thực tế"
			impacts={impacts}
			tipTitle="💡 Lời khuyên"
			tips={tips}
			capabilityStyle="detailed"
			colorScheme="green"
		/>
	);
};
