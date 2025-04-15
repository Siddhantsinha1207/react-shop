import CustomCards from "./CustomCards";
import styles from "./ProductsData.module.css";

function ProductsData({ products }) {
  return (
    <ul className={styles.products}>
      {products.map((product) => {
        return <CustomCards product={product} key={product.item} />;
      })}
    </ul>
  );
}

export default ProductsData;
