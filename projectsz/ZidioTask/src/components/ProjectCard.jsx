
import React, { useContext } from "react";
import { FolderKanban, TrendingUp } from "lucide-react";
import { Mystore } from "../context/AuthContext";

const ProjectCard = () => {
    const {products} = useContext(Mystore)
 
    
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            Total Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            {products.length}
          </h2>
        </div>

        <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
          <FolderKanban size={24} />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-4">
        <TrendingUp size={16} className="text-green-600" />

        <span className="text-sm font-medium text-green-600">
          +12%
        </span>

        <span className="text-sm text-gray-500">
          from last month
        </span>
      </div>

    </div>
  );
};

export default ProjectCard;

