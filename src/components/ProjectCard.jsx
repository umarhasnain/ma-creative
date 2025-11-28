// 'use client';

// import { useState } from 'react';
// import { ExternalLink, Tag } from 'lucide-react';

// export default function ProjectCard({ project, index }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
//       style={{ animationDelay: `${index * 100}ms` }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image */}
//       <div className="aspect-[4/3] overflow-hidden">
//         <img
//           src={project.imageUrl}
//           alt={project.title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//       </div>

//       {/* Hover Overlay */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent transition-opacity duration-300 ${
//           isHovered ? 'opacity-100' : 'opacity-0'
//         }`}
//       >
//         <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-300">
//           <div className="flex items-center gap-2 mb-3">
//             <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
//               {project.category}
//             </span>
//             <span className="text-white/70 text-sm">{project.year}</span>
//           </div>
//           <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
//           <p className="text-white/90 mb-4">{project.description}</p>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {project.tags.map((tag, idx) => (
//               <span
//                 key={idx}
//                 className="flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full"
//               >
//                 <Tag className="w-3 h-3" />
//                 {tag}
//               </span>
//             ))}
//           </div>
//           <button className="flex items-center gap-2 text-white font-semibold hover:text-orange-400 transition-colors">
//             View Project <ExternalLink className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       {/* Static Content */}
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
//         <p className="text-gray-600 text-sm">{project.description}</p>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { useRouter } from 'next/navigation';

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleTitleClick = () => {
    router.push(`/portfolio/${project.category.toLowerCase()}`);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-300">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
              {project.category}
            </span>
            <span className="text-white/70 text-sm">{project.year}</span>
          </div>
          <h3
            className="text-2xl font-bold text-white mb-2 cursor-pointer hover:text-orange-400"
            onClick={handleTitleClick}
          >
            {project.title}
          </h3>
          <p className="text-white/90 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
          <button className="flex items-center gap-2 text-white font-semibold hover:text-orange-400 transition-colors">
            View Project <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Static Content */}
      <div className="p-6">
        <h3
          className="text-xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-orange-500"
          onClick={handleTitleClick}
        >
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
      </div>
    </div>
  );
}


export default ProjectCard