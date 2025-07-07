import { FavoriteFilled } from "@carbon/icons-react";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide16 = () => {
	return (
		<SlideLayout className="bg-yellow-50" title="">
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				16. Cảm Ơn!
			</div>
			<div className="text-center">
				<h1 className="text-5xl font-extrabold text-gray-900 mb-8">Cảm Ơn!</h1>
				<p className="text-2xl text-gray-600 mb-12">
					Hy vọng buổi trình bày này đã mang lại những góc nhìn hữu ích cho bạn.
				</p>
				<p className="text-xl font-medium text-gray-700 mb-4 flex items-center justify-center">
					<span>0x91145 - From GHT with</span>
					<FavoriteFilled size={24} className="mx-2 text-red-500" />
				</p>
				<p className="text-lg text-gray-500">contact: evan@godhitech.com</p>
			</div>
		</SlideLayout>
	);
};
