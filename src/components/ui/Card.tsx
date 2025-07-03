import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CardProps {
	children: ReactNode;
	className?: string;
	hover?: boolean;
	border?: boolean;
	borderColor?: string;
}

export const Card = ({
	children,
	className = "",
	hover = true,
	border = false,
	borderColor = "border-orange-500",
}: CardProps) => {
	return (
		<div
			className={cn(
				"bg-white rounded-xl shadow-md transition-all duration-300 p-6",
				hover && "hover:transform hover:-translate-y-1 hover:shadow-lg",
				border && `border-2 ${borderColor}`,
				className,
			)}
		>
			{children}
		</div>
	);
};
