import React from 'react';
import { PERSONAL_INFO } from '../constants';
import SectionTitle from './SectionTitle';
import { useFadeIn } from '../hooks/useFadeIn';

const Contact: React.FC = () => {
  const [ref, isVisible] = useFadeIn({ threshold: 0.3 });

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-24 text-center transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8 break-keep leading-relaxed">
        소통에 항상 열려 있습니다. 궁금한 점이 있다면 언제든지 편하게 연락 주세요.
        <br />
        보내주신 내용은 꼼꼼히 확인하고 최대한 빠르게 답변 드리겠습니다.
      </p>
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="inline-block bg-[#FEE500] text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-[#FDD835] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20"
      >
        메일 보내기
      </a>
    </section>
  );
};

export default Contact;