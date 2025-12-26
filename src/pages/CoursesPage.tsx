import { Search, ExternalLink, Clock, BookOpen, ArrowLeft, Filter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { courses } from '../data/mockData';
import Newsletter from '../components/Newsletter';
import SkeletonLoader from '../components/SkeletonLoader';

const ITEMS_PER_PAGE = 6;

export default function CoursesPage() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'views'>('newest');
  const [filterLevel, setFilterLevel] = useState<'all' | 'beginner' | 'advanced'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchTerm, sortBy, filterLevel, currentPage]);

  let filteredCourses = courses.filter((course) =>
    course.title.includes(searchTerm) || course.category.includes(searchTerm)
  );

  if (filterLevel !== 'all') {
    filteredCourses = filteredCourses.filter((course) => course.level === filterLevel);
  }

  filteredCourses.sort((a, b) => {
    if (sortBy === 'views') {
      return b.views - a.views;
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy, filterLevel]);

  return (
    <div className="min-h-screen bg-[#1a252f]">
      <section className="bg-gradient-to-b from-[#2c3e50] to-[#1a252f] py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              أفضل <span className="text-[#e74c3c]">الدورسات العربية</span> للارافيل
            </h1>
            <p className="text-gray-300">
              مجموعة متنوعة من الدورسات المجانية عالية الجودة لتعلم Laravel وتطوير مهاراتك البرمجية
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث عن الدورسات..."
                className="w-full px-12 py-4 bg-[#2c3e50] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e74c3c] text-right"
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex gap-2 bg-[#2c3e50] rounded-lg p-1">
                <button
                  onClick={() => setSortBy('newest')}
                  className={`px-4 py-2 rounded transition-colors ${
                    sortBy === 'newest'
                      ? 'bg-[#e74c3c] text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  الأحدث
                </button>
                <button
                  onClick={() => setSortBy('views')}
                  className={`px-4 py-2 rounded transition-colors ${
                    sortBy === 'views'
                      ? 'bg-[#e74c3c] text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  الأكثر مشاهدة
                </button>
              </div>

              <div className="flex gap-2 bg-[#2c3e50] rounded-lg p-1">
                <button
                  onClick={() => setFilterLevel('all')}
                  className={`px-4 py-2 rounded transition-colors ${
                    filterLevel === 'all'
                      ? 'bg-[#3498db] text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  الكل
                </button>
                <button
                  onClick={() => setFilterLevel('beginner')}
                  className={`px-4 py-2 rounded transition-colors ${
                    filterLevel === 'beginner'
                      ? 'bg-[#3498db] text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  مبتدئ
                </button>
                <button
                  onClick={() => setFilterLevel('advanced')}
                  className={`px-4 py-2 rounded transition-colors ${
                    filterLevel === 'advanced'
                      ? 'bg-[#3498db] text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  متقدم
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
              <SkeletonLoader key={idx} type="course" />
            ))}
          </div>
        ) : paginatedCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedCourses.map((course) => (
                <div
                  key={course.id}
                  className="group bg-[#2c3e50] rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-[#e74c3c]/20 border-2 border-transparent hover:border-[#e74c3c]"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        course.level === 'beginner'
                          ? 'bg-green-500 text-white'
                          : 'bg-orange-500 text-white'
                      }`}>
                        {course.level === 'beginner' ? 'مبتدئ' : 'متقدم'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-[#3498db] text-white text-xs rounded-full mb-2">
                      {course.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 min-h-[3.5rem]">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessonsCount} درس</span>
                      </div>
                    </div>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#e74c3c] text-white rounded-lg hover:bg-[#c0392b] transition-colors"
                    >
                      <span>مشاهدة الدورة</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
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
            <p className="text-gray-400 text-lg">لم يتم العثور على دورسات</p>
          </div>
        )}
      </section>

      <div className="container mx-auto px-4">
        <Newsletter />
      </div>
    </div>
  );
}
