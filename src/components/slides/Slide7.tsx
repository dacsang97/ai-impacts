import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide7 = () => {
	return (
		<SlideLayout
			title="Những Lĩnh Vực AI Chưa Sẵn Sàng (Hoặc Không Bao Giờ)"
			subtitle="AI vẫn còn những hạn chế lớn ở các tác vụ đòi hỏi sự phán đoán, hiểu biết sâu sắc về ngữ cảnh và tư duy dài hạn."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				7. AI Còn Hạn Chế Ở Đâu?
			</div>

			<div className="grid md:grid-cols-2 gap-8 mt-16">
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						🤔 Chọn giải pháp phù hợp
					</h3>
					<p className="text-gray-600 mb-2">
						AI không thể đánh giá các đánh đổi, hiểu hệ thống hiện tại, hoặc
						biết được mục tiêu kinh doanh dài hạn.
					</p>
					<ul className="space-y-1 text-gray-700 text-sm">
						<li>- Quyết định kiến trúc hệ thống</li>
						<li>- Đánh giá rủi ro dài hạn</li>
						<li>- Cân nhắc giữa giải pháp nhanh và bền vững</li>
					</ul>
				</Card>

				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						🔍 Hiểu vấn đề sâu sắc
					</h3>
					<p className="text-gray-600 mb-2">
						AI không thể đào sâu, đặt câu hỏi phản biện, hoặc tổng hợp thông tin
						từ nhiều nguồn không liên quan như con người.
					</p>
					<ul className="space-y-1 text-gray-700 text-sm">
						<li>- Phân tích yêu cầu người dùng</li>
						<li>- Khám phá nguyên nhân gốc rễ</li>
						<li>- Đặt câu hỏi chiến lược</li>
					</ul>
				</Card>

				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						🏗️ Thiết kế cho dài hạn
					</h3>
					<p className="text-gray-600 mb-2">
						Code do AI tạo ra thường thiếu khả năng bảo trì, không tuân thủ các
						design patterns, hoặc không tích hợp tốt với stack hiện có.
					</p>
					<ul className="space-y-1 text-gray-700 text-sm">
						<li>- Đảm bảo tính mở rộng</li>
						<li>- Duy trì tính nhất quán kiến trúc</li>
						<li>- Tối ưu hóa hiệu suất dài hạn</li>
					</ul>
				</Card>

				<Card className="bg-gray-800 text-white">
					<h3 className="text-xl font-bold mb-4">
						💡 Tóm tắt: Human-Led Tasks
					</h3>
					<p className="opacity-90 mb-2">
						Những tác vụ đòi hỏi sự phán đoán, sáng tạo, và hiểu biết sâu sắc về
						ngữ cảnh vẫn là vai trò cốt lõi của con người.
					</p>
					<ul className="opacity-90 space-y-1 text-sm">
						<li>- Thiết kế hệ thống</li>
						<li>- Quyết định kiến trúc</li>
						<li>- Refactor để rõ ràng</li>
						<li>- Hiểu vấn đề</li>
					</ul>
				</Card>
			</div>
		</SlideLayout>
	);
};
