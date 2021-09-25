import React, { useState } from "react";
import ReactFlow, {
	Background,
	removeElements,
	addEdge,
} from "react-flow-renderer";
import SliderWindow from "./SliderWindow";

const initialElements = [
	{
		id: "1",
		type: "input",
		data: { label: "Input Node" },
		position: { x: 250, y: 25 },
	},
	{
		id: "2",
		data: { label: <div>Default Node</div> },
		position: { x: 100, y: 125 },
	},
	{
		id: "3",
		type: "output",
		data: { label: "Output Node" },
		position: { x: 250, y: 250 },
	},
	{
		id: "4",
		type: "output",
		data: { label: "Output Node" },
		position: { x: 450, y: 250 },
	},
	{ id: "e1-2", source: "1", target: "2", animated: true },
	{ id: "e2-3", source: "2", target: "3" },
];

const Dashboard = () => {
	const [elements, setElements] = useState(initialElements);
	const onElementsRemove = (elementsToRemove) =>
		setElements((els) => removeElements(elementsToRemove, els));
	const onConnect = (params) => setElements((els) => addEdge(params, els));
	

	return (
		<div>
			<ReactFlow
				className="container mt-5 py-5"
				style={{ height: "80vh", background: "#161616" }}
				elements={elements}
				onConnect={onConnect}
				onElementsRemove={onElementsRemove}
				deleteKeyCode={46}
			>
				<Background color="#fff" gap={24} />
			</ReactFlow>
			<SliderWindow />
		</div>
	);
};

export default Dashboard;
