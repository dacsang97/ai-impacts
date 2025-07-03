import { chartData } from "../../data/chartData";
import { DoughnutChart } from "../charts/DoughnutChart";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide4 = () => {
	return (
		<SlideLayout
			title="Từ Người Viết Code Đến Người Giải Quyết Vấn Đề"
			subtitle="Viết code chưa bao giờ là phần khó nhất. Công việc thực sự của kỹ sư là giải quyết vấn đề, và AI đang làm cho sự thật này trở nên không thể phủ nhận."
			className="bg-yellow-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				3. Công Việc Kỹ Sư
			</div>

			<div className="grid md:grid-cols-2 gap-8 items-center mt-16">
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						Phân bổ thời gian của kỹ sư phần mềm
					</h3>
					<p className="text-gray-600 mb-6">
						Chỉ 30% thời gian dành cho việc viết code. Phần lớn là hiểu vấn đề,
						chọn giải pháp, test và giám sát.
					</p>
					<DoughnutChart
						labels={chartData.timeAllocation.labels}
						data={chartData.timeAllocation.data}
						label="Phân bổ thời gian (%)"
					/>
				</Card>

				<div className="space-y-6">
					<Card className="bg-gray-800 text-white">
						<h3 className="text-xl font-bold mb-4">
							Công việc thực sự của kỹ sư
						</h3>
						<ul className="space-y-3 opacity-90">
							<li className="flex items-start">
								<span className="mr-3 text-xl">💡</span>
								<span>Xác định rõ ràng vấn đề.</span>
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-xl">⚖️</span>
								<span>Hiểu các đánh đổi (trade-offs).</span>
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-xl">🧭</span>
								<span>
									Hướng dẫn AI (hoặc đồng đội) đến giải pháp hiệu quả.
								</span>
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-xl">✅</span>
								<span>Chịu trách nhiệm về kết quả, không chỉ code.</span>
							</li>
						</ul>
					</Card>

					<blockquote className="text-lg italic text-gray-500 border-l-4 border-orange-500 pl-4">
						"Nếu tất cả những gì tôi làm là viết code, tôi sẽ sớm thất nghiệp.
						Code là công cụ. Giải quyết vấn đề mới là công việc."
					</blockquote>
				</div>
			</div>
		</SlideLayout>
	);
};
