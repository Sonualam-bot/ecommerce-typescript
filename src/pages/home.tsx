import { Link } from "react-router-dom";
import ProductCard from "../components/Product-card";

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
          photo="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
        />
        <ProductCard
          productId="adslkasd"
          name="Mackbook"
          price={4545}
          stock={435}
          handler={addToCarthandler}
          photo="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
        />
        <ProductCard
          productId="adslkasd"
          name="Mackbook"
          price={4545}
          stock={435}
          handler={addToCarthandler}
          photo="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
        />
      </main>
    </div>
  );
}

export default Home;
