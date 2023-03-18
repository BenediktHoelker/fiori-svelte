/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	const res = await fetch(`http://localhost:4004/timetracking/WorkItems`);

	const { value } = await res.json();

	return { workitems: value };
}
