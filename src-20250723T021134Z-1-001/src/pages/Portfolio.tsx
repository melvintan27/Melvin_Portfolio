
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Branding', 'Social Media', 'UI/UX', 'Web Design', 'Print'];

  const projects = [
    {
      id: 1,
      title: 'Social Media Growth Campaign',
      category: 'Social Media',
      description: 'Achieved 84.2% growth in social media content interaction within one month through strategic content creation and engagement strategies.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['Social Media', 'Content Strategy', 'Growth Marketing']
    },
    {
      id: 2,
      title: 'Healthcare Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity redesign for a modern healthcare facility, including logo, color palette, and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      tags: ['Branding', 'Logo Design', 'Healthcare']
    },
    {
      id: 3,
      title: 'E-commerce Website Design',
      category: 'UI/UX',
      description: 'User-centered design for an e-commerce platform with focus on conversion optimization and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['UI/UX', 'Web Design', 'E-commerce']
    },
    {
      id: 4,
      title: 'Corporate Website Redesign',
      category: 'Web Design',
      description: 'Modern, responsive website redesign for a tech startup, emphasizing clean aesthetics and user engagement.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      tags: ['Web Design', 'Responsive', 'Corporate']
    },
    {
      id: 5,
      title: 'Restaurant Menu Design',
      category: 'Print',
      description: 'Elegant menu design for a fine dining restaurant, balancing readability with sophisticated visual appeal.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      tags: ['Print Design', 'Menu', 'Typography']
    },
    {
      id: 6,
      title: 'Startup Brand Package',
      category: 'Branding',
      description: 'Complete brand package for a tech startup including logo, business cards, letterhead, and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
      tags: ['Branding', 'Startup', 'Logo Design']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">Portfolio</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              A showcase of my creative work spanning branding, digital design, and visual storytelling. 
              Each project represents a unique challenge and creative solution.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="text-slate-500" size={20} />
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter 
                  ? "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white" 
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-rose-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No projects found for the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
