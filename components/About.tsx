import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { useFadeIn } from '../hooks/useFadeIn';
import { PERSONAL_INFO, profilePlaceholderImg } from '../constants';

const About: React.FC = () => {
  const [ref, isVisible] = useFadeIn({ threshold: 0.2 });
  const [imgSrc, setImgSrc] = useState(PERSONAL_INFO.profileImage);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setIsLoading(false);
    if (imgSrc !== profilePlaceholderImg) {
      setImgSrc(profilePlaceholderImg);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <SectionTitle className="mb-8 md:mb-12">About Me</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start mt-4 md:mt-8">
        {/* Profile Image Column */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="relative group w-full max-w-[280px] md:max-w-full">
            <div className="absolute -inset-1 bg-brand rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            
            <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-brand/20 bg-neutral-200 dark:bg-neutral-800 shadow-xl">
              {isLoading && (
                <div className="absolute inset-0 bg-neutral-300 dark:bg-neutral-700 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              <img 
                src={imgSrc} 
                alt="김태진 프로필 사진" 
                onLoad={handleImageLoad}
                onError={handleImageError}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover object-[center_15%] transition-all duration-700 transform scale-[1.2] origin-top hover:scale-[1.25] ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
          </div>
        </div>

        {/* Text Content Column */}
        <div className="md:col-span-8 space-y-6 text-gray-600 dark:text-gray-400 text-base md:text-lg break-keep">
          {/* Kakao Style Text Color */}
          <p className="font-bold text-2xl md:text-3xl leading-relaxed text-yellow-600 dark:text-[#FEE500]">
              데이터와 시스템으로 성과를 증명하는 IT교육 PM, 김태진입니다.
          </p>

          <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">융합적 배경을 바탕으로 한 교육 설계</h3>
              <p>
              미디어.S/W 공학, 산업 공학을 통해 습득한 공학적 사고와 데이터 분석 역량, 그리고 의류학의 사용자 중심 관점을 결합하여 교육을 설계합니다. 이를 통해 담당 교육을 조직의 <strong>핵심 비즈니스 모델</strong>으로 전환하여 수익화 및 브랜딩 가치를 제고해 왔습니다.
              </p>
          </div>

          <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">데이터 기반의 운영 완결성: 4개 기수 수료율 100%</h3>
              <p>
              '교육은 투입된 자본이 성과로 치환될 때 가치가 있다'는 신념을 가지고 있습니다. <strong>4개 기수 수료율 100%(훈련생 331명)</strong>라는 압도적인 운영 지표를 달성하며 양적 성과와 질적 완결성을 만들었습니다. 이는 교육생 VOC 관리 및 실시간 모니터링으로 선제적 리스크 관리 시스템을 구축한 결과입니다.
              </p>
          </div>

          <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">성과 중심의 리더십과 조직 최적화</h3>
              <p>
              관리자로서 조직의 업무 효율성을 최우선으로 고려합니다. 안정적이고 지속 가능한 교육사업 운영을 위해 데일리 스크럼을 진행하여 협업 시스템 구축과 업무 생산성을 높였습니다. 그 결과, <strong> 팀원 이탈률 0%(2021~2025)</strong>라는 안정적인 조직을 만들었으며 2023년 교육사업부 1호 우수사원으로 선정되었습니다.
              </p>
          </div>
          
          <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">이해관계자 조율 및 협업 역량</h3>
              <p>
              파트너사(기술,교육), 팀원(기획,운영), 교육생(소비자) 간의 의견을 조율합니다. 10개 이상의 C-Level 교육 경험과 대규모 오프라인 해커톤 운영을 총괄하며 이해관계자 간의 이견을 좁히고 합의를 이끌어냈습니다. '빨리 가려면 혼자 가고, 멀리 가려면 함께 가라'라는 철학을 바탕으로 협업이 성과로 이어질 수 있도록 이해관계자 간 선순환 구조를 만들기 위해 노력합니다.
              </p>
          </div>

          <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">변화 적응력과 빠른 실행력</h3>
              <p>
              스타트업 환경에서 변화에 빠르게 적응하고 빠르게 결과를 만들어내는 실행력을 길렀습니다. 100여 명 규모의 기업 해커톤에서 실시간 VoC를 빠르게 반영하여 차년도 재계약 및 사업 확장을 이끌어내 교육을 회사의 '수익 모델'이자 '브랜딩 자산'으로 성장시켰습니다.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;