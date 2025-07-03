import { useNavigate } from "@tanstack/react-router";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide1 = () => {
	const navigate = useNavigate();
	const outlineItems = [
		{ id: 2, title: "1. Khoảnh Khắc AI: Từ Hype đến Hiệu quả" },
		{ id: 3, title: '2. AI: Đồng Đội "Junior" Của Bạn' },
		{ id: 4, title: "3. Công Việc Kỹ Sư: Từ Code đến Giải Quyết Vấn Đề" },
		{ id: 5, title: "4. AI Giúp Ích Ở Đâu" },
		{ id: 7, title: "5. AI Còn Hạn Chế Ở Đâu?" },
		{ id: 8, title: "6. Tăng Tốc Với AI: Thực Tế Là Bao Nhiêu?" },
		{ id: 9, title: "7. Quy Trình Kỹ Thuật Mới" },
		{ id: 10, title: "8. Tái Cấu Trúc Đội Nhóm" },
		{ id: 11, title: "9. Phá Vỡ Rào Cản Sản Phẩm & Kỹ Thuật" },
		{ id: 12, title: "10. AI Cần Gì Từ Tổ Chức?" },
		{ id: 13, title: "11. Giữ Vững Giá Trị Bản Thân" },
		{ id: 15, title: "12. Kết Luận: Bạn Vẫn Nắm Giữ Nghề Nghiệp!" },
		{ id: 16, title: "13. Cảm Ơn!" },
	];

	const goToSlide = (slideId: number) => {
		navigate({
			to: "/slide/$slideId",
			params: { slideId: String(slideId) },
		});
	};

	return (
		<SlideLayout title="Mục Lục" className="bg-gray-50">
			<div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700 font-medium">
				<ul className="space-y-4">
					{outlineItems.slice(0, 8).map((item) => (
						<li key={item.id}>
							<button
								type="button"
								onClick={() => goToSlide(item.id)}
								className="text-left hover:text-orange-500 transition-colors duration-300 cursor-pointer"
							>
								{item.title}
							</button>
						</li>
					))}
				</ul>
				<ul className="space-y-4">
					{outlineItems.slice(8).map((item) => (
						<li key={item.id}>
							<button
								type="button"
								onClick={() => goToSlide(item.id)}
								className="text-left hover:text-orange-500 transition-colors duration-300 cursor-pointer"
							>
								{item.title}
							</button>
						</li>
					))}
				</ul>
			</div>
		</SlideLayout>
	);
};
