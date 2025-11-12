'use client';

import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Access to premium product catalog',
    'Priority customer support',
    'Fast shipping on all orders',
    'Exclusive member discounts',
    'Early access to new products',
    'Personalized recommendations',
    'Dedicated account manager',
    'Flexible payment options',
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our premium membership and unlock exclusive benefits designed to elevate your retail experience.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full shadow-lg">
                <Zap className="w-4 h-4 fill-white" />
                <span className="text-sm font-semibold">Most Popular</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column - Pricing */}
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Premium Membership
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Everything you need to succeed in retail, all in one comprehensive package.
                    </p>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline space-x-2 mb-2">
                        <span className="text-6xl font-bold text-gray-900">$29</span>
                        <span className="text-xl text-gray-600">/month</span>
                      </div>
                      <p className="text-sm text-gray-500">Billed monthly, cancel anytime</p>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 px-8 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                    >
                      Get Started Now
                    </a>

                    {/* Trust Indicators */}
                    <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>No setup fees</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Cancel anytime</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Features */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">
                      Everything Included:
                    </h4>
                    <ul className="space-y-4">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                              <Check className="w-3 h-3 text-blue-600" />
                            </div>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-12 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between text-white">
                  <div className="mb-4 md:mb-0">
                    <p className="font-semibold text-lg">🎉 Special Offer: First Month 50% Off</p>
                    <p className="text-blue-100 text-sm">Limited time offer for new members</p>
                  </div>
                  <div className="text-2xl font-bold">
                    Only $14.50
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">30-Day Money-Back Guarantee</div>
              <div className="text-sm text-gray-600">Not satisfied? Get a full refund, no questions asked.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}