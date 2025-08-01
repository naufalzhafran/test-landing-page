'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: 'moq',
    question: 'Minimum Order Quantity',
    answer: 'Our minimum order quantity is 25 Metric-Tons (1 x 20/40 ft container)'
  },
  {
    id: 'quotation',
    question: 'Quotation',
    answer: 'Our order process begins with the Buyer\'s Letter of Intent, prompting us to issue a detailed Quotation. Upon the Buyer\'s subsequent issuance of a Purchase Order, the Seller receives a down payment of 50%, and both parties finalize the packaging design, after which an official invoice is issued to the Buyer.'
  },
  {
    id: 'shipping',
    question: 'First Order Shipment',
    answer: 'The first order will be processed within 2 weeks to 1 month'
  },
  {
    id: 'shipping-terms',
    question: 'Shipping',
    answer: 'Freight On Board (FOB)'
  },
  {
    id: 'samples',
    question: 'Free Sample Product',
    answer: 'Sure, we can provide you free sample product. Please contact us.'
  },
  {
    id: 'payment',
    question: 'Payment Method',
    answer: (
      <ul className="list-disc list-inside space-y-1">
        <li>We use the bank transfer payment method (T/T)</li>
        <li>Payment is structured as 50% upon Purchase Order issuance and the remaining 50% upon the loading of commodities into the container.</li>
      </ul>
    )
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isOpen = (id: string) => openItems.includes(id);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            FAQ & MOQ
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item) => (
            <div 
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      isOpen(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`transition-all duration-200 ease-in-out ${
                  isOpen(item.id) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <div className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 