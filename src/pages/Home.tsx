import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import Services from '../components/Services';
import AreasWeServe from '../components/AreasWeServe';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProperties />
      <WhyChooseUs />
      <AreasWeServe />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
