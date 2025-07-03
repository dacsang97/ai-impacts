import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide9 = () => {
	return (
		<SlideLayout
			title='Từ Tuần Tự Đến "Mọi Thứ, Mọi Nơi, Cùng Lúc"'
			subtitle="AI không chỉ tăng tốc một vài tác vụ, nó định hình lại toàn bộ quy trình làm việc. Vòng lặp phản hồi chặt chẽ hơn, thử nghiệm liên tục."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				8. Quy Trình Kỹ Thuật Mới
			</div>

			<div className="mt-20">
				<h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
					Quy Trình Kỹ Thuật: Trước và Sau AI
				</h3>

				<div className="grid md:grid-cols-2 gap-12">
					<Card>
						<h4 className="font-bold text-lg mb-4 text-center">
							Quy trình cũ: Tuần tự
						</h4>
						<div className="space-y-4 flex flex-col items-center">
							<div className="flow-step w-4/5 flow-arrow">Thiết kế</div>
							<div className="flow-step w-4/5 flow-arrow">Code</div>
							<div className="flow-step w-4/5 flow-arrow">Test</div>
							<div className="flow-step w-4/5">Triển khai</div>
						</div>
						<p className="mt-4 text-sm text-gray-500 text-center">
							Các bước rõ ràng, ranh giới cứng nhắc, vòng lặp phản hồi chậm.
						</p>
					</Card>

					<Card border={true} borderColor="border-orange-500">
						<h4 className="font-bold text-lg mb-4 text-center">
							Quy trình mới: Vòng lặp
						</h4>
						<div className="relative w-full h-48 flex items-center justify-center">
							<div
								className="absolute w-40 h-40 border-2 border-dashed border-teal-500 rounded-full animate-spin"
								style={{ animationDuration: "10s" }}
							/>
							<div className="absolute text-center">
								<p className="font-bold text-gray-800">Nghĩ → Gợi ý</p>
								<p className="font-bold text-gray-800">
									↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓
								</p>
								<p className="font-bold text-gray-800">Review ← Code</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-500 text-center">
							Ranh giới mờ, vòng lặp phản hồi siêu chặt chẽ, thử nghiệm liên
							tục.
						</p>
					</Card>
				</div>
			</div>

			<blockquote className="mt-8 text-lg italic text-gray-500 border-l-4 border-teal-500 pl-4 text-center">
				"Trong phát triển sản phẩm, thời gian để có được cái nhìn sâu sắc trở
				nên quan trọng hơn thời gian để viết code."
			</blockquote>
		</SlideLayout>
	);
};
