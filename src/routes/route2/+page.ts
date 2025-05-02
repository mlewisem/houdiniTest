import type { PageLoad } from './$types';
import { growthRatesStore, berriesStore } from '$houdini';

export const load: PageLoad = async (event) => {
	const growthQuery = new growthRatesStore();
	const berriesQuery = new berriesStore();

	// Attempting a Manual Load Here. Works on intial load, returns null on client side navigation.

	const { data: growth } = await growthQuery.fetch({
		event
	});

	// variable needed for second query. Empty on client side navigation

	const nextQueryVariable = growth;
	console.log('🚀 ~ constload:PageLoad= ~ nextQueryVariable:', nextQueryVariable);

	// Variable passed into second query in orginal code base. On client side navigation this does not trigger because first query data is null

	const { data: berries } = await berriesQuery.fetch({
		event
	});

	console.log('🚀 ~ constload:PageLoad= ~ berries:', berries);

	return {
		berries
	};
};
