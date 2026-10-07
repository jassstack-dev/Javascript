import React from "react";

const About = ({ gallery }) => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">
            Gallery
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover"
              />

              {/* Name */}
              {/* <div className="px-4 py-3">
                <h2 className="text-sm font-medium text-slate-800">
                  {item.name}
                </h2>
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;