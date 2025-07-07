import { useNavigate, useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

const TOTAL_SLIDES = 17; // slides 0-16

const slideOrder = [
	0, 1, 2, 3, 4, 5, 5.1, 5.2, 5.3, 6, 7, 8, 9, 10, 10.1, 10.2, 10.3, 10.4, 11,
	12, 13, 14, 15, 16,
];

export const Navigation = () => {
	const navigate = useNavigate();
	const params = useParams({ strict: false });
	const currentSlide = Number((params as { slideId?: string }).slideId) || 0;

	// Custom navigation logic for new slides
	const getNextSlide = (current: number) => {
		const currentIndex = slideOrder.indexOf(current);
		if (currentIndex !== -1 && currentIndex < slideOrder.length - 1) {
			return slideOrder[currentIndex + 1];
		}
		return null;
	};

	const getPrevSlide = (current: number) => {
		const currentIndex = slideOrder.indexOf(current);
		if (currentIndex > 0) {
			return slideOrder[currentIndex - 1];
		}
		return null;
	};

	const prevSlide = getPrevSlide(currentSlide);
	const nextSlide = getNextSlide(currentSlide);

	// Calculate total slides including new ones
	const getTotalSlides = () => {
		return slideOrder.length;
	};

	// Get current position in sequence
	const getCurrentPosition = (current: number) => {
		return slideOrder.indexOf(current) + 1;
	};

	const [showHint, setShowHint] = useState(true);

	useEffect(() => {
		if (!showHint) return;
		const timer = setTimeout(() => setShowHint(false), 3000);
		return () => clearTimeout(timer);
	}, [showHint]);

	const handlePrev = useCallback(() => {
		if (prevSlide !== null) {
			navigate({
				to: "/slide/$slideId",
				params: { slideId: String(prevSlide) },
			});
		}
	}, [prevSlide, navigate]);

	const handleNext = useCallback(() => {
		if (nextSlide !== null) {
			navigate({
				to: "/slide/$slideId",
				params: { slideId: String(nextSlide) },
			});
		}
	}, [nextSlide, navigate]);

	// Keyboard navigation
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			// Prevent navigation when user is typing in input fields
			if (
				event.target instanceof HTMLInputElement ||
				event.target instanceof HTMLTextAreaElement ||
				event.target instanceof HTMLSelectElement
			) {
				return;
			}

			switch (event.key) {
				case "ArrowLeft":
				case "ArrowUp":
					event.preventDefault();
					handlePrev();
					break;
				case "ArrowRight":
				case "ArrowDown":
				case " ": // Spacebar
					event.preventDefault();
					handleNext();
					break;
				case "Home":
					event.preventDefault();
					navigate({
						to: "/slide/$slideId",
						params: { slideId: "0" },
					});
					break;
				case "End":
					event.preventDefault();
					navigate({
						to: "/slide/$slideId",
						params: { slideId: "16" },
					});
					break;
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handlePrev, handleNext, navigate]);

	return (
		<div className="fixed bottom-5 right-5 z-50">
			<div>
				{/* Keyboard shortcut hint */}
				{showHint && (
					<div className="mb-3 text-right">
						<div className="text-xs text-gray-500 bg-white/70 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
							Dùng phím ← → để điều hướng
						</div>
					</div>
				)}
				{/* Navigation controls */}
				<div className="flex items-center gap-5 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
					{/* Icon button về mục lục */}
					<button
						type="button"
						onClick={() =>
							navigate({ to: "/slide/$slideId", params: { slideId: "1" } })
						}
						className="p-2 rounded-full hover:bg-orange-100 transition text-gray-700 focus:outline-none"
						title="Về mục lục"
						aria-label="Về mục lục"
					>
						<svg
							width="22"
							height="22"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<title>Về mục lục</title>
							<line x1="5" y1="7" x2="19" y2="7" />
							<line x1="5" y1="12" x2="19" y2="12" />
							<line x1="5" y1="17" x2="19" y2="17" />
						</svg>
					</button>

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
						{getCurrentPosition(currentSlide)}/{getTotalSlides()}
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
			</div>
		</div>
	);
};
