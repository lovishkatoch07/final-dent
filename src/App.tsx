/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Restructured Homepage sub-components
import HomeTrustBar from './components/HomeTrustBar';
import HomeFeaturedServices from './components/HomeFeaturedServices';
import HomeDoctorSpotlight from './components/HomeDoctorSpotlight';
import HomeTestimonials from './components/HomeTestimonials';
import HomeBeforeAfterPreview from './components/HomeBeforeAfterPreview';

// Dedicated Sub-Pages
import AboutPage from './pages/AboutPage';
import DoctorPage from './pages/DoctorPage';
import ServicePage from './pages/ServicePage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

import { Phone, CalendarPlus } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [serviceKey, setServiceKey] = useState<string>('service-whitening');
  const [selectedTreatment, setSelectedTreatment] = useState('');

  // Sychronize browser hash states with internal navigation router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      // Instant viewport reset to top upon any tab transitions
      window.scrollTo({ top: 0, behavior: 'instant' });

      if (hash === '#/' || hash === '#home') {
        setCurrentPage('home');
      } else if (hash === '#/about') {
        setCurrentPage('about');
      } else if (hash === '#/doctor') {
        setCurrentPage('doctor');
      } else if (hash === '#/implants' || hash === '#/service-implants') {
        setCurrentPage('service');
        setServiceKey('service-implants');
      } else if (hash === '#/whitening' || hash === '#/service-whitening') {
        setCurrentPage('service');
        setServiceKey('service-whitening');
      } else if (hash === '#/makeover' || hash === '#/service-makeover') {
        setCurrentPage('service');
        setServiceKey('service-makeover');
      } else if (hash === '#/rct' || hash === '#/service-rct') {
        setCurrentPage('service');
        setServiceKey('service-rct');
      } else if (hash === '#/crowns' || hash === '#/service-crowns') {
        setCurrentPage('service');
        setServiceKey('service-crowns');
      } else if (hash === '#/aligners' || hash === '#/service-aligners') {
        setCurrentPage('service');
        setServiceKey('service-aligners');
      } else if (hash === '#/gallery') {
        setCurrentPage('gallery');
      } else if (hash === '#/reviews') {
        setCurrentPage('reviews');
      } else if (hash === '#/faq') {
        setCurrentPage('faq');
      } else if (hash === '#/contact') {
        setCurrentPage('contact');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial paint check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    if (page === 'home') {
      window.location.hash = '#/';
    } else if (page.startsWith('service-')) {
      const sub = page.replace('service-', '');
      window.location.hash = `#/${sub}`;
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  const triggerBooking = (treatmentName?: string) => {
    if (treatmentName) {
      setSelectedTreatment(treatmentName);
    }
    window.location.hash = '#/contact';
  };

  const handleClearPreselected = () => {
    setSelectedTreatment('');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onBookClick={() => triggerBooking('General Consultation')}
          />
        );
      case 'doctor':
        return (
          <DoctorPage
            onNavigate={handleNavigate}
            onBookClick={() => triggerBooking('General Consultation')}
          />
        );
      case 'service':
        return (
          <ServicePage
            serviceKey={serviceKey}
            onNavigate={handleNavigate}
            onBookClick={triggerBooking}
          />
        );
      case 'gallery':
        return (
          <GalleryPage
            onNavigate={handleNavigate}
            onBookClick={triggerBooking}
          />
        );
      case 'reviews':
        return (
          <ReviewsPage
            onNavigate={handleNavigate}
            onBookClick={triggerBooking}
          />
        );
      case 'faq':
        return (
          <FAQPage
            onNavigate={handleNavigate}
            onBookClick={triggerBooking}
          />
        );
      case 'contact':
        return (
          <ContactPage
            preselectedTreatment={selectedTreatment}
            onClearPreselected={handleClearPreselected}
            onNavigate={handleNavigate}
          />
        );
      case 'home':
      default:
        return (
          <div className="pt-20">
            {/* 1. Main Hero Section */}
            <Hero onBookClick={() => triggerBooking('General Consultation')} />

            {/* 2. Simplified Trust Banner */}
            <HomeTrustBar />

            {/* 4. Streamlined Featured Services Grid */}
            <HomeFeaturedServices onNavigate={handleNavigate} />

            {/* 6. Professional Doctor Spotlight */}
            <HomeDoctorSpotlight onNavigate={handleNavigate} />

            {/* 7. Selective Testimonial Slider */}
            <HomeTestimonials onNavigate={handleNavigate} />

            {/* 8. Fast Before/After transformations summary */}
            <HomeBeforeAfterPreview onNavigate={handleNavigate} />

            {/* 9. Final Conversion Stimulator CTA */}
            <FinalCTA onBookClick={() => triggerBooking('General Consultation')} />
          </div>
        );
    }
  };

  return (
    <div id="elite-smile-site" className="min-h-screen bg-slate-50 font-sans text-[#1E293B] antialiased pb-20 lg:pb-0">
      {/* Navigation Header across all modules */}
      <Header onBookClick={() => triggerBooking('General Consultation')} />

      {/* Conditionally rendered page route */}
      <main className="min-h-screen">
        {renderContent()}
      </main>

      {/* Simple Professional Corporate Footer */}
      <Footer />

      {/* Responsive Mobile Sticky Quick Call/Booking CTAs */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 py-3 bg-white/95 backdrop-blur-md border-t border-slate-200 flex items-center gap-3.5 shadow-[0_-8px_24px_rgba(30,41,59,0.06)]">
        <a
          href="tel:+919622294841"
          className="flex-1 py-3 bg-white border-2 border-[#1F4E79] text-[#1F4E79] font-bold text-xs uppercase tracking-widest rounded-xl text-center flex items-center justify-center space-x-2 active:bg-slate-50"
        >
          <Phone className="w-4 h-4 text-[#36B6C9]" />
          <span>Call Desk</span>
        </a>
        <button
          onClick={() => triggerBooking('General Consultation')}
          className="flex-1 py-3.5 bg-[#1F4E79] text-white font-bold text-xs uppercase tracking-widest rounded-xl text-center flex items-center justify-center space-x-2 shadow-sm active:bg-[#36B6C9] cursor-pointer"
        >
          <CalendarPlus className="w-4 h-4 text-[#36B6C9]" />
          <span>Book Free</span>
        </button>
      </div>
    </div>
  );
}
