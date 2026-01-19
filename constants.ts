
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
    description: '由律師事務所、會計事務所及金融機構聯合驅動，提供涵蓋法律合規、審計、跨境商務統籌的一站式解決方案。',
    icon: 'Globe',
    details: [
      '跨境業務擴展與架構設計',
      '海外合規性顧問與 SEC 備案支持',
      '全球資源媒合與戰略投資諮詢',
      '跨國稅務與審計專項服務'
    ]
  },
  {
    id: 'bitlab-accelerator',
    title: 'BITLAB 全鏈路加速器',
    description: 'Wismass 旗艦平台，定位為全鏈路品牌加速平台，提供品牌構建、營銷策略、數據分析等一體化服務。',
    icon: 'Zap',
    details: [
      '場景數據驅動戰略落地',
      '全週期品牌執行驗證',
      '空間數據資產激活',
      '量化品牌成長路徑'
    ]
  },
  {
    id: 'brand-strategy',
    title: '品牌建立與優化設計',
    description: '從零構建品牌基因，或為成熟品牌進行視覺形象現代化升級，強調「場景即媒體」的競爭壁壘。',
    icon: 'Palette',
    details: [
      '核心 VI 系統與視覺識別',
      '產品包裝與影視創意製作',
      '品牌故事與定位策略',
      '全球化品牌手冊規範'
    ]
  },
  {
    id: 'social-ops',
    title: '全球社群媒體運營',
    description: '覆蓋 WeChat, Red (小紅書), Instagram, Facebook 等多平台內容創作、廣告投放與輿情監測管理。',
    icon: 'Share2',
    details: [
      '私域流量矩陣與內容創作',
      '全球 KOL/KOC 資源媒合',
      '精準廣告投放優化',
      '品牌輿情實時監測'
    ]
  }
];

export const PROCESS_STEPS = [
  { title: '多維診斷', desc: '法律、會計與營銷專家團隊聯合進行 1對1 深度訪談。' },
  { title: '全球策略', desc: '基於跨境擴張需求，量身定制合規且高效的成長路徑。' },
  { title: '全鏈落地', desc: '通過 BITLAB 平台整合資源，實現從策略到執行的無縫銜接。' },
  { title: '持續優化', desc: '動態追蹤數據指標，確保跨境業務的長期穩健增長。' }
];

export const CORE_VALUES = [
  { title: '專業協作', desc: '跨學科機構聯合，解決傳統諮詢中策略與落地斷層問題。' },
  { title: '數據引領', desc: '依託 BITLAB 平台能力，讓每一份決策都有據可查。' },
  { title: '一站式賦能', desc: '提供從法律合規到市場營銷的全週期服務，助力品牌加速。' }
];

export const CONTACT_INFO = {
  full_name: '萬通智富有限公司 WISMASS LIMITED',
  hk_address: '香港九龍尖沙咀海港中心 A 座 12 樓',
  us_address: '552 W 48th Street, New York, NY 10036',
  whatsapp: '+85212345678',
  us_phone: '(212) 951-7222',
  email: 'info@wismass.com',
  wechat: 'Wismass_Consulting',
  history: '成立於 2010 年前後',
  founder: 'Zachary Cheung (張先生)'
};
