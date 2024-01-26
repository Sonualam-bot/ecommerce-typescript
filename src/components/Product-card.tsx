import { FaPlus } from "react-icons/fa";

type ProudctProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "jsjasdksjlasl";

const ProductCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: ProudctProps) => {
  return (
    <figcaption className="product-card">
      <img
        src="https://pixabay.com/get/g7a1ab4e1da0dd6375251480a7a496d0574f92d926a287009b1206a18c6e342391db7ea1379343ab37ffed80b0850b0391d019e3f6b66c9c17c13339dfb91f14f_640.jpg"
        alt="/proudct-image"
      />
      <section>
        <main>
          <h2>{name}</h2>
          <p>₹{price}</p>
        </main>
        <footer>
          <button onClick={() => handler()}>
            {" "}
            <FaPlus />{" "}
          </button>
        </footer>
      </section>
    </figcaption>
  );
};

export default ProductCard;
