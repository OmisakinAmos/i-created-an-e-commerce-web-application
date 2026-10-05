export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription?: string;
  price: number;
  stockQuantity: number;
  imageUrl?: string;
  visual?: string;
  brand: string;
  model: string;
  specifications?: Record<string, string>;
  warranty?: string;
  status?: string;
  createdAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface OrderItem {
  id?: string;
  productId: string;
  productName: string;
  unitPrice: number;
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: string;
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
  customer?: Partial<CustomerDetails>;
  items: OrderItem[];
}

export interface Category {
  name: string;
  icon: string;
  description: string;
}

export type TabType = 'home' | 'catalogue' | 'cart' | 'orders' | 'about';
