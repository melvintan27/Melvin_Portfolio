
import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sage-50">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
