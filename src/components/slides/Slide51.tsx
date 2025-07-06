import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide51 = () => {
	return (
		<SlideLayout
			title="AI: Chuyên Gia Đọc Hiểu Code"
			subtitle="AI xuất sắc trong việc giải thích logic phức tạp, truy vết luồng dữ liệu và tìm kiếm tham chiếu, giúp developers hiểu code nhanh hơn."
			className="bg-blue-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				5.1. AI Giúp Ích: Đọc Hiểu Code
			</div>

			<div className="grid md:grid-cols-2 gap-8 items-center mt-16">
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						📖 Khả năng phân tích code của AI
					</h3>
					<div className="space-y-4">
						<div className="bg-blue-100 p-4 rounded-lg">
							<div className="flex items-center justify-between mb-2">
								<span className="font-medium">Giải thích logic code</span>
								<span className="text-2xl">🧠</span>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2">
								<div
									className="bg-blue-500 h-2 rounded-full"
									style={{ width: "88%" }}
								/>
							</div>
							<span className="text-sm text-gray-600 mt-1">
								88% độ chính xác
							</span>
						</div>

						<div className="bg-blue-100 p-4 rounded-lg">
							<div className="flex items-center justify-between mb-2">
								<span className="font-medium">Truy vết luồng dữ liệu</span>
								<span className="text-2xl">🔍</span>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2">
								<div
									className="bg-blue-500 h-2 rounded-full"
									style={{ width: "92%" }}
								/>
							</div>
							<span className="text-sm text-gray-600 mt-1">
								92% độ chính xác
							</span>
						</div>

						<div className="bg-blue-100 p-4 rounded-lg">
							<div className="flex items-center justify-between mb-2">
								<span className="font-medium">Tìm kiếm tham chiếu</span>
								<span className="text-2xl">🔗</span>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2">
								<div
									className="bg-blue-500 h-2 rounded-full"
									style={{ width: "95%" }}
								/>
							</div>
							<span className="text-sm text-gray-600 mt-1">
								95% độ chính xác
							</span>
						</div>
					</div>
				</Card>

				<div className="space-y-6">
					<Card className="bg-gray-800 text-white">
						<h3 className="text-xl font-bold mb-4">💡 Lợi ích thực tế</h3>
						<div className="space-y-4">
							<div className="flex items-start">
								<span className="text-3xl mr-3">📚</span>
								<div>
									<p className="font-semibold">Onboarding nhanh hơn</p>
									<p className="text-sm opacity-90">
										Hiểu codebase mới trong vài giờ thay vì vài ngày
									</p>
								</div>
							</div>
							<div className="flex items-start">
								<span className="text-3xl mr-3">🔧</span>
								<div>
									<p className="font-semibold">Debug hiệu quả</p>
									<p className="text-sm opacity-90">
										Tìm nguyên nhân lỗi và tác động của thay đổi
									</p>
								</div>
							</div>
							<div className="flex items-start">
								<span className="text-3xl mr-3">🎯</span>
								<div>
									<p className="font-semibold">Refactor an toàn</p>
									<p className="text-sm opacity-90">
										Hiểu dependencies trước khi thay đổi
									</p>
								</div>
							</div>
						</div>
					</Card>

					<Card border={true} borderColor="border-blue-500">
						<h3 className="text-lg font-bold text-blue-800 mb-3">
							🎯 Use Cases Tốt Nhất
						</h3>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>• Explain code phức tạp cho team members</li>
							<li>• Tìm hiểu legacy code không có documentation</li>
							<li>• Phân tích impact của code changes</li>
							<li>• Tìm unused code và dead code</li>
							<li>• Hiểu pattern và architecture của project</li>
						</ul>
					</Card>
				</div>
			</div>
		</SlideLayout>
	);
};
