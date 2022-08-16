import { getServerSideSitemapIndex } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
	// Method to source urls from cms
	// const urls = await fetch('https//example.com/api')

	return getServerSideSitemapIndex(ctx, [
		'https://www.restauracja-nadzalewem.pl/',
		'https://www.restauracja-nadzalewem.pl/aktualnosci/',
		'https://www.restauracja-nadzalewem.pl/galeria/',
		'https://www.restauracja-nadzalewem.pl/kontakt/',
		'https://www.restauracja-nadzalewem.pl/o-nas/',
		'https://www.restauracja-nadzalewem.pl/oferta/',
		'https://www.restauracja-nadzalewem.pl/wirtualnyspacer/',
		'https://www.restauracja-nadzalewem.pl/oferta/komunie-chrzciny/',
		'https://www.restauracja-nadzalewem.pl/oferta/przyjecie-weselne/',
		'https://www.restauracja-nadzalewem.pl/oferta/bankiety-i-konferencje/',
		'https://www.restauracja-nadzalewem.pl/oferta/przyjecia-okolicznosciowe/',
	]);
};

// Default export to prevent next.js errors
export default function SitemapIndex() {}
