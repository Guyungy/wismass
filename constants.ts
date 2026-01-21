
import { ServiceItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首頁', href: '#/' },
  { label: '關於我們', href: '#/about' },
  { label: '服務方案', href: '#/services' },
  { label: '合作計劃', href: '#/partnership' },
  { label: '最新消息', href: '#/news' },
  { label: '聯絡我們', href: '#/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'cross-border',
    title: '跨境一站式專業服務',
    description: '聯合具備國際執業資格的律師與會計師團隊，提供涵蓋跨國合規、離岸審計與資本對接的深度諮詢。',
    icon: 'Globe',
    details: [
      '跨境商務架構與法規遵從 (SEC/HKEX)',
      '全球稅務統籌與離岸審計支持',
      '跨國併購顧問與資本關係維護',
      '海外實體營運與牌照申請諮詢'
    ]
  },
  {
    id: 'bitlab-accelerator',
    title: 'BITLAB 全鏈路加速器',
    description: '萬通智富旗艦級數據平台。定位為品牌加速核心引擎，通過場景化數據建模與執行驗證閉環，實現品牌量化增長。',
    icon: 'Zap',
    details: [
      '全鏈路場景數據資產激活',
      '動態市場戰略導航系統',
      '品牌增長路徑量化評估',
      '數字化內容分發與監測系統'
    ]
  },
  {
    id: 'brand-strategy',
    title: '品牌重構與視覺策略',
    description: '打破傳統視覺設計的侷限，將品牌基因與市場數據結合，重塑具有競爭壁壘的全球化品牌形象。',
    icon: 'Palette',
    details: [
      '全球化 VI 識別系統設計',
      '場景化產品包裝與視覺敘事',
      '品牌核心價值挖掘與定位',
      '全媒介數字創意內容製作'
    ]
  },
  {
    id: 'social-ops',
    title: '多平台社群流量營運',
    description: '精準覆蓋亞太及全球核心社交媒體，構建品牌私域流量池，實現高效的 KOL/KOC 資源轉化。',
    icon: 'Share2',
    details: [
      '小紅書/WeChat 全案內容代運營',
      'Instagram/TikTok 海外推廣矩陣',
      '全球精準媒體投放與 ROI 優化',
      '品牌輿情實時監控與公關支持'
    ]
  }
];

export const CONTACT_INFO = {
  full_name: '萬通智富有限公司 WISMASS LIMITED',
  hk_address: '香港九龍尖沙咀海港中心 A 座 12 樓 1208-10 室',
  us_address: '552 W 48th Street, New York, NY 10036',
  whatsapp: '+85212345678',
  us_phone: '(212) 951-7222',
  email: 'info@wismass.com',
  wechat: 'Wismass_Consulting',
  history: '成立於 2010 年，深耕跨境諮詢領域超過十載',
  founder: 'Zachary Cheung (張先生)'
};

// --- 新增：新聞數據配置 (方便用戶自行添加) ---
export const NEWS_CATEGORIES = ['全部動態', '行業洞察', '公司動態', '專業分享', '技術創新'];

export const NEWS_ITEMS = [
  { 
    id: 1, 
    title: 'Wismass 聯合 BITLAB 發佈 2024《全球品牌場景白皮書》', 
    date: '2024.06.12', 
    category: '行業洞察', 
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    summary: '本年度報告深度剖析了 AI 與場景數據如何重構跨境品牌營銷，並公佈了 BITLAB 最新數據實驗室成果，幫助企業優化 20% 以上的投放預算。'
  },
  { 
    id: 2, 
    title: '紐約中心成立周年慶：連接亞太企業與全球資本的戰略樞紐', 
    date: '2024.05.28', 
    category: '公司動態', 
    img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e3e9?auto=format&fit=crop&q=80&w=800',
    summary: '萬通智富紐約團隊在過去一年成功協助超過 15 家亞太獨角獸企業完成跨境合規與在地化品牌重塑，確立了 Wismass 在北美市場的領先地位。'
  },
  { 
    id: 3, 
    title: '【專題】跨境財稅合規與離岸結構優化講座圓滿落幕', 
    date: '2024.05.15', 
    category: '專業分享', 
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    summary: '我們聯合全球前四會計師事務所合夥人，為企業家解析 2024 最新稅務政策變動，針對 CRS 與反洗錢監管提供了切實可行的規避策略。'
  },
  { 
    id: 4, 
    title: 'BITLAB 數據引擎升級：實現多維度 ROI 實時監測', 
    date: '2024.04.30', 
    category: '技術創新', 
    img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    summary: '新版本顯著提升了跨國社群媒體投放的數據追蹤精度，解決了多幣種、多平台數據不互通的痛點，實現了真正的全鏈路監測。'
  },
  { 
    id: 5, 
    title: 'Wismass 獲頒「年度跨境商務卓越貢獻獎」', 
    date: '2024.03.12', 
    category: '公司動態', 
    img: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&q=80&w=800',
    summary: '憑藉在跨境法律統籌與品牌加速方面的突出表現，萬通智富在亞太商務峰會上榮獲業界權威獎項認可。'
  }
];
