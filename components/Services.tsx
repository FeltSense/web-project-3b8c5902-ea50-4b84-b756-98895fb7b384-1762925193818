'use client';

import { Package, Truck, Clock, Shield, Users, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Package,
      title: 'Premium Products',
      description: 'Curated selection of high-quality products from trusted brands. Every item is carefully selected to meet our rigorous standards.',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your orders delivered quickly and safely. We partner with reliable carriers to ensure your products arrive on time.',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our dedicated support team is always ready to help. Reach out anytime via phone, email, or live chat for immediate assistance.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Shop with confidence knowing your data is protected. We use industry-leading security measures to safeguard your information.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Experience personalized recommendations and dedicated account management. We treat every customer like family.',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80',
    },
    {
      icon: Sparkles,
      title: 'Exclusive Deals',
      description: 'Access member-only promotions and early product launches. Join our loyalty program for exclusive perks and rewards.',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to providing an exceptional retail experience that goes beyond just products. Discover what sets us apart.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}