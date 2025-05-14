import { useState } from 'react';
import { AtSign, MapPin, Phone, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-100 to-transparent dark:from-blue-900 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-purple-100 to-transparent dark:from-purple-900 rounded-full blur-3xl transform -rotate-12"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title', 'contact')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle', 'contact')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('name.label', 'contact.form')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg text-gray-900 dark:text-white transition-all duration-300 ${
                    focusedField === 'name'
                      ? 'border-blue-500 ring-2 ring-blue-500/20'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder={t('name.placeholder', 'contact.form')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('email.label', 'contact.form')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg text-gray-900 dark:text-white transition-all duration-300 ${
                    focusedField === 'email'
                      ? 'border-blue-500 ring-2 ring-blue-500/20'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder={t('email.placeholder', 'contact.form')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('message.label', 'contact.form')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg text-gray-900 dark:text-white transition-all duration-300 ${
                    focusedField === 'message'
                      ? 'border-blue-500 ring-2 ring-blue-500/20'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder={t('message.placeholder', 'contact.form')}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 ${
                  submitStatus === 'success'
                    ? 'bg-green-600'
                    : submitStatus === 'error'
                    ? 'bg-red-600'
                    : 'bg-blue-600 hover:bg-blue-700'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''} transform hover:scale-[1.02] active:scale-[0.98]`}
              >
                {submitStatus === 'success' ? (
                  t('success', 'contact.form')
                ) : submitStatus === 'error' ? (
                  t('error', 'contact.form')
                ) : isSubmitting ? (
                  t('sending', 'contact.form')
                ) : (
                  <>
                    <Send size={18} className="transition-transform group-hover:translate-x-1" />
                    {t('submit', 'contact.form')}
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start group">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 transition-transform group-hover:scale-110">
                <MapPin className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {t('location.title', 'contact.info')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {content.contact.info.location.value}
                </p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 transition-transform group-hover:scale-110">
                <AtSign className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {t('email.title', 'contact.info')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {content.contact.info.email.value}
                </p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 transition-transform group-hover:scale-110">
                <Phone className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {t('phone.title', 'contact.info')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {content.contact.info.phone.value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}