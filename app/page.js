

'use client';

import { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCard';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dev.to/api/articles')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch articles:', err);
        setLoading(false);
      });
  }, []);

  const recentArticles = articles.slice(0, 5);

  return (
    <main className="px-4 md:px-16">
      <h1 className="text-6xl font-extrabold my-12 tracking-tight text-center">
        THE BLOG
      </h1>

      {/* Recent Posts Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Recent blog posts
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2">
              {recentArticles[0] && <BlogCard article={recentArticles[0]} layout="horizontal" />}
            </div>
            <div className="flex flex-col gap-6">
              {recentArticles[1] && <BlogCard article={recentArticles[1]} />}
              {recentArticles[2] && <BlogCard article={recentArticles[2]} />}
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
              {recentArticles[3] && <BlogCard article={recentArticles[3]} layout="horizontal" />}
              {recentArticles[4] && <BlogCard article={recentArticles[4]} layout="horizontal" />}
            </div>
          </div>
        )}
      </section>

      {/* All Blog Posts Carousel */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">All blog posts</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-6 scrollbar-hide">
              {articles.map((article, idx) => (
                <div
                  key={idx}
                  className="snap-start shrink-0 w-[300px] sm:w-[350px] md:w-[400px]"
                >
                  <BlogCard article={article} />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="mt-2 flex justify-center space-x-2">
              {articles.slice(0, 5).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"
                ></div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-20 py-10 text-sm text-center text-gray-500 dark:text-gray-400">
        © 2025 Twitter LinkedIn Email RSS Feed Add to Feedly
      </footer>
    </main>
  );
}

