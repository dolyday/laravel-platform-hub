import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail('');

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-[#2c3e50] rounded-lg p-8 my-16">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-[#e74c3c] text-white px-4 py-2 rounded-full mb-4">
          <Send className="w-5 h-5" />
          <span className="font-bold">اشترك في النشرة البريدية</span>
        </div>
        <p className="text-gray-300 text-sm">
          احصل على آخر التحديثات والدروس والمحتويات الجديدة مباشرة في بريدك
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل بريدك الإلكتروني"
            required
            className="flex-1 px-4 py-3 bg-[#34495e] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e74c3c] text-right"
          />
          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className="px-6 py-3 bg-[#e74c3c] text-white rounded-lg hover:bg-[#c0392b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Send className="w-4 h-4" />
            <span>{submitted ? 'تم الاشتراك!' : isSubmitting ? 'جاري الإرسال...' : 'اشترك الآن'}</span>
          </button>
        </div>
      </form>

      {submitted && (
        <p className="text-green-400 text-center mt-4 text-sm">
          شكراً لاشتراكك! سنرسل لك التحديثات قريباً.
        </p>
      )}
    </div>
  );
}
