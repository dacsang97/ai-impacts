import {
	CheckmarkOutline,
	ChevronUp,
	DataConnected,
	Flash,
	Idea,
	RepeatOne,
	ResultOld,
	TestTool,
	TextSelection,
} from "@carbon/icons-react";
import { AICapabilitySlide } from "./AICapabilitySlide";

export const Slide53 = () => {
	const capabilities = [
		{
			name: "Viết unit tests tự động",
			percentage: 90,
			icon: CheckmarkOutline,
			description: "Test cases coverage",
		},
		{
			name: "Generate test data mẫu",
			percentage: 85,
			icon: TextSelection,
			description: "Mock data scenarios",
		},
		{
			name: "Integration test scenarios",
			percentage: 75,
			icon: DataConnected,
			description: "End-to-end workflows",
		},
	];

	const impacts = [
		{
			icon: ResultOld,
			title: "Tăng test coverage",
			description: "Đạt >80% coverage nhanh chóng",
		},
		{
			icon: ChevronUp,
			title: "Tăng chất lượng code",
			description: "Tìm bugs sớm trong dev cycle",
		},
		{
			icon: RepeatOne,
			title: "CI/CD ổn định",
			description: "Ít broken builds hơn",
		},
	];

	const tips = [
		{ text: "Sử dụng AI để write test cho legacy code" },
		{ text: "Generate edge cases mà developer có thể miss" },
		{ text: "Tạo performance test scenarios" },
		{ text: "Auto-generate mock data cho các scenarios khác nhau" },
		{ text: "Review AI tests để ensure quality và coverage" },
	];

	return (
		<AICapabilitySlide
			title="AI: Trợ Thủ Testing Toàn Diện"
			subtitle="AI excels trong việc generate test cases, tạo mock data và coverage analysis, giúp đạt >80% test coverage nhanh chóng."
			slideNumber="5.3"
			slideTitle="AI Giúp Ích: Testing & QA"
			backgroundColor="bg-orange-50"
			capabilityTitle="Testing Capabilities của AI"
			capabilityTitleIcon={TestTool}
			capabilities={capabilities}
			impactTitle="Kết Quả Đạt Được"
			impactTitleIcon={Flash}
			impacts={impacts}
			tipTitle="Practical Applications"
			tipTitleIcon={Idea}
			tips={tips}
			capabilityStyle="detailed"
			colorScheme="orange"
		/>
	);
};
