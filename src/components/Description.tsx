import styles from "./Description.module.css"

export function Description({title, description, colors}) {

	return (
		<div className={styles["product-description-block"]}>
			<h1 className={styles["product-title"]}>{title}</h1>
			<form className={styles["product-selector"]}>
				<fieldset className={styles["product-fieldset"]}>
					<label className={styles["product-label"]} htmlFor="color">Color</label>
					<select
						className={styles["product-select"]}
						typeof="text"
						aria-placeholder="Selecciona un color"
						id="color"
					>
						{colors.map(color => <option value={color} key={color}>{color}</option>)}
					</select>
				</fieldset>
			</form>
			<div className={styles["product-description"]}>
				<span className={styles["product-label"]}>Descripción</span>
				<p>
					{description}
				</p>
			</div>
		</div>
	)
}