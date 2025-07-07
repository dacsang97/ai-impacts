import { ChartLineData, Idea, Renew } from "@carbon/icons-react";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide10 = () => {
	return (
		<SlideLayout
			title="Phá Bỏ Hàng Rào, Tăng Cường Linh Hoạt"
			subtitle="AI giúp phân tán quyền lực, mọi thành viên có thể đóng góp ở nhiều khía cạnh hơn. Frontend có thể viết API, Designer có thể prototype code."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				10. Tái Cấu Trúc Đội Nhóm
			</div>

			<div className="mt-16">
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					<Card>
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Trước AI: Chuyên môn hóa sâu
						</h3>
						<div className="space-y-3">
							<div className="knowledge-box frontend">
								<span className="font-bold">Frontend Dev</span>
								<p className="text-sm">Chỉ biết UI/UX, JavaScript</p>
							</div>
							<div className="knowledge-box backend">
								<span className="font-bold">Backend Dev</span>
								<p className="text-sm">Chỉ biết API, database, server</p>
							</div>
							<div className="knowledge-box devops">
								<span className="font-bold">DevOps</span>
								<p className="text-sm">Chỉ biết infrastructure, deployment</p>
							</div>
						</div>
					</Card>

					<Card border={true} borderColor="border-orange-500">
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Với AI: T-shaped Skills
						</h3>
						<div className="space-y-3">
							<div className="knowledge-box frontend">
								<span className="font-bold">Frontend Dev</span>
								<p className="text-sm">UI/UX + cơ bản API + cơ bản database</p>
							</div>
							<div className="knowledge-box backend">
								<span className="font-bold">Backend Dev</span>
								<p className="text-sm">API + cơ bản UI + cơ bản DevOps</p>
							</div>
							<div className="knowledge-box devops">
								<span className="font-bold">DevOps</span>
								<p className="text-sm">
									Infrastructure + cơ bản backend + automation
								</p>
							</div>
						</div>
					</Card>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<ChartLineData size={20} className="mr-2 text-teal-500" /> Tăng sự
							tự chủ
						</h4>
						<p className="text-sm text-gray-600">
							Mỗi người có thể xử lý nhiều loại vấn đề hơn mà không cần chờ đợi.
						</p>
					</Card>

					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Renew size={20} className="mr-2 text-teal-500" /> Giảm phụ thuộc
						</h4>
						<p className="text-sm text-gray-600">
							Ít bottleneck hơn khi một chuyên gia vắng mặt hoặc quá tải.
						</p>
					</Card>

					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Idea size={20} className="mr-2 text-teal-500" /> Tăng cải tiến
						</h4>
						<p className="text-sm text-gray-600">
							Nhiều góc nhìn khác nhau cùng đóng góp vào giải pháp.
						</p>
					</Card>
				</div>
			</div>
		</SlideLayout>
	);
};
