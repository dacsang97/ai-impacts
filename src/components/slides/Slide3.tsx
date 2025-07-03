import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide3 = () => {
	return (
		<SlideLayout
			title='AI: Đồng Đội "Junior" Nhanh Nhẹn, Cần Được Hướng Dẫn'
			subtitle="AI ngày nay giống như một kỹ sư junior thông minh: rất nhanh, không mệt mỏi, nhưng cần sự hướng dẫn rõ ràng và kiểm soát chặt chẽ."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				2. AI: Đồng Đội "Junior" Của Bạn
			</div>

			<div className="grid md:grid-cols-2 gap-8 items-start mt-16">
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						AI có thể làm gì? ✅
					</h3>
					<ul className="space-y-2 text-gray-700">
						<li className="flex items-start">
							<span className="text-teal-500 mr-2">✓</span>
							<span>Tạo mã boilerplate, cấu trúc dự án.</span>
						</li>
						<li className="flex items-start">
							<span className="text-teal-500 mr-2">✓</span>
							<span>Tạo test từ API specs, gợi ý giải pháp.</span>
						</li>
						<li className="flex items-start">
							<span className="text-teal-500 mr-2">✓</span>
							<span>Refactor code nhỏ, tóm tắt tài liệu/log.</span>
						</li>
					</ul>
				</Card>

				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						AI còn hạn chế gì? ❌
					</h3>
					<ul className="space-y-2 text-gray-700">
						<li className="flex items-start">
							<span className="text-red-500 mr-2">✗</span>
							<span>Đánh giá trade-off dài hạn, hiểu ngữ cảnh hệ thống.</span>
						</li>
						<li className="flex items-start">
							<span className="text-red-500 mr-2">✗</span>
							<span>Đảm bảo khả năng bảo trì/hiệu suất/sự tinh tế.</span>
						</li>
						<li className="flex items-start">
							<span className="text-red-500 mr-2">✗</span>
							<span>Phát hiện lỗi tinh vi cần kinh nghiệm thực tế.</span>
						</li>
					</ul>
				</Card>
			</div>

			<blockquote className="mt-8 text-lg italic text-gray-500 border-l-4 border-teal-500 pl-4 text-center">
				"Hãy coi AI như một đồng đội, không phải một công cụ thuần túy. Nó cần
				hướng dẫn rõ ràng, kiểm tra công việc và được dạy các tiêu chuẩn của
				bạn."
			</blockquote>
		</SlideLayout>
	);
};
