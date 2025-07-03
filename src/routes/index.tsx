import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: () => <Navigate to="/slide/$slideId" params={{ slideId: "0" }} />,
});
