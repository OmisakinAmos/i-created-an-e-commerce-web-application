import React from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingCart } from 'lucide-react';
import type { CartItem, TabType } from '../types';
import { formatCurrency, DELIVERY_FEE } from '../services/supabase';

interface CartViewProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onStartCheckout: () => void;
  setActiveTab: (tab: TabType) => void;
}

export const CartView: React.FC<CartViewProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onStartCheckout,
  setActiveTab,
}) => {
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = cart.length > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="cart-screen">
        <div className="cart-title-row">
          <h2 className="section-title">Your Cart</h2>
        </div>
        <div className="empty-box">
          <div className="empty-icon">🛒</div>
          <h3 className="empty-title">Your cart is empty</h3>
          <p className="empty-desc">
            Browse our catalogue to add certified medical equipment and supplies to your order.
          </p>
          <button
            className="primary-btn"
            style={{ margin: '0 auto' }}
            onClick={() => setActiveTab('catalogue')}
          >
            <span>Explore Catalogue</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-screen">
      <div className="cart-title-row">
        <h2 className="section-title">Your Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h2>
        <button
          onClick={onClearCart}
          style={{
            background: 'transparent',
            border: 0,
            color: 'var(--danger)',
            fontSize: '11px',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Clear All
        </button>
      </div>

      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.product.id} className="cart-item-card">
            <img
              src={item.product.imageUrl || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200'}
              alt={item.product.name}
              className="cart-item-img"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />

            <div className="cart-item-details">
              <div>
                <h4 className="cart-item-name">{item.product.name}</h4>
                <span className="cart-item-price">
                  {formatCurrency(item.product.price)}
                </span>
              </div>

              <div className="cart-item-controls">
                <div className="stepper">
                  <button
                    className="stepper-btn"
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={13} />
                  </button>
                  <span className="stepper-val">{item.quantity}</span>
                  <button
                    className="stepper-btn"
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                    disabled={item.quantity >= item.product.stockQuantity}
                  >
                    <Plus size={13} />
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => onRemoveItem(item.product.id)}
                  title="Remove from cart"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="order-summary-box">
        <h3 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>
          Order Summary
        </h3>

        <div className="summary-row">
          <span>Equipment Subtotal</span>
          <strong>{formatCurrency(subtotal)}</strong>
        </div>

        <div className="summary-row">
          <span>Standard Medical Delivery</span>
          <strong>{formatCurrency(deliveryFee)}</strong>
        </div>

        <div
          style={{
            background: 'var(--soft)',
            borderRadius: '6px',
            padding: '8px 10px',
            fontSize: '10px',
            color: 'var(--muted)',
            marginBottom: '12px',
          }}
        >
          🚚 Flat-rate nationwide medical courier delivery (1-3 business days)
        </div>

        <hr className="summary-divider" />

        <div className="summary-total-row">
          <span>Total Payable</span>
          <span style={{ color: 'var(--blue)' }}>{formatCurrency(total)}</span>
        </div>

        <button className="checkout-cta-btn" onClick={onStartCheckout}>
          <span>Proceed to Checkout</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          marginTop: '16px',
          fontSize: '11px',
          color: 'var(--muted)',
        }}
      >
        <ShieldCheck size={14} color="var(--success)" />
        <span>Verified Health & Medical Equipment Supplier</span>
      </div>
    </div>
  );
};
