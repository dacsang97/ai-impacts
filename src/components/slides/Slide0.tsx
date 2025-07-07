import { FavoriteFilled } from "@carbon/icons-react";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide0 = () => {
	return (
		<SlideLayout title="" subtitle="">
			<div className="text-center flex flex-col justify-center items-center h-full">
				<h2 className="text-lg font-bold uppercase tracking-widest text-black">
					AI Thay Đổi Công Cụ, Bạn Vẫn Nắm Giữ Nghề Nghiệp
				</h2>
				<h1 className="text-6xl font-bold text-black tracking-tighter leading-tight my-8 font-mono">
					AI Tác Động Đến Công Việc <br /> Của Chúng Ta Như Thế Nào?
				</h1>
				<p className="text-xl text-black max-w-3xl mx-auto mb-12">
					Một hướng dẫn thực tế để thích nghi và phát triển trong kỷ nguyên AI
				</p>
				<div className="flex items-center justify-center text-lg font-medium text-black">
					<span>0x91145 - From GHT with</span>
					<FavoriteFilled className="inline-block w-6 h-6 ml-2 text-red-500" />
				</div>
			</div>
		</SlideLayout>
	);
};
