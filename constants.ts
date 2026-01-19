
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
    id: 'brand-design',
    title: '品牌建立與優化設計',
    description: '涵蓋產品品牌、服務品牌的新建構與形象升級',
    icon: 'Palette',
    details: ['Logo 設計', 'VI 系統規範', '包裝美學', '品牌升級方案']
  },
  {
    id: 'strategy',
    title: '品牌戰略規劃',
    description: '基於市場調研與消費者行為分析的精準定位',
    icon: 'Target',
    details: ['市場洞察', '競爭對手分析', '定位策略', '年度營銷計劃']
  },
  {
    id: 'consultancy',
    title: '活動全流程顧問服務',
    description: '從策略制定到落地執行的全週期指導與支援',
    icon: 'Users',
    details: ['活動策劃', '資源媒合', '執行監督', '效果評估']
  },
  {
    id: 'visual',
    title: '視覺設計服務',
    description: '產品包裝設計、影視片拍攝製作、平面廣告設計',
    icon: 'Camera',
    details: ['宣傳片拍攝', '商業攝影', '平面廣告', '三維渲染']
  },
  {
    id: 'social',
    title: '社群媒體運營',
    description: '內容創作、社群經營、廣告投放、輿情監測管理',
    icon: 'Share2',
    details: ['WeChat/Red 運營', 'Facebook/IG 託管', 'KOL 合作', '輿情監控']
  },
  {
    id: 'offline',
    title: '線下活動策劃與執行',
    description: '活動方案設計、現場統籌管理、效果評估追蹤',
    icon: 'Calendar',
    details: ['發佈會', '路演活動', '展覽設計', '快閃店執行']
  }
];

export const CONTACT_INFO = {
  whatsapp: '+85212345678', // 替換為真實號碼
  wechat: 'Wismass_Consulting',
  email: 'info@wismass.com',
  address: '香港九龍尖沙咀商務中心'
};
