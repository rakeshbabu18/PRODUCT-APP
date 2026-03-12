import React from 'react'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-amber-600">ProductHub</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover premium products with fast delivery and exceptional quality. Your one-stop shop for everything you need.
        </p>
        <a
          href="/products"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Shop Now
        </a>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fast Delivery</h3>
            <p className="text-gray-600">Get your orders delivered quickly and reliably to your doorstep.</p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Premium Quality</h3>
            <p className="text-gray-600">Handpicked products ensuring the highest standards of quality.</p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Best Support</h3>
            <p className="text-gray-600">24/7 customer support ready to help you with anything you need.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home