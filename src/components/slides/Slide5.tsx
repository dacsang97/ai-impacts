import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide5 = () => {
	return (
		<SlideLayout
			title="AI: Trợ Thủ Viết Code Xuất Sắc"
			subtitle="AI tỏa sáng ở việc tạo code boilerplate, gợi ý theo context và chuyển đổi cú pháp, giúp tăng tốc độ viết code lên 50%."
			className="bg-green-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				5. AI Giúp Ích: Viết Code
			</div>

			<div className="grid md:grid-cols-2 gap-8 items-center mt-16">
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						✍️ Khả năng của AI trong việc viết code
					</h3>
					<div className="space-y-4">
						<div className="flex items-center justify-between bg-gray-100 p-3 rounded">
							<span className="font-medium">Tạo hàm, lớp cơ bản</span>
							<div className="flex items-center">
								<div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
									<div
										className="bg-green-500 h-2.5 rounded-full"
										style={{ width: "95%" }}
									/>
								</div>
								<span className="text-sm font-semibold">95%</span>
							</div>
						</div>
						<div className="flex items-center justify-between bg-gray-100 p-3 rounded">
							<span className="font-medium">Chuyển đổi cú pháp</span>
							<div className="flex items-center">
								<div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
									<div
										className="bg-green-500 h-2.5 rounded-full"
										style={{ width: "90%" }}
									/>
								</div>
								<span className="text-sm font-semibold">90%</span>
							</div>
						</div>
						<div className="flex items-center justify-between bg-gray-100 p-3 rounded">
							<span className="font-medium">Gợi ý code theo ngữ cảnh</span>
							<div className="flex items-center">
								<div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
									<div
										className="bg-green-500 h-2.5 rounded-full"
										style={{ width: "80%" }}
									/>
								</div>
								<span className="text-sm font-semibold">80%</span>
							</div>
						</div>
						<div className="flex items-center justify-between bg-gray-100 p-3 rounded">
							<span className="font-medium">Tạo API endpoints</span>
							<div className="flex items-center">
								<div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
									<div
										className="bg-green-500 h-2.5 rounded-full"
										style={{ width: "85%" }}
									/>
								</div>
								<span className="text-sm font-semibold">85%</span>
							</div>
						</div>
					</div>
				</Card>

				<div className="space-y-6">
					<Card className="bg-gray-800 text-white">
						<h3 className="text-xl font-bold mb-4">🚀 Tác động thực tế</h3>
						<div className="space-y-3">
							<div className="flex items-center">
								<span className="text-3xl mr-3">⚡</span>
								<div>
									<p className="font-semibold">Tăng tốc 50%</p>
									<p className="text-sm opacity-90">trong việc viết code mới</p>
								</div>
							</div>
							<div className="flex items-center">
								<span className="text-3xl mr-3">🎯</span>
								<div>
									<p className="font-semibold">Giảm lỗi syntax</p>
									<p className="text-sm opacity-90">
										AI hiếm khi mắc lỗi cú pháp
									</p>
								</div>
							</div>
							<div className="flex items-center">
								<span className="text-3xl mr-3">🔄</span>
								<div>
									<p className="font-semibold">Refactor nhanh</p>
									<p className="text-sm opacity-90">
										Chuyển đổi code structure dễ dàng
									</p>
								</div>
							</div>
						</div>
					</Card>

					<Card border={true} borderColor="border-green-500">
						<h3 className="text-lg font-bold text-green-800 mb-3">
							💡 Lời khuyên
						</h3>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>• Viết comment rõ ràng để AI hiểu context</li>
							<li>• Sử dụng AI cho boilerplate, tự code logic phức tạp</li>
							<li>• Luôn review và test code do AI tạo ra</li>
							<li>• Kết hợp AI với IDE autocomplete cho hiệu quả tối đa</li>
						</ul>
					</Card>
				</div>
			</div>
		</SlideLayout>
	);
};
