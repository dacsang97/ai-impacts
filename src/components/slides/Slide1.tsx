import { Link } from "@tanstack/react-router";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide1 = () => {
	const buttonClass =
		"w-full text-left bg-white rounded border border-gray-200 hover:bg-orange-50 transition-colors duration-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-200 flex items-center";

	return (
		<SlideLayout title="Mục Lục" className="bg-gray-50">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-2xl font-bold text-gray-800 mb-8 tracking-wide">
					Mục lục
				</h2>
				<div className="grid grid-cols-2 gap-4 text-base text-gray-800 font-medium auto-rows-fr">
					{/* Hàng 1: Mục 1 và 7 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "2" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">1.</span>
						<span>Khoảnh Khắc AI: Từ Hype đến Hiệu quả</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "9" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">7.</span>
						<span>Quy Trình Kỹ Thuật Mới</span>
					</Link>

					{/* Hàng 2: Mục 2 và 8 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "3" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">2.</span>
						<span>AI: Đồng Đội "Junior" Của Bạn</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "10" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">8.</span>
						<span>Tái Cấu Trúc Đội Nhóm</span>
					</Link>

					{/* Hàng 3: Mục 3 và 9 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "4" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">3.</span>
						<span>Công Việc Kỹ Sư: Từ Code đến Giải Quyết Vấn Đề</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "11" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">9.</span>
						<span>Phá Vỡ Rào Cản Sản Phẩm & Kỹ Thuật</span>
					</Link>

					{/* Hàng 4: Mục 4 và 10 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "5" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">4.</span>
						<span>AI: Trợ Thủ Đắc Lực Trong Quy Trình Phát Triển</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "12" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">10.</span>
						<span>AI Cần Gì Từ Tổ Chức?</span>
					</Link>

					{/* Hàng 5: Mục 5 và 11 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "7" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">5.</span>
						<span>AI Còn Hạn Chế Ở Đâu?</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "13" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">11.</span>
						<span>Giữ Vững Giá Trị Bản Thân</span>
					</Link>

					{/* Hàng 6: Mục 6 và 12 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "8" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">6.</span>
						<span>Tăng Tốc Với AI: Thực Tế Là Bao Nhiều?</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "15" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-2">12.</span>
						<span>Kết Luận: Bạn Vẫn Nắm Giữ Nghề Nghiệp!</span>
					</Link>
				</div>
			</div>
		</SlideLayout>
	);
};
