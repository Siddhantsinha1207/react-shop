import styled from "styled-components";
import Input from "./ui/Input";
import ProductsData from "./ui/ProductsData";
import { useEffect, useState } from "react";
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

    // const filteredProducts = products.filter((prod) => {
    //   checkState[prod.category];
    // });

    setTempProducts(filteredProducts);
  };

  // if (checkState.electronics) {
  //   console.log("sidd");
  //   const filteredProducts = products.filter((product) =>
  //     product.category.includes("electronics")
  //   );
  //   setTempProducts(filteredProducts);
  // } else {
  //   setTempProducts(products);
  // }

  return (
    <>
      <header>
        <h1 style={{ textAlign: "center" }}>React Shop</h1>
      </header>
      <section style={{ display: "flex", gap: "1rem" }}>
        <aside>
          <h4>All Categories</h4>
          <CustomCheckbox onChange={handleChange} checkState={checkState} />
        </aside>
        <Main>
          <Input
            searchProducts={searchProducts}
            onChange={handleSearchProducts}
          />
          <ProductsData products={tempProducts} />
        </Main>
      </section>
    </>
  );
}

export default Layout;
