import {
	Book,
	Bullhorn,
	Collaborate,
	Idea,
	Rocket,
	Search,
} from "@carbon/icons-react";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide14 = () => {
	return (
		<SlideLayout
			title="Roadmap Phát Triển Bản Thân Trong Kỷ Nguyên AI"
			subtitle="Không cần trở thành expert AI, nhưng cần biết cách leverage AI hiệu quả và phát triển những kỹ năng bổ sung."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				14. Giữ Vững Giá Trị Bản Thân
			</div>

			<div className="mt-16">
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					<Card border={true} borderColor="border-teal-500">
						<h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
							<Rocket size={24} className="mr-2" /> Ngắn hạn (3-6 tháng)
						</h3>
						<ul className="space-y-2 text-gray-700">
							<li>• Học cách sử dụng AI coding assistants hiệu quả</li>
							<li>• Thành thạo prompt engineering cơ bản</li>
							<li>• Tập trung vào architectural thinking</li>
							<li>• Cải thiện kỹ năng giao tiếp kỹ thuật</li>
							<li>• Học hiểu business context của dự án</li>
						</ul>
					</Card>

					<Card border={true} borderColor="border-orange-500">
						<h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
							<Bullhorn size={24} className="mr-2" /> Dài hạn (1-2 năm)
						</h3>
						<ul className="space-y-2 text-gray-700">
							<li>• Phát triển product sense mạnh mẽ</li>
							<li>• Leadership và mentoring skills</li>
							<li>• Cross-functional collaboration</li>
							<li>• System design và scalability</li>
							<li>• Strategic thinking trong tech decisions</li>
						</ul>
					</Card>
				</div>

				<div className="grid md:grid-cols-3 gap-6 mb-8">
					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Book size={20} className="mr-2 text-gray-700" /> Học Gì?
						</h4>
						<p className="text-sm text-gray-600 mb-2">
							Tập trung vào các kỹ năng "mềm" và tư duy hệ thống:
						</p>
						<ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
							<li>Tư duy phản biện</li>
							<li>Chia nhỏ vấn đề</li>
							<li>Tư duy hệ thống</li>
							<li>Đồng cảm với người dùng</li>
						</ul>
					</Card>

					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Collaborate size={20} className="mr-2 text-gray-700" /> Làm Gì?
						</h4>
						<p className="text-sm text-gray-600 mb-2">
							Chủ động tham gia và đóng góp:
						</p>
						<ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
							<li>Review code cho đồng đội</li>
							<li>Tham gia thảo luận sản phẩm</li>
							<li>Hướng dẫn lập trình viên mới</li>
							<li>Hợp tác với các team khác</li>
						</ul>
					</Card>

					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Search size={20} className="mr-2 text-gray-700" /> Đo Lường Thế
							Nào?
						</h4>
						<p className="text-sm text-gray-600 mb-2">
							Dấu hiệu cho thấy bạn đang tiến bộ:
						</p>
						<ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
							<li>Được hỏi ý kiến về quyết định kỹ thuật</li>
							<li>Các bên liên quan tin tưởng</li>
							<li>Đồng đội tìm đến nhờ hướng dẫn</li>
							<li>Có ảnh hưởng đến định hướng sản phẩm</li>
						</ul>
					</Card>
				</div>

				<Card className="bg-gray-800 text-white">
					<h3 className="text-xl font-bold mb-4 flex items-center">
						<Idea size={24} className="mr-2 text-yellow-300" /> Golden Rule
					</h3>
					<p className="text-lg opacity-90 text-center">
						Trở thành người mà AI không thể thay thế
						<br />
						<span className="text-orange-400">
							Hiểu vấn đề • Giao tiếp tốt • Quyết định đúng
						</span>
					</p>
				</Card>
			</div>
		</SlideLayout>
	);
};
