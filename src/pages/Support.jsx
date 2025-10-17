import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import step1 from '../assets/1.webp';
import step2 from '../assets/2.webp';
import step3 from '../assets/3.webp';
import step4 from '../assets/4.webp';
import step5 from '../assets/5.webp';

const steps = [
  { image: step1, title: 'Plug In' },
  { image: step2, title: 'Scan Qr' },
  { image: step3, title: 'Set Preferences' },
  { image: step4, title: 'Pay in App' },
  { image: step5, title: 'Charge & Go' }
];

const faqItems = [
  {
    question: 'How to charge?',
    answer: 'Follow our simple 5-step process: Plug in your vehicle, scan the QR code, set your preferences, pay through the app, and charge & go!'
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept GCash, credit cards, and debit cards through our secure mobile app.'
  },
  {
    question: 'How long does charging take?',
    answer: 'Charging time varies based on your vehicle and battery capacity. Our fast chargers can charge most EVs to 80% in 30-45 minutes.'
  },
  {
    question: 'Where can I find charging stations?',
    answer: 'Use our mobile app to find the nearest EVOxCharge stations. We have locations across Metro Manila and expanding nationwide.'
  },
  {
    question: 'Is customer support available 24/7?',
    answer: 'Yes! Our support team is available round the clock to assist you with any questions or issues.'
  },
  {
    question: 'Can I reserve a charging station?',
    answer: 'Yes, you can reserve charging stations in advance through our mobile app to ensure availability when you arrive.'
  }
];

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    howToCharge: false,
    faq: false,
    contact: false
  });

  const heroRef = useRef(null);
  const howToChargeRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.section;
          setVisibleSections((prev) => ({ ...prev, [sectionName]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [
      { ref: heroRef, name: 'hero' },
      { ref: howToChargeRef, name: 'howToCharge' },
      { ref: faqRef, name: 'faq' },
      { ref: contactRef, name: 'contact' }
    ];

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      <section
        ref={heroRef}
        data-section="hero"
        className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0A0A0A] py-20 h-full border-b border-gray-800 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#BDFE4E]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#BDFE4E]/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#BDFE4E]/5 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              EVOxCharge <span className="text-[#BDFE4E]">FAQ</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta nec nibh a dictum.
              Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae;
            </p>
          </div>
        </div>
      </section>

      <section
        ref={howToChargeRef}
        data-section="howToCharge"
        className="bg-[#2A2A2A] py-20 border-b border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.howToCharge ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How to <span className="text-[#BDFE4E]">Charge</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center group transition-all duration-700 ${
                  visibleSections.howToCharge
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[#BDFE4E]/30 group-hover:border-[#BDFE4E] transition-all duration-300 shadow-lg shadow-[#BDFE4E]/20">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#BDFE4E] rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white group-hover:text-[#BDFE4E] transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          <div
            ref={faqRef}
            data-section="faq"
            className="max-w-4xl mx-auto space-y-4"
          >
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-[#BDFE4E]/50 transition-all duration-700 overflow-hidden ${
                  visibleSections.faq
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-semibold text-white group-hover:text-[#BDFE4E] transition-colors duration-300">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#BDFE4E] transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={contactRef}
        data-section="contact"
        className="bg-[#0A0A0A] py-20"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let’s Spark a <span className="text-[#BDFE4E]">Connection!</span>
            </h2>
              <p className='text-gray-300'>Share your vision with us, and let’s co-create the future of electric mobility — from smart chargers to seamless EV apps.</p>

          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className={`flex items-start gap-4 group transition-all duration-700 ${
                visibleSections.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '100ms' }}>
                <div className="w-14 h-14 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center border border-[#BDFE4E]/30 group-hover:bg-[#BDFE4E]/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-[#BDFE4E]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-400 text-lg">+639762701224</p>
                </div>
              </div>

              <div className={`flex items-start gap-4 group transition-all duration-700 ${
                visibleSections.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="w-14 h-14 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center border border-[#BDFE4E]/30 group-hover:bg-[#BDFE4E]/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-[#BDFE4E]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400 text-lg">support@evoxcharge.ph</p>
                </div>
              </div>

              <div className={`flex items-start gap-4 group transition-all duration-700 ${
                visibleSections.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '300ms' }}>
                <div className="w-14 h-14 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center border border-[#BDFE4E]/30 group-hover:bg-[#BDFE4E]/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-[#BDFE4E]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-400 text-lg">
                    TDG Inhub AFP-RSBS Industrial Park<br />
                    KM12 cor C5, Wester Bicutan,<br />
                    Taguig, Philippines
                  </p>
                </div>
              </div>
            </div>

            <div className={`bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 transition-all duration-700 ${
              visibleSections.contact ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ transitionDelay: '200ms' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#BDFE4E] transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#BDFE4E] transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#BDFE4E] transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#BDFE4E] transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="5"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#BDFE4E] transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#BDFE4E] text-black font-semibold rounded-lg hover:bg-[#a8e842] transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-[#BDFE4E]/20"
                >
                  Submit Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
