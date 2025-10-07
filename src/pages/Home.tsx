import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Sprout, Shield, TrendingUp, Users } from "lucide-react";
import weedMatImage from "@/assets/weed-mat.jpg";
import mulchFilmImage from "@/assets/mulch-film.jpg";
import cropCoverImage from "@/assets/crop-cover.jpg";

const Home = () => {
  const featuredProducts = [
    {
      title: "Weed Mat",
      description: "Durable and eco-friendly mats for effective weed control",
      image: weedMatImage,
      features: [
        "Prevents weed growth naturally",
        "Improves soil moisture retention",
        "Durable and long-lasting"
      ]
    },
    {
      title: "Mulch Film",
      description: "Enhances soil temperature, moisture, and productivity",
      image: mulchFilmImage,
      features: [
        "Increases crop yield",
        "Maintains optimal soil temperature",
        "Reduces water usage"
      ]
    },
    {
      title: "Crop Cover",
      description: "Protects crops from insects, frost, and harsh conditions",
      image: cropCoverImage,
      features: [
        "Shields against pests and weather",
        "Promotes healthy crop growth",
        "Easy to install and maintain"
      ]
    }
  ];

  const benefits = [
    {
      icon: Sprout,
      title: "Sustainable Solutions",
      description: "Eco-friendly products that support sustainable farming practices"
    },
    {
      icon: Shield,
      title: "Crop Protection",
      description: "Advanced materials that shield crops from pests and harsh weather"
    },
    {
      icon: TrendingUp,
      title: "Increased Yield",
      description: "Proven to enhance productivity and maximize harvest output"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Knowledge-driven guidance to help farmers succeed"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Transforming Modern Agriculture</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Cropexgrow, we provide premium-quality farming solutions designed to protect crops,
              enhance yield, and support sustainable farming practices. Beyond just supplying materials,
              we empower farmers with innovative techniques and practical guidance for smarter, more
              productive farming.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Cropexgrow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300 animate-grow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Premium agricultural solutions for modern farming needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/products">
              <Button variant="hero" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
