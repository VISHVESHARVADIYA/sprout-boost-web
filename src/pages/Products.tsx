import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import weedMatImage from "@/assets/weed-mat.jpg";
import mulchFilmImage from "@/assets/mulch-film.jpg";
import cropCoverImage from "@/assets/crop-cover.jpg";
import foamNetImage from "@/assets/foam-net.jpg";
import netlonCoverImage from "@/assets/netlon-cover.jpg";
import fruitCoverImage from "@/assets/fruit-cover.jpg";

const Products = () => {
  const products = [
    {
      title: "Weed Mat",
      description: "Durable and eco-friendly mats for effective weed control",
      image: weedMatImage,
      features: [
        "Prevents weed growth naturally without chemicals",
        "Improves soil moisture retention",
        "UV-resistant and long-lasting material",
        "Easy to install and maintain"
      ]
    },
    {
      title: "Mulch Film",
      description: "Enhances soil temperature, moisture, and productivity",
      image: mulchFilmImage,
      features: [
        "Increases crop yield significantly",
        "Maintains optimal soil temperature",
        "Reduces water consumption by 40%",
        "Prevents soil erosion and nutrient loss"
      ]
    },
    {
      title: "Crop Cover",
      description: "Protects crops from insects, frost, and harsh conditions",
      image: cropCoverImage,
      features: [
        "Shields against pests and extreme weather",
        "Allows air and water circulation",
        "Promotes healthy crop growth",
        "Lightweight and easy to handle"
      ]
    },
    {
      title: "Foam Net",
      description: "Provides cushioning for fruits and vegetables during transport",
      image: foamNetImage,
      features: [
        "Prevents bruising and damage",
        "Extends shelf life of produce",
        "Food-safe and non-toxic material",
        "Reduces post-harvest losses"
      ]
    },
    {
      title: "Netlon Crop Cover",
      description: "Lightweight, strong mesh for plant protection",
      image: netlonCoverImage,
      features: [
        "High tensile strength and durability",
        "Excellent UV resistance",
        "Provides shade and wind protection",
        "Reusable for multiple seasons"
      ]
    },
    {
      title: "Fruit Cover",
      description: "Prevents pest damage and improves fruit quality",
      image: fruitCoverImage,
      features: [
        "Protects against birds and insects",
        "Reduces chemical spray requirements",
        "Improves fruit appearance and quality",
        "Environmentally friendly solution"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground">
              Premium agricultural solutions designed to protect, enhance, and sustain your crops
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Product?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experts is here to guide you in selecting the best solutions for your farming needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-accent hover:shadow-lg transition-all duration-300 font-semibold h-11 px-8">
                  Request a Quote
                </button>
              </a>
              <a href="https://wa.me/917227999529" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground h-11 px-8">
                  Call Us Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
