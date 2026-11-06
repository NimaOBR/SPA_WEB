import { MetadataRoute } from 'next';
import { CategoriesData } from './products/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://cornerpure.com';

  // صفحات اصلی ثابت
  const staticPages = [
    '',
    '/services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  // صفحات کتگوری محصولات
  const categoryPages = CategoriesData.categories.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // صفحات تک تک محصولات (۲۰ محصول در هر کتگوری)
  const productPages = CategoriesData.products.map((prod) => ({
    url: `${baseUrl}/products/${prod.categorySlug}/${prod.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // صفحات بلاگ
  const blogPages = CategoriesData.blogPosts.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...productPages, ...blogPages];
}