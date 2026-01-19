# Wismass Market Consulting (萬通智富) - 官方網站

Wismass (萬通智富有限公司) 是一家立足香港、服務全球的跨境綜合諮詢平台。本網站展示了其核心服務方案、BITLAB 全鏈路品牌加速器以及全球佈局資訊。

## 🚀 技術棧

- **前端框架**: React 19 (TypeScript)
- **樣式庫**: Tailwind CSS
- **動畫**: Framer Motion
- **圖標**: Lucide React
- **AI 引擎**: Google Gemini 3 Flash (用於 Strategy AI 諮詢)
- **構建工具**: Vite

## 🛠️ 本地開發指南

### 1. 複製項目
```bash
git clone <your-repository-url>
cd wismass
```

### 2. 安裝依賴
```bash
npm install
```

### 3. 環境變量配置
在根目錄創建 `.env` 文件，並填入你的 Gemini API Key：
```env
VITE_API_KEY=在此處填寫你的_API_KEY
```
*註：獲取 Key 請訪問 [Google AI Studio](https://aistudio.google.com/)*

### 4. 啟動開發服務
```bash
npm run dev
```
訪問 `http://localhost:3000` 即可預覽。

## 📦 部署說明

### 靜態託管 (推薦)
1. 執行構建命令：
   ```bash
   npm run build
   ```
2. 將生成的 `dist` 目錄內容上傳至 Vercel、Netlify 或 GitHub Pages。

### 關於 API Key 安全
在生產環境部署時，請確保在託管平台的環境變量設置中配置 `VITE_API_KEY`，不要將含有私密 Key 的 `.env` 文件上傳到公開的 GitHub 倉庫。

## 🌐 品牌資訊
- **公司名稱**: 萬通智富有限公司 (WISMASS LIMITED)
- **成立時間**: 2010 年
- **旗艦產品**: BITLAB 全鏈路品牌加速器
- **辦公網點**: 香港 (亞太總部)、紐約 (北美中心)

---
*© 2024 WISMASS LIMITED. All Rights Reserved.*
