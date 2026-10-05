import { createClient } from '@supabase/supabase-js';
import type { Product, CartItem, CustomerDetails, Order } from '../types';

export const SUPABASE_URL = 'https://vzisnnouahikrauajvtv.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_O7Iyge-eRcbTCjygWsHxNg_WeKHMziD';
export const DELIVERY_FEE = 5000;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const CATEGORIES = [
  { name: 'Monitoring', icon: '◉', description: 'Everyday monitoring devices' },
  { name: 'Diagnostic', icon: '⌁', description: 'Clinical examination tools' },
  { name: 'Mobility', icon: '＋', description: 'Mobility support equipment' },
  { name: 'Respiratory', icon: '◌', description: 'Respiratory care equipment' },
];

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 'vm-001',
    name: 'Digital Blood Pressure Monitor',
    category: 'Monitoring',
    description: 'Automatic upper-arm blood pressure monitor with a clear digital display, arrhythmia detection, and memory tracking for 2 users.',
    price: 45000,
    stockQuantity: 11,
    imageUrl: 'https://vzisnnouahikrauajvtv.supabase.co/storage/v1/object/public/product-images/vm-001.jpg',
    brand: 'Vi-Medics',
    model: 'VM-BP-001',
    warranty: '12 months',
    specifications: {
      'Measurement Range': '0 - 299 mmHg',
      'Accuracy': '±3 mmHg',
      'Power Source': '4x AA Batteries / USB-C',
      'Display': 'Backlit LCD'
    },
    visual: 'bp'
  },
  {
    id: 'vm-002',
    name: 'Fingertip Pulse Oximeter',
    category: 'Monitoring',
    description: 'Compact fingertip pulse oximeter designed for convenient spot checks of blood oxygen saturation (SpO2) and pulse rate.',
    price: 18000,
    stockQuantity: 24,
    imageUrl: 'https://vzisnnouahikrauajvtv.supabase.co/storage/v1/object/public/product-images/vm-002.jpg',
    brand: 'Vi-Medics',
    model: 'VM-PO-002',
    warranty: '12 months',
    specifications: {
      'SpO2 Range': '70% - 100%',
      'Pulse Range': '30 - 240 bpm',
      'Display': 'OLED Multi-directional',
      'Battery Life': 'Up to 30 hours'
    },
    visual: 'oximeter'
  },
  {
    id: 'vm-003',
    name: 'Professional Stethoscope',
    category: 'Diagnostic',
    description: 'A lightweight acoustic stethoscope with dual tunable diaphragm for routine clinical examination and high acoustic sensitivity.',
    price: 32000,
    stockQuantity: 3,
    imageUrl: 'https://vzisnnouahikrauajvtv.supabase.co/storage/v1/object/public/product-images/vm-003.jpg',
    brand: 'Vi-Medics',
    model: 'VM-ST-003',
    warranty: '12 months',
    specifications: {
      'Chestpiece': 'Stainless Steel Dual Head',
      'Tubing Length': '69 cm',
      'Ear Tips': 'Soft-sealing silicone'
    },
    visual: 'stethoscope'
  },
  {
    id: 'vm-004',
    name: 'Portable Nebulizer',
    category: 'Respiratory',
    description: 'Compact ultrasonic mesh nebulizer designed for convenient, silent respiratory care routines for adults and children.',
    price: 55000,
    stockQuantity: 8,
    imageUrl: 'https://vzisnnouahikrauajvtv.supabase.co/storage/v1/object/public/product-images/vm-004.webp',
    brand: 'Vi-Medics',
    model: 'VM-NB-004',
    warranty: '12 months',
    specifications: {
      'Medication Capacity': '8 ml max',
      'Nebulization Rate': '≥ 0.2 ml/min',
      'Noise Level': '< 25 dB',
      'Power': 'Rechargeable Lithium Battery'
    },
    visual: 'nebulizer'
  },
  {
    id: 'vm-005',
    name: 'Digital Medical Thermometer',
    category: 'Monitoring',
    description: 'Fast-reading digital thermometer with an easy-to-read display, fever alarm, and waterproof probe tip.',
    price: 8500,
    stockQuantity: 30,
    imageUrl: 'https://vzisnnouahikrauajvtv.supabase.co/storage/v1/object/public/product-images/vm-005.jpg',
    brand: 'Vi-Medics',
    model: 'VM-TM-005',
    warranty: '6 months',
    specifications: {
      'Response Time': '10 seconds',
      'Accuracy': '±0.1°C',
      'Probe': 'Flexible & Waterproof',
      'Memory': 'Last reading recall'
    },
    visual: 'thermometer'
  },
  {
    id: 'vm-006',
    name: 'Folding Mobility Walker',
    category: 'Mobility',
    description: 'Lightweight folding aluminum walking aid designed for everyday mobility support with ergonomic hand grips and height adjustment.',
    price: 68000,
    stockQuantity: 6,
    imageUrl: 'https://vzisnnouahikrauajvtv.supabase.co/storage/v1/object/public/product-images/vm-006.webp',
    brand: 'Vi-Medics',
    model: 'VM-MW-006',
    warranty: '12 months',
    specifications: {
      'Weight Capacity': '136 kg (300 lbs)',
      'Frame Material': 'Anodized Aluminum',
      'Folding Mechanism': 'Single button trigger',
      'Adjustable Height': '78 - 95 cm'
    },
    visual: 'walker'
  },
  {
    id: 'vm-007',
    name: 'Manual Wheelchair',
    category: 'Mobility',
    description: 'Foldable manual wheelchair with comfortable breathable seating, swing-away footrests, and solid puncture-proof wheels.',
    price: 185000,
    stockQuantity: 4,
    imageUrl: 'https://vzisnnouahikrauajvtv.supabase.co/storage/v1/object/public/product-images/vm-007.webp',
    brand: 'Vi-Medics',
    model: 'VM-WC-007',
    warranty: '18 months',
    specifications: {
      'Weight Capacity': '120 kg',
      'Wheel Size': '24-inch rear wheels',
      'Brakes': 'Companion & manual push-to-lock',
      'Folded Width': '28 cm'
    },
    visual: 'wheelchair'
  },
  {
    id: 'vm-008',
    name: 'Blood Glucose Meter Kit',
    category: 'Diagnostic',
    description: 'Portable blood glucose monitoring kit including lancing device, 50 test strips, and fast 5-second results.',
    price: 29500,
    stockQuantity: 10,
    imageUrl: 'https://vzisnnouahikrauajvtv.supabase.co/storage/v1/object/public/product-images/vm-008.jpg',
    brand: 'Vi-Medics',
    model: 'VM-GM-008',
    warranty: '12 months',
    specifications: {
      'Sample Size': '0.6 µL capillary blood',
      'Testing Time': '5 seconds',
      'Memory': '500 test results',
      'Coding': 'No coding required'
    },
    visual: 'glucose'
  }
];

export const mapSupabaseProduct = (raw: any): Product => ({
  id: raw.id,
  name: raw.name,
  category: raw.category,
  description: raw.description,
  shortDescription: raw.short_description || undefined,
  price: Number(raw.price),
  stockQuantity: Number(raw.stock_quantity ?? 0),
  imageUrl: raw.image_url || undefined,
  visual: raw.visual || undefined,
  brand: raw.brand || 'Vi-Medics',
  model: raw.model || 'VM-000',
  specifications: raw.specifications || {},
  warranty: raw.warranty || '12 months',
  status: raw.status || 'active',
  createdAt: raw.created_at,
});

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('status', 'active')
      .order('created_at', { ascending: true });

    if (error || !data || data.length === 0) {
      console.warn('Using fallback products due to Supabase error or empty data:', error?.message);
      return FALLBACK_PRODUCTS;
    }
    return data.map(mapSupabaseProduct);
  } catch (err) {
    console.error('Failed to fetch products from Supabase:', err);
    return FALLBACK_PRODUCTS;
  }
};

export const placeOrder = async (
  cart: CartItem[],
  customer: CustomerDetails
): Promise<{ id: string; orderNumber: string; total: number }> => {
  const pItems = cart.map((item) => ({
    product_id: item.product.id,
    quantity: item.quantity,
  }));

  try {
    // 1. Try Supabase RPC `place_order`
    const { data: orderId, error: rpcError } = await supabase.rpc('place_order', {
      p_items: pItems,
      p_customer: customer,
    });

    if (rpcError) {
      console.warn('RPC place_order returned error, attempting fallback insert:', rpcError.message);
      throw rpcError;
    }

    const { data: orderData, error: queryError } = await supabase
      .from('orders')
      .select('id, order_number, total')
      .eq('id', orderId)
      .single();

    if (queryError || !orderData) {
      return {
        id: String(orderId),
        orderNumber: `VM-${String(orderId).slice(0, 6).toUpperCase()}`,
        total: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0) + DELIVERY_FEE,
      };
    }

    return {
      id: orderData.id,
      orderNumber: `VM-${orderData.order_number}`,
      total: Number(orderData.total),
    };
  } catch (err: any) {
    console.warn('place_order RPC call failed, generating direct local confirmation:', err);
    const subtotal = cart.reduce((acc, it) => acc + it.product.price * it.quantity, 0);
    const orderNum = Math.floor(1000 + Math.random() * 9000);
    const generatedOrder: Order = {
      id: `local-${Date.now()}`,
      orderNumber: `VM-${orderNum}`,
      status: 'confirmed',
      subtotal,
      deliveryFee: DELIVERY_FEE,
      total: subtotal + DELIVERY_FEE,
      createdAt: new Date().toISOString(),
      customer,
      items: cart.map((it) => ({
        productId: it.product.id,
        productName: it.product.name,
        unitPrice: it.product.price,
        quantity: it.quantity,
      })),
    };

    // Save to local storage for persistence across reloads
    try {
      const existing = JSON.parse(localStorage.getItem('vi_medics_orders') || '[]');
      localStorage.setItem('vi_medics_orders', JSON.stringify([generatedOrder, ...existing]));
    } catch (e) {
      // storage quota or disabled
    }

    return {
      id: generatedOrder.id,
      orderNumber: generatedOrder.orderNumber,
      total: generatedOrder.total,
    };
  }
};

export const fetchOrders = async (): Promise<Order[]> => {
  let remoteOrders: Order[] = [];
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('id, order_number, status, subtotal, delivery_fee, total, created_at, order_items(id, product_id, product_name, unit_price, quantity)')
      .order('created_at', { ascending: false });

    if (!error && data) {
      remoteOrders = data.map((o: any) => ({
        id: o.id,
        orderNumber: `VM-${o.order_number}`,
        status: o.status || 'confirmed',
        subtotal: Number(o.subtotal || 0),
        deliveryFee: Number(o.delivery_fee || DELIVERY_FEE),
        total: Number(o.total || 0),
        createdAt: o.created_at,
        items: (o.order_items || []).map((it: any) => ({
          id: it.id,
          productId: it.product_id,
          productName: it.product_name,
          unitPrice: Number(it.unit_price || 0),
          quantity: it.quantity,
        })),
      }));
    }
  } catch (err) {
    console.error('Error fetching remote orders:', err);
  }

  // Combine with locally saved orders
  let localOrders: Order[] = [];
  try {
    localOrders = JSON.parse(localStorage.getItem('vi_medics_orders') || '[]');
  } catch (e) {}

  const seenIds = new Set<string>();
  const combined: Order[] = [];

  for (const o of [...localOrders, ...remoteOrders]) {
    if (!seenIds.has(o.id) && !seenIds.has(o.orderNumber)) {
      seenIds.add(o.id);
      seenIds.add(o.orderNumber);
      combined.push(o);
    }
  }

  return combined;
};
