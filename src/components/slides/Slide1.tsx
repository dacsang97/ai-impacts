import { Link } from "@tanstack/react-router";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide1 = () => {
	const buttonClass =
		"w-full text-left bg-white rounded-none border-2 border-black p-4 transition-all duration-200 hover:bg-yellow-300 hover:shadow-[4px_4px_0px_#000000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black flex items-center shadow-[2px_2px_0px_#000000]";

	return (
		<SlideLayout title="Mục Lục" className="bg-gray-50">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-2xl font-bold text-gray-800 mb-8 tracking-wide">
					Mục lục
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base font-bold text-black auto-rows-fr">
					{/* Hàng 1: Mục 1 và 7 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "2" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">1.</span>
						<span>Khoảnh Khắc AI: Từ Hype đến Hiệu quả</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "9" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">7.</span>
						<span>Quy Trình Kỹ Thuật Mới</span>
					</Link>

					{/* Hàng 2: Mục 2 và 8 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "3" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">2.</span>
						<span>AI: Đồng Đội "Junior" Của Bạn</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "10" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">8.</span>
						<span>Tái Cấu Trúc Đội Nhóm</span>
					</Link>

					{/* Hàng 3: Mục 3 và 9 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "4" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">3.</span>
						<span>Công Việc Kỹ Sư: Từ Code đến Giải Quyết Vấn Đề</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "11" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">9.</span>
						<span>Phá Vỡ Rào Cản Sản Phẩm & Kỹ Thuật</span>
					</Link>

					{/* Hàng 4: Mục 4 và 10 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "5" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">4.</span>
						<span>AI: Trợ Thủ Đắc Lực Trong Quy Trình Phát Triển</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "12" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">10.</span>
						<span>AI Cần Gì Từ Tổ Chức?</span>
					</Link>

					{/* Hàng 5: Mục 5 và 11 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "7" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">5.</span>
						<span>AI Còn Hạn Chế Ở Đâu?</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "13" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">11.</span>
						<span>Giữ Vững Giá Trị Bản Thân</span>
					</Link>

					{/* Hàng 6: Mục 6 và 12 */}
					<Link
						to="/slide/$slideId"
						params={{ slideId: "8" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">6.</span>
						<span>Tăng Tốc Với AI: Thực Tế Là Bao Nhiều?</span>
					</Link>
					<Link
						to="/slide/$slideId"
						params={{ slideId: "15" }}
						className={buttonClass}
					>
						<span className="text-gray-600 font-semibold mr-3">12.</span>
						<span>Kết Luận: Bạn Vẫn Nắm Giữ Nghề Nghiệp!</span>
					</Link>
				</div>
			</div>
		</SlideLayout>
	);
};
