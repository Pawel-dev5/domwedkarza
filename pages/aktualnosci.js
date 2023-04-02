import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';

// API
import { getAktualnosciHeader } from '../lib/aktualnosci';
import { getPrimaryMenu, getSubMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const FacebookWall = dynamic(() => import('../components/FacabookWall'));

const Index = ({ menuItems: { menuItems }, subMenuItems, footerItems, aktualnosciHeader }) => {
	return (
		<>
			<Head>
				{/* FONT AWESOME */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
					integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
					crossOrigin="anonymous"
					referrerpolicy="no-referrer"
				/>

				{/* FB FEED STYLES */}
				<link
					rel="stylesheet"
					id="easy-facebook-likebox-frontend-css"
					href="https://db.restauracja-nadzalewem.pl/wp-content/plugins/easy-facebook-likebox/facebook/frontend/assets/css/easy-facebook-likebox-frontend.css?ver=6.3.8"
					media="all"
				/>

				<script
					dangerouslySetInnerHTML={{
						__html: `window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/db.restauracja-nadzalewem.pl\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.0.1"}};
							/*! This file is auto-generated */
							!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode,e=(p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0),i.toDataURL());return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([129777,127995,8205,129778,127999],[129777,127995,8203,129778,127999])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);`,
					}}
				/>

				<Script
					src="https://db.restauracja-nadzalewem.pl/wp-includes/js/jquery/jquery.min.js?ver=3.6.0"
					id="jquery-core-js"
				/>

				<Script
					src="https://db.restauracja-nadzalewem.pl/wp-content/plugins/easy-facebook-likebox/facebook/frontend/assets/js/esf-free-popup.min.js?ver=6.3.8"
					id="easy-facebook-likebox-popup-script-js"
				/>

				<Script
					src="https://db.restauracja-nadzalewem.pl/wp-content/plugins/easy-facebook-likebox/facebook/frontend/assets/js/public.js?ver=6.3.8"
					id="easy-facebook-likebox-public-script-js"
				/>
				{/* END FB FEED STYLES */}
			</Head>

			<Layout
				menuItems={menuItems?.edges}
				subMenuItems={subMenuItems?.menuItems?.edges}
				footerItems={footerItems?.menuItems?.edges}
				headerText={aktualnosciHeader?.title}
				headerImg={aktualnosciHeader?.featuredImage?.node}
				seo={aktualnosciHeader?.seo}
			>
				<FacebookWall content={aktualnosciHeader?.content} />
			</Layout>
		</>
	);
};

export default Index;

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const subMenuItems = (await getSubMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const aktualnosciHeader = (await getAktualnosciHeader()) ?? null;

	return {
		props: {
			menuItems,
			subMenuItems,
			footerItems,
			aktualnosciHeader,
		},
		revalidate: 300, // In seconds
	};
}
