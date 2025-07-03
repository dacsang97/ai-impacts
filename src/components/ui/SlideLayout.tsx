import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SlideLayoutProps {
	children: ReactNode;
	title?: string;
	subtitle?: string;
	className?: string;
}

export const SlideLayout = ({
	children,
	title,
	subtitle,
	className = "bg-gray-50",
}: SlideLayoutProps) => {
	return (
		<div
			className={cn(
				"min-h-screen flex flex-col justify-center items-center px-4 py-8",
				className,
			)}
		>
			<div className="w-full max-w-7xl mx-auto">
				{title && (
					<div className="text-center mb-12">
						<h1 className="text-4xl font-extrabold text-gray-900 mb-4">
							{title}
						</h1>
						{subtitle && (
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								{subtitle}
							</p>
						)}
					</div>
				)}
				{children}
			</div>
		</div>
	);
};
