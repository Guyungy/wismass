
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

export const NEWS_CATEGORIES = ['全部動態', '行業洞察', '公司動態', '專業分享', '技術創新'];

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  img: string;
  summary: string;
  content: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  { 
    id: 1, 
    title: 'Wismass 聯合 BITLAB 發佈 2024《全球品牌場景白皮書》', 
    date: '2024.06.12', 
    category: '行業洞察', 
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    summary: '本年度報告深度剖析了 AI 與場景數據如何重構跨境品牌營銷，並公佈了 BITLAB 最新數據實驗室成果。',
    content: `
# 2024 全球品牌場景白皮書發佈

萬通智富 (WISMASS) 旗下數據研究部門 **BITLAB** 於近日正式發佈《2024 全球品牌場景白皮書》。報告指出，隨着人工智能技術的成熟，傳統的「漏斗式」營銷已逐漸失效，取而代之的是「多點場景觸達」。

## 核心亮點

1.  **數據資產化**：品牌不再只是投放廣告，而是通過 BITLAB 平台建立屬於自己的數據資產庫。
2.  **ROI 量化提升**：通過對 150 個核心場景的模擬，平均可優化 **25%** 的無效預算。
3.  **跨平台協同**：針對亞太區與北美市場的不同社群生態，提出了差異化的「場景加速模型」。

> "我們希望通過 BITLAB 的數據能力，為中國品牌出海提供精確的航標，減少不必要的資源損耗。" —— *Zachary Cheung*
    `
  },
  { 
    id: 2, 
    title: '紐約中心成立周年慶：連接亞太企業與全球資本的戰略樞紐', 
    date: '2024.05.28', 
    category: '公司動態', 
    img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e3e9?auto=format&fit=crop&q=80&w=800',
    summary: '萬通智富紐約團隊在過去一年成功協助超過 15 家亞太獨角獸企業完成跨境合規與在地化品牌重塑。',
    content: `
# 紐約中心成立一周年回顧

一年前，Wismass 正式在紐約 48 街設立北美戰略中心。今天，我們慶祝這座橋樑成功幫助了數十家優秀的亞太企業紮根全球。

## 階段性成果
*   **合規指導**：協助 12 家科技公司完成 SEC 備案的前置法律審查。
*   **品牌重塑**：帶領 8 個品牌完成北美視覺體系的在地化改造。
*   **資本對接**：組織了 4 場私人投融資對接會，覆蓋紐約頂尖的家族辦公室。

我們期待在未來的日子裡，繼續深化「香港執行 + 紐約戰略」的雙核模式。
    `
  }
];
