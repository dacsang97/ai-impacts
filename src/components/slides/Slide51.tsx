import {
	Analytics,
	AssemblyCluster,
	Book,
	ChartRelationship,
	Link,
	Search,
	SecurityServices,
	Tools,
} from "@carbon/icons-react";
import { AICapabilitySlide } from "./AICapabilitySlide";

export const Slide51 = () => {
	const capabilities = [
		{
			name: "Giải thích logic code",
			percentage: 88,
			icon: ChartRelationship,
			description: "phân tích chi tiết",
		},
		{
			name: "Truy vết luồng dữ liệu",
			percentage: 92,
			icon: Search,
			description: "theo dõi hiệu quả",
		},
		{
			name: "Tìm kiếm tham chiếu",
			percentage: 95,
			icon: Link,
			description: "tìm kiếm toàn diện",
		},
	];

	const impacts = [
		{
			icon: Book,
			title: "Onboarding nhanh hơn",
			description: "Hiểu codebase mới trong vài giờ thay vì vài ngày",
		},
		{
			icon: Tools,
			title: "Debug hiệu quả",
			description: "Tìm nguyên nhân lỗi và tác động của thay đổi",
		},
		{
			icon: SecurityServices,
			title: "Refactor an toàn",
			description: "Hiểu dependencies trước khi thay đổi",
		},
	];

	const tips = [
		{ text: "Explain code phức tạp cho team members" },
		{ text: "Tìm hiểu legacy code không có documentation" },
		{ text: "Phân tích impact của code changes" },
		{ text: "Tìm unused code và dead code" },
		{ text: "Hiểu pattern và architecture của project" },
	];

	return (
		<AICapabilitySlide
			title="AI: Chuyên Gia Đọc Hiểu Code"
			subtitle="AI xuất sắc trong việc giải thích logic phức tạp, truy vết luồng dữ liệu và tìm kiếm tham chiếu, giúp developers hiểu code nhanh hơn."
			slideNumber="5.1"
			slideTitle="AI Giúp Ích: Đọc Hiểu Code"
			backgroundColor="bg-blue-50"
			capabilityTitle="Khả năng phân tích code của AI"
			capabilityTitleIcon={Analytics}
			capabilities={capabilities}
			impactTitle="Lợi ích thực tế"
			impactTitleIcon={Book}
			impacts={impacts}
			tipTitle="Use Cases Tốt Nhất"
			tipTitleIcon={AssemblyCluster}
			tips={tips}
			capabilityStyle="detailed"
			colorScheme="blue"
		/>
	);
};
