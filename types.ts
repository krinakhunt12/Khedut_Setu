import React from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  farmerName: string;
  location: string;
  image: string;
  rating: number;
}

export enum UserType {
  FARMER = 'farmer',
  BUYER = 'buyer',
}

export interface NavItem {
  label: string; // Fallback or display label
  translationKey: string; // Key for i18n
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}