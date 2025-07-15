'use client';

import { useState } from 'react';
import Image from 'next/image';

const certifications = [
  {
    id: 'iso',
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management',
    image: '/quality-specs/iso-specifications.png'
  },
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
    image: '/quality-specs/coa-specifications.png'
  },
  {
    id: 'coo',
    title: 'COO',
    subtitle: 'Certificate of Origin',
    image: '/quality-specs/coo-specifications.png'
  }
];

export default function QualitySection() {
  const [activeCertification, setActiveCertification] = useState('iso');

  const activeCert = certifications.find(cert => cert.id === activeCertification);

  return (
    <section id="quality" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            World-Class Quality Assurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every batch undergoes rigorous testing and quality control to
            ensure consistent performance.
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
            <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={activeCert?.image || '/quality-specs/iso-specifications.png'}
                alt={`${activeCert?.title} Quality Specifications`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Click on different certifications above to view their specific quality specifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 