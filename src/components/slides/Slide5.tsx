import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide5 = () => {
	return (
		<SlideLayout
			title="AI: Trợ Thủ Đắc Lực Trong Quy Trình Phát Triển"
			subtitle="AI tỏa sáng ở những nơi có tính lặp lại và cấu trúc rõ ràng, giúp tăng tốc đáng kể các tác vụ cụ thể."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				5. AI Giúp Ích Ở Đâu
			</div>

			<div className="grid md:grid-cols-2 gap-8 mt-16">
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">✍️ Viết code</h3>
					<p className="text-gray-600 mb-2">
						AI xuất sắc trong việc xử lý các phần nhàm chán như boilerplate, tạo
						file mới, hoặc viết test. Tăng tốc độ khoảng 50%.
					</p>
					<ul className="space-y-1 text-gray-700 text-sm">
						<li>- Tạo hàm, lớp cơ bản</li>
						<li>- Chuyển đổi cú pháp</li>
						<li>- Gợi ý code theo ngữ cảnh</li>
					</ul>
				</Card>

				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						📖 Đọc hiểu code
					</h3>
					<p className="text-gray-600 mb-2">
						Giúp giải thích đoạn code phức tạp, tìm nơi sử dụng, và hiểu cách
						các phần khác nhau của hệ thống kết nối với nhau.
					</p>
					<ul className="space-y-1 text-gray-700 text-sm">
						<li>- Giải thích logic code</li>
						<li>- Truy vết luồng dữ liệu</li>
						<li>- Tìm kiếm tham chiếu</li>
					</ul>
				</Card>

				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						📝 Lập kế hoạch & Tài liệu
					</h3>
					<p className="text-gray-600 mb-2">
						Hỗ trợ tạo bản nháp đầu tiên của design doc, outline kế hoạch, hoặc
						tóm tắt các cuộc họp. Tiết kiệm khoảng 40% thời gian.
					</p>
					<ul className="space-y-1 text-gray-700 text-sm">
						<li>- Tạo khung tài liệu</li>
						<li>- Tóm tắt ghi chú cuộc họp</li>
						<li>- Phân rã công việc</li>
					</ul>
				</Card>

				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						🧪 Test & Tự động hóa
					</h3>
					<p className="text-gray-600 mb-2">
						Tạo test case (Unit, Integration, E2E), mô phỏng tương tác người
						dùng, và gợi ý sửa lỗi. Tiết kiệm 50% thời gian viết test tự động.
					</p>
					<ul className="space-y-1 text-gray-700 text-sm">
						<li>- Tạo test case tự động</li>
						<li>- Mô phỏng kịch bản người dùng</li>
						<li>- Gợi ý vị trí lỗi</li>
					</ul>
				</Card>
			</div>
		</SlideLayout>
	);
};
