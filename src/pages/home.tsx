import { Link } from "react-router-dom";
import ProductCard from "../components/Product-cart";

function Home() {
  const addToCarthandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="adslkasd"
          name="Mackbook"
          price={4545}
          stock={435}
          handler={addToCarthandler}
          photo="https://m.media-amazon.com/images/I/71S4sIPFvBL._SX679_.jpg"
        />
      </main>
    </div>
  );
}

export default Home;
