import React, { useState } from 'react';
import { PageId } from '../types';
import { Heart, Calculator, ShieldCheck, CheckCircle2, CreditCard, Smartphone, Building, ArrowRight, Download, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DonatePageProps {
  onNavigate: (page: PageId) => void;
  onOpenZakatCalc: () => void;
}

export const DonatePage: React.FC<DonatePageProps> = ({ onNavigate, onOpenZakatCalc }) => {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmountUSD, setSelectedAmountUSD] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  
  const [cause, setCause] = useState<string>('water-tharparkar');
  const [isZakat, setIsZakat] = useState<boolean>(false);

  const [paymentChannel, setPaymentChannel] = useState<'card' | 'jazzcash' | 'bank' | 'paypal'>('card');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);
  const [trxRef, setTrxRef] = useState('');

  const activeUSD = isCustom ? (Number(customAmount) || 0) : selectedAmountUSD;
  const activePKR = activeUSD * 278;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'RPK-DON-' + Math.floor(100000 + Math.random() * 900000);
    setTrxRef(ref);
    setIsSuccess(true);

    try {
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.5 } });
    } catch (err) {}
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D62828] text-xs font-bold uppercase tracking-widest bg-[#D62828]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Tax-Deductible Contributions
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
            Support Ground Humanitarian Impact
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mt-3">
            Your generous donation directly funds solar clean water filtration, girls' digital schools, mobile clinics, and disaster rehabilitation across Pakistan.
          </p>

          <div className="pt-6 flex justify-center">
            <button
              onClick={onOpenZakatCalc}
              className="bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#F59E0B] hover:bg-[#F59E0B]/25 px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Calculator className="w-4 h-4" />
              <span>Use 100% Shariah Compliant Zakat Calculator</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Donation Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 sm:p-12">
          
          {isSuccess ? (
            <div className="text-center space-y-6 py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  Tax Receipt Generated
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#111111] mt-2">
                  JazakAllah Khair for Your Generosity!
                </h2>
                <p className="text-gray-600 text-sm max-w-lg mx-auto mt-2">
                  Your donation of <strong className="text-gray-900">${activeUSD} USD (PKR {activePKR.toLocaleString()})</strong> has been processed securely under Transaction Reference <strong className="text-[#D62828] font-mono">{trxRef}</strong>.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left text-xs text-gray-800 space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Donor Name:</span>
                  <span className="font-bold">{donorName || 'Generous Supporter'}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Donor Email:</span>
                  <span className="font-bold">{donorEmail}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Frequency:</span>
                  <span className="font-bold capitalize">{frequency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tax Registration:</span>
                  <span className="font-bold text-emerald-700">SECP / FBR Exempt Reg # 1882-PK-2021</span>
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Print Tax Exemption Receipt</span>
                </button>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-[#111111] text-white px-6 py-3 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Make Another Donation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Frequency Toggle */}
              <div className="flex justify-center">
                <div className="bg-gray-100 p-1.5 rounded-2xl inline-flex gap-2">
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      frequency === 'one-time'
                        ? 'bg-white text-gray-900 shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    One-Time Gift
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      frequency === 'monthly'
                        ? 'bg-[#111111] text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Monthly Recurring Partner</span>
                  </button>
                </div>
              </div>

              {/* Amount Cards */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                  1. Select Giving Amount
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { usd: 25, impact: '1 Month Family Ration Box' },
                    { usd: 50, impact: '2 Students Schooling & Books' },
                    { usd: 100, impact: 'Clean Water for 10 Families' },
                    { usd: 250, impact: '1 Sewing Machine Micro-Grant' },
                    { usd: 500, impact: '1 Solar Tubewell Share' },
                  ].map((item) => {
                    const active = !isCustom && selectedAmountUSD === item.usd;
                    return (
                      <button
                        key={item.usd}
                        type="button"
                        onClick={() => { setSelectedAmountUSD(item.usd); setIsCustom(false); }}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          active
                            ? 'border-[#D62828] bg-[#D62828]/5 text-[#111111] ring-2 ring-[#D62828]'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        <div className="font-serif font-bold text-lg">${item.usd} USD</div>
                        <div className="text-[11px] text-gray-500 font-medium mt-0.5">~PKR {(item.usd * 278).toLocaleString()}</div>
                        <div className="text-[10px] text-[#D62828] font-bold mt-2">{item.impact}</div>
                      </button>
                    );
                  })}

                  {/* Custom Option */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    isCustom ? 'border-[#D62828] ring-2 ring-[#D62828] bg-[#D62828]/5' : 'border-gray-200'
                  }`}>
                    <label className="block text-[10px] text-gray-500 font-bold uppercase mb-1">Custom Amount (USD)</label>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-gray-500">$</span>
                      <input
                        type="number"
                        min="1"
                        placeholder="Amount"
                        value={customAmount}
                        onChange={(e) => { setCustomAmount(e.target.value); setIsCustom(true); }}
                        className="w-full bg-transparent font-bold text-gray-900 text-lg focus:outline-hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Designation Cause */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  2. Choose Cause / Project
                </label>
                <select
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 focus:outline-hidden focus:border-[#D62828]"
                >
                  <option value="water-tharparkar">Tharparkar Solar Clean Water Complex (Urgent)</option>
                  <option value="girls-education">Girls Model School & IT Lab — D.G. Khan</option>
                  <option value="flood-rehab">Swat Flood Permanent Housing Reconstruction</option>
                  <option value="women-empowerment">Women Vocational Sewing Machine Micro-Grants</option>
                  <option value="general-relief">General Emergency Relief & Food Security</option>
                  <option value="zakat-fund">100% Zakat Designated Account</option>
                </select>
              </div>

              {/* Zakat Checkbox */}
              <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs">
                <input
                  type="checkbox"
                  id="zakat-check-page"
                  checked={isZakat}
                  onChange={(e) => setIsZakat(e.target.checked)}
                  className="w-4 h-4 text-[#D62828] rounded-md border-gray-300 focus:ring-[#D62828]"
                />
                <label htmlFor="zakat-check-page" className="font-bold text-amber-950 cursor-pointer">
                  This contribution is Zakat (Allocated strictly to Shariah-compliant eligible beneficiaries)
                </label>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  3. Select Payment Method
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'card', name: 'Credit / Debit Card', icon: CreditCard },
                    { id: 'jazzcash', name: 'JazzCash / EasyPaisa', icon: Smartphone },
                    { id: 'bank', name: 'HBL Bank Wire', icon: Building },
                    { id: 'paypal', name: 'PayPal (Intl)', icon: CreditCard },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPaymentChannel(p.id as any)}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        paymentChannel === p.id 
                          ? 'border-[#111111] bg-[#111111] text-white shadow-md' 
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <p.icon className="w-5 h-5" />
                      <span>{p.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Payment Channel Guidance */}
              {paymentChannel === 'jazzcash' && (
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs space-y-1">
                  <span className="font-bold text-amber-950 block">Mobile Wallet Instructions:</span>
                  <p className="text-amber-900">Send JazzCash / EasyPaisa payment to Official Till ID: <strong className="font-mono">0300-8897247</strong> (Account Title: RAISE Pakistan Foundation).</p>
                </div>
              )}

              {paymentChannel === 'bank' && (
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-xs space-y-1">
                  <span className="font-bold text-emerald-950 block">Direct HBL Bank Wire Instructions:</span>
                  <p className="text-emerald-900">Bank: Habib Bank Limited (HBL) — Branch Code: 0422</p>
                  <p className="text-emerald-900 font-mono">Account #: 18820092837101 | IBAN: PK36HABB0018820092837101</p>
                </div>
              )}

              {/* Donor Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Ali"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#D62828]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Email Address (For Tax Receipt)</label>
                  <input
                    type="email"
                    required
                    placeholder="fatima@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#D62828]"
                  />
                </div>
              </div>

              {/* Final Submit */}
              <button
                type="submit"
                disabled={activeUSD <= 0}
                className="w-full bg-[#D62828] hover:bg-[#b51f1f] text-white py-4 rounded-2xl font-bold text-base shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>Donate ${activeUSD} USD (~PKR {activePKR.toLocaleString()}) Now</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>256-Bit SSL Encrypted. SECP & FBR Tax Exemption Reg # 1882-PK-2021.</span>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
};
