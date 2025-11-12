'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      content: 'RetailHub has transformed how I source products for my store. The quality is consistently excellent, and their customer service is unmatched. I can always count on them to deliver on time.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Buyer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      content: 'Working with RetailHub for our corporate needs has been a game-changer. Their personalized service and attention to detail make bulk ordering seamless. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Fashion Retailer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      content: 'The exclusive deals and early access to new products give my boutique a competitive edge. RetailHub understands the retail business and truly partners with their clients.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'E-commerce Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      content: 'Fast delivery and secure transactions are crucial for our online business. RetailHub exceeds expectations every single time. Their reliability is what keeps us coming back.',
      rating: 5,
    },
    {
      name: 'Lisa Martinez',
      role: 'Retail Consultant',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      content: 'I recommend RetailHub to all my clients. Their premium product selection and professional service set the standard for what retail partnerships should be. Simply outstanding.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Store Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      content: 'The 24/7 support has saved us countless times when we needed urgent restocking. RetailHub treats us like family, and that personal touch makes all the difference in retail.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with RetailHub.
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-96 relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}