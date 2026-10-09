
import React, { useContext, useEffect, useState } from "react";
import {
  CheckCircle2,
  Circle,
  ListTodo,
  MoreHorizontal,
} from "lucide-react";
import { axiosInstance } from "../config/axiosInstance";
import axios from "axios";
import { Mystore } from "../context/AuthContext";

const Task = () => {
  

    const {tasks, setTasks} = useContext(Mystore)
   
  const [loading, setLoading] = useState(true);

  async function taskApi() {
    try {
      const res = await axios.get("https://dummyjson.com/todos");
      setTasks(res.data.todos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    taskApi();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
        <ListTodo size={38} className="animate-pulse text-blue-600" />
        <p className="text-sm font-medium text-gray-500">
          Loading tasks...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Task Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View and track all your tasks in one place.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
          <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
            <ListTodo size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-500">Total Tasks</p>
            <p className="text-lg font-bold text-gray-900">
              {tasks.length}
            </p>
          </div>
        </div>
      </div>

      {/* Task Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:shadow-md"
          >
            {/* Card Header */}
            <div className="mb-5 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-xl p-3 ${
                    task.completed
                      ? "bg-green-50 text-green-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {task.completed ? (
                    <CheckCircle2 size={22} />
                  ) : (
                    <Circle size={22} />
                  )}
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-400">
                    TASK-{String(task.id).padStart(3, "0")}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    User ID: {task.userId}
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label="Task options"
                className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"
              >
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Task Title */}
            <h2 className="min-h-14 text-base font-semibold leading-6 text-gray-900">
              {task.todo}
            </h2>

            {/* Status */}
            <div className="mt-5 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Task Status
                </span>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                    task.completed
                      ? "bg-green-50 text-green-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {task.completed ? "Completed" : "Pending"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {tasks.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
          <ListTodo className="mx-auto mb-3 text-gray-400" size={36} />
          <h2 className="font-semibold text-gray-800">
            No tasks found
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            There are no tasks to display right now.
          </p>
        </div>
      )}

    </div>
  );
};

export default Task;

