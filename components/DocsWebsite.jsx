import React, { useState } from 'react';
import { ChevronDown, Database, Code, BookOpen } from 'lucide-react';

const DocsWebsite = () => {
  const [activeSection, setActiveSection] = useState('ai-models');
  
  const models = [
    {
      name: "Generative AI",
      description: "Custom AI development services with coding architectures in Reinforcement Learning",
      capabilities: [
        "LLM Training and Fine-tuning",
        "Custom Model Development",
        "Performance Optimization"
      ],
      useCase: "Ideal for companies looking to develop custom AI solutions"
    },
    {
      name: "Chatbot Solutions",
      description: "Multi-Modal chatbot solutions with RAG pipeline for company data",
      capabilities: [
        "Custom Data Integration",
        "Multi-language Support",
        "Context Awareness"
      ],
      useCase: "Perfect for customer service automation"
    }
  ];

  const apiEndpoints = [
    {
      endpoint: "/api/v1/generate",
      method: "POST",
      description: "Generate responses using our fine-tuned models",
      parameters: [
        { name: "prompt", type: "string", description: "Input text prompt" },
        { name: "max_tokens", type: "integer", description: "Maximum response length" },
        { name: "temperature", type: "float", description: "Response randomness (0-1)" }
      ]
    },
    {
      endpoint: "/api/v1/train",
      method: "POST",
      description: "Fine-tune models on custom data",
      parameters: [
        { name: "training_data", type: "array", description: "Array of training examples" },
        { name: "epochs", type: "integer", description: "Number of training epochs" },
        { name: "model_type", type: "string", description: "Base model to fine-tune" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section matching your existing header style */}
      <div className="bg-[#002e5f] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-gray-200">Explore our AI models and API documentation</p>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex space-x-4 border-b border-gray-200">
          <button
            onClick={() => setActiveSection('ai-models')}
            className={`px-4 py-2 font-medium text-lg ${
              activeSection === 'ai-models'
                ? 'text-[#00bfff] border-b-2 border-[#00bfff]'
                : 'text-gray-600'
            }`}
          >
            <div className="flex items-center">
              <Database className="w-5 h-5 mr-2" />
              AI Models
            </div>
          </button>
          <button
            onClick={() => setActiveSection('api-docs')}
            className={`px-4 py-2 font-medium text-lg ${
              activeSection === 'api-docs'
                ? 'text-[#00bfff] border-b-2 border-[#00bfff]'
                : 'text-gray-600'
            }`}
          >
            <div className="flex items-center">
              <Code className="w-5 h-5 mr-2" />
              API Reference
            </div>
          </button>
        </div>

        {/* Content Section */}
        <div className="py-8">
          {activeSection === 'ai-models' && (
            <div className="grid gap-6 md:grid-cols-2">
              {models.map((model, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold text-[#002e5f] mb-4">{model.name}</h3>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-lg mb-2 text-[#002e5f]">Capabilities:</h4>
                    <ul className="list-disc ml-6">
                      {model.capabilities.map((capability, idx) => (
                        <li key={idx} className="text-gray-600 mb-1">{capability}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Use Case:</strong> {model.useCase}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'api-docs' && (
            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-[#002e5f] text-white rounded-full text-sm font-medium">
                      {endpoint.method}
                    </span>
                    <code className="ml-3 text-gray-700 text-lg">{endpoint.endpoint}</code>
                  </div>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  <div>
                    <h4 className="font-medium text-lg mb-2 text-[#002e5f]">Parameters:</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      {endpoint.parameters.map((param, idx) => (
                        <div key={idx} className="mb-3 last:mb-0">
                          <div className="flex items-center">
                            <span className="font-medium text-[#002e5f]">{param.name}</span>
                            <span className="ml-2 text-sm text-gray-500">({param.type})</span>
                          </div>
                          <p className="text-gray-600 text-sm">{param.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocsWebsite;