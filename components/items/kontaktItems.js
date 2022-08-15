import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

// STYLES
import { StyledFooterAdres, StyledTelWrapper, StyledContact, StyledAdressWrapper } from './Styles';
import { StyledText, StyledSubMenu } from '../StylesGeneral';

const StyledIcon = styled(FontAwesomeIcon)`
	font-size: 1.3rem;
	margin-left: 0.5rem;
`;

const KontaktItems = ({ footerItems, subMenuItems, color }) => (
	<StyledContact color={color}>
		{footerItems && subMenuItems && (
			<>
				<StyledFooterAdres>
					<div>
						<StyledIcon icon={faHome} className="fa-xl" />
						<StyledText
							footer={color === 'black' ?? true}
							h4={color === 'white' ?? true}
							h3={color === 'black' ?? true}
						>
							Adres
						</StyledText>
					</div>

					<StyledAdressWrapper>
						<StyledText
							footer={color === 'black' ?? true}
							h4={color === 'white' ?? true}
							h3={color === 'black' ?? true}
							footerAdres={color === 'black' ?? true}
							textAlign="left"
						>
							{footerItems[0]?.node?.label}
						</StyledText>
						<StyledText
							footer={color === 'black' ?? true}
							h4={color === 'white' ?? true}
							h3={color === 'black' ?? true}
							textAlign="left"
						>
							NIP: {footerItems[1]?.node?.label}
						</StyledText>
					</StyledAdressWrapper>
				</StyledFooterAdres>

				<StyledFooterAdres>
					<div>
						<StyledIcon icon={faPhone} className="fa-xl" />

						<StyledText
							footer={color === 'black' ?? true}
							h4={color === 'white' ?? true}
							h3={color === 'black' ?? true}
						>
							Zadzwoń
						</StyledText>
					</div>

					<StyledTelWrapper>
						{subMenuItems?.map((item) => (
							<StyledSubMenu
								href={`${item?.node?.path === 'http://email' ? 'mailto:' : 'tel:'}${item?.node?.label}`}
								key={item?.node?.id}
								footer
							>
								<StyledText
									h4={color === 'white' ?? true}
									h3={color === 'black' ?? true}
									black={color === 'black' ?? true}
									key={item?.node?.id}
								>
									{item?.node?.label}
								</StyledText>
							</StyledSubMenu>
						))}
					</StyledTelWrapper>
				</StyledFooterAdres>
			</>
		)}
	</StyledContact>
);

const ContactPageItems = ({ adres, telefon, color }) => (
	<StyledContact color={color}>
		{adres && telefon && (
			<>
				<StyledFooterAdres>
					<div>
						<StyledIcon icon={faHome} className="fa-xl" />
						<StyledText
							footer={color === 'black' ?? true}
							h5={color === 'white' ?? true}
							h3={color === 'black' ?? true}
						>
							{adres?.tytul}
						</StyledText>
					</div>

					<StyledAdressWrapper>
						<StyledText
							footer={color === 'black' ?? true}
							h3={color === 'black' ?? true}
							h5={color === 'white' ?? true}
							footerAdres={color === 'black' ?? true}
							textAlign="left"
						>
							{adres?.adres}
						</StyledText>
						<StyledText
							footer={color === 'black' ?? true}
							h5={color === 'white' ?? true}
							h3={color === 'black' ?? true}
							textAlign="left"
						>
							{adres?.nip}
						</StyledText>
					</StyledAdressWrapper>
				</StyledFooterAdres>

				<StyledFooterAdres>
					<div>
						<StyledIcon icon={faPhone} className="fa-xl" />

						<StyledText
							footer={color === 'black' ?? true}
							h5={color === 'white' ?? true}
							h3={color === 'black' ?? true}
						>
							{telefon?.tytul}
						</StyledText>
					</div>

					<StyledTelWrapper>
						<StyledSubMenu footer href={`tel:${telefon?.telefon}`}>
							<StyledText
								h5={color === 'white' ?? true}
								h3={color === 'black' ?? true}
								black={color === 'black' ?? true}
							>
								{telefon?.telefon}
							</StyledText>
						</StyledSubMenu>

						<StyledSubMenu footer href={`tel:${telefon?.telefon2}`}>
							<StyledText
								h5={color === 'white' ?? true}
								h3={color === 'black' ?? true}
								black={color === 'black' ?? true}
							>
								{telefon?.telefon2}
							</StyledText>
						</StyledSubMenu>

						<StyledSubMenu footer href={`mailto:${telefon?.email}`}>
							<StyledText
								h5={color === 'white' ?? true}
								h3={color === 'black' ?? true}
								black={color === 'black' ?? true}
							>
								{telefon?.email}
							</StyledText>
						</StyledSubMenu>
					</StyledTelWrapper>
				</StyledFooterAdres>
			</>
		)}
	</StyledContact>
);

KontaktItems.KontaktPage = ContactPageItems;
export default KontaktItems;
