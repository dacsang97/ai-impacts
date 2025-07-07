import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	border?: boolean;
	borderColor?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ className, children, border = false, borderColor, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"bg-white p-6 border-2 border-black rounded-none shadow-[4px_4px_0px_#000000]",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	},
);
Card.displayName = "Card";
