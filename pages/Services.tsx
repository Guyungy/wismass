
import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">服務方案</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            從策略到落地，我們提供全鏈路的專業營銷解決方案。
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="max-w-7xl mx-auto px-4 mt-24 space-y-32">
        {SERVICES.map((service, index) => {
          const IconComponent = (LucideIcons as any)[service.icon];
          return (
            <div key={service.id} className={`flex flex-col lg:items-center gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="lg:w-1/2 space-y-8">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  <IconComponent size={32} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}。我們的團隊擁有多年的行業經驗，能根據您的具體需求提供定制化的服務，確保每一分預算都能轉化為可衡量的成長指標。
                </p>
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900">核心服務項目：</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {service.details.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl text-slate-700 font-medium text-sm shadow-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
                <Link to="/contact" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                  獲取此方案報價
                </Link>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={`https://picsum.photos/seed/${service.id}/800/600`} 
                  alt={service.title} 
                  className="rounded-3xl shadow-xl border border-slate-100"
                />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Services;
