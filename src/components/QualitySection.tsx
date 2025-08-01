'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const certifications = [
  {
    id: 'msds',
    title: 'MSDS',
    subtitle: 'Material Safety Data',
    image: '/quality-specs/msds-specifications.png'
  },
  {
    id: 'coa',
    title: 'COA',
    subtitle: 'Certificate of Analysis',
    image: '/coa.webp'
  },
  {
    id: 'coo',
    title: 'COO',
    subtitle: 'Certificate of Origin',
    image: '/quality-specs/coo-specifications.png'
  }
];

export default function QualitySection() {
  const [activeCertification, setActiveCertification] = useState('msds');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const activeCert = certifications.find(cert => cert.id === activeCertification);

  const openModal = (imageSrc: string, title: string) => {
    setModalImage(imageSrc);
    setModalTitle(title);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
    setModalTitle('');
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section id="quality" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            World-Class Quality Assurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every batch undergoes rigorous testing and quality control to
            ensure consistent performance, With our credible partners trusted worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Certifications & Documentation
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setActiveCertification(cert.id)}
                  className={`p-4 rounded-lg shadow-md cursor-pointer transition-all duration-200 ${
                    activeCertification === cert.id
                      ? 'bg-green-50 border-2 border-green-500 transform scale-105'
                      : 'bg-white hover:bg-gray-50 hover:shadow-lg'
                  }`}
                >
                  <div className={`font-semibold ${
                    activeCertification === cert.id ? 'text-green-700' : 'text-green-600'
                  }`}>
                    {cert.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {cert.subtitle}
                  </div>
                </div>
              ))}
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Independent laboratory testing for each batch
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Complete export documentation provided
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Factory audit and inspection available
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Self-heating test (SHT) certified
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Quality Specifications - {activeCert?.title}
            </h3>
            <div 
              className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-200 transition-colors duration-200 group"
              onClick={() => openModal(activeCert?.image || '/quality-specs/msds-specifications.png', activeCert?.title || 'Quality Specifications')}
            >
              <Image
                src={activeCert?.image || '/quality-specs/msds-specifications.png'}
                alt={`${activeCert?.title} Quality Specifications`}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/10">
                <div className="bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-sm font-medium text-gray-800">Click to view larger</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Click on different certifications above to view their specifications, or click the image to view larger
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative w-full h-full max-w-none flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            {/* Modal content */}
            <div className="bg-white rounded-lg shadow-2xl w-[95vw] h-[95vh] overflow-hidden flex flex-col">
              <div className="p-3 border-b border-gray-200 flex-shrink-0">
                <h3 className="text-lg font-semibold text-gray-800">
                  {modalTitle} - Quality Specifications
                </h3>
              </div>
              <div className="relative flex-1 bg-gray-50 min-h-0">
                <Image
                  src={modalImage}
                  alt={`${modalTitle} Quality Specifications`}
                  fill
                  className="object-contain p-2"
                  sizes="95vw"
                  priority
                />
              </div>
              <div className="p-2 bg-gray-50 text-center flex-shrink-0">
                <p className="text-xs text-gray-600">
                  Click outside or press ESC to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 