import {
	CheckmarkFilled,
	CloudApp,
	Code,
	Edit,
	Flash,
	Idea,
	Renew,
	Settings,
} from "@carbon/icons-react";
import { AICapabilitySlide } from "./AICapabilitySlide";

export const Slide5 = () => {
	const capabilities = [
		{
			name: "Tạo hàm, lớp cơ bản",
			percentage: 95,
			icon: Code,
			description: "Functions, classes, boilerplate",
		},
		{
			name: "Chuyển đổi cú pháp",
			percentage: 90,
			icon: Renew,
			description: "Language conversion, refactoring",
		},
		{
			name: "Gợi ý code theo ngữ cảnh",
			percentage: 80,
			icon: Idea,
			description: "Context-aware suggestions",
		},
		{
			name: "Tạo API endpoints",
			percentage: 85,
			icon: CloudApp,
			description: "REST APIs, GraphQL",
		},
	];

	const impacts = [
		{
			icon: Flash,
			title: "Tăng tốc 50%",
			description: "trong việc viết code mới",
		},
		{
			icon: CheckmarkFilled,
			title: "Giảm lỗi syntax",
			description: "AI hiếm khi mắc lỗi cú pháp",
		},
		{
			icon: Settings,
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
			capabilityTitle="Khả năng của AI trong việc viết code"
			capabilityTitleIcon={Edit}
			capabilities={capabilities}
			impactTitle="Tác động thực tế"
			impactTitleIcon={Flash}
			impacts={impacts}
			tipTitle="Lời khuyên"
			tipTitleIcon={Idea}
			tips={tips}
			capabilityStyle="detailed"
			colorScheme="green"
		/>
	);
};
