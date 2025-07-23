
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Sparkles, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-white to-sage-50/80"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-sage-200/30 to-emerald-300/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-rose-100/20 to-sage-100/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Profile Image */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative group">
                {/* Floating elements around image */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-rose-400/20 to-pink-500/20 rounded-2xl rotate-12 animate-bounce delay-300"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-sage-400/20 to-emerald-500/20 rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl rotate-45 animate-pulse delay-500"></div>
                
                {/* Main image container with circular mask */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl ring-1 ring-white/50 backdrop-blur-sm group-hover:scale-105 transition-all duration-700 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-sage-500/10"></div>
                  <img
                    src="https://i.postimg.cc/Kj1jncYt/494460035-9792151540871444-7573000778811926648-n.jpg"
                    alt="Melvin Tan - Creative Graphic Designer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-rose-500" />
                    <span className="text-sm font-semibold text-slate-700">Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Content */}
            <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-50 to-sage-50 border border-rose-200/50 px-4 py-2 rounded-full text-sm font-medium text-slate-600 animate-fade-in">
                <Award className="w-4 h-4 text-rose-500" />
                <span>Award-Winning Designer</span>
              </div>

              {/* Main heading with enhanced typography */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-800 leading-[0.95] tracking-tight">
                  Hi, I'm{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-rose-500 via-pink-600 to-rose-700 bg-clip-text text-transparent">
                      Melvin
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full transform scale-x-0 animate-[scale-x-100_1s_ease-out_1.5s_forwards]"></div>
                  </span>
                </h1>
                
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-600 font-semibold">
                    Creative Graphic Designer
                  </h2>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-lg text-slate-500">
                    <span>UI/UX</span>
                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    <span>Web Design</span>
                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    <span>Branding</span>
                  </div>
                </div>

                <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-2xl font-light">
                  Designs that <span className="text-slate-700 font-medium">speak</span>. 
                  Experiences that <span className="text-slate-700 font-medium">connect</span>. 
                  I craft clean, impactful designs that bridge creativity and functionality across digital and print media.
                </p>
              </div>

              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <Link to="/portfolio">
                    <span>Explore My Work</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 px-8 py-6 text-lg rounded-2xl backdrop-blur-sm bg-white/50 hover:bg-white/80 transition-all duration-300 group">
                  <Download className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span>Download Resume</span>
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-200/50">
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-slate-800 group-hover:text-rose-600 transition-colors duration-300">84.2%</div>
                  <div className="text-sm text-slate-500 font-medium">Social Media Growth</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-slate-800 group-hover:text-rose-600 transition-colors duration-300">5+</div>
                  <div className="text-sm text-slate-500 font-medium">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-slate-800 group-hover:text-rose-600 transition-colors duration-300">50+</div>
                  <div className="text-sm text-slate-500 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-slate-600 mb-6">
              <Users className="w-4 h-4" />
              <span>Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">What I Do</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From branding to digital experiences, I help businesses tell their story through compelling visual design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Graphic Design",
                description: "Brand identity, layouts, and visual storytelling that captivates your audience.",
                icon: "🎨",
                gradient: "from-rose-500/10 to-pink-500/10"
              },
              {
                title: "UI/UX Design",
                description: "User-centered design that creates seamless and engaging digital experiences.",
                icon: "💻",
                gradient: "from-blue-500/10 to-indigo-500/10"
              },
              {
                title: "Social Media Marketing",
                description: "Strategic content creation that grows engagement and builds brand presence.",
                icon: "📱",
                gradient: "from-sage-500/10 to-emerald-500/10"
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4 group-hover:text-rose-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 px-8 py-4 text-lg rounded-2xl backdrop-blur-sm bg-white/50 hover:bg-white/80 transition-all duration-300 group">
              <Link to="/services">
                <span>View All Services</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
