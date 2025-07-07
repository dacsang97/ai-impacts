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
				"min-h-screen p-8 md:p-16 relative w-full flex flex-col justify-center items-center",
				className,
			)}
		>
			<div className="text-center w-full max-w-5xl mx-auto">
				<h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
					{title}
				</h1>
				{subtitle && (
					<p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">
						{subtitle}
					</p>
				)}
			</div>
			<div className="w-full max-w-7xl mx-auto mt-8 flex-grow">{children}</div>
		</div>
	);
};
