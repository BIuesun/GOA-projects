import { createContext, useContext, useReducer, useEffect } from 'react';

const ProductContext = createContext();

const initialState = {
  products: [
    { id: 1, name: "Smartphone", price: 899, category: "Electronics", inStock: true },
    { id: 2, name: "T-Shirt", price: 29, category: "Clothing", inStock: true },
    { id: 3, name: "Laptop", price: 1299, category: "Electronics", inStock: false },
    { id: 4, name: "Jeans", price: 79, category: "Clothing", inStock: true },
    { id: 5, name: "Headphones", price: 149, category: "Electronics", inStock: true },
    { id: 6, name: "Jacket", price: 189, category: "Clothing", inStock: false },
  ],
  filters: {
    search: '',
    category: 'All',
    stock: 'all',        
    priceRange: 'all',   
  }
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload)
      };

    case 'TOGGLE_STOCK':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, inStock: !product.inStock }
            : product
        )
      };

    case 'SET_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.field]: action.value
        }
      };

    default:
      return state;
  }
};

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const filteredProducts = state.products.filter(product => {
    const { search, category, stock, priceRange } = state.filters;


    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }

    if (category !== 'All' && product.category !== category) {
      return false;
    }


    if (stock === 'inStock' && !product.inStock) return false;

    if (priceRange === '0-100' && product.price > 100) return false;
    if (priceRange === '100-500' && (product.price < 100 || product.price > 500)) return false;
    if (priceRange === '500+' && product.price < 500) return false;

    return true;
  });

  return (
    <ProductContext.Provider value={{ state, dispatch, filteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);