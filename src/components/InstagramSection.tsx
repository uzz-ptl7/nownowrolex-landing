"use client";

import logo from "../assets/logo.png";

const InstagramSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-black text-white overflow-hidden">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Follow Our Journey
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          See our latest creations and behind-the-scenes moments on Instagram.
        </p>

        {/* Instagram Profile Card */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Profile Logo Image */}
            <img
              src={logo}
              alt="Now Now Rolex Instagram Logo"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-lg font-semibold">@nownowrolex</p>
              <p className="text-sm text-gray-400">Instagram Profile</p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/nownowrolex/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:shadow-glow transition-all duration-300 rounded-lg px-6 py-2 text-lg font-semibold"
          >
            Visit Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
