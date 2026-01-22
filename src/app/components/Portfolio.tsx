'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';

interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "Warehouse load helper",
    description: "Frontend application developed from scratch using the SAPUI5 javascript framework. It was developed for a big surface in Spain that wanted to replace their old warehouse load tracking app with a newer one with more functionality. I made it run natively on the Android scanners of the client using Apache Cordova.",
    images: ["/portfolio/rf/portfolio_A_1.jpg", "/portfolio/rf/portfolio_A_2.jpg", "/portfolio/rf/portfolio_A_3.jpg", "/portfolio/rf/portfolio_A_4.jpg"]
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFullscreenImage(null);
      }
    };

    if (fullscreenImage) {
      window.addEventListener('keydown', handleEscapeKey);
      return () => window.removeEventListener('keydown', handleEscapeKey);
    }
  }, [fullscreenImage]);

  return (
    <section id="portfolio" className="py-16 bg-base-two">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-4">Portfolio</h2>
        <p className="text-lg text-contrast-two mb-12">Here is a showcase of the work I have done as a freelance. Right now there is not much as I have recently started freelancing but will hopefully increase with time.</p>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`p-4 rounded-lg font-semibold transition ${
                selectedProject.id === project.id
                  ? 'bg-chocolate-plum text-base border-2 border-chocolate-plum'
                  : 'bg-base text-contrast border-2 border-contrast-three hover:border-chocolate-plum'
              }`}
            >
              {project.name}
            </button>
          ))}
        </div>

        <div className="bg-base p-8 rounded-lg mb-8">
          <h3 className="text-3xl font-bold text-contrast mb-4">{selectedProject.name}</h3>
          <p className="text-lg text-contrast-two">{selectedProject.description}</p>
        </div>
        <p className="text-sm text-contrast-three mb-4 italic">* Clicking an image opens it in fullscreen *</p>
        <div className="grid md:grid-cols-3 gap-6">
          {selectedProject.images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer" onClick={() => setFullscreenImage(image)}>
              <div className="relative w-full h-64">
                <Image
                  src={withBasePath(image)}
                  alt={`${selectedProject.name} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {fullscreenImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          >
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => {setFullscreenImage(null); e.stopPropagation();}}>
              <Image
                src={withBasePath(fullscreenImage)}
                alt="Fullscreen"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute top-4 right-4 bg-base text-contrast rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold hover:bg-base-two transition"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
