import { AICapabilitySlide } from "./AICapabilitySlide";

export const Slide52 = () => {
	const capabilities = [
		{
			name: "Tạo khung tài liệu",
			percentage: 90,
			icon: "📋",
			description: "Design docs, PRDs, Technical specs",
		},
		{
			name: "Tóm tắt ghi chú cuộc họp",
			percentage: 85,
			icon: "📑",
			description: "Action items, decisions, next steps",
		},
		{
			name: "Phân rã công việc",
			percentage: 80,
			icon: "🔨",
			description: "Break down epic thành tasks nhỏ",
		},
	];

	const workflowItems = [
		{
			icon: "💭",
			title: "Brainstorm nhanh",
			description: "AI giúp generate ideas và structure thoughts",
		},
		{
			icon: "📊",
			title: "Template thông minh",
			description: "Tự động tạo format phù hợp với context",
		},
		{
			icon: "🔄",
			title: "Iterate nhanh chóng",
			description: "Refine và improve content liên tục",
		},
	];

	const tips = [
		{ text: "Provide context và background để AI hiểu rõ" },
		{ text: "Sử dụng AI cho first draft, human review cho quality" },
		{ text: "Kết hợp AI với team brainstorming sessions" },
		{ text: "Standardize format để AI output nhất quán" },
		{ text: "Keep human touch cho stakeholder communication" },
	];

	return (
		<AICapabilitySlide
			title="AI: Trợ Lý Lập Kế Hoạch & Tài Liệu"
			subtitle="AI hỗ trợ mạnh mẽ trong việc tạo bản nháp, outline kế hoạch và tóm tắt meetings, tiết kiệm 40% thời gian làm việc với documents."
			slideNumber="5.2"
			slideTitle="AI Giúp Ích: Lập Kế Hoạch & Tài Liệu"
			backgroundColor="bg-purple-50"
			capabilityTitle="📝 Khả năng xử lý tài liệu của AI"
			capabilities={capabilities}
			impactTitle="⚡ Workflow Tối Ưu"
			impacts={[]} // Empty để sử dụng workflowItems
			workflowItems={workflowItems}
			tipTitle="🎯 Practical Tips"
			tips={tips}
			capabilityStyle="detailed"
			colorScheme="purple"
		/>
	);
};
