import { AICapabilitySlide } from "./AICapabilitySlide";

export const Slide53 = () => {
	const capabilities = [
		{
			name: "Unit Tests",
			percentage: 95,
			icon: "⚡",
			description: "Tạo test cases cho functions",
		},
		{
			name: "Integration Tests",
			percentage: 85,
			icon: "🔗",
			description: "Test API endpoints & workflows",
		},
		{
			name: "E2E Tests",
			percentage: 75,
			icon: "👤",
			description: "Mô phỏng user interactions",
		},
		{
			name: "Bug Detection",
			percentage: 80,
			icon: "🔍",
			description: "Phát hiện edge cases & errors",
		},
	];

	const workflowItems = [
		{
			icon: "📝",
			title: "Test Planning",
			description: "AI analyze requirements → generate test scenarios",
		},
		{
			icon: "🤖",
			title: "Auto Generation",
			description: "Generate test data, mocks, và assertions",
		},
		{
			icon: "🔧",
			title: "Maintenance",
			description: "Update tests khi code changes",
		},
	];

	const tips = [
		{ text: "AI tốt cho happy path, cần human cho edge cases" },
		{ text: "Review test logic, đừng blind trust AI output" },
		{ text: "Combine AI với manual exploratory testing" },
		{ text: "Maintain test data quality cho AI training" },
		{ text: "AI test cần được test - avoid false confidence" },
	];

	return (
		<AICapabilitySlide
			title="AI: Chuyên Gia Test & Tự Động Hóa"
			subtitle="AI xuất sắc trong việc tạo test cases, mô phỏng user scenarios và detect bugs, tiết kiệm 50% thời gian viết test tự động."
			slideNumber="5.3"
			slideTitle="AI Giúp Ích: Test & Tự Động Hóa"
			backgroundColor="bg-orange-50"
			capabilityTitle="🧪 Testing Capabilities của AI"
			capabilities={capabilities}
			impactTitle="🚀 Testing Strategy với AI"
			impacts={[]} // Empty để sử dụng workflowItems
			workflowItems={workflowItems}
			tipTitle="⚠️ Lưu Ý Quan Trọng"
			tips={tips}
			capabilityStyle="detailed"
			colorScheme="orange"
		/>
	);
};
