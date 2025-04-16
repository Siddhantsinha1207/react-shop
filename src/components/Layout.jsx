import styled from "styled-components";
import Input from "./ui/Input";
import ProductsData from "./ui/ProductsData";
import { Suspense, useEffect, useState } from "react";
import CustomCheckbox from "./ui/Checkbox";
const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

function Layout() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");
  const [tempProducts, setTempProducts] = useState([]);

  const [cart, setCart] = useState(0);

  const [checkState, setCheckState] = useState({
    jewelery: false,
    electronics: false,
    men: false,
    women: false,
  });

  async function getCategories() {
    const res = await fetch("https://fakestoreapi.com/products/categories");

    if (!res.ok) {
      throw new Error("Cannot fetch data");
    }

    const data = await res.json();
    setCategories(data);
  }

  console.log(categories);

  async function getProductsData() {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Cannot fetch data");
    }

    const data = await res.json();
    setProducts(data);
    setTempProducts(data);
  }

  useEffect(function () {
    getProductsData();
    getCategories();
  }, []);

  function handleSearchProducts(event) {
    setSearchProducts(event.target.value);
    const filteredProducts = products.filter((item) =>
      item.title.toLowerCase().includes(event.target.value)
    );
    setTempProducts(filteredProducts);
  }

  const handleChange = (event) => {
    setCheckState({
      ...checkState,
      [event.target.name]: event.target.checked,
    });

    console.log(tempProducts);

    const filteredProducts = products.filter((product) => {
      if (event.target.checked) {
        return product.category.includes(event.target.name);
      } else {
        return product;
      }
    });

    setTempProducts(filteredProducts);
  };

  return (
    <>
      <header>
        <h1 style={{ textAlign: "center" }}>React Shop</h1>
      </header>
      <section style={{ display: "flex", gap: "1rem" }}>
        <aside>
          <h4>All Categories</h4>
          <div>
            <CustomCheckbox onChange={handleChange} checkState={checkState} />
          </div>
          <div>
            <p>By Rating</p>
          </div>
        </aside>
        <Main>
          <Input
            searchProducts={searchProducts}
            onChange={handleSearchProducts}
          />
          <Suspense fallback={<p>Loading...</p>}>
            <ProductsData products={tempProducts} />
          </Suspense>
        </Main>
        <aside style={{ margin: "0 auto", position: "sticky" }}>
          <h3>Cart</h3>
        </aside>
      </section>
    </>
  );
}

export default Layout;
