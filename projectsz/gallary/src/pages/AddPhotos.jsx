import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router";

const AddPhotos = () => {

    const {gallary, setGallary, setToggle,selectedPhoto} = useContext(MyStore)

    // console.log('gallary data --> ',gallary)

    const navigate = useNavigate()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {
        defaultValues: {
    name: selectedPhoto?.name || "",
    image: selectedPhoto?.image || "",
  },
    }
  );

  function formSubmit(data){
// console.log(data)
const images = [...gallary, data]
setGallary(images)
toast.success('image add successfully')

localStorage.setItem('gallary', JSON.stringify(images))
setToggle(true)
navigate('/main')
reset()
  }


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Add Photos</h2>

          <p className="mt-1 text-sm text-gray-500">
            Add a new photo by entering its URL.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
            {/* Photo Title */}
            <div>
              <label
                htmlFor="photo-title"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Photo Title
              </label>

              <input
              {...register('name')}
                type="text"
                id="photo-title"
                placeholder="Enter photo title"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label
                htmlFor="photo-url"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>

              <input
              {...register('image')}
                type="url"
                id="photo-url"
                placeholder="https://example.com/photo.jpg"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

             <div className="flex gap-8">
                <button 
    type="button"
    onClick={() => {
      setToggle(true);
      navigate("/main");
    }}
    className="rounded-lg border border-gray-300 bg-white px-5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
  >
    Back
  </button>

            {/* Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-[0.98]"
              >
                Add Photo
              </button>
            </div>
             </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPhotos;
