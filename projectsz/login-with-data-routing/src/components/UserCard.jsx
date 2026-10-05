import React from "react";

const UserCard = ({user}) => {


  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-5xl ">

        {/* Page Header */}
        <div className="mb-6">
          <p className="text-sm font-medium text-indigo-600">
            User Profile
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Profile Overview
          </h1>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Top Banner */}
          <div className="h-32 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 sm:h-40" />

          {/* Profile Header */}
          <div className="px-5 pb-6 sm:px-8">
            <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">

              {/* Avatar + Name */}
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">
                <div className="relative">
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="h-24 w-24 rounded-2xl border-4 border-white bg-white object-cover shadow-md sm:h-28 sm:w-28"
                  />

                  <span className="absolute bottom-1.5 right-1.5 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
                </div>

                <div className="pb-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl font-bold text-slate-900">
                      {user.firstName} {user.lastName}
                    </h2>

                    <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                      {user.role}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    @{user.username} · {user.department}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 self-start rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:self-auto">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Active
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="border-y border-slate-200 bg-slate-50/70">
            <div className="grid grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">

              <div className="px-5 py-5 text-center">
                <p className="text-xl font-bold text-slate-900">
                  {user.age}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Age
                </p>
              </div>

              <div className="px-5 py-5 text-center">
                <p className="text-xl font-bold text-slate-900">
                  {user.gender}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Gender
                </p>
              </div>

              <div className="border-t border-slate-200 px-5 py-5 text-center sm:border-t-0">
                <p className="text-xl font-bold text-slate-900">
                  {user.bloodGroup}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Blood Group
                </p>
              </div>

              <div className="border-t border-slate-200 px-5 py-5 text-center sm:border-t-0">
                <p className="text-xl font-bold text-slate-900">
                  {user.eyeColor}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Eye Color
                </p>
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-2">

            {/* Contact Information */}
            <section>
              <div className="mb-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Contact Information
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Personal contact details
                </p>
              </div>

              <div className="space-y-3">

                {/* Email */}
                <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50/40">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-400">
                      Email
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-slate-700">
                      {user.email}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50/40">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515L10 8a2 2 0 01-.55 1.87l-1.27 1.27a16 16 0 006.68 6.68l1.27-1.27A2 2 0 0118 16l3.48.78A2 2 0 0123 18.72V21a2 2 0 01-2 2C10.06 23 1 13.94 1 3a2 2 0 012-2z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Phone
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-700">
                      {user.phone}
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* Work & Education */}
            <section>
              <div className="mb-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Work & Education
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Professional and academic details
                </p>
              </div>

              <div className="space-y-3">

                {/* Company */}
                <div className="flex gap-4 rounded-xl border border-slate-200 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 9h.01M15 9h.01M9 13h.01M15 13h.01"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-400">
                      Company
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-slate-700">
                      {user.company.department} Department
                    </p>

                    
                  </div>
                </div>

                {/* University */}
                <div className="flex gap-4 rounded-xl border border-slate-200 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 10l9-5 9 5-9 5-9-5zM7 12v5c2 1.5 4 2 5 2s3-.5 5-2v-5M21 10v6"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-400">
                      University
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-slate-700">
                      {user.university}
                    </p>
                  </div>
                </div>

              </div>
            </section>

          </div>

          {/* Bottom Details */}
          <div className="border-t border-slate-200 bg-slate-50/50 px-5 py-5 sm:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div>
                <p className="text-xs text-slate-400">Hair Color</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  {user.hair.color}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Type</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  {user.hair.type}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Role</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  {user.role}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserCard;
