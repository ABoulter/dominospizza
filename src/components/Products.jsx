import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <main id="products">
      {products.map((category) => (
        <section key={category.category_id}>
          <h2>{category.category}</h2>
          <div className="listing">
            {category.products.map((product) => (
              <div key={product.product_id}>
                <div>
                  <img src={product.image} />
                  <button type="button">Encomende agora</button>
                </div>
                <h3>{product.name}</h3>
                <ul>
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <p>a partir de {String(product.price).replace(".", ",")}€</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
