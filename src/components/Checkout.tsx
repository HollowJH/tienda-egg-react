import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styles from "./Checkout.module.css"
import { useCart } from "../hooks/useCart"

export function Checkout({ product }) {
	const {isInCart, updateInCart} = useCart()
	const [quantity, setQuantity] = useState(1)
	const [button, setButton] = useState(isInCart(product))
	const location = useLocation()

	useEffect(() => setButton(isInCart(product)), [isInCart, location, product])

	return (
		<>
			<div className={styles["product-checkout-block"]}>
				<div className={styles["checkout-container"]}>
					<span className={styles["checkout-total-label"]}>Total:</span>
					<h2 id="price" className={styles["checkout-total-price"]}>${(product.price * quantity).toLocaleString()}</h2>
					<p className={styles["checkout-description"]}>
						Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
						50711 haciendo la solicitud en AFIP.
					</p>
					<ul className={styles["checkout-policy-list"]}>
						<li>
							<span className={styles["policy-icon"]}
							><img src="../../public/truck.png" alt="Truck"
								/></span>
							<span className={styles["policy-desc"]}
							>Agrega el producto al carrito para conocer los costos de
								envío</span>
						</li>
						<li>
							<span className={styles["policy-icon"]}
							><img src="../../public/plane.png" alt="Plane"
								/></span>
							<span className={styles["policy-desc"]}
							>Recibí aproximadamente entre 10 y 15 días hábiles,
								seleccionando envío normal</span>
						</li>
					</ul>
					<div className={styles["checkout-process"]}>
						<div className={styles["top"]}>
							<input type="number" min="1" defaultValue={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
							<button type="button" className={button ? styles["remove-btn"] : styles["cart-btn"]} onClick={() => setButton(updateInCart(product))}>
								{button ? "Remove from cart" : "Add to cart"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}