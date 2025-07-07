import { Flash } from "@carbon/icons-react";
import { chartColors, chartData } from "../../data/chartData";
import { StackedBarChart } from "../charts/StackedBarChart";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide8 = () => {
	return (
		<SlideLayout
			title="Thực Tế Là Bao Nhiêu?"
			subtitle="Dù không phải là 'nhanh hơn 10 lần' như lời đồn, AI mang lại sự cải thiện đáng kể, khoảng 30% tổng thời gian, nếu được tích hợp đúng cách. Lợi ích lớn nhất đến từ việc tự động hóa các tác vụ lặp lại."
			className="bg-yellow-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				8. Tăng Tốc Với AI
			</div>

			<div className="grid md:grid-cols-2 gap-8 items-center mt-16">
				<Card>
					<p className="text-center text-gray-600 mb-6">
						Mức độ tiết kiệm thời gian ước tính ở các giai đoạn khác nhau của
						quy trình kỹ thuật.
					</p>
					<StackedBarChart
						labels={chartData.timeSaving.labels}
						data={chartData.timeSaving.data}
						label="% Thời gian tiết kiệm"
						suffix="%"
					/>
				</Card>

				<Card className="bg-gray-800 text-white">
					<h3 className="text-2xl font-bold mb-6">Thích nghi để phát triển</h3>
					<div className="space-y-4">
						<div>
							<h4 className="font-semibold text-lg">
								1. Suy nghĩ lại thời gian biểu
							</h4>
							<p className="opacity-90 mt-1">
								Ước tính thời gian dự án cần phản ánh sự hỗ trợ của AI. Nếu
								không thấy tiết kiệm thời gian, hãy xem xét lại quy trình.
							</p>
						</div>
						<div>
							<h4 className="font-semibold text-lg">
								2. Khuyến khích tư duy "AI-first"
							</h4>
							<p className="opacity-90 mt-1">
								Trước mỗi tác vụ, hãy hỏi: "AI có thể giúp gì ở đây?". Luôn tò
								mò và thử nghiệm.
							</p>
						</div>
						<div className="flex items-center">
							<Flash size={48} className="mr-4 text-yellow-300" />
							<div>
								<h4 className="font-semibold text-lg">Tăng tốc hiệu quả</h4>
								<p className="opacity-90 mt-1">
									Tốc độ là tốt, nhưng tốc độ mà thiếu rõ ràng hoặc khả năng bảo
									trì sẽ tạo ra nợ kỹ thuật. Code nhanh vẫn cần là code tốt.
								</p>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</SlideLayout>
	);
};
