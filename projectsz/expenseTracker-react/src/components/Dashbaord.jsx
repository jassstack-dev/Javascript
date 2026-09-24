import React, { useState } from 'react'
import { set } from 'react-hook-form'

const Dashbaord = ({user}) => {

  let income = 0
   let expense = 0

   user.forEach((val)=>{
    if(val.type === "income"){
      income += val.amount
      
    }else{
      expense += val.amount
      
    }
   })
   

   


   
  return (
   <div  className="min-h-screen bg-slate-50/60 p-4 sm:p-6 lg:p-8">
  <div className="max-w-5xl mx-auto space-y-6">

    {/* Heading */}
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
        Dashboard
      </h1>
      <p className="text-sm text-slate-500 mt-1">
        Overview of your financial activity and transactions.
      </p>
    </div>

    {/* Summary Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

      {/* Income */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow transition-shadow">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Total Income
        </span>
        <h2 className="text-3xl font-extrabold text-emerald-600 mt-2 tracking-tight">
          ₹{income}
        </h2>
      </div>

      {/* Expense */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow transition-shadow">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Total Expense
        </span>
        <h2 className="text-3xl font-extrabold text-rose-600 mt-2 tracking-tight">
          ₹{expense}
        </h2>
      </div>

      {/* Balance */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow transition-shadow">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Remaining Balance
        </span>
        <h2 className="text-3xl font-extrabold text-indigo-600 mt-2 tracking-tight">
          ₹{income - expense}
        </h2>
      </div>

    </div>

    {/* Transactions Box */}
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">

      {/* Box Header */}
      <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Transactions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Your income and expenses will appear here.
          </p>
        </div>
        {user && user.length > 0 && (
          <span className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
            {user.length} {user.length === 1 ? 'record' : 'records'}
          </span>
        )}
      </div>

      {/* Content: Empty State OR List */}
      {!user || user.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-3">
            <span className="text-2xl font-semibold text-slate-400">₹</span>
          </div>
          <h3 className="text-sm font-semibold text-slate-700">
            No transactions yet
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xs">
            Start adding your income or expenses to track your transactions here.
          </p>
        </div>
      ) : (
        /* Transaction List */
        <div className="p-4 sm:p-6 space-y-3">
          {user.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-slate-50/80 hover:bg-slate-100/80 border border-slate-100 rounded-xl transition-colors"
            >
              <div className="space-y-0.5">
                <h3 className="text-sm font-semibold text-slate-800 capitalize">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {item.category}
                </p>
              </div>

              <p
                className={`text-base font-bold tracking-tight ${
                  item.type === "income"
                    ? "text-emerald-600"
                    : "text-rose-600"
                }`}
              >
                {item.type === "income" ? "+" : "-"}₹{item.amount}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>

  </div>
</div>
  )
}

export default Dashbaord
