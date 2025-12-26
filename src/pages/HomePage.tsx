import { ArrowLeft, Code, Globe, Shield, CreditCard, Folder, Palette, Lock, Bell } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { packageCategories, articles, statistics } from '../data/mockData';
import Newsletter from '../components/Newsletter';
import CounterAnimation from '../components/CounterAnimation';
import SkeletonLoader from '../components/SkeletonLoader';

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

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getIconComponent = (iconName: string) => {
    return iconMap[iconName] || Code;
  };

  return (
    <div className="min-h-screen bg-[#1a252f]">
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c3e50] to-[#1a252f] opacity-50" />

        <div className={`container mx-auto text-center relative z-10 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute top-10 left-10 text-[#e74c3c] opacity-20">
            <Code className="w-16 h-16" />
          </div>
          <div className="absolute bottom-10 right-10 text-[#3498db] opacity-20">
            <Code className="w-20 h-20" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            دليلك العربي <span className="text-[#e74c3c]">لعالم لارافيل</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            موقعك الرائد لاكتشاف جزم لارافيل، تعلم الدورسات المجانية وقراءة الإبداع عن طريق لارافيل
          </p>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#e74c3c] text-white rounded-lg hover:bg-[#c0392b] transition-all transform hover:scale-105 font-bold"
          >
            <span>استكشف الحزم</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className={`text-center mb-12 transition-all duration-1000 delay-200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">الفئات المميزة</h2>
          <p className="text-gray-400">استكشف الحزم حسب الفئات المتاحة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: 8 }).map((_, idx) => (
              <SkeletonLoader key={idx} />
            ))
          ) : (
            packageCategories.map((category, idx) => {
              const IconComponent = getIconComponent(category.icon);
              return (
                <Link
                  key={category.id}
                  to="/packages"
                  className={`group bg-[#2c3e50] rounded-lg p-6 hover:bg-[#34495e] transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:shadow-[#e74c3c]/20 border-2 border-transparent hover:border-[#e74c3c] transition-all duration-700 delay-${idx * 100} ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} block`}
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
                </Link>
              );
            })
          )}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">أحدث المقالات</h2>
          <p className="text-gray-400">تصفح أحدث المقالات والشروحات</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 3 }).map((_, idx) => (
              <SkeletonLoader key={idx} type="article" />
            ))
          ) : (
            articles.slice(0, 3).map((article, idx) => (
              <Link
                key={article.id}
                to="/articles"
                className={`group bg-[#2c3e50] rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-[#e74c3c]/20 border-2 border-transparent hover:border-[#e74c3c] transition-all duration-700 delay-${(idx + 8) * 100} ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} block`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-3 py-1 bg-[#3498db] text-white text-xs rounded-full mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">{article.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{article.views} مشاهدة</span>
                    <ArrowLeft className="w-4 h-4 text-[#e74c3c] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      <section className={`bg-[#2c3e50] py-16 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CounterAnimation end={statistics.totalPackages} label="إجمالي الحزم" />
            <CounterAnimation end={statistics.totalCourses} label="فئات الحزم" />
            <CounterAnimation end={statistics.totalArticles} label="الدورسات العربية" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <Newsletter />
      </div>
    </div>
  );
}
