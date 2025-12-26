import { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import CoursesPage from './pages/CoursesPage';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'packages':
        return <PackagesPage onNavigate={handleNavigate} />;
      case 'courses':
        return <CoursesPage />;
      case 'articles':
        return <ArticlesPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a252f]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
