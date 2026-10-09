
import React, { useContext } from "react";
import { Mystore } from "../context/AuthContext";
import { Clock3, CircleCheckBig } from "lucide-react";

const TaskSummary = () => {
  const { tasks } = useContext(Mystore);

  const pendingTask = tasks.filter(
    (task) => task.completed === false
  ).length;

  const completedTask = tasks.filter(
    (task) => task.completed === true
  ).length;

  const summaryCards = [
    {
      title: "Pending Tasks",
      count: pendingTask,
      icon: Clock3,
      iconStyle: "bg-amber-50 text-amber-600",
    },
    {
      title: "Completed Tasks",
      count: completedTask,
      icon: CircleCheckBig,
      iconStyle: "bg-green-50 text-green-600",
    },
  ];

  return (
    <div className="w-full">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          Task Summary
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Track your pending and completed tasks.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {card.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-gray-900">
                    {card.count}
                  </h3>
                </div>

                <div className={`rounded-xl p-3 ${card.iconStyle}`}>
                  <Icon size={26} />
                </div>
              </div>

              <div className="mt-5 border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-400">
                  Based on your current tasks
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskSummary;

