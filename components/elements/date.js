import { parseISO, format } from "date-fns";
import { pl } from "date-fns/locale";
import { StyledDate } from "./Styles";

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <StyledDate dateTime={dateString}>
      {format(date, "d LLLL yyyy", { locale: pl })}
    </StyledDate>
  );
};
export default Date;
