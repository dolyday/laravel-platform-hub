import { Heart, Mail, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const menuItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/packages', label: 'الحزم' },
    { path: '/courses', label: 'الدورسات عربية' },
    { path: '/articles', label: 'طلب لارافيل' }
  ];

  return (
    <footer className="bg-[#1a252f] border-t border-[#2c3e50] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#e74c3c] p-2 rounded">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">عرب<span className="text-[#e74c3c]">فيل</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              دليلك العربي لعالم لارافيل. نقدم لك أفضل الحزم، الدورسات، والمقالات لتطوير تطبيقات Laravel احترافية.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#e74c3c] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">دعم المطور</h3>
            <div className="space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#e74c3c] text-white rounded hover:bg-[#c0392b] transition-colors text-sm justify-center"
              >
                <Mail className="w-4 h-4" />
                <span>Support Archivel</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#3498db] text-white rounded hover:bg-[#2980b9] transition-colors text-sm justify-center"
              >
                <Heart className="w-4 h-4" />
                <span>تفعيل الإشعارات</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2c3e50] pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
            <span>© 2025 عربفيل. جميع الحقوق محفوظة</span>
            <Heart className="w-4 h-4 text-[#e74c3c]" />
            <span>تم بناؤه بـ</span>
            <span>By Ahmed Mohsen</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
