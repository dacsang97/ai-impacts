import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SlideLayoutProps {
	title: string;
	subtitle?: string;
	children: ReactNode;
	className?: string;
}

export const SlideLayout = ({
	title,
	subtitle,
	children,
	className,
}: SlideLayoutProps) => {
	return (
		<div
			className={cn(
				"min-h-screen p-8 md:p-16 relative w-full flex flex-col justify-center",
				className,
			)}
		>
			{(title || subtitle) && (
				<div className="text-center w-full max-w-5xl mx-auto">
					<h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
						{title}
					</h1>
					{subtitle && (
						<p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
							{subtitle}
						</p>
					)}
				</div>
			)}
			<div
				className={cn(
					"w-full max-w-7xl mx-auto flex-grow flex flex-col",
					title || subtitle ? "mt-8" : "justify-center",
				)}
			>
				{children}
			</div>
		</div>
	);
};
