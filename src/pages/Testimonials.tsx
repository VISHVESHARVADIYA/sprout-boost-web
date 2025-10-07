import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Maharashtra, India",
      rating: 5,
      text: "Cropexgrow's mulch film has transformed my farming. My tomato yield increased by 35% and water usage dropped significantly. The product quality is outstanding and their technical support helped me optimize usage for my specific crop needs.",
      crop: "Tomato Farmer"
    },
    {
      name: "Sarah Mitchell",
      location: "California, USA",
      rating: 5,
      text: "The weed mats from Cropexgrow are game-changers! They eliminated my chemical herbicide costs and my organic certification process became much easier. Installation was simple and they have lasted through two full growing seasons without any deterioration.",
      crop: "Organic Vegetable Farm"
    },
    {
      name: "Ahmed Hassan",
      location: "Al Ain, UAE",
      rating: 5,
      text: "In our harsh desert climate, crop covers from Cropexgrow protected my plants from extreme heat and sandstorms. The investment paid for itself within the first season through reduced crop loss. Their guidance on proper installation was invaluable.",
      crop: "Date Palm Cultivation"
    },
    {
      name: "Maria Santos",
      location: "São Paulo, Brazil",
      rating: 5,
      text: "We use Cropexgrow's fruit covers for our orange orchards. Pest damage decreased by 60% and fruit quality improved dramatically. Our export-grade produce percentage increased, leading to higher profits. Customer support was excellent throughout.",
      crop: "Citrus Orchard Owner"
    },
    {
      name: "John Anderson",
      location: "Queensland, Australia",
      rating: 5,
      text: "The foam nets are perfect for protecting our mangoes during transport. Bruising and damage have virtually disappeared, and our customers are thrilled with the pristine condition of the fruit. This has allowed us to expand to premium markets.",
      crop: "Mango Exporter"
    },
    {
      name: "Priya Sharma",
      location: "Punjab, India",
      rating: 5,
      text: "Cropexgrow's netlon crop covers have been essential for my greenhouse operation. They provide perfect shade regulation while allowing excellent ventilation. My cucumber production has become more consistent and predictable throughout the year.",
      crop: "Greenhouse Vegetables"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">What Our Farmers Say</h1>
            <p className="text-xl text-muted-foreground">
              Real stories from real farmers who trust Cropexgrow for their agricultural needs
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 animate-grow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="w-10 h-10 text-primary/20" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.crop}</p>
                    <p className="text-sm text-primary">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Farmers</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the Cropexgrow difference and transform your farming practices today
            </p>
            <a href="/contact">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-accent hover:shadow-lg transition-all duration-300 font-semibold h-11 px-8">
                Get Started Today
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
