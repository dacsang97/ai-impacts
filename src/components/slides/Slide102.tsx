import { Bullhorn, Image, Video } from "@carbon/icons-react";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide102 = () => {
	return (
		<SlideLayout
			title="Tái Cấu Trúc Đội Nhóm: Marketing & Sáng tạo"
			subtitle="AI trở thành công cụ đắc lực, giúp đội ngũ marketing và sáng tạo tối ưu hóa chiến dịch và sản xuất nội dung nhanh hơn."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				10.2. Tái Cấu Trúc Đội Nhóm: Marketing & Sáng tạo
			</div>

			<div className="mt-16">
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					<Card>
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Trước AI: Chuyên môn hóa sâu
						</h3>
						<div className="space-y-3">
							<div className="knowledge-box frontend">
								<span className="font-bold">UA Marketing</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex items-center justify-center">
									<p className="text-sm font-semibold text-teal-600 text-center">
										Chạy chiến dịch quảng cáo
									</p>
								</div>
							</div>
							<div className="knowledge-box backend">
								<span className="font-bold">Graphic Designer</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex items-center justify-center">
									<p className="text-sm font-semibold text-teal-600 text-center">
										Thiết kế banner, hình ảnh
									</p>
								</div>
							</div>
							<div className="knowledge-box devops">
								<span className="font-bold">Video Editor</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex items-center justify-center">
									<p className="text-sm font-semibold text-teal-600 text-center">
										Dựng, chỉnh sửa video
									</p>
								</div>
							</div>
						</div>
					</Card>

					<Card border={true} borderColor="border-orange-500">
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Với AI: Kỹ năng mở rộng
						</h3>
						<div className="space-y-2">
							<div className="knowledge-box frontend">
								<span className="font-bold">UA Marketing</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex flex-col justify-center">
									<ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
										<li>Phân tích insight khách hàng tự động</li>
										<li>Tối ưu target và budget quảng cáo</li>
										<li>Tạo A/B testing cho content</li>
									</ul>
								</div>
							</div>
							<div className="knowledge-box backend">
								<span className="font-bold">Graphic Designer</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex flex-col justify-center">
									<ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
										<li>Tạo nhanh các biến thể thiết kế</li>
										<li>Tạo hình ảnh từ mô tả (text-to-image)</li>
										<li>Nâng cấp, thay đổi phong cách ảnh</li>
									</ul>
								</div>
							</div>
							<div className="knowledge-box devops">
								<span className="font-bold">Video Editor</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex flex-col justify-center">
									<ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
										<li>Tự động cắt, ghép video cơ bản</li>
										<li>Tạo phụ đề, lồng tiếng tự động</li>
										<li>Phân tích video để tìm cảnh nổi bật</li>
									</ul>
								</div>
							</div>
						</div>
					</Card>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Bullhorn size={20} className="mr-2 text-teal-500" /> Chiến dịch
							hiệu quả
						</h4>
						<p className="text-sm text-gray-600">
							AI giúp phân tích dữ liệu sâu hơn, tối ưu hóa quảng cáo và nhắm
							đúng đối tượng mục tiêu.
						</p>
					</Card>

					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Image size={20} className="mr-2 text-teal-500" /> Sáng tạo không
							giới hạn
						</h4>
						<p className="text-sm text-gray-600">
							Tạo ra hàng loạt phiên bản hình ảnh, banner để thử nghiệm và tìm
							ra mẫu hiệu quả nhất.
						</p>
					</Card>

					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Video size={20} className="mr-2 text-teal-500" /> Sản xuất thần
							tốc
						</h4>
						<p className="text-sm text-gray-600">
							Tự động hóa các công đoạn tốn thời gian trong sản xuất video, giúp
							editor tập trung vào kể chuyện.
						</p>
					</Card>
				</div>
			</div>
		</SlideLayout>
	);
};
