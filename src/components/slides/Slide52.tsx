import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide52 = () => {
	return (
		<SlideLayout
			title="AI: Trợ Lý Lập Kế Hoạch & Tài Liệu"
			subtitle="AI hỗ trợ mạnh mẽ trong việc tạo bản nháp, outline kế hoạch và tóm tắt meetings, tiết kiệm 40% thời gian làm việc với documents."
			className="bg-purple-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				5.2. AI Giúp Ích: Lập Kế Hoạch & Tài Liệu
			</div>

			<div className="grid md:grid-cols-2 gap-8 items-center mt-16">
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						📝 Khả năng xử lý tài liệu của AI
					</h3>
					<div className="space-y-4">
						<div className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
							<div className="flex items-center justify-between mb-3">
								<div>
									<h4 className="font-semibold">Tạo khung tài liệu</h4>
									<p className="text-sm text-gray-600">
										Design docs, PRDs, Technical specs
									</p>
								</div>
								<span className="text-2xl">📋</span>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2">
								<div
									className="bg-purple-500 h-2 rounded-full"
									style={{ width: "90%" }}
								/>
							</div>
						</div>

						<div className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
							<div className="flex items-center justify-between mb-3">
								<div>
									<h4 className="font-semibold">Tóm tắt ghi chú cuộc họp</h4>
									<p className="text-sm text-gray-600">
										Action items, decisions, next steps
									</p>
								</div>
								<span className="text-2xl">📑</span>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2">
								<div
									className="bg-purple-500 h-2 rounded-full"
									style={{ width: "85%" }}
								/>
							</div>
						</div>

						<div className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
							<div className="flex items-center justify-between mb-3">
								<div>
									<h4 className="font-semibold">Phân rã công việc</h4>
									<p className="text-sm text-gray-600">
										Break down epic thành tasks nhỏ
									</p>
								</div>
								<span className="text-2xl">🔨</span>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2">
								<div
									className="bg-purple-500 h-2 rounded-full"
									style={{ width: "80%" }}
								/>
							</div>
						</div>
					</div>
				</Card>

				<div className="space-y-6">
					<Card className="bg-gray-800 text-white">
						<h3 className="text-xl font-bold mb-4">⚡ Workflow Tối Ưu</h3>
						<div className="space-y-4">
							<div className="flex items-start">
								<span className="text-3xl mr-3">💭</span>
								<div>
									<p className="font-semibold">Brainstorm nhanh</p>
									<p className="text-sm opacity-90">
										AI giúp generate ideas và structure thoughts
									</p>
								</div>
							</div>
							<div className="flex items-start">
								<span className="text-3xl mr-3">📊</span>
								<div>
									<p className="font-semibold">Template thông minh</p>
									<p className="text-sm opacity-90">
										Tự động tạo format phù hợp với context
									</p>
								</div>
							</div>
							<div className="flex items-start">
								<span className="text-3xl mr-3">🔄</span>
								<div>
									<p className="font-semibold">Iterate nhanh chóng</p>
									<p className="text-sm opacity-90">
										Refine và improve content liên tục
									</p>
								</div>
							</div>
						</div>
					</Card>

					<Card border={true} borderColor="border-purple-500">
						<h3 className="text-lg font-bold text-purple-800 mb-3">
							🎯 Practical Tips
						</h3>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>• Provide context và background để AI hiểu rõ</li>
							<li>• Sử dụng AI cho first draft, human review cho quality</li>
							<li>• Kết hợp AI với team brainstorming sessions</li>
							<li>• Standardize format để AI output nhất quán</li>
							<li>• Keep human touch cho stakeholder communication</li>
						</ul>
					</Card>
				</div>
			</div>
		</SlideLayout>
	);
};
