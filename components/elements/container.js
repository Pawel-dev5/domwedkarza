import { StyledContainer } from '../../components/StylesGeneral';

const Container = ({ children }) => <>{children && <StyledContainer>{children}</StyledContainer>}</>;
export default Container;
