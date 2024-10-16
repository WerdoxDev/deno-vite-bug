import { toCamelCase } from "@std/text";
// @deno-types="@types/react"
import { useRef, useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const test = useRef(toCamelCase("ifYouSeeThisCongrats"));

	return (
		<>
			<img src="/vite-deno.svg" alt="Vite with Deno" />
			<div>{test.current}</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)} type="button">
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
