
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Monitor, 
  Smartphone, 
  Video, 
  TrendingUp, 
  Brush,
  ArrowRight,
  Check
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brush,
      title: 'Graphic Design',
      description: 'Creating compelling visual communications that capture attention and convey your message effectively.',
      features: [
        'Brand Identity Design',
        'Logo Creation & Refinement',
        'Marketing Materials',
        'Print Design',
        'Digital Graphics'
      ],
      process: 'Discovery → Concept Development → Design Iterations → Final Delivery'
    },
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Crafting memorable and meaningful logos that represent your brand\'s personality and values.',
      features: [
        'Custom Logo Creation',
        'Brand Mark Development',
        'Typography Selection',
        'Color Palette Design',
        'Logo Guidelines'
      ],
      process: 'Brand Research → Sketching → Digital Creation → Refinement → Brand Guidelines'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Marketing',
      description: 'Strategic content creation and management that builds engagement and grows your online presence.',
      features: [
        'Content Strategy',
        'Visual Content Creation',
        'Post Scheduling',
        'Community Management',
        'Analytics & Reporting'
      ],
      process: 'Strategy Planning → Content Creation → Publishing → Engagement → Analysis'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services that bring your stories to life with compelling visual narratives.',
      features: [
        'Promotional Videos',
        'Social Media Content',
        'Corporate Videos',
        'Motion Graphics',
        'Color Correction'
      ],
      process: 'Planning → Footage Review → Editing → Effects → Final Export'
    },
    {
      icon: Monitor,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Interface Design',
        'Usability Testing'
      ],
      process: 'Research → Wireframes → Prototypes → Design → Testing → Iteration'
    },
    {
      icon: Smartphone,
      title: 'Web Design',
      description: 'Responsive website design that combines beautiful aesthetics with optimal functionality.',
      features: [
        'Responsive Design',
        'User Experience Optimization',
        'Modern Layouts',
        'Performance Optimization',
        'Brand Integration'
      ],
      process: 'Planning → Design → Development → Testing → Launch → Maintenance'
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">Services</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive design and marketing services tailored to help your business grow and connect with your audience through powerful visual communication.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-3 rounded-xl mr-4">
                      <IconComponent className="text-rose-600" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-600">
                          <Check className="text-green-500 mr-2 flex-shrink-0" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="text-sm font-semibold text-slate-800 mb-2">Process:</h4>
                    <p className="text-sm text-slate-500">{service.process}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with creative design solutions 
              that make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-800 hover:bg-slate-100">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
