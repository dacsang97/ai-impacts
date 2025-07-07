import { Mobile, PaintBrush } from "@carbon/icons-react";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide101 = () => {
	return (
		<SlideLayout
			title="Tái Cấu Trúc Đội Nhóm: Phát triển Mobile"
			subtitle="AI giúp Mobile Dev và UI/UX Designer hợp tác hiệu quả hơn, phá vỡ rào cản giữa lập trình và thiết kế."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				10.1. Tái Cấu Trúc Đội Nhóm: Mobile
			</div>

			<div className="mt-16">
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					<Card>
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Trước AI: Chuyên môn hóa sâu
						</h3>
						<div className="space-y-3">
							<div className="knowledge-box frontend">
								<span className="font-bold">Mobile Dev</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex items-center justify-center">
									<p className="text-sm font-semibold text-teal-600 text-center">
										Lập trình Native/Cross-platform
									</p>
								</div>
							</div>
							<div className="knowledge-box backend">
								<span className="font-bold">UI/UX Designer</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex items-center justify-center">
									<p className="text-sm font-semibold text-teal-600 text-center">
										Thiết kế giao diện & trải nghiệm
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
								<span className="font-bold">Mobile Dev</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex flex-col justify-center">
									<ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
										<li>Tạo nhanh boilerplate code</li>
										<li>Phân tích và tối ưu hiệu năng app</li>
										<li>Viết unit test, UI test tự động</li>
									</ul>
								</div>
							</div>
							<div className="knowledge-box backend">
								<span className="font-bold">UI/UX Designer</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex flex-col justify-center">
									<ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
										<li>Tạo prototype code từ thiết kế</li>
										<li>Phân tích hành vi người dùng qua dữ liệu</li>
										<li>Tạo hình ảnh, icon minh họa</li>
									</ul>
								</div>
							</div>
						</div>
					</Card>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Mobile size={20} className="mr-2 text-teal-500" /> Tăng tốc phát
							triển
						</h4>
						<p className="text-sm text-gray-600">
							AI tự động hóa các tác vụ lặp lại, từ code đến test, giúp dev tập
							trung vào logic phức tạp.
						</p>
					</Card>

					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<PaintBrush size={20} className="mr-2 text-teal-500" /> Thiết kế
							thông minh hơn
						</h4>
						<p className="text-sm text-gray-600">
							Designer có thể nhanh chóng thử nghiệm ý tưởng bằng code và đưa ra
							quyết định dựa trên dữ liệu.
						</p>
					</Card>
				</div>
			</div>
		</SlideLayout>
	);
};
