import { Ai, CheckmarkFilled } from "@carbon/icons-react";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide103 = () => {
	return (
		<SlideLayout
			title="Tái Cấu Trúc Đội Nhóm: QA & AI"
			subtitle="Sự kết hợp giữa QA và AI tạo ra một chu trình phát triển sản phẩm thông minh và chất lượng hơn."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				10.3. Tái Cấu Trúc Đội Nhóm: QA & AI
			</div>

			<div className="mt-16">
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					<Card>
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Trước AI: Chuyên môn hóa sâu
						</h3>
						<div className="space-y-3">
							<div className="knowledge-box frontend">
								<span className="font-bold">QA Tester</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex items-center justify-center">
									<p className="text-sm font-semibold text-teal-600 text-center">
										Kiểm thử thủ công & viết test case
									</p>
								</div>
							</div>
							<div className="knowledge-box backend">
								<span className="font-bold">AI Engineer</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex items-center justify-center">
									<p className="text-sm font-semibold text-teal-600 text-center">
										Xây dựng & huấn luyện mô hình AI
									</p>
								</div>
							</div>
						</div>
					</Card>

					<Card border={true} borderColor="border-orange-500">
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Với AI: Kỹ năng mở rộng
						</h3>
						<div className="space-y-2">
							<div className="knowledge-box frontend">
								<span className="font-bold">QA Tester</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex flex-col justify-center">
									<ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
										<li>Sử dụng AI để tạo kịch bản test</li>
										<li>Phân tích log lỗi tự động</li>
										<li>Thực hiện kiểm thử performance</li>
									</ul>
								</div>
							</div>
							<div className="knowledge-box backend">
								<span className="font-bold">AI Engineer</span>
								<div className="border border-gray-200 rounded-md mt-1 p-3 h-24 flex flex-col justify-center">
									<ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
										<li>Tích hợp mô hình AI vào sản phẩm</li>
										<li>Xây dựng pipeline MLOps</li>
										<li>Tối ưu mô hình cho thiết bị mobile</li>
									</ul>
								</div>
							</div>
						</div>
					</Card>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<CheckmarkFilled size={20} className="mr-2 text-teal-500" /> Chất
							lượng vượt trội
						</h4>
						<p className="text-sm text-gray-600">
							AI giúp QA phát hiện lỗi tiềm ẩn và bao quát nhiều trường hợp hơn
							mà kiểm thử thủ công có thể bỏ sót.
						</p>
					</Card>

					<Card>
						<h4 className="font-bold mb-2 flex items-center">
							<Ai size={20} className="mr-2 text-teal-500" /> AI thực chiến
						</h4>
						<p className="text-sm text-gray-600">
							AI Engineer có thể tập trung vào việc áp dụng mô hình vào thực tế
							và tối ưu hóa hiệu suất thay vì chỉ nghiên cứu.
						</p>
					</Card>
				</div>
			</div>
		</SlideLayout>
	);
};
