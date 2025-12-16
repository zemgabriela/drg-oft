import React, { useState, useMemo } from 'react';
import { Search, Eye, Filter } from 'lucide-react';
import { procedures, categories } from "./data/procedures";


const OftalmologiaDRGHelper = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProcedures = useMemo(() => {
    return procedures.filter(proc => {
      const matchesSearch = proc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          proc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          proc.codes.some(code => code.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || proc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const multiCodeProcedures = procedures.filter(p => !p.singleCode);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-10 h-10 text-indigo-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Oftalmológia - DRG Pomocník</h1>
              <p className="text-gray-600">Prehľad najčastejších oftalmologických výkonov a DRG kódov</p>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Vyhľadať výkon alebo kód..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">Všetky kategórie</option>
                {categories.slice(1).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm text-gray-600">Celkovo výkonov</div>
            <div className="text-3xl font-bold text-indigo-600">{procedures.length}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm text-gray-600">Výkony s viacerými kódmi</div>
            <div className="text-3xl font-bold text-orange-600">{multiCodeProcedures.length}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm text-gray-600">Kategórií</div>
            <div className="text-3xl font-bold text-green-600">{categories.length - 1}</div>
          </div>
        </div>

        {/* Multi-code Procedures Highlight */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg shadow p-4 mb-6">
          <h2 className="text-lg font-semibold text-orange-900 mb-2">
            ⚠️ Výkony vyžadujúce viacero DRG kódov ({multiCodeProcedures.length})
          </h2>
          <p className="text-sm text-orange-800 mb-3">
            Tieto zákroky vyžadujú zakódovanie viacerých výkonov. Pozor na správne kódovanie!
          </p>
          <div className="space-y-2">
            {multiCodeProcedures.slice(0, 5).map((proc, idx) => (
              <div key={idx} className="bg-white rounded p-2 text-sm">
                <div className="font-medium text-gray-800">{proc.name}</div>
                <div className="text-orange-600 font-mono text-xs">
                  {proc.codes.join(' + ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Procedures List */}
        <div className="space-y-4">
          {filteredProcedures.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
              Neboli najdené žiadne výkony zodpovedajúce vášmu hľadaniu.
            </div>
          ) : (
            filteredProcedures.map((proc, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg shadow-md p-5 border-l-4 ${
                  proc.singleCode ? 'border-green-500' : 'border-orange-500'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs font-semibold rounded bg-indigo-100 text-indigo-700">
                        {proc.category}
                      </span>
                      {!proc.singleCode && (
                        <span className="px-2 py-1 text-xs font-semibold rounded bg-orange-100 text-orange-700">
                          Viacero kódov
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {proc.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{proc.description}</p>
                    <p className="text-xs text-gray-500 italic">{proc.notes}</p>
                  </div>
                  <div className="md:text-right">
                    <div className="text-xs text-gray-500 mb-1">DRG kód(y):</div>
                    <div className="space-y-1">
                      {proc.codes.map((code, cIdx) => (
                        <div
                          key={cIdx}
                          className="font-mono text-sm font-semibold bg-gray-100 px-3 py-1 rounded"
                        >
                          {code}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
          <strong>Poznámka:</strong> Tento zoznam obsahuje najčastejšie oftalmologické výkony. Pre aktuálne a úplné 
          informácie o DRG kódoch vždy konzultujte oficiálny zoznam na <a href="https://www.cksdrg.sk" className="underline font-semibold" target="_blank" rel="noopener noreferrer">www.cksdrg.sk</a> a aktuálne Pravidlá kódovania.
        </div>
      </div>
    </div>
  );
};

export default OftalmologiaDRGHelper;