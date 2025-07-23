
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Download, Award, Calendar, MapPin } from 'lucide-react';
import profileImage from '@/assets/profile-about.jpg';

const About = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">About Me</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Passionate about creating designs that not only look beautiful but also solve real problems 
              and connect with people on an emotional level.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Melvin Tan"
                  className="w-80 h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">My Story</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  I'm a Creative Graphic Designer with over a year of hands-on experience in branding, 
                  digital design, and visual storytelling. My journey began during my studies in Information 
                  Technology, where I discovered my passion for merging technical skills with creative expression.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Currently serving as a Digital Marketing Officer at St. Anne General Hospital Inc., 
                  I've successfully grown social media content interaction by 84.2% within a month, 
                  demonstrating my ability to create engaging content that resonates with audiences.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  I'm skilled in Adobe Creative Suite and specialize in crafting clean, impactful designs 
                  across both print and digital media. My approach combines strategic thinking with creative 
                  execution to deliver solutions that not only look great but also achieve business objectives.
                </p>
              </div>

              <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white">
                <Download className="mr-2" size={18} />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Education */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="text-rose-500 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-slate-800">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800">Bachelor of Science in Information Technology</h4>
                  <p className="text-slate-600">STI College</p>
                  <div className="flex items-center text-sm text-slate-500 mt-1">
                    <Calendar className="mr-1" size={14} />
                    2019 - 2024
                  </div>
                </div>
              </div>
            </div>

            {/* Current Role */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <MapPin className="text-rose-500 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-slate-800">Current Role</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800">Digital Marketing Officer</h4>
                  <p className="text-slate-600">St. Anne General Hospital Inc.</p>
                  <div className="flex items-center text-sm text-slate-500 mt-1">
                    <Calendar className="mr-1" size={14} />
                    November 2024 - July 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Adobe Creative Suite',
                'Graphic Design',
                'Logo Design',
                'Layout Design',
                'UI/UX Design',
                'Web Design',
                'Social Media Marketing',
                'Video Editing',
                'Brand Identity',
                'Visual Storytelling',
                'Digital Marketing',
                'Content Creation'
              ].map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg px-4 py-2 text-center">
                  <span className="text-slate-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
