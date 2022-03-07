import Link from "next/link";
import Image from "next/image";

// COMPONENTS
import { Date } from "../elements";
import { Tags } from "../items";

// STYLES
import { StyledWrapper, StyledText } from "../../components/StylesGeneral";
import { StyledHeroImgWrapper, StyledHeroWrapper } from "./Styles";

const HeroPost = ({ title, featuredImage, date, excerpt, slug, tags }) => (
  <Link href={`/blog/${slug}`} passHref>
    <section>
      <StyledHeroImgWrapper>
        <Image
          width={730}
          height={360}
          alt={title}
          src={featuredImage?.node?.sourceUrl}
          layout="fill"
          objectFit="cover"
        />
      </StyledHeroImgWrapper>

      <StyledWrapper between hero>
        <StyledHeroWrapper column>
          <StyledText h1 bold>
            {title}
          </StyledText>

          {tags && <Tags tags={tags?.edges} />}

          <Date dateString={date} />
        </StyledHeroWrapper>

        <StyledHeroWrapper dangerouslySetInnerHTML={{ __html: excerpt }} />
      </StyledWrapper>
    </section>
  </Link>
);

export default HeroPost;
