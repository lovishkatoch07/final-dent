/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  iconName: string; // Resolves to LucideIcon name
  title: string;
  description: string;
  benefits?: string[];
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  snippet: string;
  fullReview?: string;
  treatment?: string;
  date?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Feature {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface SmileTransformation {
  id: string;
  title: string;
  beforeUrl: string;
  afterUrl: string;
  category: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  treatment: string;
  notes?: string;
}
