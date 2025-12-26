import { Search, ArrowLeft, Code, Globe, Shield, CreditCard, Folder, Palette, Lock, Bell } from 'lucide-react';
import { useState, useEffect } from 'react';
import { packageCategories } from '../data/mockData';
import Newsletter from '../components/Newsletter';
import SkeletonLoader from '../components/SkeletonLoader';

interface PackagesPageProps {
  onNavigate: (page: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'folder': Folder,
  'credit-card': CreditCard,
  'shield': Shield,
  'code': Code,
  'palette': Palette,
  'lock': Lock,
  'globe': Globe,
  'bell': Bell
};

const ITEMS_PER_PAGE = 8;

export default function PackagesPage({ onNavigate }: PackagesPageProps) {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchTerm, currentPage]);

  const filteredCategories = packageCategories.filter((category) =>
    category.name.includes(searchTerm) || category.description.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredCategories.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCategories = filteredCategories.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getIconComponent = (iconName: string) => {
    return iconMap[iconName] || Code;
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#1a252f]">
      <section className="bg-gradient-to-b from-[#2c3e50] to-[#1a252f] py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">استكشف الحزم</h1>
          <p className="text-gray-300 mb-8">تصفح جزم لارافيل حسب الفئات المتاحة</p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث في الفئات..."
              className="w-full px-12 py-4 bg-[#2c3e50] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e74c3c] text-right"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
              <SkeletonLoader key={idx} />
            ))}
          </div>
        ) : paginatedCategories.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedCategories.map((category) => {
                const IconComponent = getIconComponent(category.icon);
                return (
                  <div
                    key={category.id}
                    className="group bg-[#2c3e50] rounded-lg p-6 hover:bg-[#34495e] transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:shadow-[#e74c3c]/20 border-2 border-transparent hover:border-[#e74c3c]"
                  >
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-lg bg-${category.color}-500/10`}>
                        <IconComponent className={`w-8 h-8 text-${category.color}-400`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">{category.name}</h3>
                    <p className="text-gray-400 text-sm text-center mb-4">{category.description}</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-[#e74c3c] font-bold">{category.packagesCount} حزمة</span>
                      <ArrowLeft className="w-4 h-4 text-[#e74c3c] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-[#2c3e50] text-white rounded hover:bg-[#34495e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  التالي
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded transition-colors ${
                      currentPage === page
                        ? 'bg-[#e74c3c] text-white'
                        : 'bg-[#2c3e50] text-gray-300 hover:bg-[#34495e]'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-[#2c3e50] text-white rounded hover:bg-[#34495e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  السابق
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">لم يتم العثور على نتائج</p>
          </div>
        )}
      </section>

      <div className="container mx-auto px-4">
        <Newsletter />
      </div>
    </div>
  );
}
