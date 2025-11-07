"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Coffee, Flame, Handshake, Heart, Instagram, Leaf, Menu, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="small"
      background="animatedAurora"
      cardStyle="glass-flat"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Team", id: "team" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brew & Bean"
          button={{
            text: "Order Now",
            href: "https://order.brewandbean.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Welcome to Brew & Bean"
          description="Experience the finest coffee blends in our cozy atmosphere. From artisanal espresso to cold brew perfection, every cup tells a story."
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            {
              text: "View Menu",
              href: "products"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern coffee shop interior with warm lighting"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="Since 2015, Brew & Bean has been crafting exceptional coffee experiences. We source our beans directly from sustainable farms and roast them to perfection in small batches."
          tag="Our Story"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Premium Sourcing",
              description: "Direct trade relationships with coffee farmers worldwide",
              icon: Leaf
            },
            {
              title: "Expert Roasting",
              description: "Small batch roasting for maximum flavor and freshness",
              icon: Flame
            },
            {
              title: "Skilled Baristas",
              description: "Trained professionals who craft each cup with care",
              icon: Award
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Coffee roasting process"
          imagePosition="right"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Signature Blends"
          description="Discover our carefully curated selection of premium coffee blends"
          tag="Featured Menu"
          tagIcon={Menu}
          products={[
            {
              id: "1",
              brand: "Brew & Bean",
              name: "House Espresso",
              price: "$4.50",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "House espresso coffee"
            },
            {
              id: "2",
              brand: "Brew & Bean",
              name: "Signature Cappuccino",
              price: "$5.25",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Signature cappuccino"
            },
            {
              id: "3",
              brand: "Brew & Bean",
              name: "Cold Brew Special",
              price: "$4.75",
              rating: 4,
              reviewCount: "956",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cold brew coffee"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Baristas"
          description="The passionate professionals behind every perfect cup"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marco Rodriguez",
              role: "Head Barista",
              imageSrc: "https://images.pexels.com/photos/6205600/pexels-photo-6205600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marco Rodriguez - Head Barista",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/marco_coffee"
                }
              ]
            },
            {
              id: "2",
              name: "Sofia Chen",
              role: "Roast Master",
              imageSrc: "https://images.pexels.com/photos/9050560/pexels-photo-9050560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sofia Chen - Roast Master",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/sofia_roasts"
                }
              ]
            },
            {
              id: "3",
              name: "Alex Thompson",
              role: "Coffee Curator",
              imageSrc: "https://images.pexels.com/photos/4790046/pexels-photo-4790046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Thompson - Coffee Curator",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/alex_coffee"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real reviews from coffee lovers who visit Brew & Bean"
          tag="Customer Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson customer photo",
              quote: "Brew & Bean serves the best coffee in town. The atmosphere is cozy and the baristas are incredibly skilled. I come here every morning!"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Software Developer",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen customer photo",
              quote: "Perfect place to work on my laptop. Great WiFi, amazing coffee, and the cold brew is exceptional. Highly recommend!"
            },
            {
              id: "3",
              name: "Emma Williams",
              role: "Freelance Writer",
              company: "Independent",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4827509/pexels-photo-4827509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Williams customer photo",
              quote: "The signature cappuccino is absolutely divine. Love the latte art and the friendly staff. This is my go-to coffee spot!"
            },
            {
              id: "4",
              name: "David Martinez",
              role: "Business Owner",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6149793/pexels-photo-6149793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Martinez customer photo",
              quote: "Excellent quality coffee with sustainable sourcing. The team knows their craft and it shows in every cup. Outstanding service!"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted Coffee Partners"
          description="We work with the best coffee brands and suppliers worldwide"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/16218527/pexels-photo-16218527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/31705170/pexels-photo-31705170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/30755359/pexels-photo-30755359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Visit Our Coffee Shop"
          description="Have questions about our coffee or want to plan an event? We'd love to hear from you."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us how we can help you...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://images.pexels.com/photos/32416013/pexels-photo-32416013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Coffee shop counter"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew & Bean"
          columns={[
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Coffee Sources",
                  href: "about"
                }
              ]
            },
            {
              items: [
                {
                  label: "Menu",
                  href: "products"
                },
                {
                  label: "Espresso",
                  href: "products"
                },
                {
                  label: "Cold Brew",
                  href: "products"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}