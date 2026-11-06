export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  description: string;
  fullDetails: string;
  specs: { label: string; value: string }[];
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  count: number;
}

// مجموعه تصاویر باکیفیت و متفاوت پزشکی برای تنوع کامل عکس‌های ۲۰ محصول
const medicalImages = [
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop",
];

const generate20Products = (
  categoryTitle: string,
  categorySlug: string,
  baseId: string,
): Product[] => {
  return Array.from({ length: 20 }, (_, index) => {
    const itemNum = index + 1;
    const selectedImage = medicalImages[index % medicalImages.length];

    return {
      id: `${baseId}-${itemNum.toString().padStart(3, "0")}`,
      name: `${categoryTitle} Model CP-${100 + itemNum}`,
      category: categoryTitle,
      categorySlug: categorySlug,
      image: selectedImage,
      description: `High-precision certified ${categoryTitle.toLowerCase()} designed for modern clinical procedures (Unit #${itemNum}).`,
      fullDetails: `The ${categoryTitle} CP-${100 + itemNum} is manufactured under stringent sterile conditions. Designed specifically for intensive clinical environments, offering maximal reliability, precision engineering, and ergonomic handling for healthcare professionals.`,
      specs: [
        { label: "Item Code", value: `CP-${baseId.toUpperCase()}-${itemNum}` },
        { label: "Sterilization", value: "EO / Gamma Sterilized" },
        { label: "Compliance", value: "ISO 13485 / CE Certified" },
        { label: "Origin", value: "Imported Quality Grade A" },
      ],
    };
  });
};
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export class CategoriesData {
  static categories: Category[] = [
    {
      id: "1",
      slug: "disposable-devices",
      title: "Disposable Medical Devices",
      description:
        "High-precision single-use surgical supplies and sterile syringes.",
      iconName: "Syringe",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
      count: 20,
    },
    {
      id: "2",
      slug: "diagnostic-equipment",
      title: "Diagnostic Equipment",
      description:
        "Advanced monitoring equipment, ECG units, and ultrasound devices.",
      iconName: "Activity",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      count: 20,
    },
    {
      id: "3",
      slug: "pharmaceuticals",
      title: "Pharmaceutical Products",
      description:
        "Certified medicines, intravenous fluids, and clinical supplements.",
      iconName: "Pill",
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop",
      count: 20,
    },
    {
      id: "4",
      slug: "surgical-instruments",
      title: "Surgical Instruments",
      description:
        "Premium stainless steel scalpels, forceps, and operating room tools.",
      iconName: "Scissors",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
      count: 20,
    },
  ];

  static products: Product[] = [
    ...generate20Products(
      "Disposable Medical Devices",
      "disposable-devices",
      "disp",
    ),
    ...generate20Products(
      "Diagnostic Equipment",
      "diagnostic-equipment",
      "diag",
    ),
    ...generate20Products(
      "Pharmaceutical Products",
      "pharmaceuticals",
      "pharm",
    ),
    ...generate20Products(
      "Surgical Instruments",
      "surgical-instruments",
      "surg",
    ),
  ];

  static blogPosts: BlogPost[] = [
    {
      id: 'blog-1',
      slug: 'advancements-in-medical-imaging',
      title: 'The Future of AI & Advanced Diagnostic Imaging in Healthcare',
      category: 'Medical Technology',
      date: 'November 2, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
      excerpt: 'Exploring how next-generation digital monitors and diagnostic tools are revolutionizing clinical accuracy in hospitals.',
      content: 'Medical imaging has undergone a monumental shift over the past decade. With the integration of high-definition digital monitors, real-time telemetry, and AI-assisted diagnostics, clinical teams across Erbil and the wider region can now detect anomalies with unprecedented precision. At Corner Pure, we continuously source state-of-the-art diagnostic machinery designed to empower physicians and enhance patient safety.'
    },
    {
      id: 'blog-2',
      slug: 'importance-of-sterile-disposables',
      title: 'Why Strict Sterilization Standards Matter in Surgical Disposables',
      category: 'Clinical Safety',
      date: 'October 28, 2026',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop',
      excerpt: 'An in-depth look at EO gas sterilization and its critical role in eliminating infection risks during surgical procedures.',
      content: 'In modern surgery, the margin for error is zero. Single-use disposable medical devices, ranging from precision syringes to specialized catheters, must undergo rigorous EO or Gamma sterilization processes. Compliance with international ISO 13485 standards ensures that every item distributed meets the highest safety benchmarks required by health ministries.'
    },
    {
      id: 'blog-3',
      slug: 'supply-chain-excellence-kurdistan',
      title: 'Optimizing Medical Supply Chains Across Iraq and Kurdistan',
      category: 'Logistics',
      date: 'October 15, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
      excerpt: 'How robust logistics networks ensure uninterrupted delivery of vital pharmaceuticals and hospital equipment.',
      content: 'Maintaining a seamless cold chain and efficient distribution network is essential for pharmaceuticals and temperature-sensitive medical supplies. Operating from our strategic hub in Empire World, Erbil, Corner Pure guarantees rapid, secure, and compliant delivery to healthcare institutions throughout the region.'
    }
  ];
}
