import { useState } from 'react';
import { getRequest } from './utils/requests';

function App() {
	const [dados, setDados] = useState<any>();

	async function handleClick() {
		const response = await getRequest("");
		setDados(response)
	}

	return (
		<>
			<div className='w-screen h-screen relative bg-red-500'>
				<button onClick={handleClick}>
					Request
				</button>
			</div>

			<p className="read-the-docs">
				{JSON.stringify(dados, null, 2)}
			</p>
		</>
	)
}

export default App
