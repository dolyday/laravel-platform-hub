import { Search, Eye, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { articles, packageCategories } from '../data/mockData';
import Newsletter from '../components/Newsletter';
import SkeletonLoader from '../components/SkeletonLoader';

const ITEMS_PER_PAGE = 6;

export default function ArticlesPage() {
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

  let filteredArticles = articles.filter((article) =>
    article.title.includes(searchTerm) || article.summary.includes(searchTerm)
  );

  if (filterCategory !== 'all') {
    filteredArticles = filteredArticles.filter((article) => article.category === filterCategory);
  }

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const categories = ['all', ...Array.from(new Set(articles.map((a) => a.category)))];

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterCategory]);

  return (
    <div className="min-h-screen bg-[#1a252f]">
      <section className="bg-gradient-to-b from-[#2c3e50] to-[#1a252f] py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">المقالات</h1>
            <p className="text-gray-300">
              اقرأ أحدث المقالات والشروحات التقنية حول Laravel
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث في المقالات..."
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
              <SkeletonLoader key={idx} type="article" />
            ))}
          </div>
        ) : paginatedArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedArticles.map((article) => (
                <div
                  key={article.id}
                  className="group bg-[#2c3e50] rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-[#e74c3c]/20 border-2 border-transparent hover:border-[#e74c3c]"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-3 py-1 bg-[#3498db] text-white text-xs rounded-full mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 min-h-[3.5rem]">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-[#34495e]">
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                      <ArrowLeft className="w-5 h-5 text-[#e74c3c] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
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
            <p className="text-gray-400 text-lg">لم يتم العثور على مقالات</p>
          </div>
        )}
      </section>

      <div className="container mx-auto px-4">
        <Newsletter />
      </div>
    </div>
  );
}
