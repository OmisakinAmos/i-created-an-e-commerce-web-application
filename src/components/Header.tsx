import React from 'react';
import { ShoppingBag, Activity } from 'lucide-react';
import type { TabType } from '../types';

interface HeaderProps {
  cartCount: number;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, setActiveTab }) => {
  return (
    <header className="app-header">
      <div className="app-brand" onClick={() => setActiveTab('home')}>
        <div className="brand-badge">VM</div>
        <div className="brand-text-col">
          <span className="brand-title">VI-MEDICS</span>
          <span className="brand-subtitle">Medical Equipment</span>
        </div>
      </div>

      <div className="header-right">
        <div className="cloud-pill" title="Synchronized with Vi-Medics Cloud Database">
          <div className="pulse-dot" />
          <span>Live Sync</span>
        </div>

        <button
          className="cart-icon-btn"
          onClick={() => setActiveTab('cart')}
          aria-label="View Cart"
        >
          <ShoppingBag size={18} />
          {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
};
