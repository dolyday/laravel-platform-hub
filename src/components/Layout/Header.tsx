import { Menu, Code2 } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'packages', label: 'الحزم' },
    { id: 'courses', label: 'الدورسات عربية' },
    { id: 'articles', label: 'طلب لارافيل' }
  ];

  return (
    <header className="bg-[#2c3e50] border-b border-[#34495e] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-[#e74c3c] p-2 rounded">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">عرب<span className="text-[#e74c3c]">فيل</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm transition-colors ${
                  currentPage === item.id
                    ? 'text-white font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-[#34495e]">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-right px-4 py-2 text-sm transition-colors ${
                  currentPage === item.id
                    ? 'text-white font-semibold bg-[#34495e] rounded'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
