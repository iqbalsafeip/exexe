import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		// Ambil semua file dalam folder sebagai teks mentah
		const modules = import.meta.glob('../../../contents/abouts/*', {
			query: '?raw',
			import: 'default'
		});

		const path = Object.keys(modules).find((key) =>
			key.endsWith(`${params.slug}.md`) ||
			key.endsWith(`${params.slug}.txt`) ||
			key.endsWith(`${params.slug}.ts`)
		);

		if (!path) {
			throw error(404, `Could not find ${params.slug}`);
		}

		// Panggil modul, hasilnya adalah string teks (bukan fungsi!)
		const content = await modules[path]();

		return {
			content
		};
	} catch (err) {
		console.error('Load error:', err);
		throw error(500, 'Internal Error');
	}
};
