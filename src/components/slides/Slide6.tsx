import { Idea, Rocket } from "@carbon/icons-react";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide6 = () => {
	return (
		<SlideLayout
			title="AI: Trợ Thủ Đắc Lực Trong Quy Trình Phát Triển"
			subtitle="AI tiếp tục hỗ trợ trong các giai đoạn cuối của vòng đời phát triển phần mềm, giúp đảm bảo sự ổn định và hiệu suất."
			className="bg-yellow-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				6. AI Giúp Ích Ở Đâu
			</div>

			<div className="grid md:grid-cols-2 gap-8 items-center mt-16">
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
						<Rocket size={24} className="mr-2 text-orange-500" /> Triển khai &
						Giám sát
					</h3>
					<p className="text-gray-600 mb-2">
						AI giúp phân tích log, phát hiện bất thường, và cảnh báo sự cố tiềm
						năng trước khi chúng xảy ra. Cải thiện khoảng 30%.
					</p>
					<ul className="space-y-1 text-gray-700 text-sm">
						<li>- Phân tích log tự động</li>
						<li>- Phát hiện bất thường</li>
						<li>- Cảnh báo sớm sự cố</li>
					</ul>
				</Card>

				<Card className="bg-gray-800 text-white">
					<h3 className="text-xl font-bold mb-4 flex items-center">
						<Idea size={24} className="mr-2 text-yellow-300" /> Tóm tắt:
						AI-First Tasks
					</h3>
					<p className="opacity-90 mb-2">
						AI là lựa chọn hàng đầu cho các tác vụ mang tính lặp lại, có cấu
						trúc rõ ràng và cần tốc độ cao.
					</p>
					<ul className="opacity-90 space-y-1 text-sm">
						<li>- Viết unit test</li>
						<li>- Cập nhật tài liệu từ chat</li>
						<li>- Tạo mã boilerplate</li>
						<li>- Tóm tắt log/báo cáo</li>
					</ul>
				</Card>
			</div>

			<blockquote className="mt-8 text-lg italic text-gray-500 border-l-4 border-orange-500 pl-4 text-center">
				"Sử dụng AI nơi nó giúp ích, nhưng hãy làm chủ những gì thực sự quan
				trọng."
			</blockquote>
		</SlideLayout>
	);
};
