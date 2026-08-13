import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Indoor Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 15,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
      },
      {
        id: 2,
        name: "Monstera",
        price: 25,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
      },
      {
        id: 3,
        name: "Peace Lily",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1593482892290-f54927ae2bb6",
      },
      {
        id: 4,
        name: "ZZ Plant",
        price: 22,
        image:
          "https://images.unsplash.com/photo-1632207691144-1e710e4d0f7d",
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1600411833116-2c7b6f5c4f87",
      },
      {
        id: 6,
        name: "Spider Plant",
        price: 12,
        image:
          "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
      },
    ],
  },

  {
    name: "Succulents",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 14,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      },
      {
        id: 8,
        name: "Echeveria",
        price: 16,
        image:
          "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
      },
      {
        id: 9,
        name: "Jade Plant",
        price: 19,
        image:
          "https://images.unsplash.com/photo-1520412099551-62b6bafeb9bb",
      },
      {
        id: 10,
        name: "Haworthia",
        price: 13,
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
      },
      {
        id: 11,
        name: "String of Pearls",
        price: 21,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
      },
      {
        id: 12,
        name: "Burro's Tail",
        price: 17,
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
      },
    ],
  },

  {
    name: "Flowering Plants",
    plants: [
      {
        id: 13,
        name: "African Violet",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
      },
      {
        id: 14,
        name: "Orchid",
        price: 30,
        image:
          "https://images.unsplash.com/photo-1566929563502-bf7b5e3a0a7b",
      },
      {
        id: 15,
        name: "Anthurium",
        price: 24,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
      },
      {
        id: 16,
        name: "Begonia",
        price: 16,
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
      },
      {
        id: 17,
        name: "Geranium",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
      },
      {
        id: 18,
        name: "Chrysanthemum",
        price: 22,
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState([]);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems((previous) => [...previous, plant.id]);
  };

  const isAdded = (id) => addedItems.includes(id);

  return (
    <div className="product-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Paradise Nursery</Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      {/* Page Heading */}
      <header className="product-header">
        <h1>Paradise Nursery Plants</h1>
        <p>
          Discover beautiful houseplants for your home and office.
        </p>
      </header>

      {/* Categories */}
      <main className="product-list">

        {categories.map((category) => (
          <section key={category.name} className="category-section">

            <h2>{category.name}</h2>

            <div className="plant-grid">

              {category.plants.map((plant) => (

                <div className="plant-card" key={plant.id}>

                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <h3>{plant.name}</h3>

                  <p className="plant-price">
                    ${plant.price}
                  </p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAdded(plant.id)}
                    className="add-cart-button"
                  >
                    {isAdded(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>

                </div>

              ))}

            </div>
          </section>
        ))}

      </main>

    </div>
  );
}

export default ProductList;
