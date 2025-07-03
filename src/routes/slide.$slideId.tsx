import { createFileRoute } from "@tanstack/react-router";
import { SlideContent } from "../components/slides/SlideContent";
import { Navigation } from "../components/ui/Navigation";

export const Route = createFileRoute("/slide/$slideId")({
	component: SlideComponent,
	validateSearch: (search: Record<string, unknown>) => search,
});

function SlideComponent() {
	const { slideId } = Route.useParams();
	const slideNumber = Number(slideId);

	return (
		<div className="relative">
			<SlideContent slideNumber={slideNumber} />
			<Navigation />
		</div>
	);
}
