import { Rocket } from "@carbon/icons-react";
import { chartData } from "../../data/chartData";
import { BarChart } from "../charts/BarChart";
import {
	ChatGptIcon,
	InstagramIcon,
	SpotifyIcon,
	TelegramIcon,
	TiktokIcon,
} from "../icons";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide2 = () => {
	const iconComponents = [
		<ChatGptIcon key="chatgpt" className="w-10 h-10 mx-auto" />,
		<TiktokIcon key="tiktok" className="w-10 h-10 mx-auto" />,
		<InstagramIcon key="instagram" className="w-10 h-10 mx-auto" />,
		<SpotifyIcon key="spotify" className="w-10 h-10 mx-auto" />,
		<TelegramIcon key="telegram" className="w-10 h-10 mx-auto" />,
	];

	return (
		<SlideLayout
			title="Từ Hype đến Hiệu quả"
			subtitle="AI không còn là viễn tưởng. Nó đang ở đây, thay đổi cách chúng ta làm việc, tư duy và sáng tạo. Hãy cùng khám phá những tác động thực sự của AI."
			className="bg-yellow-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				2. Khoảnh Khắc AI
			</div>

			<div className="grid md:grid-cols-2 gap-8 items-center mt-16">
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						Sự chuyển dịch nhận thức
					</h3>
					<p className="text-gray-600 mt-2 mb-4">
						Chúng ta đã đi từ giai đoạn cường điệu ("AI sẽ thay thế tất cả!")
						đến một kỳ vọng thực tế hơn. Câu hỏi bây giờ không phải là "AI có
						làm được không?" mà là "Chúng ta nên làm việc với AI như thế nào để
						hiệu quả nhất?".
					</p>
					<blockquote className="mt-4 text-lg italic text-gray-500 border-l-4 border-orange-500 pl-4">
						"AI sẽ không thay thế bạn, nhưng người dùng AI tốt hơn bạn có thể."
					</blockquote>
				</Card>

				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						Thời gian để đạt 100 triệu người dùng
					</h3>
					<p className="text-gray-600 mb-6 flex items-center">
						<span>
							ChatGPT đạt 100 triệu người dùng trong 2 tháng, cho thấy tốc độ
							chấp nhận AI đáng kinh ngạc.
						</span>
						<Rocket size={24} className="ml-2 text-orange-500" />
					</p>
					<BarChart
						labels={iconComponents}
						data={chartData.userGrowthComparison.data}
						label="Số tháng"
						highlightIndex={0}
						horizontal={false}
					/>
				</Card>
			</div>
		</SlideLayout>
	);
};
