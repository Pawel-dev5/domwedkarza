// STYLES
import { StyledSubMenu } from '../StylesGeneral';

const SubMenu = ({ subMenuItems }) => (
	<div>
		{subMenuItems &&
			subMenuItems?.slice(0, -1).map((item) => (
				<StyledSubMenu href={`tel:${item?.node?.label}`} key={item?.node?.id}>
					{item?.node?.label}
				</StyledSubMenu>
			))}

		{subMenuItems &&
			subMenuItems?.slice(2).map((item) => (
				<StyledSubMenu href={`mailto:${item?.node?.label}`} key={item?.node?.id}>
					{item?.node?.label}
				</StyledSubMenu>
			))}
	</div>
);
export default SubMenu;
