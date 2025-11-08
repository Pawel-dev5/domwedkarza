import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const dishes = [
	{
		id: 1,
		name: 'Barszcz z uszkami',
		category: 'Zupy',
		price: 23.0,
		description: '',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_barszcz_z_uszkami.jpg',
		featured: false,
	},
	{
		id: 2,
		name: 'Flaki',
		category: 'Zupy',
		price: 31.0,
		description: '',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_flaki.jpg',
		featured: true,
	},
	{
		id: 3,
		name: 'Gulasz wieprzowy',
		category: 'Drugie dania',
		price: 44.0,
		description: 'z ziemniakami i surówką z marchewki',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_gulasz_z_ziemniakami.jpg',
		featured: false,
	},
	{
		id: 4,
		name: 'Golonka',
		category: 'Drugie dania',
		price: 62.0,
		description: 'z ziemniakami i surówką z marchewki',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_golonka.jpg',
		featured: true,
	},
	{
		id: 5,
		name: 'Placki po węgiersku 3 szt.',
		category: 'Drugie dania',
		price: 54.0,
		description: 'z surówką z marchewki',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_placek_po_wegiersku.jpg',
		featured: false,
	},
	{
		id: 6,
		name: 'Szaszłyk drobiowy',
		category: 'Drugie dania',
		price: 55.0,
		description: 'z ryżem i surówką z marchewki',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_szaszlyk.jpg',
		featured: false,
	},
	{
		id: 7,
		name: 'Stek wieprzowy z cebulką',
		category: 'Drugie dania',
		price: 53.0,
		description: 'z ziemniakami i surówką z marchewki',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_stek_wieprzowy.jpg',
		featured: false,
	},
	{
		id: 8,
		name: 'Brizol wołowy z pieczarkami',
		category: 'Drugie dania',
		price: 56.0,
		description: 'z frytkami i surówką z marchewki',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_brizol_wolowy_z_pieczarkami.jpg',
		featured: true,
	},
	{
		id: 9,
		name: 'Pierogi ruskie',
		category: 'Dania bezmięsne',
		price: 28.0,
		description: '8 sztuk z cebulką',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_placek_po_wegiersku.jpg',
		featured: false,
	},
	{
		id: 10,
		name: 'Naleśniki z serem',
		category: 'Dania bezmięsne',
		price: 25.0,
		description: '3 sztuki',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_placek_po_wegiersku.jpg',
		featured: false,
	},
	{
		id: 11,
		name: 'Kluski śląskie z sosem pieczarkowym',
		category: 'Dania bezmięsne',
		price: 26.0,
		description: '',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_placek_po_wegiersku.jpg',
		featured: false,
	},
	{
		id: 12,
		name: 'Ziemniaki',
		category: 'Dodatki',
		price: 8.0,
		description: '',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_gulasz_z_ziemniakami.jpg',
		featured: false,
	},
	{
		id: 13,
		name: 'Frytki',
		category: 'Dodatki',
		price: 10.0,
		description: '',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_gulasz_z_ziemniakami.jpg',
		featured: false,
	},
	{
		id: 14,
		name: 'Surówka z marchewki',
		category: 'Dodatki',
		price: 7.0,
		description: '',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_gulasz_z_ziemniakami.jpg',
		featured: false,
	},
	{
		id: 15,
		name: 'Ryż',
		category: 'Dodatki',
		price: 8.0,
		description: '',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_gulasz_z_ziemniakami.jpg',
		featured: false,
	},
	{
		id: 16,
		name: 'Surówka z kapusty',
		category: 'Dodatki',
		price: 7.0,
		description: '',
		image: '/assets/10446093_restauracja bistro pod wawelem_Food_gulasz_z_ziemniakami.jpg',
		featured: false,
	},
];

const categories = ['Wyróżnione', 'Zupy', 'Drugie dania', 'Dania bezmięsne', 'Dodatki'];

const Order = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [activeCategory, setActiveCategory] = useState('Wyróżnione');
	const [cart, setCart] = useState([]);
	const [showOrderForm, setShowOrderForm] = useState(false);
	const [formErrors, setFormErrors] = useState({});

	const addToCart = (dish) => {
		const existingItem = cart.find((item) => item.id === dish.id);
		if (existingItem) {
			setCart(cart.map((item) => (item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item)));
		} else {
			setCart([...cart, { ...dish, quantity: 1 }]);
		}
	};

	const removeFromCart = (dishId) => {
		const existingItem = cart.find((item) => item.id === dishId);
		if (existingItem.quantity === 1) {
			setCart(cart.filter((item) => item.id !== dishId));
		} else {
			setCart(cart.map((item) => (item.id === dishId ? { ...item, quantity: item.quantity - 1 } : item)));
		}
	};

	const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	const filteredDishes = useMemo(() => {
		if (searchQuery) {
			return dishes.filter((dish) => dish.name.toLowerCase().includes(searchQuery.toLowerCase()));
		}
		return dishes;
	}, [searchQuery]);

	const groupedDishes = useMemo(() => {
		const grouped = {};
		filteredDishes.forEach((dish) => {
			if (!grouped[dish.category]) {
				grouped[dish.category] = [];
			}
			grouped[dish.category].push(dish);
		});
		return grouped;
	}, [filteredDishes]);

	const featuredDishes = useMemo(() => {
		return filteredDishes.filter((dish) => dish.featured);
	}, [filteredDishes]);

	const handleOrder = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const phone = formData.get('phone');
		const address = formData.get('address');
		const errors = {};

		// Walidacja telefonu (9 cyfr, może zaczynać się od +48)
		const phoneRegex = /^(\+48)?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/;
		if (!phoneRegex.test(phone)) {
			errors.phone = 'Podaj poprawny numer telefonu (9 cyfr, np. 123456789 lub +48 123 456 789)';
		}

		// Walidacja adresu (minimum 10 znaków)
		if (address.trim().length < 10) {
			errors.address = 'Podaj pełny adres dostawy (minimum 10 znaków)';
		}

		// Jeśli są błędy, ustaw je i przerwij
		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			return;
		}

		// Wyczyść błędy i zamknij formularz
		setFormErrors({});
		alert('Pracujemy nad tą funkcjonalnością. Wkrótce będzie można składać zamówienia online!');
		setShowOrderForm(false);
	};

	const scrollToCategory = (category) => {
		setActiveCategory(category);
		const element = document.getElementById(`category-${category}`);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<Container>
			<MainContent>
				<SearchBar>
					<SearchInput
						type="text"
						placeholder="Wyszukaj jedzenie"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</SearchBar>

				<CategoryNav>
					{categories.map((category) => (
						<CategoryButton
							key={category}
							active={activeCategory === category}
							onClick={() => scrollToCategory(category)}
						>
							{category}
						</CategoryButton>
					))}
				</CategoryNav>

				<DishesContainer>
					{/* Wyróżnione */}
					{featuredDishes.length > 0 && (
						<CategorySection id="category-Wyróżnione">
							<CategoryTitle>Wyróżnione</CategoryTitle>
							<FeaturedGrid>
								{featuredDishes.map((dish) => (
									<FeaturedCard key={dish.id}>
										<FeaturedInfo>
											<CategoryBadge>{dish.category}</CategoryBadge>
											<FeaturedName>{dish.name}</FeaturedName>
											<FeaturedPrice>{dish.price.toFixed(2)} zł</FeaturedPrice>
										</FeaturedInfo>
										<FeaturedImageContainer>
											<FeaturedImageWrapper>
												<Image src={dish.image} alt={dish.name} layout="fill" objectFit="cover" />
											</FeaturedImageWrapper>
											<FeaturedAddButton onClick={() => addToCart(dish)}>
												<PlusIcon>+</PlusIcon>
											</FeaturedAddButton>
										</FeaturedImageContainer>
									</FeaturedCard>
								))}
							</FeaturedGrid>
						</CategorySection>
					)}

					{/* Wszystkie kategorie */}
					{Object.entries(groupedDishes).map(([category, categoryDishes]) => (
						<CategorySection key={category} id={`category-${category}`}>
							<CategoryTitle>{category}</CategoryTitle>
							<CategorySubtitle>{categoryDishes.length} produkty</CategorySubtitle>
							<DishList>
								{categoryDishes.map((dish) => (
									<DishCard key={dish.id}>
										<DishInfo>
											<DishName>{dish.name}</DishName>
											{dish.description && <DishDescription>{dish.description}</DishDescription>}
											<DishPrice>{dish.price.toFixed(2)} zł</DishPrice>
										</DishInfo>
										<DishImageContainer>
											<DishImageWrapper>
												<Image src={dish.image} alt={dish.name} layout="fill" objectFit="cover" />
											</DishImageWrapper>
											<AddButton onClick={() => addToCart(dish)}>
												<PlusIcon>+</PlusIcon>
											</AddButton>
										</DishImageContainer>
									</DishCard>
								))}
							</DishList>
						</CategorySection>
					))}
				</DishesContainer>
			</MainContent>

			<CartSidebar>
				<CartTitle>Koszyk</CartTitle>
				{cart.length === 0 ? (
					<EmptyCart>
						<EmptyCartTitle>Wypełnij swój koszyk</EmptyCartTitle>
						<EmptyCartText>Dodaj smaczne jedzenie z menu i zamów jedzenie.</EmptyCartText>
					</EmptyCart>
				) : (
					<>
						<CartItems>
							{cart.map((item) => (
								<CartItem key={item.id}>
									<CartItemInfo>
										<CartItemName>{item.name}</CartItemName>
										<CartItemPrice>{(item.price * item.quantity).toFixed(2)} zł</CartItemPrice>
									</CartItemInfo>
									<CartItemControls>
										<CartButton onClick={() => removeFromCart(item.id)}>-</CartButton>
										<CartQuantity>{item.quantity}</CartQuantity>
										<CartButton onClick={() => addToCart(item)}>+</CartButton>
									</CartItemControls>
								</CartItem>
							))}
						</CartItems>
						<CartTotal>
							<CartTotalLabel>Suma:</CartTotalLabel>
							<CartTotalPrice>{cartTotal.toFixed(2)} zł</CartTotalPrice>
						</CartTotal>
						<OrderButton onClick={() => setShowOrderForm(true)}>Zamów</OrderButton>
					</>
				)}

				{showOrderForm && (
					<OrderFormOverlay
						onClick={() => {
							setShowOrderForm(false);
							setFormErrors({});
						}}
					>
						<OrderFormModal onClick={(e) => e.stopPropagation()}>
							<OrderFormTitle>Formularz zamówienia</OrderFormTitle>
							<OrderForm onSubmit={handleOrder}>
								<FormField>
									<FormLabel>Imię i nazwisko</FormLabel>
									<FormInput type="text" name="name" required />
								</FormField>
								<FormField>
									<FormLabel>Telefon</FormLabel>
									<FormInput
										type="tel"
										name="phone"
										placeholder="np. 123456789 lub +48 123 456 789"
										required
										hasError={!!formErrors.phone}
									/>
									{formErrors.phone && <FormError>{formErrors.phone}</FormError>}
								</FormField>
								<FormField>
									<FormLabel>Adres dostawy</FormLabel>
									<FormTextarea
										name="address"
										placeholder="Ulica, nr domu/mieszkania, kod pocztowy, miejscowość"
										required
										rows={3}
										hasError={!!formErrors.address}
									/>
									{formErrors.address && <FormError>{formErrors.address}</FormError>}
								</FormField>
								<FormField>
									<FormLabel>Uwagi do zamówienia</FormLabel>
									<FormTextarea name="notes" rows={2} />
								</FormField>
								<FormButtons>
									<CancelButton
										type="button"
										onClick={() => {
											setShowOrderForm(false);
											setFormErrors({});
										}}
									>
										Anuluj
									</CancelButton>
									<SubmitButton type="submit">Złóż zamówienie</SubmitButton>
								</FormButtons>
							</OrderForm>
						</OrderFormModal>
					</OrderFormOverlay>
				)}
			</CartSidebar>
		</Container>
	);
};

export default Order;

const Container = styled.div`
	display: flex;
	max-width: 1400px;
	margin: 0 auto;
	gap: 20px;
	padding: 20px;
	background-color: white;

	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

const MainContent = styled.div`
	flex: 1;
	min-width: 0;
`;

const SearchBar = styled.div`
	margin-bottom: 20px;
`;

const SearchInput = styled.input`
	width: 100%;
	padding: 15px 20px;
	border: 1px solid #ddd;
	border-radius: 8px;
	font-size: 16px;
	background-color: white;

	&:focus {
		outline: none;
		border-color: black;
	}
`;

const CategoryNav = styled.nav`
	display: flex;
	gap: 10px;
	margin-bottom: 30px;
	overflow-x: auto;
	padding: 10px 0;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 5;

	&::-webkit-scrollbar {
		height: 4px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ddd;
		border-radius: 4px;
	}
`;

const CategoryButton = styled.button`
	padding: 12px 24px;
	border: none;
	border-radius: 24px;
	background-color: ${(props) => (props.active ? 'black' : '#f5f5f5')};
	color: ${(props) => (props.active ? 'white' : '#333')};
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	white-space: nowrap;
	transition: all 0.3s ease;

	&:hover {
		background-color: ${(props) => (props.active ? '#black' : '#f0f0f0')};
	}
`;

const DishesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const CategorySection = styled.section`
	background-color: transparent;
	padding: 0;
	margin-bottom: 40px;
`;

const CategoryTitle = styled.h2`
	font-size: 24px;
	font-weight: 700;
	margin: 0 0 20px 0;
	color: #1a1a1a;
`;

const FeaturedGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 12px;
	overflow-x: auto;
	margin-bottom: 20px;
	padding: 10px 10px 0 0;

	@media (max-width: 768px) {
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		gap: 12px;
		padding: 10px 10px 10px 0;

		&::-webkit-scrollbar {
			height: 4px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: #ddd;
			border-radius: 4px;
		}
	}
`;

const FeaturedCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	margin-bottom: 10px;
	border: none;
	border-radius: 8px;
	background-color: #f5f5f5;
	cursor: pointer;
	transition: all 0.2s ease;
	min-width: 300px;

	&:hover {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		scroll-snap-align: start;
		flex-shrink: 0;
	}
`;

const FeaturedInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding-right: 16px;
	justify-content: center;
`;

const CategoryBadge = styled.span`
	font-size: 12px;
	color: #666;
	font-weight: 500;
`;

const FeaturedName = styled.h3`
	font-size: 18px;
	font-weight: 700;
	margin: 0;
	color: #1a1a1a;
`;

const FeaturedPrice = styled.span`
	font-size: 20px;
	font-weight: 700;
	color: #1a1a1a;
`;

const FeaturedImageContainer = styled.div`
	position: relative;
	flex-shrink: 0;
	width: 160px;
	height: 160px;
	background-color: #e8e8e8;
	border-radius: 12px;
	overflow: visible;
`;

const FeaturedImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: 12px;
	overflow: hidden;
`;

const FeaturedAddButton = styled.button`
	position: absolute;
	top: -8px;
	right: -8px;
	width: 36px;
	height: 36px;
	border: 2px solid black;
	border-radius: 50%;
	background-color: white;
	color: black;
	font-size: 20px;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	z-index: 1;

	&:hover {
		background-color: #fff5eb;
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.95);
	}
`;

const CategorySubtitle = styled.p`
	font-size: 14px;
	color: #666;
	margin: 0 0 20px 0;
`;

const DishList = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 10px 0 0;
`;

const DishCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	border: none;
	border-radius: 8px;
	transition: all 0.2s ease;
	background-color: #f5f5f5;
	margin-bottom: 12px;

	&:hover {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}
`;

const DishImageContainer = styled.div`
	position: relative;
	flex-shrink: 0;
	width: 120px;
	height: 120px;
	background-color: #e8e8e8;
	border-radius: 12px;
	overflow: visible;
`;

const DishImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: 12px;
	overflow: hidden;
`;

const DishInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4px;
	padding-right: 16px;
`;

const DishName = styled.h3`
	font-size: 18px;
	font-weight: 600;
	margin: 0;
	color: #1a1a1a;
`;

const DishDescription = styled.p`
	font-size: 14px;
	color: #666;
	margin: 0;
`;

const DishPrice = styled.span`
	font-size: 16px;
	font-weight: 700;
	color: black;
	margin-top: 4px;
`;

const AddButton = styled.button`
	position: absolute;
	top: -6px;
	right: -6px;
	width: 32px;
	height: 32px;
	border: 2px solid black;
	border-radius: 50%;
	background-color: white;
	color: black;
	font-size: 18px;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	z-index: 1;

	&:hover {
		background-color: #fff5eb;
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.95);
	}
`;

const PlusIcon = styled.span`
	line-height: 1;
`;

const CartSidebar = styled.aside`
	width: 360px;
	background-color: white;
	border-radius: 12px;
	padding: 24px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
	position: -webkit-sticky;
	position: sticky;
	top: 0px;
	align-self: flex-start;
	max-height: 100vh;
	overflow-y: auto;
	z-index: 10;

	@media (max-width: 1024px) {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		top: auto;
		border-radius: 12px 12px 0 0;
		max-height: 60vh;
		z-index: 100;
	}
`;

const CartTitle = styled.h2`
	font-size: 24px;
	font-weight: 700;
	margin: 0 0 20px 0;
	color: #1a1a1a;
`;

const EmptyCart = styled.div`
	text-align: center;
	padding: 40px 20px;
`;

const EmptyCartTitle = styled.h3`
	font-size: 18px;
	font-weight: 600;
	margin: 0 0 12px 0;
	color: #1a1a1a;
`;

const EmptyCartText = styled.p`
	font-size: 14px;
	color: #666;
	margin: 0;
	line-height: 1.5;
`;

const CartItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 20px;
	max-height: 400px;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ddd;
		border-radius: 3px;
	}
`;

const CartItem = styled.div`
	padding: 12px;
	border: 1px solid #e0e0e0;
	border-radius: 8px;
	background-color: #f5f5f5;
`;

const CartItemInfo = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 8px;
`;

const CartItemName = styled.span`
	font-size: 14px;
	font-weight: 600;
	color: #1a1a1a;
`;

const CartItemPrice = styled.span`
	font-size: 14px;
	font-weight: 700;
	color: black;
`;

const CartItemControls = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

const CartButton = styled.button`
	width: 32px;
	height: 32px;
	border: 1px solid #ddd;
	border-radius: 4px;
	background-color: white;
	color: #333;
	font-size: 18px;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;

	&:hover {
		background-color: #f0f0f0;
		border-color: #ccc;
	}
`;

const CartQuantity = styled.span`
	font-size: 16px;
	font-weight: 600;
	min-width: 30px;
	text-align: center;
`;

const CartTotal = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 0;
	border-top: 2px solid #e0e0e0;
	border-bottom: 2px solid #e0e0e0;
	margin-bottom: 20px;
`;

const CartTotalLabel = styled.span`
	font-size: 18px;
	font-weight: 700;
	color: #1a1a1a;
`;

const CartTotalPrice = styled.span`
	font-size: 20px;
	font-weight: 700;
	color: black;
`;

const OrderButton = styled.button`
	width: 100%;
	padding: 16px;
	border: none;
	border-radius: 8px;
	background-color: black;
	color: white;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: black;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 128, 0, 0.3);
	}

	&:active {
		transform: translateY(0);
	}
`;

const OrderFormOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	padding: 20px;
`;

const OrderFormModal = styled.div`
	background-color: white;
	border-radius: 12px;
	padding: 32px;
	max-width: 500px;
	width: 100%;
	max-height: 90vh;
	overflow-y: auto;
`;

const OrderFormTitle = styled.h2`
	font-size: 24px;
	font-weight: 700;
	margin: 0 0 24px 0;
	color: #1a1a1a;
`;

const OrderForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const FormField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const FormLabel = styled.label`
	font-size: 14px;
	font-weight: 600;
	color: #1a1a1a;
`;

const FormInput = styled.input`
	padding: 12px;
	border: 1px solid ${(props) => (props.hasError ? '#ff0000' : '#ddd')};
	border-radius: 6px;
	font-size: 14px;
	background-color: ${(props) => (props.hasError ? '#fff5f5' : 'white')};

	&:focus {
		outline: none;
		border-color: ${(props) => (props.hasError ? '#ff0000' : 'black')};
	}
`;

const FormTextarea = styled.textarea`
	padding: 12px;
	border: 1px solid ${(props) => (props.hasError ? '#ff0000' : '#ddd')};
	border-radius: 6px;
	font-size: 14px;
	font-family: inherit;
	resize: vertical;
	background-color: ${(props) => (props.hasError ? '#fff5f5' : 'white')};

	&:focus {
		outline: none;
		border-color: ${(props) => (props.hasError ? '#ff0000' : 'black')};
	}
`;

const FormError = styled.span`
	color: #ff0000;
	font-size: 12px;
	margin-top: 4px;
	display: block;
`;

const FormButtons = styled.div`
	display: flex;
	gap: 12px;
	margin-top: 8px;
`;

const CancelButton = styled.button`
	flex: 1;
	padding: 14px;
	border: 1px solid #ddd;
	border-radius: 8px;
	background-color: white;
	color: #333;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background-color: #f0f0f0;
	}
`;

const SubmitButton = styled.button`
	flex: 1;
	padding: 14px;
	border: none;
	border-radius: 8px;
	background-color: black;
	color: white;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: black;
	}
`;
