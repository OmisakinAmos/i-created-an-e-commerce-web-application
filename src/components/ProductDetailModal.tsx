import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, ShieldCheck, Check } from 'lucide-react';
import type { Product } from '../types';
import { formatCurrency } from '../services/supabase';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);
  const [added, setAdded] = useState(false);

  const isOutOfStock = product.stockQuantity <= 0;
  const isLowStock = !isOutOfStock && product.stockQuantity <= 3;

  const handleIncrement = () => {
    if (quantity < product.stockQuantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAdd = () => {
    if (isOutOfStock) return;
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  const specEntries = Object.entries(product.specifications || {});

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="bottom-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-handle" />
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div
            style={{
              width: '100%',
              height: '210px',
              borderRadius: '16px',
              background: '#f4f8f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              marginBottom: '14px',
            }}
          >
            {product.imageUrl && !imageError ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px' }}
                onError={() => setImageError(true)}
              />
            ) : (
              <div style={{ fontSize: '54px' }}>🩺</div>
            )}
          </div>

          <span
            style={{
              fontSize: '10px',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: 'var(--teal)',
              letterSpacing: '0.08em',
              display: 'block',
              marginBottom: '4px',
            }}
          >
            {product.category}
          </span>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' }}>
            {product.name}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--blue)' }}>
              {formatCurrency(product.price)}
            </span>
            <span
              className={`stock-tag ${
                isOutOfStock ? 'stock-out' : isLowStock ? 'stock-low' : 'stock-in'
              }`}
            >
              {isOutOfStock ? 'Out of Stock' : isLowStock ? `Only ${product.stockQuantity} left` : `${product.stockQuantity} in Stock`}
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              fontSize: '11px',
              color: 'var(--muted)',
            }}
          >
            <span>Brand: <strong>{product.brand}</strong></span>
            <span>•</span>
            <span>Model: <strong>{product.model}</strong></span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              <ShieldCheck size={13} color="var(--teal)" />
              <strong>{product.warranty || '12 months warranty'}</strong>
            </span>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
            Product Overview
          </h4>
          <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.6' }}>
            {product.description}
          </p>
        </div>

        {/* Specifications */}
        {specEntries.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
              Technical Specifications
            </h4>
            <div
              style={{
                background: 'var(--soft)',
                borderRadius: '10px',
                padding: '10px 14px',
                fontSize: '11px',
              }}
            >
              {specEntries.map(([key, val]) => (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '5px 0',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                  }}
                >
                  <span style={{ color: 'var(--muted)' }}>{key}</span>
                  <strong style={{ color: 'var(--ink)' }}>{val}</strong>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
          <div className="stepper" style={{ height: '46px' }}>
            <button
              className="stepper-btn"
              style={{ width: '38px', height: '46px' }}
              onClick={handleDecrement}
              disabled={quantity <= 1 || isOutOfStock}
            >
              <Minus size={16} />
            </button>
            <span className="stepper-val" style={{ width: '36px', fontSize: '14px' }}>
              {quantity}
            </span>
            <button
              className="stepper-btn"
              style={{ width: '38px', height: '46px' }}
              onClick={handleIncrement}
              disabled={quantity >= product.stockQuantity || isOutOfStock}
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            className="checkout-cta-btn"
            style={{
              height: '46px',
              flex: 1,
              background: added ? '#18794e' : isOutOfStock ? '#cbd5e1' : 'var(--blue)',
            }}
            onClick={handleAdd}
            disabled={isOutOfStock}
          >
            {added ? (
              <>
                <Check size={18} />
                <span>Added to Cart!</span>
              </>
            ) : isOutOfStock ? (
              <span>Out of Stock</span>
            ) : (
              <>
                <ShoppingBag size={18} />
                <span>Add {quantity} to Cart ({formatCurrency(product.price * quantity)})</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
