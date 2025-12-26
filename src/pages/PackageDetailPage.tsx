import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Star, Download, Eye, Terminal, CheckCircle, Heart, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import Newsletter from '../components/Newsletter';

interface Package {
  id: string;
  slug: string;
  name: string;
  name_ar: string;
  description: string;
  description_ar: string;
  category: string;
  github_url: string;
  composer_package: string;
  image_url: string;
  php_version: string;
  laravel_version: string;
  downloads: number;
  github_stars: number;
  views: number;
  tags: string[];
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
}

interface RelatedPackage {
  id: string;
  name: string;
  name_ar: string;
  slug: string;
  github_stars: number;
}

export default function PackageDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [packageData, setPackageData] = useState<Package | null>(null);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [codeExamples, setCodeExamples] = useState<CodeExample[]>([]);
  const [relatedPackages, setRelatedPackages] = useState<RelatedPackage[]>([]);

  useEffect(() => {
    const fetchPackageData = async () => {
      setLoading(true);

      setTimeout(() => {
        const mockPackage: Package = {
          id: '1',
          slug: slug || 'intervention-image',
          name: 'Intervention Image',
          name_ar: 'Intervention Image',
          description: 'PHP Image manipulation library with GD and Imagick support',
          description_ar: 'مكتبة PHP لمعالجة الصور وتحريرها بطريقة سهلة ومرنة مع دعم مكتبات GD و Imagick',
          category: 'إدارة الملفات',
          github_url: 'https://github.com/intervention/image',
          composer_package: 'intervention/image',
          image_url: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg',
          php_version: '8.1',
          laravel_version: '3.11.4',
          downloads: 3000000,
          github_stars: 14000,
          views: 850,
          tags: ['animated-images', 'filters', 'watermark', 'crop', 'resize', 'image-manipulation', 'libvips', 'imagick', 'gd', 'image-processing', 'php', 'psr-12', 'framework-agnostic']
        };

        const mockFeatures: Feature[] = [
          {
            id: '1',
            title: 'واجهة برمجية بسيطة',
            description: 'توفر واجهة سهلة الاستخدام لإجراء عمليات تحرير الصور المتقدمة بسرعة وبساطة',
            icon: 'check'
          },
          {
            id: '2',
            title: 'مكتبة معالجة الصور قابلة للتبديل',
            description: 'إتاحة إمكانية عملية لتبديل مكتبات معالجة الصور (GD، Imagick، libvips) وفقاً لمتطلبات المشروع',
            icon: 'check'
          },
          {
            id: '3',
            title: 'استقلالية عن الإطار',
            description: 'تعمل بشكل مستقل عن إطار العمل بما فيه Laravel، مما يجعلها مرنة لجميع مشاريع PHP',
            icon: 'check'
          },
          {
            id: '4',
            title: 'دعم الصور المتحركة',
            description: 'إدعم معالجة صور متعددة مثل ملفات GIF مع الحفاظ على الإطارات',
            icon: 'check'
          },
          {
            id: '5',
            title: 'متوافق مع PSR-12',
            description: 'تتبع معيار PSR-12 لتنظيم كود بناءً على أفضل معايير مجتمع PHP',
            icon: 'check'
          },
          {
            id: '6',
            title: 'أمان عالي',
            description: 'توفر قدرات محسّنة للتعامل الآمن مع التقديرات الصعبة وحماية المستخدمين',
            icon: 'check'
          }
        ];

        const mockCodeExamples: CodeExample[] = [
          {
            id: '1',
            title: 'معالجة الصور الأساسية',
            description: 'مثال على قراءة الصور وإجراء عمليات أساسية مثل التحجيم',
            code: `use Intervention\\Image\\ImageManager;

// إنشاء ImageManager مع معرف GD
$manager = new ImageManager(['driver' => 'imagick']);

// قراءة الصور
$image = $manager->make('path/to/image.jpg');

// تحجيم الصور
$image->resize(300, 200);

// حفظ الصور المعدلة
$image->save('path/to/new-image.jpg');`,
            language: 'php'
          },
          {
            id: '2',
            title: 'إنشاء صورة مصغرة مربعة',
            description: 'مثال على تقديم الصور الميدانية القائمة على اللون الفني',
            code: `use Intervention\\Image\\ImageManager;

// إنشاء ImageManager مع معرف GD
$manager = new ImageManager(['driver' => 'imagick']);

// قراءة الصور ضوابط التحجيم
$image = $manager->make('path/to/example.jpg');
$image->fit(300, 200);

// حفظ إطار تماثلي
$image->save('path/to/example.png', 100);

// علامة موضع الصور عبر أعلى
$image->insert('path/to/watermark.png');`,
            language: 'php'
          },
          {
            id: '3',
            title: 'إضافة مساويات مع الدقة',
            description: 'مثال على إطلاق الصور النموذجية وتخزينها بنهج مستمر موثوق',
            code: `use Intervention\\Image\\ImageManager;

// إنشاء ImageManager مع معرف GD
$manager = new ImageManager(['driver' => 'imagick']);

// قراءة الصور والعمليات
$image = $manager->make('path/to/photo.jpg');

// تحويل وتحليل واستزراعة دائرة
$image->resize(300, null, function ($constraint) {
    $constraint->aspectRatio();
    $constraint->upsize();
});

// تحويل الدائرة
$image->crop(300, 200);

// إنشاء النص
$image->text('Sample', 120, 100, function($font) {
    $font->file('path/to/font.ttf');
    $font->size(24);
});

// توجه النتيجة
$image->save('path/to/example.jpg');`,
            language: 'php'
          }
        ];

        const mockRelatedPackages: RelatedPackage[] = [
          {
            id: '2',
            name: 'Laravel DOMPDF',
            name_ar: 'Laravel DOMPDF',
            slug: 'laravel-dompdf',
            github_stars: 7000
          },
          {
            id: '3',
            name: 'Laravel Image Optimizer',
            name_ar: 'Laravel Image Optimizer',
            slug: 'laravel-image-optimizer',
            github_stars: 1000
          },
          {
            id: '4',
            name: 'Flysystem Google Drive',
            name_ar: 'Flysystem Google Drive',
            slug: 'flysystem-google-drive',
            github_stars: 361
          }
        ];

        setPackageData(mockPackage);
        setFeatures(mockFeatures);
        setCodeExamples(mockCodeExamples);
        setRelatedPackages(mockRelatedPackages);
        setLoading(false);
      }, 1000);
    };

    fetchPackageData();
  }, [slug]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `+${Math.floor(num / 1000000)}M`;
    }
    if (num >= 1000) {
      return `+${Math.floor(num / 1000)}K`;
    }
    return num.toString();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a252f] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#e74c3c]"></div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen bg-[#1a252f] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">الحزمة غير موجودة</h2>
          <Link to="/packages" className="text-[#e74c3c] hover:underline">
            العودة إلى الحزم
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a252f]">
      <div className="bg-gradient-to-b from-[#2c3e50] to-[#1a252f] py-12 px-4">
        <div className="container mx-auto">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transform rotate-180" />
            <span>العودة إلى الحزم</span>
          </Link>

          <div className="flex items-start gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg">
              <img
                src={packageData.image_url}
                alt={packageData.name}
                className="w-20 h-20 object-cover rounded"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-bold">{formatNumber(packageData.github_stars)}</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-3">{packageData.name}</h1>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                {packageData.description_ar}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {packageData.tags.slice(0, 13).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#34495e] text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={packageData.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#2c3e50] text-white rounded hover:bg-[#34495e] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>عرض على GitHub</span>
                </a>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#3498db] text-white rounded hover:bg-[#2980b9] transition-colors">
                  <Heart className="w-4 h-4" />
                  <span>مشاركة</span>
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#e74c3c] text-white rounded hover:bg-[#c0392b] transition-colors">
                  <Terminal className="w-4 h-4" />
                  <span>تمويل المشروع</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-[#2c3e50] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{formatNumber(packageData.downloads)}</div>
              <div className="text-gray-400 text-sm">إجمالي التحميلات</div>
            </div>
            <div className="bg-[#2c3e50] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{packageData.laravel_version}</div>
              <div className="text-gray-400 text-sm">الإصدار الثابت</div>
            </div>
            <div className="bg-[#2c3e50] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{formatNumber(packageData.github_stars)}</div>
              <div className="text-gray-400 text-sm">نجمة GitHub</div>
            </div>
            <div className="bg-[#2c3e50] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{packageData.views}</div>
              <div className="text-gray-400 text-sm">المشاهدات</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-6 h-6 text-[#e74c3c]" />
                <h2 className="text-2xl font-bold text-white">تثبيت المكتبة</h2>
              </div>
              <div className="bg-[#2c3e50] rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">قم بتثبيت مكتبة Intervention Image عبر Composer</span>
                  <button
                    onClick={() => copyToClipboard(`composer require ${packageData.composer_package}`)}
                    className="text-[#e74c3c] hover:text-[#c0392b] text-sm"
                  >
                    نسخ
                  </button>
                </div>
                <code className="text-green-400 font-mono">
                  composer require {packageData.composer_package}
                </code>
              </div>
            </section>

            {codeExamples.map((example, index) => (
              <section key={example.id}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#e74c3c] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{example.title}</h2>
                </div>
                <p className="text-gray-400 mb-4">{example.description}</p>
                <div className="bg-[#2c3e50] rounded-lg p-4 overflow-x-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">{example.title}</span>
                    <button
                      onClick={() => copyToClipboard(example.code)}
                      className="text-[#e74c3c] hover:text-[#c0392b] text-sm"
                    >
                      نسخ
                    </button>
                  </div>
                  <pre className="text-sm">
                    <code className="text-gray-300 font-mono whitespace-pre">
                      {example.code}
                    </code>
                  </pre>
                </div>
              </section>
            ))}
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-[#3498db]" />
                <h2 className="text-2xl font-bold text-white">مميزات رئيسية</h2>
              </div>
              <div className="space-y-3">
                {features.map((feature) => (
                  <div key={feature.id} className="bg-[#2c3e50] rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#3498db] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">حزم مشابهة</h2>
              <div className="space-y-3">
                {relatedPackages.map((pkg) => (
                  <Link
                    key={pkg.id}
                    to={`/packages/${pkg.slug}`}
                    className="block bg-[#2c3e50] rounded-lg p-4 hover:bg-[#34495e] transition-colors"
                  >
                    <h3 className="text-white font-bold mb-2">{pkg.name_ar}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{formatNumber(pkg.github_stars)}</span>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Newsletter />
      </div>
    </div>
  );
}
