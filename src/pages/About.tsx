import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">About Cropexgrow</h1>
            <p className="text-xl text-muted-foreground">
              Committed to transforming modern agriculture through innovation and quality
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                We are committed to transforming modern agriculture by providing premium-quality
                farming solutions such as mulch films, crop covers, weed mats, fruit covers, and
                foam nets. Our products are designed to protect crops, enhance yield, and support
                sustainable farming practices.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                Beyond just supplying materials, we proudly offer knowledge-driven support and
                guidance to farmers, empowering them with innovative techniques and practical advice
                for smarter, more productive farming. With a focus on quality, innovation, and farmer
                welfare, we aim to be a trusted partner in building a better future for agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-grow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading provider of innovative agricultural solutions, empowering farmers
                worldwide to achieve sustainable and profitable farming practices.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-grow" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide premium-quality crop protection products and expert guidance that enhance
                productivity, protect the environment, and support farmer prosperity.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-grow" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Quality and Innovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Sustainability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Farmer Empowerment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Trust and Integrity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 p-8 md:p-12 rounded-lg border border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Commitment to Farmers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We understand the challenges faced by modern farmers. That is why we go beyond
                    product delivery to provide comprehensive support, technical guidance, and
                    educational resources. Our team of experts is dedicated to helping farmers make
                    informed decisions, adopt best practices, and maximize their agricultural success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
