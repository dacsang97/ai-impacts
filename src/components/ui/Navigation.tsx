import { useNavigate, useParams } from "@tanstack/react-router";
import { cn } from "../../lib/utils";

const TOTAL_SLIDES = 17; // slides 0-16

export const Navigation = () => {
	const navigate = useNavigate();
	const params = useParams({ strict: false });
	const currentSlide = Number((params as { slideId?: string }).slideId) || 0;

	const prevSlide = currentSlide > 0 ? currentSlide - 1 : null;
	const nextSlide = currentSlide < TOTAL_SLIDES - 1 ? currentSlide + 1 : null;

	const handlePrev = () => {
		if (prevSlide !== null) {
			navigate({
				to: "/slide/$slideId",
				params: { slideId: String(prevSlide) },
			});
		}
	};

	const handleNext = () => {
		if (nextSlide !== null) {
			navigate({
				to: "/slide/$slideId",
				params: { slideId: String(nextSlide) },
			});
		}
	};

	return (
		<div className="fixed bottom-5 right-5 z-50 flex items-center gap-5 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
			<button
				type="button"
				onClick={handlePrev}
				className={cn(
					"px-3 py-1 rounded-lg text-xl transition-all duration-300",
					prevSlide !== null
						? "text-gray-800 hover:bg-orange-500 hover:text-white cursor-pointer"
						: "text-gray-400 cursor-not-allowed",
				)}
				disabled={prevSlide === null}
			>
				‹
			</button>

			<span className="text-base font-medium text-gray-600">
				{currentSlide + 1}/{TOTAL_SLIDES}
			</span>

			<button
				type="button"
				onClick={handleNext}
				className={cn(
					"px-3 py-1 rounded-lg text-xl transition-all duration-300",
					nextSlide !== null
						? "text-gray-800 hover:bg-orange-500 hover:text-white cursor-pointer"
						: "text-gray-400 cursor-not-allowed",
				)}
				disabled={nextSlide === null}
			>
				›
			</button>
		</div>
	);
};
