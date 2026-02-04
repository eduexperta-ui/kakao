import React from 'react';
import type { Project, Experience, Skill } from './types';

const toBase64 = (str: string) => {
    try {
        return window.btoa(unescape(encodeURIComponent(str)));
    } catch (e) {
        return '';
    }
};

// Helper for Detail Image Placeholders (Fallback)
const getDetailImg = (text: string) => `data:image/svg+xml;base64,${toBase64(`
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" fill="#f8fafc"/>
  <rect x="20" y="20" width="760" height="410" rx="10" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="8 8"/>
  <path d="M400 180 L400 220 M380 200 L420 200" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
  <text x="400" y="270" font-family="sans-serif" font-size="20" fill="#64748b" text-anchor="middle" font-weight="bold">${text}</text>
  <text x="400" y="300" font-family="sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle">Detail Image Area (16:9)</text>
</svg>
`)}`;

// ==========================================
// High-Quality Abstract Generative SVGs
// ==========================================

// 1. Bootcamp (Growth, Coding, Structure) - Blue & Green Gradients
const bootcampSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="grad_blue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#60a5fa;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#grad1)"/>
  
  <!-- Abstract Code Blocks -->
  <rect x="100" y="80" width="400" height="280" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <circle cx="130" cy="110" r="6" fill="#ef4444"/>
  <circle cx="150" cy="110" r="6" fill="#f59e0b"/>
  <circle cx="170" cy="110" r="6" fill="#22c55e"/>
  
  <!-- Rising Graph Lines -->
  <path d="M150 300 L250 250 L350 280 L550 150" fill="none" stroke="url(#grad_blue)" stroke-width="4" filter="url(#glow)"/>
  <circle cx="550" cy="150" r="8" fill="#60a5fa" filter="url(#glow)"/>
  
  <!-- Floating Elements -->
  <rect x="500" y="250" width="180" height="120" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2" opacity="0.9"/>
  <text x="590" y="315" font-family="monospace" font-size="24" fill="#34d399" text-anchor="middle" filter="url(#glow)">&lt;Growth/&gt;</text>
  
  <!-- Grid -->
  <path d="M100 150 H500 M100 200 H500 M100 250 H500" stroke="#334155" stroke-width="1" stroke-dasharray="4 4"/>
</svg>`;

// 2. B2G Proposal (Strategy, Document, Impact) - Navy & Gold
const proposalSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg_prop" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#172554;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e3a8a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="gold_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fcd34d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#fbbf24;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg_prop)"/>
  
  <!-- Abstract Document Stack -->
  <path d="M250 100 L550 100 L550 350 L250 350 Z" fill="#1e40af" opacity="0.5" transform="translate(20, 20)"/>
  <path d="M250 100 L550 100 L550 350 L250 350 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Text Lines -->
  <rect x="300" y="160" width="200" height="12" rx="2" fill="#94a3b8"/>
  <rect x="300" y="190" width="200" height="8" rx="2" fill="#e2e8f0"/>
  <rect x="300" y="210" width="180" height="8" rx="2" fill="#e2e8f0"/>
  <rect x="300" y="230" width="190" height="8" rx="2" fill="#e2e8f0"/>
  
  <!-- Target / Success Icon -->
  <circle cx="580" cy="300" r="60" fill="url(#gold_grad)" opacity="0.9"/>
  <path d="M555 300 L575 320 L605 280" fill="none" stroke="#1e3a8a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  
  <!-- Decorative Elements -->
  <circle cx="100" cy="50" r="150" fill="url(#gold_grad)" opacity="0.05"/>
</svg>`;

// 3. Hackathon (Hardware, Connection, Circuit) - Dark & Cyan
const hackathonSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="grad_hack" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:#111827;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </radialGradient>
  </defs>
  <rect width="800" height="450" fill="url(#grad_hack)"/>
  
  <!-- Circuit Lines -->
  <path d="M0 225 H100 L150 150 H300 L350 225 H800" fill="none" stroke="#06b6d4" stroke-width="2" opacity="0.3"/>
  <path d="M0 250 H120 L170 300 H400 L450 250 H800" fill="none" stroke="#0891b2" stroke-width="2" opacity="0.3"/>
  
  <!-- Central Chip/Badge -->
  <rect x="250" y="125" width="300" height="200" rx="16" fill="#1f2937" stroke="#06b6d4" stroke-width="2"/>
  <rect x="300" y="175" width="200" height="100" fill="#111827"/>
  
  <!-- Glowing Text -->
  <text x="400" y="235" font-family="sans-serif" font-weight="bold" font-size="32" fill="#22d3ee" text-anchor="middle" letter-spacing="4">HACKATHON</text>
  
  <!-- Nodes -->
  <circle cx="150" cy="150" r="4" fill="#06b6d4"/>
  <circle cx="350" cy="225" r="4" fill="#06b6d4"/>
  <circle cx="600" cy="100" r="40" fill="#06b6d4" opacity="0.1"/>
</svg>`;

// 4. Premium CEO Education (UPDATED) - Luxury Gold & Black
const premiumEduSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad_luxury" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1c1917;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="grad_gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#a16207;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#fcd34d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a16207;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#grad_luxury)"/>
  
  <!-- Abstract Podium/Steps -->
  <path d="M200 350 L600 350 L550 250 L250 250 Z" fill="#292524" stroke="#44403c" stroke-width="1"/>
  <path d="M250 250 L550 250 L500 150 L300 150 Z" fill="#44403c" stroke="#57534e" stroke-width="1"/>
  
  <!-- Crown / Leadership Symbol -->
  <path d="M350 180 L350 100 L400 140 L450 100 L450 180 Z" fill="none" stroke="url(#grad_gold)" stroke-width="6" stroke-linejoin="round"/>
  <circle cx="350" cy="90" r="6" fill="#fcd34d"/>
  <circle cx="450" cy="90" r="6" fill="#fcd34d"/>
  <circle cx="400" cy="130" r="6" fill="#fcd34d"/>
  
  <!-- Rays of Light -->
  <path d="M400 140 L400 50" stroke="url(#grad_gold)" stroke-width="2" stroke-dasharray="4 4" opacity="0.5"/>
  <path d="M400 140 L320 60" stroke="url(#grad_gold)" stroke-width="2" stroke-dasharray="4 4" opacity="0.5"/>
  <path d="M400 140 L480 60" stroke="url(#grad_gold)" stroke-width="2" stroke-dasharray="4 4" opacity="0.5"/>

  <!-- Text -->
  <text x="400" y="410" font-family="serif" font-size="24" fill="#d6d3d1" text-anchor="middle" letter-spacing="2">EXECUTIVE CLASS</text>
</svg>`;

// 5. Research (UPDATED) - Academic Blue & Paper
const researchSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad_paper" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="#f1f5f9"/>
  
  <!-- Paper Sheet -->
  <rect x="200" y="50" width="400" height="350" fill="url(#grad_paper)" rx="4" shadow="0 4 6 rgba(0,0,0,0.1)"/>
  <path d="M200 50 L600 50 L600 400 L200 400 Z" fill="none" stroke="#cbd5e1" stroke-width="1"/>
  
  <!-- Content Lines on Paper -->
  <rect x="240" y="90" width="150" height="20" rx="2" fill="#334155"/>
  <rect x="240" y="130" width="320" height="8" rx="2" fill="#94a3b8"/>
  <rect x="240" y="150" width="300" height="8" rx="2" fill="#94a3b8"/>
  <rect x="240" y="170" width="310" height="8" rx="2" fill="#94a3b8"/>
  
  <!-- Charts on Paper -->
  <rect x="240" y="220" width="40" height="100" fill="#60a5fa" opacity="0.5"/>
  <rect x="300" y="250" width="40" height="70" fill="#60a5fa" opacity="0.7"/>
  <rect x="360" y="180" width="40" height="140" fill="#3b82f6"/>
  
  <!-- Magnifying Glass -->
  <g transform="translate(450, 250) rotate(-45)">
    <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#0f172a" stroke-width="8" opacity="0.8"/>
    <circle cx="0" cy="0" r="42" fill="#bae6fd" opacity="0.3"/>
    <rect x="-10" y="50" width="20" height="60" rx="5" fill="#0f172a"/>
  </g>
  
  <!-- Tag -->
  <rect x="620" y="380" width="140" height="40" rx="20" fill="#2563eb"/>
  <text x="690" y="405" font-family="sans-serif" font-size="14" fill="white" font-weight="bold" text-anchor="middle">RESEARCH</text>
</svg>`;


// Profile Placeholder SVG - 더 선명한 기본 이미지
const profilePlaceholderSvg = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="400" fill="#262626"/><circle cx="200" cy="140" r="60" fill="#404040"/><path d="M100,320 Q200,220 300,320" fill="none" stroke="#404040" stroke-width="20" stroke-linecap="round"/><text x="200" y="370" font-family="sans-serif" font-size="18" fill="#525252" text-anchor="middle">PHOTO NOT FOUND</text></svg>`;
export const profilePlaceholderImg = `data:image/svg+xml;base64,${toBase64(profilePlaceholderSvg)}`;

// SVG Icons - Changed to text-yellow-600/dark:text-yellow-400 for better visibility than brand yellow
export const Icons = {
    curriculum: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    lx_design: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    project_management: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    leadership: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    data_analysis: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    partnership: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    email: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    phone: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
};

export const SKILLS_DATA: Skill[] = [
  { 
    name: '교육과정 설계', 
    icon: Icons.curriculum,
    description: 'React, TS, Next.js 등 최신 기술 트렌드를 반영한 커리큘럼 고도화'
  },
  { 
    name: '학습 경험(LX) 디자인', 
    icon: Icons.lx_design,
    description: "주 단위 정량/정성 데이터(Survey, 성취도) 분석하여 실시간 학습경험 개선, '동료 특강' 세션을 통한 능동적인 학습 환경 조성"
  },
  { 
    name: '프로젝트 관리', 
    icon: Icons.project_management,
    description: '100명 규모 해커톤 및 메타버스 채용 행사, 부트캠프 총괄 운영 등 대규모 프로젝트 완수'
  },
  { 
    name: '팀 리더십', 
    icon: Icons.leadership,
    description: '팀원(5인) 및 강사/멘토진 리딩, 조직 내 심리적 안정감 기반의 협업 환경 조성, 팀원 이탈률 0% 달성'
  },
  { 
    name: '데이터 분석', 
    icon: Icons.data_analysis,
    description: '학습 성취도, 설문 데이터 등 정량·정성 지표 기반의 주 단위 교육 품질 분석'
  },
  { 
    name: '파트너 매니지먼트, 조율', 
    icon: Icons.partnership,
    description: '정부 부처, 현직자 멘토, 기업 파트너사 등 복합 이해관계자의 요구사항 조율, 유연한 커뮤니케이션을 통한 B2G 제안서 수주 및 외부 파트너십 확장 기여'
  },
];

export const WORK_EXPERIENCE_DATA: Experience[] = [
  {
    company: '멋쟁이사자처럼(에듀테크 스타트업)',
    link: '#',
    title: '파트 리드',
    start: '2021.7',
    end: '2025.9',
    description: [
      '웹 프론트엔드 및 UX/UI 부트캠프 총괄 운영 (누적 수료생 902명 달성)',
      '누적 매출 약 100억 원 달성으로 교육의 사업적 가치 증명',
      '고용노동부 K-Digital Training 등 B2G 교육 사업 연속 수주(2021, 2023, 2024)',
      '12명 규모의 교육 운영팀 리딩 및 학습 프레임워크 기반 교육 고도화',
      '2023년 사내 1호 우수사원 표창 수상'
    ]
  },
  {
    company: '산업교육연구원(C-Level 전문 교육 기업)',
    link: '#',
    title: '선임 연구원',
    start: '2017.3',
    end: '2020.10',
    description: [
      'CEO 및 고위 임원 대상 리더십 교육 프로그램 기획 및 운영',
      '신규 교육 과정 론칭을 통한 매출 4억 원 창출',
      '이메일 마케팅 자동화 프로세스 구축 (지원율 10% 상승, 운영 비용 20% 절감)',
      '회사 발전 기여 공로로 사내 공로상 수상'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: '대규모 IT 부트캠프 기획 및 성장 견인',
    context: '멋쟁이사자처럼',
    description: '프론트엔드, 디자인 부트캠프 누적 교육생 902명, 수료생 822명을 배출하며 누적 매출 100억 원을 달성했습니다. 학습자 중심의 교육 시스템을 구축하여 최고 수료율 100%, 만족도 4.9/5이라는 높은 성과를 달성했습니다.',
    tags: ['교육과정 설계', '매출 100억', '수료율 100%','만족도 4.9/5'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(bootcampSvg)}`,
    detailImages: [
        { url: 'https://lh3.googleusercontent.com/d/1I2CWOU6RV-4ge_JrTORcUnC-E7Cvuh0k', caption: '온라인 부트캠프(zoom)' },
        { url: 'https://lh3.googleusercontent.com/d/1www-PKnZ7Wg86gZ5gDGB-lIoNbxIds-2', caption: '오프라인 네트워킹' },
        { url: 'https://lh3.googleusercontent.com/d/1VlBs81W0nuRmC0bWLtjm1ZG0jBnW3vvM', caption: '교육만족도(4.9/5)' }
    ],
    details: [
        '국가 전략산업 IT인재 양성 B2G 부트캠프 기획 및 운영 (2021.7~2024.12, 운영팀 및 강사 총괄)',
        '문제 해결: 학습 난이도 급상승 구간 이탈률(30%) 방어 및 비전공자 자신감 제고를 위한 학습 시스템 전면 개편',
        {
          title: 'Action',
          items: [
            '피드백 시스템: 주 단위 정량/정성 데이터 분석을 통한 교육 과정 애자일 개선 (5개월 과정)',
            '피어그룹 활동: 동료 피드백 시스템 개발 및 개인 학습 결과 리포트 제공으로 메타인지 강화',
            '커뮤니티 구축: 24시간 온라인 학습 환경(Notion, Discord) 설계 및 회고/스터디/동료 특강 활성화',
            '커리큘럼 고도화: 현직자 인터뷰 및 기술 트렌드 분석 기반 최신 스택 도입 (React → TypeScript → Next.js)',
            '리더십/멘토링: 교육생 리더십 강화 프로그램(월 1회) 운영, 리더 역할 가이드 및 갈등 관리 상담',
            '특강 기획: 수준별 맞춤 스프린트 특강, 현직자 하드/소프트 스킬(협업, 커뮤니케이션) 특강 운영',
            '선발 체계: 구조화된 지원서, 영상 평가, 기초 역량 측정을 도입하여 훈련생 수준 상향 평준화',
            '취업 지원: 메타버스(게더타운) 활용 기업 채용연계 행사 기획 및 운영'
          ]
        }
    ]
  },
  {
    id: 2,
    title: 'B2G IT 교육 사업 제안 및 수주',
    context: '멋쟁이사자처럼',
    description: '고용노동부 주관 K-Digital Training 사업에서 총 4개 과제에 모두 선정되어 100% 수주 성공률을 기록했습니다. 데이터 기반의 제안 전략으로 200억 원 이상의 기대 매출을 확보했습니다.',
    tags: ['RFP 분석', '제안서 기획', '시장 분석', '프레젠테이션'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(proposalSvg)}`,
    detailImages: [
        { url: 'https://lh3.googleusercontent.com/d/1owMUvqaaO2o17PZAFi8Jbgpb_jJLezeu', caption: '2023 선정 과정' },
        { url: 'https://lh3.googleusercontent.com/d/1fO7FNrx79OqLc2Z_YkvAWpNi5JufCvBY', caption: '제안서 운영전략 파트' }
    ],
    details: [
        '고용노동부 주관 K-Digital Training IT 교육사업 제안서 기획 및 작성 (2021, 2023, 2024)',
        '성과: 총 4건의 제안서 모두 최종 승인 획득 (수주율 100%) 및 기대 매출 200억 원 이상 달성',
        {
            title: 'Action',
            items: [
                '전략적 RFP 분석: 정책특화심사센터, 고용정보원 등 유관 기관과의 지속적 소통을 통해 RFP 핵심 요구사항 도출',
                '시장 및 정책 분석: IT 교육 트렌드, B2G 시장 규모, 경쟁사 현황 및 정부 정책 방향성 심층 분석',
                '제안 전략 수립: 교육 운영 데이터를 기반으로 한 차별화된 제안 논리 개발',
                '최종 발표: 핵심 가치 전달을 위한 경쟁 PT 기획 및 질의응답 대응'
            ]
        }
    ]
  },
  {
    id: 5,
    title: '엡손(EPSON) 기업 해커톤 운영 총괄',
    context: '멋쟁이사자처럼',
    description: '한국 엡손이 주관한 100명 규모의 온·오프라인 해커톤을 총괄했습니다. 참가자 만족도 4.3/5점을 달성하여 2026년 재계약을 확보했으며, 정교한 팀 빌딩 시스템으로 개인 참가자 이탈률을 5% 미만으로 관리했습니다.',
    tags: ['교육 운영 총괄', '멘토링 시스템', '팀빌딩', '재계약 달성'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(hackathonSvg)}`,
    detailImages: [
        { url: 'https://lh3.googleusercontent.com/d/1C00AhJXft8IBa7gcbpgCt_TF0fb7XLRN', caption: '해커톤 현장' },
        { url: 'https://lh3.googleusercontent.com/d/1-bCvg-Y5Vtdh1sg8Ng35LoVTs84s38sF', caption: '단체사진' },
        { url: 'https://lh3.googleusercontent.com/d/1to3kkQjFJXP0j2HkV21eQhpD87s_V4NB', caption: '해커톤 운영 노션' }
    ],
    details: [
        '한국 엡손 주관 API 활용 프로덕트 개발 해커톤 기획 및 운영 (2024.4.1 ~ 6.30, 100명 선발)',
        '장소: 온라인 및 오프라인 (엡손 본사, 잠실 롯데타워)',
        '성과: 주관사 및 참가자 만족도 4.3/5 달성, 2026년 해커톤 재계약 수주',
        {
            title: 'Action',
            items: [
                '선발 프로세스: 프로젝트 기획서 평가 테이블 설계 및 본선 진출팀 선발 체계 구축',
                '팀 빌딩 시스템: 개인 참가자 역량/관심사/면담 기반의 정교한 팀 매칭으로 이탈률 5% 미만 방어',
                '교육 운영 총괄: Discord/Zoom 기반 24시간 소통 커뮤니티 구축으로 VoC 감소 및 멘토링/협업 환경 조성',
                '현장 오퍼레이션: 파이널 데모데이 사용자 여정(동선, 타임라인, 이슈 대응) 설계 및 운영 총괄'
            ]
        }
    ]
  },
  {
    id: 7,
    title: 'C-Level 대상 프리미엄 경영자 과정 기획/운영',
    context: '산업교육연구원',
    description: '기업 CEO 및 임원을 대상으로 한 프리미엄 교육 서비스를 기획했습니다. 베트남 비즈니스 과정 신규 런칭으로 매출 4억 원을 달성했으며, 데이터 기반의 마케팅 프로세스 개선으로 비용을 절감하고 공로상을 수상했습니다.',
    tags: ['교육 기획', 'C-Level 교육', '매출 4억 달성', '마케팅 효율화'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(premiumEduSvg)}`,
    detailImages: [
        { url: 'https://lh3.googleusercontent.com/d/1fc8L9XLYZR7ZY4FiZU11s6OUyVEiJRV2', caption: '비즈니스 전략 강의' },
        { url: 'https://lh3.googleusercontent.com/d/1BY8CtN1drw8NVQMQn6mSZUmLpJdEK1iX', caption: '베트남-한국 인구학 강의' },
        { url: 'https://lh3.googleusercontent.com/d/1JlVjERINhqE9qQLAhod2fb4ZUTOWmgWO', caption: '네트워킹 데이' },
        { url: 'https://lh3.googleusercontent.com/d/1O5m9iLYa7U9Zl5U9fHSlG0cfGFibt58S', caption: '1박 2일 워크샵' }
    ],
    details: [
        '산업교육연구원 (2017.3 ~ 2020.10) 교육2팀 선임연구원',
        'IT/4차산업, 베트남/차이나 비즈니스, 인문학 등 총 400명 규모의 최고경영자 과정 기획 및 운영',
        {
            title: 'Action',
            items: [
                '신규 사업 기획: 베트남 비즈니스 최고경영자 과정 1기 런칭 및 운영 (매출 4억 원 달성)',
                '마케팅 최적화: 이메일 마케팅 자동화 프로세스 구축 및 사내 교육 (지원율 10% 상승, 비용 20% 절감)',
                '커리큘럼 리뉴얼: 문화예술/인문학 과정 콘텐츠 개선을 통한 교육생 만족도 10% 상승',
                '운영 총괄: 국내/해외 워크숍 및 대규모 입학/수료식 행사 기획 (예산 수립, 장소 섭외, 의전, 시나리오)',
                '홍보 마케팅: 타겟 DB 최적화, 보도자료 작성 및 온·오프라인 광고 집행',
                '성과 인정: 회사 발전 기여 공로상 수상'
            ]
        }
    ]
  },
  {
    id: 6,
    title: '학술 연구 및 데이터 분석',
    context: '학술 연구',
    description: '사용자 경험(UX), 마케팅, 기술 수용에 대한 깊이 있는 연구를 수행하여 한국연구재단(KRF) 등재지에 4편의 논문을 게재했습니다. 데이터 기반의 문제 정의 및 해결 능력을 입증합니다.',
    tags: ['데이터 분석', 'UX 리서치', '통계 분석', '논문 게재'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(researchSvg)}`,
    detailImages: [
        { url: 'https://lh3.googleusercontent.com/d/1AYRWbNRR0OhjCKlbR2Z6PwrSapJA4_sX', caption: 'SNS 마케팅 연구' },
        { url: 'https://lh3.googleusercontent.com/d/1HC9Qd1RWmuEKwvk5vDb2lMXvG1ycKsr9', caption: 'App 사용성 연구' },
        { url: 'https://lh3.googleusercontent.com/d/1R9bFEcHM4ZznU9OwnY3LSeUHI-LOvIju', caption: '모바일 쇼핑 VOC 연구1' },
        { url: 'https://lh3.googleusercontent.com/d/1YYdrjo0u92UqjG6s0SbMukm6touIjqtV', caption: '모바일 쇼핑 VOC 연구2' }
    ],
    details: [
        '주요 연구: 페이스북 마케팅, AR 앱 UX, 모바일 디스플레이 색채 감성(VoC)',
        '연구 전 과정(설문 설계, 데이터 수집, 통계 분석, 결과 도출) 주도적 수행',
        '통계 분석 도구(SPSS) 활용 및 데이터 해석 역량 보유'
    ]
  }
];

export const PERSONAL_INFO = {
    name: '김태진 입니다.',
    title_line1: '인재의 잠재력을',
    title_line2: '성장으로 이끌어내는',
    title_line3: '데이터 기반 IT 교육 PM',
    bio: '학습자 중심의 정교한 LX 설계와 핵심을 파악하는 데이터 분석역량을 기반으로 교육의 전 과정을 총괄합니다. 4개 기수 100% 수료를 이끌어낸 압도적인 운영 전문성과 20개가 넘는 IT 교육사업 경험, 융합적 배경을 바탕으로 조직의 비즈니스 가치를 극대화하는 테크 교육 모델을 설계하고 운영합니다.',
    email: 'eduexperta@gmail.com',
    phone: '010-4154-4898',
    // Stable Google Drive Image Link
    profileImage: 'https://lh3.googleusercontent.com/d/1Ng20CTgKO4jInaEUFAbQO6JWneC5XQx3'
};