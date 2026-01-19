
import React from 'react';
import { History, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">關於 Wismass</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            我們是不僅僅是諮詢公司，更是您品牌全生命週期的增長夥伴。
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">我們的願景與使命</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Wismass 市場營銷諮詢成立於 2018 年，總部位於香港。我們深信「數據驅動」與「創意執行」是品牌成功的兩大基石。通過與 BITLAB 的深度整合，我們為各類規模的企業提供一站式的專業服務集合平台，打破傳統諮詢與執行之間的斷層。
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl">
                <Target className="text-blue-600 mb-4" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">精準定位</h3>
                <p className="text-sm text-slate-500">深入分析，直擊痛點</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl">
                <Award className="text-blue-600 mb-4" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">卓越執行</h3>
                <p className="text-sm text-slate-500">細節決定成敗</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://picsum.photos/seed/team/800/600" 
              alt="Team Work" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-24 mt-24 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-black mb-2">6+</p>
            <p className="text-blue-100 font-medium">深耕年份</p>
          </div>
          <div>
            <p className="text-5xl font-black mb-2">100+</p>
            <p className="text-blue-100 font-medium">專家顧問</p>
          </div>
          <div>
            <p className="text-5xl font-black mb-2">200%</p>
            <p className="text-blue-100 font-medium">客戶平均成長率</p>
          </div>
          <div>
            <p className="text-5xl font-black mb-2">24/7</p>
            <p className="text-blue-100 font-medium">全天候支援</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
