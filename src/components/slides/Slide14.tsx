import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide14 = () => {
	return (
		<SlideLayout
			title="Roadmap Phát Triển Bản Thân Trong Kỷ Nguyên AI"
			subtitle="Không cần trở thành expert AI, nhưng cần biết cách leverage AI hiệu quả và phát triển những kỹ năng bổ sung."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				13. Giữ Vững Giá Trị Bản Thân (Phần 2)
			</div>

			<div className="mt-16">
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					<Card border={true} borderColor="border-teal-500">
						<h3 className="text-xl font-bold text-teal-800 mb-4">
							🚀 Ngắn hạn (3-6 tháng)
						</h3>
						<ul className="space-y-2 text-gray-700">
							<li>• Học cách sử dụng AI coding assistants hiệu quả</li>
							<li>• Thành thạo prompt engineering cơ bản</li>
							<li>• Tập trung vào architectural thinking</li>
							<li>• Cải thiện kỹ năng giao tiếp kỹ thuật</li>
							<li>• Học hiểu business context của dự án</li>
						</ul>
					</Card>

					<Card border={true} borderColor="border-orange-500">
						<h3 className="text-xl font-bold text-orange-800 mb-4">
							🎯 Dài hạn (1-2 năm)
						</h3>
						<ul className="space-y-2 text-gray-700">
							<li>• Phát triển product sense mạnh mẽ</li>
							<li>• Leadership và mentoring skills</li>
							<li>• Cross-functional collaboration</li>
							<li>• System design và scalability</li>
							<li>• Strategic thinking trong tech decisions</li>
						</ul>
					</Card>
				</div>

				<div className="grid md:grid-cols-3 gap-6 mb-8">
					<Card>
						<h4 className="font-bold mb-2">📚 Học gì?</h4>
						<p className="text-sm text-gray-600 mb-2">Focus vào meta-skills:</p>
						<ul className="text-xs text-gray-600 space-y-1">
							<li>- Tư duy phê phán</li>
							<li>- Problem decomposition</li>
							<li>- Systems thinking</li>
							<li>- User empathy</li>
						</ul>
					</Card>

					<Card>
						<h4 className="font-bold mb-2">🤝 Làm gì?</h4>
						<p className="text-sm text-gray-600 mb-2">
							Thực hành thường xuyên:
						</p>
						<ul className="text-xs text-gray-600 space-y-1">
							<li>- Code review cho team</li>
							<li>- Participate in product discussions</li>
							<li>- Mentor junior developers</li>
							<li>- Cross-team collaboration</li>
						</ul>
					</Card>

					<Card>
						<h4 className="font-bold mb-2">🔍 Đo lường sao?</h4>
						<p className="text-sm text-gray-600 mb-2">Indicators of growth:</p>
						<ul className="text-xs text-gray-600 space-y-1">
							<li>- Được hỏi ý kiến về tech decisions</li>
							<li>- Stakeholders seek your input</li>
							<li>- Team members come for guidance</li>
							<li>- You influence product direction</li>
						</ul>
					</Card>
				</div>

				<Card className="bg-gray-800 text-white">
					<h3 className="text-xl font-bold mb-4">💡 Golden Rule</h3>
					<p className="text-lg opacity-90 text-center">
						"Trở thành người mà AI không thể thay thế: <br />
						<span className="text-orange-400">
							Hiểu vấn đề • Giao tiếp tốt • Quyết định đúng
						</span>
						"
					</p>
				</Card>
			</div>
		</SlideLayout>
	);
};
