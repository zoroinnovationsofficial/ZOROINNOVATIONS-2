import React, { useEffect, useState } from "react";
import HeroSection from "../../components/user-section/Blog/HeroSection";
import CategoryFilter from "../../components/user-section/Blog/CategoryFilter";
import FeaturedArticles from "../../components/user-section/Blog/FeaturedArticles";
import LatestArticles from "../../components/user-section/Blog/LatestArticles";
import Sidebar from "../../components/user-section/Blog/Sidebar";
import NewsletterCTA from "../../components/user-section/Blog/NewsletterCTA";
import "../../index.css";
import { getAllArticles, getArticleById } from "../../api/blogApi";
const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [expandedArticleDetails, setExpandedArticleDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState({});
  const [detailsError, setDetailsError] = useState({});

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError("");
    getAllArticles()
      .then((list) => {
        if (!isMounted) return;
        setArticles(Array.isArray(list) ? list : []);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err?.message || "Failed to load articles");
      })
      .finally(() => {
        if (!isMounted) return;
        setIsLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleViewDetails = async (articleId) => {
    if (!articleId) return;
    setDetailsError((prev) => ({ ...prev, [articleId]: "" }));
    setDetailsLoading((prev) => ({ ...prev, [articleId]: true }));
    try {
      const details = await getArticleById(articleId);
      setExpandedArticleDetails((prev) => ({ ...prev, [articleId]: details }));
    } catch (err) {
      setDetailsError((prev) => ({ ...prev, [articleId]: err?.message || "Failed to load article details" }));
    } finally {
      setDetailsLoading((prev) => ({ ...prev, [articleId]: false }));
    }
  };

  const getTitle = (article) => article?.title || article?.name || "Untitled";
  const getContent = (article) => article?.content || article?.body || article?.description || "";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col">
        <HeroSection />
        <CategoryFilter />
        {/* Featured Articles now takes full width */}
        <FeaturedArticles />

        {/* New grid container for Latest Articles and Sidebar */}
        <div className="w-9/10 mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-9">
          <div className="lg:col-span-2">
            {" "}
            {/* Latest Articles takes 2/3 width on large screens */}
            <LatestArticles />
          </div>
          <div className="lg:col-span-1">
            {" "}
            {/* Sidebar takes 1/3 width on large screens */}
            <Sidebar />
          </div>
        </div>

        {/* Basic API-driven Articles List */}
        <div className="w-9/10 mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Articles</h2>
          {isLoading && (
            <div className="text-gray-600">Loading articles...</div>
          )}
          {!!error && (
            <div className="text-red-600">{error}</div>
          )}
          {!isLoading && !error && (
            <div className="space-y-6">
              {articles.length === 0 && (
                <div className="text-gray-600">No articles found.</div>
              )}
              {articles.map((article) => {
                const id = article?._id || article?.id;
                const details = id ? expandedArticleDetails[id] : null;
                const isDetailsLoading = id ? detailsLoading[id] : false;
                const detailError = id ? detailsError[id] : "";
                return (
                  <div key={id || Math.random()} className="border rounded-md p-4">
                    <h3 className="text-xl font-medium mb-2">{getTitle(article)}</h3>
                    <p className="text-gray-800 whitespace-pre-line">{getContent(article)}</p>
                    {id && (
                      <button
                        className="mt-3 text-blue-600 hover:underline"
                        onClick={() => handleViewDetails(id)}
                        disabled={isDetailsLoading}
                      >
                        {isDetailsLoading ? "Loading..." : "View details"}
                      </button>
                    )}
                    {!!detailError && (
                      <div className="mt-2 text-red-600">{detailError}</div>
                    )}
                    {details && (
                      <div className="mt-4 bg-gray-50 border rounded p-3">
                        <h4 className="font-semibold mb-1">Full Details</h4>
                        <div className="text-sm text-gray-700 whitespace-pre-wrap">
                          <div><span className="font-medium">Title:</span> {getTitle(details)}</div>
                          <div className="mt-1"><span className="font-medium">Content:</span> {getContent(details)}</div>
                          {details?.author && (
                            <div className="mt-1"><span className="font-medium">Author:</span> {details.author}</div>
                          )}
                          {details?.createdAt && (
                            <div className="mt-1"><span className="font-medium">Published:</span> {new Date(details.createdAt).toLocaleString()}</div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <NewsletterCTA />
      </main>
    </div>
  );
};

export default Blog;
