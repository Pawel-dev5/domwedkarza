/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { getServerSideSitemapIndex } from 'next-sitemap';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	// Method to source urls from cms
	// const urls = await fetch('https//example.com/api')

	return getServerSideSitemapIndex(ctx, ['https://www.restauracja-nadzalewem.pl/']);
};

// Default export to prevent next.js errors
export default function SitemapIndex() {}
