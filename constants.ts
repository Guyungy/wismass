
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

import { CONTACT_CONFIG } from './config';

export const CONTACT_INFO = CONTACT_CONFIG;

export const NEWS_CATEGORIES = ['全部動態', '行業洞察', '公司動態', '專業分享', '技術創新'];

import { loadNewsItems } from './utils/newsLoader';

export const NEWS_ITEMS = loadNewsItems();
