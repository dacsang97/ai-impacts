import { FavoriteFilled } from "@carbon/icons-react";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide0 = () => {
	return (
		<SlideLayout title="" subtitle="">
			<div className="text-center">
				<h2 className="text-sm font-bold uppercase tracking-widest text-black/60">
					AI Thay Đổi Công Cụ, Bạn Vẫn Nắm Giữ Nghề Nghiệp
				</h2>
				<h1 className="text-5xl font-bold text-black tracking-tighter leading-tight my-6 font-mono">
					AI Tác Động Đến Công Việc <br /> Của Chúng Ta Như Thế Nào?
				</h1>
				<p className="text-lg text-black/80 max-w-3xl mx-auto mb-10">
					Một hướng dẫn thực tế để thích nghi và phát triển trong kỷ nguyên AI
				</p>
				<div className="flex items-center justify-center text-base font-medium text-black">
					<span>0x91145 - From GHT with</span>
					<FavoriteFilled className="inline-block w-5 h-5 ml-2 text-red-500" />
				</div>
			</div>
		</SlideLayout>
	);
};
