import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide13 = () => {
	return (
		<SlideLayout
			title="Làm Sao Để Không Bị Thay Thế?"
			subtitle="Trong thế giới AI, giá trị của con người nằm ở những kỹ năng mà máy móc chưa thể thay thế: tư duy phản biện, sáng tạo và hiểu biết sâu sắc."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				12. Giữ Vững Giá Trị Bản Thân (Phần 1)
			</div>

			<div className="mt-16">
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					<Card className="bg-red-50">
						<h3 className="text-xl font-bold text-red-800 mb-4">
							⚠️ Kỹ năng có nguy cơ bị thay thế
						</h3>
						<ul className="space-y-2 text-gray-700">
							<li>• Viết code boilerplate và CRUD operations</li>
							<li>• Debug lỗi syntax đơn giản</li>
							<li>• Copy-paste code từ Stack Overflow</li>
							<li>• Viết unit test cơ bản</li>
							<li>• Tạo tài liệu kỹ thuật đơn giản</li>
						</ul>
						<p className="mt-3 text-sm text-red-600 font-semibold">
							→ Nếu chỉ làm những việc này, bạn đang có nguy cơ.
						</p>
					</Card>

					<Card className="bg-green-50">
						<h3 className="text-xl font-bold text-green-800 mb-4">
							✅ Kỹ năng khó thay thế
						</h3>
						<ul className="space-y-2 text-gray-700">
							<li>• Hiểu bài toán và yêu cầu kinh doanh</li>
							<li>• Thiết kế kiến trúc hệ thống phức tạp</li>
							<li>• Đánh giá trade-offs và đưa ra quyết định</li>
							<li>• Giao tiếp với stakeholders</li>
							<li>• Mentoring và dẫn dắt team</li>
						</ul>
						<p className="mt-3 text-sm text-green-600 font-semibold">
							→ Đây là những điểm mạnh cần phát triển.
						</p>
					</Card>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					<Card border={true} borderColor="border-orange-500">
						<h4 className="font-bold mb-2">🧠 Tư duy hệ thống</h4>
						<p className="text-sm text-gray-600">
							Hiểu được tác động toàn diện của quyết định kỹ thuật lên business
							và user experience.
						</p>
					</Card>

					<Card border={true} borderColor="border-orange-500">
						<h4 className="font-bold mb-2">💬 Giao tiếp hiệu quả</h4>
						<p className="text-sm text-gray-600">
							Dịch được ngôn ngữ kỹ thuật thành business value và ngược lại.
						</p>
					</Card>

					<Card border={true} borderColor="border-orange-500">
						<h4 className="font-bold mb-2">🎯 Problem solving</h4>
						<p className="text-sm text-gray-600">
							Xác định đúng vấn đề cần giải quyết thay vì chỉ focus vào
							implementation.
						</p>
					</Card>
				</div>
			</div>
		</SlideLayout>
	);
};
