import { ChartLineData, Idea, Renew } from "@carbon/icons-react";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide104 = () => {
	return (
		<SlideLayout
			title="Kết Luận: Lợi Ích Của Việc Tái Cấu Trúc"
			subtitle="Áp dụng mô hình T-shaped skills với sự hỗ trợ của AI mang lại nhiều lợi ích chiến lược cho tổ chức."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				10.4. Kết Luận
			</div>

			<div className="flex justify-center items-center h-full">
				<div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
					<Card>
						<h4 className="text-lg font-bold mb-3 flex items-center">
							<ChartLineData size={24} className="mr-3 text-teal-500" />
							Tăng sự tự chủ
						</h4>
						<p className="text-sm text-gray-600">
							Mỗi người có thể xử lý nhiều loại vấn đề hơn mà không cần phải chờ
							đợi sự can thiệp từ các chuyên gia ở lĩnh vực khác.
						</p>
					</Card>

					<Card>
						<h4 className="text-lg font-bold mb-3 flex items-center">
							<Renew size={24} className="mr-3 text-teal-500" />
							Giảm phụ thuộc
						</h4>
						<p className="text-sm text-gray-600">
							Hạn chế tình trạng tắc nghẽn (bottleneck) khi một chuyên gia vắng
							mặt hoặc quá tải, giúp luồng công việc trôi chảy hơn.
						</p>
					</Card>

					<Card>
						<h4 className="text-lg font-bold mb-3 flex items-center">
							<Idea size={24} className="mr-3 text-teal-500" />
							Tăng cải tiến
						</h4>
						<p className="text-sm text-gray-600">
							Nhiều góc nhìn đa dạng cùng đóng góp vào một vấn đề sẽ tạo ra
							những giải pháp sáng tạo và toàn diện hơn.
						</p>
					</Card>
				</div>
			</div>
		</SlideLayout>
	);
};
