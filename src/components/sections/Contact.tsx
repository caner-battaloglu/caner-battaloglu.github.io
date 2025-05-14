import React, { useState } from 'react';
import { AtSign, MapPin, Phone, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {t('title', 'contact')}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {t('subtitle', 'contact')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('name.label', 'contact.form')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('name.placeholder', 'contact.form')}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('email.label', 'contact.form')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('email.placeholder', 'contact.form')}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('message.label', 'contact.form')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('message.placeholder', 'contact.form')}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-md font-medium text-white ${
                  submitStatus === 'success'
                    ? 'bg-green-600'
                    : submitStatus === 'error'
                    ? 'bg-red-600'
                    : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {submitStatus === 'success' ? (
                  'Message Sent!'
                ) : submitStatus === 'error' ? (
                  'Error Sending Message'
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} />
                    {t('submit', 'contact.form')}
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="flex items-start mb-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <MapPin className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Istanbul, Turkey</p>
              </div>
            </div>
            
            <div className="flex items-start mb-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <AtSign className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">your.email@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <Phone className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+90 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;