import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import OfferBanner from './components/home/OfferBanner';
import ChatButton from './components/common/ChatButton';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col selection:bg-brand-gold selection:text-white">
      <OfferBanner />
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
      <ChatButton />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
