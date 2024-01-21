import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import logo from "../../assets/logo.png"
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx'
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
import { selectIsCartOpen } from "../../store/cart/cart.selectors.js"
import { signOutStart } from "../../store/user/user.action"

const Navigation = () => {
	const dispatch = useDispatch()
	const currentUser = useSelector(selectCurrentUser)
	const isCartOpen = useSelector(selectIsCartOpen)
	
	const signOutUser = () => dispatch(signOutStart())

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<img src={logo} className="logo" style={{width: "100%", height: "100%"}}/>
				</LogoContainer>
				<NavLinks>
					<NavLink to={"/shop"}>
						Магазин
					</NavLink>
					{
						currentUser ? 
						<NavLink onClick={signOutUser}>Выйти</NavLink>
						: 
						<NavLink to={"/auth"}>
							Войти
						</NavLink>
					} 
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	)
}

export default Navigation