export const packageCategories = [
  {
    id: 1,
    name: 'إدارة الملفات',
    description: 'تخزين ومعالجة الملفات',
    icon: 'folder',
    packagesCount: 6,
    color: 'blue'
  },
  {
    id: 2,
    name: 'المدفوعات',
    description: 'مكتبات بوابات الدفع',
    icon: 'credit-card',
    packagesCount: 4,
    color: 'yellow'
  },
  {
    id: 3,
    name: 'المصادقة',
    description: 'مصادقة وتسجيل المستخدمين',
    icon: 'shield',
    packagesCount: 4,
    color: 'blue'
  },
  {
    id: 4,
    name: 'تطوير APIs',
    description: 'أدوات REST API و GraphQL',
    icon: 'code',
    packagesCount: 4,
    color: 'green'
  },
  {
    id: 5,
    name: 'مكونات واجهة المستخدم',
    description: 'مكونات واجهة المستخدم الجاهزة',
    icon: 'palette',
    packagesCount: 3,
    color: 'teal'
  },
  {
    id: 6,
    name: 'الأمان',
    description: 'أدوات الأمان والتشفير',
    icon: 'lock',
    packagesCount: 4,
    color: 'purple'
  },
  {
    id: 7,
    name: 'اللغات المتعددة',
    description: 'دعم متعدد اللغات',
    icon: 'globe',
    packagesCount: 3,
    color: 'green'
  },
  {
    id: 8,
    name: 'الإشعارات',
    description: 'إشعارات البريد والرسائل والدفع',
    icon: 'bell',
    packagesCount: 3,
    color: 'orange'
  }
];

export const courses = [
  {
    id: 1,
    title: 'دورة Laravel - تعلم Laravel 10 بالتفصيل',
    category: 'Laravel',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    duration: '8 ساعات و 45 دقيقة',
    lessonsCount: 52,
    level: 'beginner',
    views: 1250,
    link: 'https://example.com/course1',
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    title: 'PHP Bootcamp 2022 - كورس PHP كامل',
    category: 'PHP',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    duration: '12 ساعة و 30 دقيقة',
    lessonsCount: 68,
    level: 'beginner',
    views: 2100,
    link: 'https://example.com/course2',
    createdAt: '2024-02-20'
  },
  {
    id: 3,
    title: 'دورس Object Oriented PHP',
    category: 'PHP',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    duration: '5 ساعات و 15 دقيقة',
    lessonsCount: 32,
    level: 'advanced',
    views: 890,
    link: 'https://example.com/course3',
    createdAt: '2024-03-10'
  },
  {
    id: 4,
    title: 'دورس Laravel API - بناء RESTful APIs',
    category: 'Laravel',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    duration: '6 ساعات و 20 دقيقة',
    lessonsCount: 38,
    level: 'advanced',
    views: 1560,
    link: 'https://example.com/course4',
    createdAt: '2024-02-05'
  },
  {
    id: 5,
    title: 'PHP Course - Build a Blog Website',
    category: 'PHP',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    duration: '9 ساعات و 10 دقيقة',
    lessonsCount: 55,
    level: 'beginner',
    views: 1820,
    link: 'https://example.com/course5',
    createdAt: '2024-01-28'
  },
  {
    id: 6,
    title: 'دورس Laravel Blade - قوالب Laravel',
    category: 'Laravel',
    image: 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg',
    duration: '4 ساعات و 50 دقيقة',
    lessonsCount: 28,
    level: 'beginner',
    views: 950,
    link: 'https://example.com/course6',
    createdAt: '2024-03-15'
  },
  {
    id: 7,
    title: 'دورس Laravel 11 - الإصدار الجديد',
    category: 'Laravel',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    duration: '7 ساعات و 35 دقيقة',
    lessonsCount: 45,
    level: 'advanced',
    views: 780,
    link: 'https://example.com/course7',
    createdAt: '2024-03-25'
  },
  {
    id: 8,
    title: 'دورس Easy PHP - تعلم PHP بسهولة',
    category: 'PHP',
    image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg',
    duration: '10 ساعات و 5 دقيقة',
    lessonsCount: 62,
    level: 'beginner',
    views: 2450,
    link: 'https://example.com/course8',
    createdAt: '2024-01-10'
  }
];

export const packages = [
  {
    id: 1,
    slug: 'intervention-image',
    name: 'Intervention Image',
    name_ar: 'Intervention Image',
    category: 'إدارة الملفات',
    image: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg',
    description: 'مكتبة PHP لمعالجة الصور وتحريرها بطريقة سهلة ومرنة مع دعم مكتبات GD و Imagick',
    github_stars: 14000,
    downloads: 3000000,
    composer_package: 'intervention/image'
  },
  {
    id: 2,
    slug: 'laravel-excel',
    name: 'Laravel Excel',
    name_ar: 'Laravel Excel',
    category: 'إدارة الملفات',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    description: 'مكتبة Laravel للتعامل مع ملفات Excel. استيراد وتصدير البيانات بسهولة',
    github_stars: 12000,
    downloads: 2500000,
    composer_package: 'maatwebsite/excel'
  },
  {
    id: 3,
    slug: 'laravel-dompdf',
    name: 'Laravel DOMPDF',
    name_ar: 'Laravel DOMPDF',
    category: 'إدارة الملفات',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
    description: 'مكتبة Laravel لتحويل صفحات HTML إلى ملفات PDF بسهولة مع دعم اللغة العربية',
    github_stars: 7000,
    downloads: 1800000,
    composer_package: 'barryvdh/laravel-dompdf'
  },
  {
    id: 4,
    slug: 'laravel-image-optimizer',
    name: 'Laravel Image Optimizer',
    name_ar: 'Laravel Image Optimizer',
    category: 'إدارة الملفات',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    description: 'مكتبة لتحسين وضغط الصور تلقائياً في Laravel لتحسين أداء الموقع',
    github_stars: 1000,
    downloads: 850000,
    composer_package: 'spatie/laravel-image-optimizer'
  },
  {
    id: 5,
    slug: 'flysystem-google-drive',
    name: 'Flysystem Google Drive',
    name_ar: 'Flysystem Google Drive',
    category: 'إدارة الملفات',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    description: 'مكتبة لربط تطبيق Laravel مع Google Drive للتخزين السحابي',
    github_stars: 361,
    downloads: 450000,
    composer_package: 'nao-pon/flysystem-google-drive'
  },
  {
    id: 6,
    slug: 'laravel-cashier',
    name: 'Laravel Cashier',
    name_ar: 'Laravel Cashier',
    category: 'المدفوعات',
    image: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg',
    description: 'واجهة سهلة للتعامل مع اشتراكات Stripe في Laravel',
    github_stars: 2300,
    downloads: 1200000,
    composer_package: 'laravel/cashier'
  },
  {
    id: 7,
    slug: 'laravel-passport',
    name: 'Laravel Passport',
    name_ar: 'Laravel Passport',
    category: 'المصادقة',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    description: 'نظام OAuth2 كامل لتطبيقات Laravel API',
    github_stars: 3200,
    downloads: 2100000,
    composer_package: 'laravel/passport'
  },
  {
    id: 8,
    slug: 'laravel-sanctum',
    name: 'Laravel Sanctum',
    name_ar: 'Laravel Sanctum',
    category: 'المصادقة',
    image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg',
    description: 'نظام مصادقة خفيف لتطبيقات SPA و API',
    github_stars: 2800,
    downloads: 3500000,
    composer_package: 'laravel/sanctum'
  }
];

export const articles = [
  {
    id: 1,
    title: 'Intervention Image - معالجة الصور في Laravel',
    category: 'إدارة الملفات',
    image: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg',
    summary: 'مكتبة Intervention Image لمعالجة وتحرير الصور في تطبيقات Laravel بسهولة وقوة. يمكنك تغيير حجم الصور، قصها، وتطبيق التأثيرات المختلفة.',
    views: 3250,
    publishedAt: '2024-03-20',
    command: 'composer require intervention/image'
  },
  {
    id: 2,
    title: 'Laravel Excel - استيراد وتصدير Excel',
    category: 'إدارة الملفات',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    summary: 'مكتبة Laravel للتعامل مع ملفات Excel. يمكنك استيراد البيانات من ملفات Excel إلى قاعدة البيانات وتصدير البيانات إلى ملفات Excel بسهولة.',
    views: 2890,
    publishedAt: '2024-03-18',
    command: 'composer require maatwebsite/excel'
  },
  {
    id: 3,
    title: 'Laravel DOMPDF - إنشاء ملفات PDF',
    category: 'إدارة الملفات',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
    summary: 'مكتبة Laravel لتحويل صفحات HTML إلى ملفات PDF. يمكنك إنشاء فواتير، تقارير، وشهادات في صيغة PDF بسهولة مع دعم اللغة العربية.',
    views: 4120,
    publishedAt: '2024-03-15',
    command: 'composer require barryvdh/laravel-dompdf'
  },
  {
    id: 4,
    title: 'Laravel Image Optimizer - تحسين الصور',
    category: 'إدارة الملفات',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    summary: 'مكتبة لتحسين وضغط الصور تلقائياً في Laravel. يمكنك تحسين حجم الصور بدون التأثير على جودتها لتحسين أداء موقعك.',
    views: 1850,
    publishedAt: '2024-03-12',
    command: 'composer require spatie/laravel-image-optimizer'
  },
  {
    id: 5,
    title: 'Flysystem Google Drive - التخزين السحابي',
    category: 'إدارة الملفات',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    summary: 'مكتبة لربط تطبيق Laravel مع Google Drive للتخزين السحابي. يمكنك رفع وتنزيل الملفات من Google Drive بسهولة.',
    views: 1620,
    publishedAt: '2024-03-08',
    command: 'composer require nao-pon/flysystem-google-drive'
  },
  {
    id: 6,
    title: 'Gpdf - إنشاء ملفات PDF متقدمة',
    category: 'إدارة الملفات',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    summary: 'مكتبة متقدمة لإنشاء ملفات PDF في Laravel مع دعم كامل للغة العربية والميزات المتقدمة مثل الجداول، الصور، والتنسيقات المعقدة.',
    views: 2340,
    publishedAt: '2024-03-05',
    command: 'composer require smalot/pdfparser'
  }
];

export const statistics = {
  totalPackages: 31,
  totalArticles: 21,
  totalCourses: 8
};
