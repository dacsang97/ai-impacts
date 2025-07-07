import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide10 = () => {
	return (
		<SlideLayout
			title="Mô Hình 'T-Shaped Skills': Định Nghĩa Lại Chuyên Môn"
			subtitle="Với AI, các thành viên không chỉ đi sâu vào chuyên môn (chiều dọc) mà còn mở rộng kiến thức sang các lĩnh vực liên quan (chiều ngang)."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				10. Tái Cấu Trúc Đội Nhóm
			</div>

			<div className="grid md:grid-cols-2 gap-8 mt-24">
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
						Mô Hình Chữ "I" (Truyền thống)
					</h3>
					<p className="text-sm text-gray-600 text-center">
						Mỗi cá nhân chỉ tập trung phát triển một kỹ năng chuyên môn duy
						nhất.
					</p>
					<div className="flex justify-center my-6 h-40">
						<div className="w-10 bg-gray-300 rounded" />
					</div>
					<ul className="mt-4 space-y-2 text-sm">
						<li>
							<span className="font-semibold text-green-600">Ưu điểm:</span>{" "}
							Trình độ chuyên môn rất cao.
						</li>
						<li>
							<span className="font-semibold text-red-600">Nhược điểm:</span>{" "}
							Cứng nhắc, khó phối hợp, tạo bottleneck.
						</li>
					</ul>
				</Card>

				<Card border={true} borderColor="border-orange-500">
					<h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
						Mô Hình Chữ "T" (Với AI)
					</h3>
					<p className="text-sm text-gray-600 text-center">
						Vẫn giữ chuyên môn sâu, nhưng AI giúp mở rộng kỹ năng sang các lĩnh
						vực liền kề.
					</p>
					<div className="flex justify-center my-6 h-40 items-start">
						<div className="relative">
							<div className="w-48 h-10 bg-orange-500 rounded-t-md" />
							<div className="absolute top-full left-1/2 -translate-x-1/2 w-10 h-32 bg-teal-500 rounded-b-md" />
						</div>
					</div>
					<ul className="mt-4 space-y-2 text-sm">
						<li>
							<span className="font-semibold text-green-600">Ưu điểm:</span>{" "}
							Linh hoạt, tự chủ, tăng cường hợp tác.
						</li>
						<li>
							<span className="font-semibold text-red-600">Nhược điểm:</span>{" "}
							Yêu cầu văn hóa học hỏi liên tục.
						</li>
					</ul>
				</Card>
			</div>
		</SlideLayout>
	);
};
