import { SlideLayout } from "../ui/SlideLayout";

export const Slide15 = () => {
	return (
		<SlideLayout className="bg-gray-50">
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				15. Kết Luận
			</div>

			<div className="text-center">
				<h1 className="text-4xl font-extrabold text-gray-900 mb-8">
					Bạn Vẫn Nắm Giữ Nghề Nghiệp!
				</h1>
				<p className="text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
					Cốt lõi của kỹ thuật không thay đổi: Giải quyết vấn đề thực tế một
					cách chu đáo. Code và AI chỉ là công cụ.
				</p>
				<p className="text-xl font-medium text-orange-500 mb-12">
					Tư duy, phán đoán, và sự quan tâm của bạn mới biến phần mềm thành thứ
					đáng giá.
				</p>
				<blockquote className="text-2xl italic text-gray-500 border-l-4 border-orange-500 pl-6 max-w-4xl mx-auto">
					"Đừng sợ công cụ. Hãy học chúng. Sử dụng chúng. Phát triển chúng. Phá
					vỡ chúng. Nhưng đừng bao giờ quên: Đó là tư duy, phán đoán và sự quan
					tâm của bạn biến phần mềm thành thứ đáng giá."
				</blockquote>
			</div>
		</SlideLayout>
	);
};
