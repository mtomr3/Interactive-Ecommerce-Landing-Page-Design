import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { ShoppingCart, Star, TrendingUp, Zap, Heart, ArrowRight, Check } from "lucide-react"

const Index = () => {
  const { toast } = useToast()
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [email, setEmail] = useState("")

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      rating: 4.8,
      image: "🎧",
      category: "Audio"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 399.99,
      rating: 4.9,
      image: "⌚",
      category: "Wearables"
    },
    {
      id: 3,
      name: "Ultra HD Camera",
      price: 899.99,
      rating: 4.7,
      image: "📷",
      category: "Photography"
    },
    {
      id: 4,
      name: "Gaming Laptop Elite",
      price: 1499.99,
      rating: 4.9,
      image: "💻",
      category: "Computing"
    }
  ]

  const categories = [
    { name: "Electronics", icon: "⚡", color: "from-blue-500 to-cyan-500" },
    { name: "Fashion", icon: "👔", color: "from-purple-500 to-pink-500" },
    { name: "Home & Living", icon: "🏠", color: "from-green-500 to-emerald-500" },
    { name: "Sports", icon: "⚽", color: "from-orange-500 to-red-500" }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Verified Buyer",
      text: "Best shopping experience ever! Fast delivery and amazing quality.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Premium Member",
      text: "The customer service is outstanding. Highly recommended!",
      rating: 5
    },
    {
      name: "Emma Wilson",
      role: "Verified Buyer",
      text: "Great prices and excellent product selection. Will shop again!",
      rating: 5
    }
  ]

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to cart! 🛒",
      description: `${productName} has been added to your cart.`,
    })
  }

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({
        title: "Welcome aboard! 🎉",
        description: "You've successfully subscribed to our newsletter.",
      })
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ShopFlow
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:inline-flex">Products</Button>
              <Button variant="ghost" className="hidden md:inline-flex">Categories</Button>
              <Button variant="ghost" className="hidden md:inline-flex">About</Button>
              <Button variant="outline" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>Limited Time Offer - 30% Off</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Shop Smarter,
              </span>
              <br />
              <span className="text-slate-900">Live Better</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Discover premium products at unbeatable prices. Free shipping on orders over $50.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                View Collections
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
            <p className="text-lg text-slate-600">Handpicked items just for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${
                  hoveredProduct === product.id ? "border-blue-500" : "border-slate-200"
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0
                }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="relative">
                    <div className="text-7xl text-center py-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {product.image}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-slate-600 ml-2">({product.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleAddToCart(product.name)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-slate-600">Explore our wide range of products</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={category.name}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0
                }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`text-6xl bg-gradient-to-br ${category.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="filter drop-shadow-lg">{category.icon}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-slate-900 text-white -mx-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-slate-300">Trusted by thousands of happy shoppers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0
                }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-200 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white overflow-hidden">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold">Stay Updated</h2>
              <p className="text-xl text-blue-100">
                Subscribe to our newsletter for exclusive deals and new arrivals
              </p>
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <Button type="submit" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">ShopFlow</span>
              </div>
              <p className="text-sm">
                Your trusted destination for quality products and exceptional service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">All Products</li>
                <li className="hover:text-white cursor-pointer transition-colors">New Arrivals</li>
                <li className="hover:text-white cursor-pointer transition-colors">Best Sellers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Sale</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
                <li className="hover:text-white cursor-pointer transition-colors">Shipping Info</li>
                <li className="hover:text-white cursor-pointer transition-colors">Returns</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2025 ShopFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Index