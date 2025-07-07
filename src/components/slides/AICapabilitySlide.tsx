import type { ComponentType } from "react";
import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

// Interface cho capability item với progress bar
interface CapabilityItem {
	name: string;
	percentage: number;
	icon?: ComponentType<{ size?: number; className?: string }>;
	description?: string;
}

// Interface cho impact item
interface ImpactItem {
	icon: ComponentType<{ size?: number; className?: string }>;
	title: string;
	description: string;
}

// Interface cho tip item
interface TipItem {
	text: string;
}

// Interface cho workflow item (cho slide 52)
interface WorkflowItem {
	icon: ComponentType<{ size?: number; className?: string }>;
	title: string;
	description: string;
}

// Main props interface
interface AICapabilitySlideProps {
	title: string;
	subtitle: string;
	slideNumber: string;
	slideTitle: string;
	backgroundColor?: string;
	capabilityTitle: string;
	capabilityTitleIcon?: ComponentType<{ size?: number; className?: string }>;
	capabilities: CapabilityItem[];
	impactTitle: string;
	impactTitleIcon?: ComponentType<{ size?: number; className?: string }>;
	impacts: ImpactItem[];
	tipTitle: string;
	tipTitleIcon?: ComponentType<{ size?: number; className?: string }>;
	tips: TipItem[];
	quote?: string;
	// Thêm props cho workflow (slide 52)
	workflowItems?: WorkflowItem[];
	// Style variant cho capability bars
	capabilityStyle?: "default" | "detailed" | "boxed" | "compact";
	// Color scheme
	colorScheme?: "green" | "blue" | "purple" | "orange";
}

// Component cho progress bar - default style
const CapabilityBar = ({
	name,
	percentage,
	icon: IconComponent,
	description,
}: CapabilityItem) => (
	<div className="flex items-center justify-between bg-gray-100 p-3 rounded">
		<div className="flex items-center">
			{IconComponent && (
				<IconComponent size={20} className="mr-2 text-gray-600" />
			)}
			<div>
				<span className="font-medium">{name}</span>
				{description && (
					<p className="text-xs text-gray-600 mt-1">{description}</p>
				)}
			</div>
		</div>
		<div className="flex items-center">
			<div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
				<div
					className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
					style={{ width: `${percentage}%` }}
				/>
			</div>
			<span className="text-sm font-semibold">{percentage}%</span>
		</div>
	</div>
);

// Component cho detailed capability với icon (slide 51)
const DetailedCapabilityBar = ({
	name,
	percentage,
	icon: IconComponent,
	description,
	colorScheme = "green",
}: CapabilityItem & { colorScheme?: string }) => {
	const colorMap = {
		green: "bg-green-100 bg-green-500",
		blue: "bg-blue-100 bg-blue-500",
		purple: "bg-purple-100 bg-purple-500",
		orange: "bg-orange-100 bg-orange-500",
	};

	const [bgColor, barColor] = colorMap[
		colorScheme as keyof typeof colorMap
	]?.split(" ") || ["bg-green-100", "bg-green-500"];

	return (
		<div className={`${bgColor} p-4 rounded-lg`}>
			<div className="flex items-center justify-between mb-2">
				<span className="font-medium">{name}</span>
				{IconComponent && <IconComponent size={24} className="text-gray-700" />}
			</div>
			<div className="w-full bg-gray-200 rounded-full h-2 mb-2">
				<div
					className={`${barColor} h-2 rounded-full transition-all duration-300`}
					style={{ width: `${percentage}%` }}
				/>
			</div>
			<div className="flex items-center justify-between">
				<span className="text-sm text-gray-600">{description}</span>
				<span className="text-sm font-semibold">{percentage}%</span>
			</div>
		</div>
	);
};

// Component cho boxed capability với border (slide 52)
const BoxedCapabilityBar = ({
	name,
	percentage,
	icon: IconComponent,
	description,
	colorScheme = "green",
}: CapabilityItem & { colorScheme?: string }) => {
	const colorMap = {
		green: "bg-green-100 border-green-500 bg-green-500",
		blue: "bg-blue-100 border-blue-500 bg-blue-500",
		purple: "bg-purple-100 border-purple-500 bg-purple-500",
		orange: "bg-orange-100 border-orange-500 bg-orange-500",
	};

	const [bgColor, borderColor, barColor] = colorMap[
		colorScheme as keyof typeof colorMap
	]?.split(" ") || ["bg-green-100", "border-green-500", "bg-green-500"];

	return (
		<div className={`${bgColor} p-4 rounded-lg border-l-4 ${borderColor}`}>
			<div className="flex items-center justify-between mb-3">
				<div>
					<h4 className="font-semibold">{name}</h4>
					{description && (
						<p className="text-sm text-gray-600">{description}</p>
					)}
				</div>
				{IconComponent && <IconComponent size={24} className="text-gray-700" />}
			</div>
			<div className="w-full bg-gray-200 rounded-full h-2">
				<div
					className={`${barColor} h-2 rounded-full transition-all duration-300`}
					style={{ width: `${percentage}%` }}
				/>
			</div>
		</div>
	);
};

// Component cho compact capability (slide 53)
const CompactCapabilityBar = ({
	name,
	percentage,
	icon: IconComponent,
	description,
	colorScheme = "green",
}: CapabilityItem & { colorScheme?: string }) => {
	const colorMap = {
		green: "bg-green-100 bg-green-500",
		blue: "bg-blue-100 bg-blue-500",
		purple: "bg-purple-100 bg-purple-500",
		orange: "bg-orange-100 bg-orange-500",
	};

	const [bgColor, barColor] = colorMap[
		colorScheme as keyof typeof colorMap
	]?.split(" ") || ["bg-green-100", "bg-green-500"];

	return (
		<div className={`${bgColor} p-4 rounded-lg`}>
			<div className="flex items-center justify-between mb-2">
				<div className="flex items-center">
					{IconComponent && (
						<IconComponent size={24} className="mr-3 text-gray-700" />
					)}
					<div>
						<h4 className="font-semibold">{name}</h4>
						{description && (
							<p className="text-xs text-gray-600">{description}</p>
						)}
					</div>
				</div>
				<div className="text-right">
					<div className="w-20 bg-gray-200 rounded-full h-2 mb-1">
						<div
							className={`${barColor} h-2 rounded-full transition-all duration-300`}
							style={{ width: `${percentage}%` }}
						/>
					</div>
					<span className="text-xs font-semibold">{percentage}%</span>
				</div>
			</div>
		</div>
	);
};

// Component cho impact item
const ImpactItem = ({
	icon: IconComponent,
	title,
	description,
}: ImpactItem) => (
	<div className="flex items-center">
		<IconComponent size={32} className="mr-3 text-white" />
		<div>
			<p className="font-semibold">{title}</p>
			<p className="text-sm opacity-90">{description}</p>
		</div>
	</div>
);

// Component cho workflow item (slide 52)
const WorkflowItem = ({
	icon: IconComponent,
	title,
	description,
}: WorkflowItem) => (
	<div className="bg-gray-700 p-3 rounded">
		<div className="flex items-start">
			<IconComponent size={24} className="mr-3 text-white" />
			<div>
				<p className="font-semibold text-sm">{title}</p>
				<p className="text-xs opacity-90">{description}</p>
			</div>
		</div>
	</div>
);

// Main component
export const AICapabilitySlide = ({
	title,
	subtitle,
	slideNumber,
	slideTitle,
	backgroundColor = "bg-green-50",
	capabilityTitle,
	capabilityTitleIcon: CapabilityTitleIcon,
	capabilities,
	impactTitle,
	impactTitleIcon: ImpactTitleIcon,
	impacts,
	tipTitle,
	tipTitleIcon: TipTitleIcon,
	tips,
	quote,
	workflowItems,
	capabilityStyle = "default",
	colorScheme = "green",
}: AICapabilitySlideProps) => {
	const borderColorMap = {
		green: "border-green-500",
		blue: "border-blue-500",
		purple: "border-purple-500",
		orange: "border-orange-500",
	};

	const tipColorMap = {
		green: "text-green-800",
		blue: "text-blue-800",
		purple: "text-purple-800",
		orange: "text-orange-800",
	};

	const quoteBorderMap = {
		green: "border-green-500",
		blue: "border-blue-500",
		purple: "border-purple-500",
		orange: "border-orange-500",
	};

	const renderCapabilityBars = () => {
		switch (capabilityStyle) {
			case "detailed":
				return capabilities.map((capability, index) => (
					<DetailedCapabilityBar
						key={`${capability.name}-${index}`}
						{...capability}
						colorScheme={colorScheme}
					/>
				));
			case "boxed":
				return capabilities.map((capability, index) => (
					<BoxedCapabilityBar
						key={`${capability.name}-${index}`}
						{...capability}
						colorScheme={colorScheme}
					/>
				));
			case "compact":
				return capabilities.map((capability, index) => (
					<CompactCapabilityBar
						key={`${capability.name}-${index}`}
						{...capability}
						colorScheme={colorScheme}
					/>
				));
			default:
				return capabilities.map((capability, index) => (
					<CapabilityBar key={`${capability.name}-${index}`} {...capability} />
				));
		}
	};

	return (
		<SlideLayout title={title} subtitle={subtitle} className={backgroundColor}>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				{slideNumber}. {slideTitle}
			</div>

			<div className="grid md:grid-cols-2 gap-8 items-center mt-16">
				{/* Capabilities Card */}
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
						{CapabilityTitleIcon && (
							<CapabilityTitleIcon size={24} className="mr-2" />
						)}
						{capabilityTitle}
					</h3>
					<div className="space-y-4">{renderCapabilityBars()}</div>
				</Card>

				<div className="space-y-6">
					{/* Impact Card */}
					<Card className="bg-gray-800 text-white">
						<h3 className="text-xl font-bold mb-4 flex items-center">
							{ImpactTitleIcon && (
								<ImpactTitleIcon size={24} className="mr-2 text-white" />
							)}
							{impactTitle}
						</h3>
						<div className="space-y-3">
							{workflowItems
								? // Render workflow items for slide 52
									workflowItems.map((item, index) => (
										<WorkflowItem key={`${item.title}-${index}`} {...item} />
									))
								: // Render impact items for other slides
									impacts.map((impact, index) => (
										<ImpactItem key={`${impact.title}-${index}`} {...impact} />
									))}
						</div>
					</Card>

					{/* Tips Card */}
					<Card border={true} borderColor={borderColorMap[colorScheme]}>
						<h3
							className={`text-lg font-bold ${tipColorMap[colorScheme]} mb-3 flex items-center`}
						>
							{TipTitleIcon && <TipTitleIcon size={20} className="mr-2" />}
							{tipTitle}
						</h3>
						<ul className="space-y-2 text-sm text-gray-700">
							{tips.map((tip, index) => (
								<li key={`${tip.text.slice(0, 20)}-${index}`}>• {tip.text}</li>
							))}
						</ul>
					</Card>
				</div>
			</div>

			{/* Quote nếu có */}
			{quote && (
				<blockquote
					className={`mt-8 text-lg italic text-gray-500 border-l-4 ${quoteBorderMap[colorScheme]} pl-4 text-center`}
				>
					"{quote}"
				</blockquote>
			)}
		</SlideLayout>
	);
};
