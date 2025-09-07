import React from 'react';
import img1 from '../../assets/BlogPost/img.png';

// import Header from '../components/BlogPost/Header.jsx';
// import Footer from '../components/BlogPost/Footer.jsx';

// Importing all your icons
import icon11 from '../../assets/BlogPost/icon11.png';
import icon12 from '../../assets/BlogPost/icon12.png';
import icon13 from '../../assets/BlogPost/icon13.png';
import icon14 from '../../assets/BlogPost/icon14.png';
import icon15 from '../../assets/BlogPost/icon15.png';
import icon16 from '../../assets/BlogPost/icon16.png';
import icon17 from '../../assets/BlogPost/icon17.png';
import icon18 from '../../assets/BlogPost/icon18.png';
import icon19 from '../../assets/BlogPost/icon19.png';

const Blog = () => {
  // Icon list for mapping
  const editorIcons = [icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19];

  return (
    <>
      {/* <Header /> */}
      <div className="min-h-screen mt-10 w-full bg-gradient-to-br from-blue-900 via-blue-500 to-orange-500 py-12 px-6">
        <div className="w-5/6 mx-auto bg-white rounded-xl p-10 shadow-lg flex flex-col lg:flex-row gap-8">

          {/* Left: Blog Post Form */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">New Blog Post</h1>

            {/* Title */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-800 mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter post title"
                className="w-full p-4 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Editor Icons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {editorIcons.map((icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
                >
                  <img src={icon} alt={`icon-${idx}`} className="w-5 h-5" />
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-800 mb-2">Content</label>
              <textarea
                placeholder="Write your blog content..."
                className="w-full p-4 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:border-orange-500 min-h-[150px]"
              ></textarea>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-4 text-gray-800">Categories</h2>
              <div className="flex flex-wrap gap-4">
                {['AI', 'Software', 'Technology'].map((cat) => (
                  <div
                    key={cat}
                    className="px-4 py-2 rounded-2xl bg-gray-100 text-gray-800 font-medium cursor-pointer hover:bg-orange-100"
                  >
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-800 mb-2">Tags</label>
              <input
                type="text"
                placeholder="Add tags"
                className="w-full p-4 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* SEO Metadata */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-4 text-gray-800">SEO Metadata</h2>
              <input
                type="text"
                placeholder="Meta Title"
                className="w-full p-4 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:border-orange-500 mb-4"
              />
              <textarea
                placeholder="Meta Description"
                className="w-full p-4 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:border-orange-500 min-h-[100px]"
              ></textarea>
            </div>
          </div>

          {/* Right: Image + Buttons */}
          <div className="flex-1 flex flex-col justify-between items-center">
            <div className="flex-1 flex justify-center items-center">
              <img
                src={img1}
                alt="Blog Illustration"
                className="w-full max-w-[500px] rounded-xl shadow-md"
              />
            </div>

            {/* Buttons Below Image */}
            <div className="flex justify-end w-full mt-6 gap-4">
              <button className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold transition">
                Save Draft
              </button>
              <button className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Blog;
