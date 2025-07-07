import {
	Chat,
	Document,
	DocumentMultiple_01,
	DocumentTasks,
	Flash,
	Idea,
	Renew,
	Table,
	TaskSettings,
} from "@carbon/icons-react";
import { AICapabilitySlide } from "./AICapabilitySlide";

export const Slide52 = () => {
	const capabilities = [
		{
			name: "Tạo khung tài liệu",
			percentage: 90,
			icon: Document,
			description: "Design docs, PRDs, Technical specs",
		},
		{
			name: "Tóm tắt ghi chú cuộc họp",
			percentage: 85,
			icon: DocumentTasks,
			description: "Action items, decisions, next steps",
		},
		{
			name: "Phân rã công việc",
			percentage: 80,
			icon: TaskSettings,
			description: "Break down epic thành tasks nhỏ",
		},
	];

	const workflowItems = [
		{
			icon: Chat,
			title: "Brainstorm nhanh",
			description: "AI giúp generate ideas và structure thoughts",
		},
		{
			icon: Table,
			title: "Template thông minh",
			description: "Tự động tạo format phù hợp với context",
		},
		{
			icon: Renew,
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
			capabilityTitle="Khả năng xử lý tài liệu của AI"
			capabilityTitleIcon={DocumentMultiple_01}
			capabilities={capabilities}
			impactTitle="Workflow Tối Ưu"
			impactTitleIcon={Flash}
			impacts={[]} // Empty để sử dụng workflowItems
			workflowItems={workflowItems}
			tipTitle="Practical Tips"
			tipTitleIcon={Idea}
			tips={tips}
			capabilityStyle="detailed"
			colorScheme="purple"
		/>
	);
};
