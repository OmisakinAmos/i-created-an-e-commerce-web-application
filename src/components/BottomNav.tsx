import React from 'react';
import { Home, LayoutGrid, ShoppingBag, ClipboardList, Info } from 'lucide-react';
import type { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  cartCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, cartCount }) => {
  return (
    <nav className="bottom-nav">
      <button
        className={`nav-tab-btn ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button
        className={`nav-tab-btn ${activeTab === 'catalogue' ? 'active' : ''}`}
        onClick={() => setActiveTab('catalogue')}
      >
        <LayoutGrid size={20} />
        <span>Catalogue</span>
      </button>

      <button
        className={`nav-tab-btn ${activeTab === 'cart' ? 'active' : ''}`}
        onClick={() => setActiveTab('cart')}
      >
        <ShoppingBag size={20} />
        <span>Cart</span>
        {cartCount > 0 && <span className="nav-cart-badge">{cartCount}</span>}
      </button>

      <button
        className={`nav-tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
        onClick={() => setActiveTab('orders')}
      >
        <ClipboardList size={20} />
        <span>Orders</span>
      </button>

      <button
        className={`nav-tab-btn ${activeTab === 'about' ? 'active' : ''}`}
        onClick={() => setActiveTab('about')}
      >
        <Info size={20} />
        <span>Guide</span>
      </button>
    </nav>
  );
};
