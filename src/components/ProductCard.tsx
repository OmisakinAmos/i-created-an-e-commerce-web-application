import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import type { Product } from '../types';
import { formatCurrency } from '../services/supabase';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
}) => {
  const [imageError, setImageError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const isOutOfStock = product.stockQuantity <= 0;
  const isLowStock = !isOutOfStock && product.stockQuantity <= 3;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOutOfStock) return;
    onAddToCart(product, e);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  return (
    <div className="product-card" onClick={() => onSelect(product)}>
      <div className="product-img-box">
        {product.imageUrl && !imageError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-img"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div style={{ fontSize: '32px' }}>🩺</div>
        )}

        <span
          className={`stock-tag ${
            isOutOfStock ? 'stock-out' : isLowStock ? 'stock-low' : 'stock-in'
          }`}
        >
          {isOutOfStock ? 'Out of Stock' : isLowStock ? `${product.stockQuantity} left` : 'In Stock'}
        </span>
      </div>

      <div>
        <span className="product-cat">{product.category}</span>
        <h3 className="product-name" title={product.name}>
          {product.name}
        </h3>
      </div>

      <div className="product-bottom-row">
        <span className="product-price">{formatCurrency(product.price)}</span>
        <button
          className="quick-add-btn"
          onClick={handleAdd}
          disabled={isOutOfStock}
          title={isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          aria-label={`Add ${product.name} to cart`}
          style={justAdded ? { background: '#18794e', color: '#fff' } : {}}
        >
          {justAdded ? <Check size={16} /> : <Plus size={16} />}
        </button>
      </div>
    </div>
  );
};
