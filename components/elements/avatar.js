import Image from "next/image";
import { StyledWrapper, StyledText } from "../StylesGeneral";

const Avatar = ({ author }) => {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null;

  return (
    <StyledWrapper avatar>
      {author && (
        <Image
          src={author?.avatar?.url}
          alt={name}
          width={50}
          height={50}
          className="rounded"
        />
      )}
      <StyledText avatarName>{name}</StyledText>
    </StyledWrapper>
  );
};
export default Avatar;
