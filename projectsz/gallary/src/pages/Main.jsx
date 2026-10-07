import React, { useContext } from "react";
import { MyStore } from "../context/AuthContext";

const Main = ({ gallery }) => {
//   console.log("main gallery --->", gallery);
const {deleteImage,toggle, setToggle,setSelectedPhoto} = useContext(MyStore)




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
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
                
                {/* Edit Button */}
                <button
                 onClick={() =>{ 
                    setSelectedPhoto(item)
                    setToggle(false)}}
                  type="button"
                  className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow transition hover:bg-slate-100"
                >
                  Edit
                </button>

                {/* Delete Button */}
                <button
                onClick={()=>deleteImage(item.image)}
                  type="button"
                  className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-red-600"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Main;