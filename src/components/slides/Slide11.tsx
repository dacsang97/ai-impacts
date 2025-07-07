import {
	ArrowDown,
	ArrowsHorizontal,
	Bullhorn,
	Chat,
	Flash,
} from "@carbon/icons-react";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide11 = () => {
	return (
		<SlideLayout
			title="Khi Kỹ Thuật Viên Hiểu Sản Phẩm Sâu Hơn"
			subtitle="AI giảm bớt thời gian viết code, tạo cơ hội cho engineers tập trung vào việc hiểu bài toán và xây dựng giải pháp tốt hơn."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				11. Phá Vỡ Rào Cản Sản Phẩm & Kỹ Thuật
			</div>

			<div className="mt-16">
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					<Card>
						<h3 className="text-xl font-bold text-gray-800 mb-4">Trước AI</h3>
						<div className="space-y-4">
							<div className="bg-blue-100 p-3 rounded">
								<p className="font-semibold">Product Manager</p>
								<p className="text-sm text-gray-600">
									Định nghĩa yêu cầu, giao tiếp với stakeholders
								</p>
							</div>
							<div className="text-center text-gray-400 text-2xl">
								<ArrowDown size={32} />
							</div>
							<div className="bg-green-100 p-3 rounded">
								<p className="font-semibold">Engineer</p>
								<p className="text-sm text-gray-600">
									Nhận requirement và code theo spec
								</p>
							</div>
						</div>
						<p className="text-sm text-gray-500 mt-4 text-center">
							Kỹ thuật viên tập trung vào "làm thế nào", ít quan tâm đến "tại
							sao".
						</p>
					</Card>

					<Card border={true} borderColor="border-orange-500">
						<h3 className="text-xl font-bold text-gray-800 mb-4">Với AI</h3>
						<div className="space-y-4">
							<div className="bg-blue-100 p-3 rounded">
								<p className="font-semibold">Product-minded Engineer</p>
								<p className="text-sm text-gray-600">
									Hiểu người dùng, đề xuất giải pháp, code nhanh
								</p>
							</div>
							<div className="text-center text-gray-400 text-2xl">
								<ArrowsHorizontal size={32} />
							</div>
							<div className="bg-purple-100 p-3 rounded">
								<p className="font-semibold">Tech-savvy PM</p>
								<p className="text-sm text-gray-600">
									Hiểu rõ hạn chế kỹ thuật, đưa ra yêu cầu thực tế
								</p>
							</div>
						</div>
						<p className="text-sm text-gray-500 mt-4 text-center">
							Ranh giới mờ nhạt, cộng tác sâu sắc hơn.
						</p>
					</Card>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Chat size={20} className="mr-2 text-teal-500" /> Hiểu vấn đề sâu
							hơn
						</h4>
						<p className="text-sm text-gray-600">
							Engineers có thời gian để nghiên cứu user behavior và business
							impact.
						</p>
					</Card>

					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Bullhorn size={20} className="mr-2 text-teal-500" /> Giải pháp
							tốt hơn
						</h4>
						<p className="text-sm text-gray-600">
							Khi hiểu vấn đề, kỹ thuật viên có thể đề xuất giải pháp tối ưu
							hơn.
						</p>
					</Card>

					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Flash size={20} className="mr-2 text-teal-500" /> Iteration nhanh
							hơn
						</h4>
						<p className="text-sm text-gray-600">
							Ít handoff, nhiều thử nghiệm, feedback loop chặt chẽ hơn.
						</p>
					</Card>
				</div>
			</div>

			<blockquote className="mt-8 text-lg italic text-gray-500 border-l-4 border-orange-500 pl-4 text-center">
				"Kỹ thuật viên tốt nhất trong tương lai sẽ là những người hiểu cả code
				và customer."
			</blockquote>
		</SlideLayout>
	);
};
