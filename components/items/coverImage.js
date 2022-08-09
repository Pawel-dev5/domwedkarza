import Image from 'next/image';
import Link from 'next/link';

import { StyledCoverImg } from './Styles';

const CoverImage = ({ title, featuredImage, slug }) => {
	const image = (
		<Image width={300} height={170} alt={title} src={featuredImage?.node?.sourceUrl} layout="fill" objectFit="cover" />
	);

	return (
		<StyledCoverImg>
			{slug ? (
				<Link href={`/oferta/${slug}`} passHref>
					{image}
				</Link>
			) : (
				image
			)}
		</StyledCoverImg>
	);
};

export default CoverImage;
