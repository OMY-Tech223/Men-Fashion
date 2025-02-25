import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart data from localStorage when the component mounts
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart data to localStorage whenever the cart changes
  useEffect(() => {
    console.log("Saving cart to localStorage:", cart); // Debugging
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add a product to the cart
  const addToCart = (product) => {
    console.log("Adding to cart:", product); // Debugging
    setCart((prevCart) => {
      // Check if the product with the same id AND selectedSize already exists in the cart
      const existingProduct = prevCart.find(
        (item) => item.id === product.id && item.selectedSize === product.selectedSize
      );
      if (existingProduct) {
        // If the product exists, update its quantity
        const updatedCart = prevCart.map((item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
        console.log("Updated cart:", updatedCart); // Debugging
        return updatedCart;
      } else {
        // If the product doesn't exist, add it to the cart with a quantity of 1
        const newCart = [...prevCart, { ...product, quantity: 1 }];
        console.log("New cart:", newCart); // Debugging
        return newCart;
      }
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // Clear cart data from localStorage
  };

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.newPrice.replace(/,/g, "")) * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);