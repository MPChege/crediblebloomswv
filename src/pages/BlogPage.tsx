import React from "react";
const BlogPage = () => {
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        filter: "brightness(0.7)"
      }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-white max-w-3xl">
            News and updates from Credible Blooms.
          </p>
        </div>
      </section>
    </div>;
};
export default BlogPage;