import Button from "./Button";
import styles from "./CustomCard.module.css";

function CustomCards({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt="bag" />
      <h2 className={styles.title}>{product.title.slice(0, 30) + "..."}</h2>
      <div>
        <span>{product.rating.rate}</span>
        <span>({product.rating.count})</span>
      </div>
      <p className={styles.category}>{product.category}</p>
      <p className={styles.description}>
        {product.description.slice(0, 60) + "..."}
      </p>
      <p className={styles.price}>${product.price}</p>
      <div className={styles.btnContainer}>
        <Button type="contained">Buy Now</Button>
        <Button type="outlined">Add To Cart</Button>
      </div>
    </div>
  );
}

export default CustomCards;
