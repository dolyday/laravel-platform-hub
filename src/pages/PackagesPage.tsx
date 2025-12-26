import { Search, ArrowLeft, Star, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { packages, packageCategories } from '../data/mockData';
import Newsletter from '../components/Newsletter';
import SkeletonLoader from '../components/SkeletonLoader';

const ITEMS_PER_PAGE = 8;

export default function PackagesPage() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchTerm, filterCategory, currentPage]);

  let filteredPackages = packages.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.name_ar.includes(searchTerm) ||
    pkg.description.includes(searchTerm)
  );

  if (filterCategory !== 'all') {
    filteredPackages = filteredPackages.filter((pkg) => pkg.category === filterCategory);
  }

  const totalPages = Math.ceil(filteredPackages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPackages = filteredPackages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const categories = ['all', ...Array.from(new Set(packageCategories.map((c) => c.name)))];

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `+${Math.floor(num / 1000000)}M`;
    }
    if (num >= 1000) {
      return `+${Math.floor(num / 1000)}K`;
    }
    return num.toString();
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterCategory]);

  return (
    <div className="min-h-screen bg-[#1a252f]">
      <section className="bg-gradient-to-b from-[#2c3e50] to-[#1a252f] py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">استكشف الحزم</h1>
            <p className="text-gray-300">تصفح جزم لارافيل حسب الفئات المتاحة</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث في الحزم..."
                className="w-full px-12 py-4 bg-[#2c3e50] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e74c3c] text-right"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filterCategory === category
                      ? 'bg-[#e74c3c] text-white'
                      : 'bg-[#2c3e50] text-gray-300 hover:bg-[#34495e]'
                  }`}
                >
                  {category === 'all' ? 'الكل' : category}
                </button>
              ))}
            </div>
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
        ) : paginatedPackages.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedPackages.map((pkg) => (
                <Link
                  key={pkg.id}
                  to={`/packages/${pkg.slug}`}
                  className="group bg-[#2c3e50] rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-[#e74c3c]/20 border-2 border-transparent hover:border-[#e74c3c] block"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-[#3498db] text-white text-xs rounded-full mb-2">
                      {pkg.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{pkg.name_ar}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3 leading-relaxed">
                      {pkg.description}
                    </p>
                    <div className="flex items-center justify-between text-gray-400 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{formatNumber(pkg.github_stars)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{formatNumber(pkg.downloads)}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-[#34495e]">
                      <code className="text-xs text-gray-500 truncate flex-1">{pkg.composer_package}</code>
                      <ArrowLeft className="w-4 h-4 text-[#e74c3c] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
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
