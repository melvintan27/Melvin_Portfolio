import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_0uvfmjj', // Service ID
        'template_ta5lie8', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Melvin Tan',
        },
        'GQInLpcLdC0V5hRbB' // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Melvin Tan
ORG:Creative Graphic Designer
EMAIL:m.santos.tan0527@gmail.com
TEL:+639307247132
URL:https://melvintan.dev
NOTE:Creative Graphic Designer specializing in branding, digital design, and visual storytelling
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'melvin-tan.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "vCard Downloaded",
      description: "Contact information saved to your device.",
    });
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">Let's Work Together</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Get in Touch</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Ready to start your next project? I'm here to help bring your creative vision to life. 
                  Whether you need branding, web design, or digital marketing support, let's connect and 
                  discuss how we can work together.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-3 rounded-xl">
                    <Mail className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                    <a 
                      href="mailto:m.santos.tan0527@gmail.com" 
                      className="text-slate-600 hover:text-rose-600 transition-colors"
                    >
                      m.santos.tan0527@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-3 rounded-xl">
                    <Phone className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Phone</h3>
                    <a 
                      href="tel:+639307247132" 
                      className="text-slate-600 hover:text-rose-600 transition-colors"
                    >
                      +639307247132
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-3 rounded-xl">
                    <MapPin className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Location</h3>
                    <p className="text-slate-600">Philippines</p>
                  </div>
                </div>
              </div>

              {/* Download vCard */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Save My Contact</h3>
                <p className="text-slate-600 mb-4">
                  Download my contact information directly to your device.
                </p>
                <Button onClick={downloadVCard} variant="outline" className="border-slate-300 text-slate-700 hover:bg-white">
                  <Download className="mr-2" size={18} />
                  Download vCard
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-700 font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 border-slate-300 focus:border-rose-500 focus:ring-rose-500"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 border-slate-300 focus:border-rose-500 focus:ring-rose-500"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 border-slate-300 focus:border-rose-500 focus:ring-rose-500 min-h-[120px]"
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-6"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2" size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
