import React, { useState } from 'react';
import { X, Calculator, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ZakatCalculation } from '../types';

interface ZakatCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDonateZakat: (amountUSD: number, amountPKR: number) => void;
}

export const ZakatCalculatorModal: React.FC<ZakatCalculatorModalProps> = ({
  isOpen,
  onClose,
  onDonateZakat
}) => {
  if (!isOpen) return null;

  // Nisab threshold values in Pakistan (approximate rate: 1 USD = 278 PKR)
  const GOLD_RATE_PER_GRAM_PKR = 24500; // ~245,000 per tola
  const SILVER_RATE_PER_GRAM_PKR = 290;
  const USD_EXCHANGE_RATE = 278;

  const NISAB_SILVER_GRAMS = 612.36; // 52.5 tolas

  const [cashPKR, setCashPKR] = useState<number>(150000);
  const [goldGrams, setGoldGrams] = useState<number>(0);
  const [silverGrams, setSilverGrams] = useState<number>(0);
  const [businessAssetsPKR, setBusinessAssetsPKR] = useState<number>(0);
  const [liabilitiesPKR, setLiabilitiesPKR] = useState<number>(0);

  // Calculations
  const goldValuePKR = goldGrams * GOLD_RATE_PER_GRAM_PKR;
  const silverValuePKR = silverGrams * SILVER_RATE_PER_GRAM_PKR;

  const totalAssetsPKR = Math.max(0, cashPKR + goldValuePKR + silverValuePKR + businessAssetsPKR - liabilitiesPKR);
  
  const nisabThresholdPKR = NISAB_SILVER_GRAMS * SILVER_RATE_PER_GRAM_PKR; // ~177,584 PKR
  
  const meetsNisab = totalAssetsPKR >= nisabThresholdPKR;
  const zakatPayablePKR = meetsNisab ? Math.round(totalAssetsPKR * 0.025) : 0;
  const zakatPayableUSD = Math.round(zakatPayablePKR / USD_EXCHANGE_RATE);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#111111] text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F59E0B]/20 text-[#F59E0B] rounded-xl flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl">100% Shariah Compliant Zakat Calculator</h3>
              <p className="text-xs text-gray-400">Calculate 2.5% Zakat on gold, silver, cash savings, and business wealth.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          
          {/* Nisab Info Callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-amber-950 mb-0.5">Current Nisab Threshold (Silver Standard):</span>
              PKR {nisabThresholdPKR.toLocaleString()} (~${Math.round(nisabThresholdPKR / USD_EXCHANGE_RATE)} USD). If your total net zakat-eligible wealth held for one lunar year exceeds this amount, 2.5% Zakat is obligatory.
            </div>
          </div>

          {/* Input Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Cash & Bank Savings */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Cash & Bank Balance (PKR)
              </label>
              <input
                type="number"
                min="0"
                value={cashPKR || ''}
                onChange={(e) => setCashPKR(Number(e.target.value))}
                placeholder="e.g. 150000"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-gray-900 focus:outline-hidden focus:border-[#D62828] focus:bg-white"
              />
            </div>

            {/* Business Investments & Stocks */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Business Assets / Shares (PKR)
              </label>
              <input
                type="number"
                min="0"
                value={businessAssetsPKR || ''}
                onChange={(e) => setBusinessAssetsPKR(Number(e.target.value))}
                placeholder="e.g. 200000"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-gray-900 focus:outline-hidden focus:border-[#D62828] focus:bg-white"
              />
            </div>

            {/* Gold in Grams */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex justify-between">
                <span>Gold Weight (Grams)</span>
                <span className="text-gray-400 font-normal">1 Tola = 11.66g</span>
              </label>
              <input
                type="number"
                min="0"
                value={goldGrams || ''}
                onChange={(e) => setGoldGrams(Number(e.target.value))}
                placeholder="e.g. 10"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-gray-900 focus:outline-hidden focus:border-[#D62828] focus:bg-white"
              />
              {goldValuePKR > 0 && (
                <p className="text-[11px] text-gray-500 mt-1">Est Value: PKR {goldValuePKR.toLocaleString()}</p>
              )}
            </div>

            {/* Silver in Grams */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex justify-between">
                <span>Silver Weight (Grams)</span>
                <span className="text-gray-400 font-normal">1 Tola = 11.66g</span>
              </label>
              <input
                type="number"
                min="0"
                value={silverGrams || ''}
                onChange={(e) => setSilverGrams(Number(e.target.value))}
                placeholder="e.g. 50"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-gray-900 focus:outline-hidden focus:border-[#D62828] focus:bg-white"
              />
              {silverValuePKR > 0 && (
                <p className="text-[11px] text-gray-500 mt-1">Est Value: PKR {silverValuePKR.toLocaleString()}</p>
              )}
            </div>

            {/* Deductible Liabilities */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Deductible Debts & Immediate Liabilities (PKR)
              </label>
              <input
                type="number"
                min="0"
                value={liabilitiesPKR || ''}
                onChange={(e) => setLiabilitiesPKR(Number(e.target.value))}
                placeholder="e.g. 20000"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-gray-900 focus:outline-hidden focus:border-[#D62828] focus:bg-white"
              />
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="bg-[#111111] text-white rounded-2xl p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 pb-4 gap-2">
              <div>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Net Zakat-Eligible Wealth</span>
                <div className="text-xl font-bold text-gray-200">
                  PKR {totalAssetsPKR.toLocaleString()} <span className="text-xs font-normal text-gray-400">(~${Math.round(totalAssetsPKR / USD_EXCHANGE_RATE)} USD)</span>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Nisab Status</span>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  {meetsNisab ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Eligible for Zakat
                    </span>
                  ) : (
                    <span className="text-amber-400">Below Nisab Threshold</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#F59E0B] font-bold uppercase tracking-widest">Calculated Zakat Due (2.5%)</span>
                <div className="text-3xl font-serif font-extrabold text-white flex items-baseline gap-2">
                  <span>PKR {zakatPayablePKR.toLocaleString()}</span>
                  <span className="text-sm font-sans font-medium text-gray-400">(${zakatPayableUSD} USD)</span>
                </div>
              </div>

              <button
                disabled={zakatPayablePKR <= 0}
                onClick={() => {
                  onDonateZakat(zakatPayableUSD, zakatPayablePKR);
                  onClose();
                }}
                className="w-full sm:w-auto bg-[#D62828] disabled:bg-gray-700 disabled:cursor-not-allowed hover:bg-[#b51f1f] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer shrink-0"
              >
                <span>Fulfill Zakat Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
