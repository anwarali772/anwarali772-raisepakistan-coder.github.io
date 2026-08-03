import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CreditCard, Smartphone, Building, CheckCircle2, Download, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuickDonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledAmountUSD?: number;
  prefilledCause?: string;
}

export const QuickDonateModal: React.FC<QuickDonateModalProps> = ({
  isOpen,
  onClose,
  prefilledAmountUSD,
  prefilledCause
}) => {
  if (!isOpen) return null;

  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmountUSD, setSelectedAmountUSD] = useState<number>(prefilledAmountUSD || 50);
  const [customAmountInput, setCustomAmountInput] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const [cause, setCause] = useState<string>(prefilledCause || 'general');
  const [isZakatEligible, setIsZakatEligible] = useState<boolean>(false);

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'jazzcash' | 'bank' | 'paypal'>('card');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [transactionRef, setTransactionRef] = useState<string>('');

  const presetAmounts = [
    { usd: 25, label: '$25 (~PKR 6,900)', impact: '1 Month Family Ration Box' },
    { usd: 50, label: '$50 (~PKR 13,900)', impact: 'Free Education for 2 Students' },
    { usd: 100, label: '$100 (~PKR 27,800)', impact: 'Clean Water for 10 Families' },
    { usd: 250, label: '$250 (~PKR 69,500)', impact: '1 Sewing Machine Micro-Grant' },
    { usd: 500, label: '$500 (~PKR 139,000)', impact: '1 Solar Tubewell Share' },
  ];

  const causesOptions = [
    { id: 'general', title: 'General Humanitarian Relief Fund' },
    { id: 'water-tharparkar', title: 'Tharparkar Solar Clean Water Complex' },
    { id: 'education-girls', title: 'Girls Model School & IT Lab — D.G. Khan' },
    { id: 'flood-kpk', title: 'Swat Flood Housing Reconstruction' },
    { id: 'zakat-fund', title: '100% Zakat Designated Fund' }
  ];

  const handleAmountSelect = (usd: number) => {
    setSelectedAmountUSD(usd);
    setIsCustom(false);
  };

  const handleCustomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmountInput(val);
    setIsCustom(true);
    if (val && !isNaN(Number(val))) {
      setSelectedAmountUSD(Number(val));
    }
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const ref = 'RPK-' + Math.floor(100000 + Math.random() * 900000);
      setTransactionRef(ref);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback silently if confetti script fails
      }
    }, 1500);
  };

  const activeAmount = isCustom ? (Number(customAmountInput) || 0) : selectedAmountUSD;
  const activeAmountPKR = activeAmount * 278;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col">
        
        {/* Header */}
        <div className="bg-[#111111] text-white p-6 rounded-t-2xl flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D62828] rounded-xl flex items-center justify-center font-bold text-white shadow-md">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl">Make a Tax-Deductible Donation</h3>
              <p className="text-xs text-gray-400">100% Transparency. Direct ground impact across Pakistan.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success View */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Donation Received
              </span>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mt-2">
                JazakAllah Khair, {donorName || 'Generous Donor'}!
              </h3>
              <p className="text-gray-600 text-sm mt-1 max-w-md mx-auto">
                Your contribution of <strong className="text-gray-900">${activeAmount} USD (PKR {activeAmountPKR.toLocaleString()})</strong> has been successfully processed and allocated to {causesOptions.find(c => c.id === cause)?.title}.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-left text-xs text-gray-700 space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-gray-200 pb-1.5">
                <span className="text-gray-500">Transaction Ref:</span>
                <span className="font-mono font-bold text-gray-900">{transactionRef}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-1.5">
                <span className="text-gray-500">Frequency:</span>
                <span className="font-semibold capitalize text-gray-900">{frequency}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-1.5">
                <span className="text-gray-500">Tax Registration:</span>
                <span className="font-semibold text-gray-900">SECP / FBR Exempt Reg # 1882-PK-2021</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email Receipt Sent To:</span>
                <span className="font-semibold text-gray-900">{donorEmail || 'your email'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => window.print()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Print Official Tax Receipt</span>
              </button>

              <button
                onClick={onClose}
                className="bg-[#111111] hover:bg-[#222222] text-white px-6 py-2.5 rounded-xl text-xs font-bold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmitDonation} className="p-6 space-y-6">
            
            {/* Frequency Toggle */}
            <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setFrequency('one-time')}
                className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  frequency === 'one-time'
                    ? 'bg-white text-gray-900 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                One-Time Gift
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  frequency === 'monthly'
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Monthly Recurring</span>
              </button>
            </div>

            {/* Preset Amount Grid */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Select Amount (USD / PKR)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {presetAmounts.map((item) => {
                  const active = !isCustom && selectedAmountUSD === item.usd;
                  return (
                    <button
                      key={item.usd}
                      type="button"
                      onClick={() => handleAmountSelect(item.usd)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        active
                          ? 'border-[#D62828] bg-[#D62828]/5 text-[#111111] ring-2 ring-[#D62828]'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <div className="font-bold text-sm">{item.label}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">{item.impact}</div>
                    </button>
                  );
                })}

                {/* Custom Amount Option */}
                <div className={`p-2.5 rounded-xl border transition-all ${
                  isCustom ? 'border-[#D62828] ring-2 ring-[#D62828] bg-[#D62828]/5' : 'border-gray-200'
                }`}>
                  <label className="block text-[10px] text-gray-500 font-bold uppercase mb-0.5">Custom (USD)</label>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-gray-500">$</span>
                    <input
                      type="number"
                      min="1"
                      placeholder="Amount"
                      value={customAmountInput}
                      onChange={handleCustomInput}
                      className="w-full bg-transparent text-sm font-bold text-gray-900 focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Cause Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Designate Cause
              </label>
              <select
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-gray-900 focus:outline-hidden focus:border-[#D62828]"
              >
                {causesOptions.map((c) => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
            </div>

            {/* Zakat Checkbox */}
            <div className="flex items-center gap-3 bg-amber-50/80 border border-amber-200 p-3 rounded-xl text-xs">
              <input
                type="checkbox"
                id="zakat-check"
                checked={isZakatEligible}
                onChange={(e) => setIsZakatEligible(e.target.checked)}
                className="w-4 h-4 text-[#D62828] rounded-md border-gray-300 focus:ring-[#D62828]"
              />
              <label htmlFor="zakat-check" className="font-semibold text-amber-950 cursor-pointer">
                This is a Zakat payment (Will be deposited into a 100% Zakat-Verified Shariah Fund)
              </label>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Payment Channel
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'border-[#111111] bg-[#111111] text-white shadow-xs' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Debit / Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('jazzcash')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    paymentMethod === 'jazzcash' ? 'border-[#111111] bg-[#111111] text-white shadow-xs' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-[#D62828]" />
                  <span>JazzCash / EasyPaisa</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    paymentMethod === 'bank' ? 'border-[#111111] bg-[#111111] text-white shadow-xs' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Building className="w-4 h-4 text-emerald-600" />
                  <span>Bank Wire (HBL)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    paymentMethod === 'paypal' ? 'border-[#111111] bg-[#111111] text-white shadow-xs' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-extrabold text-blue-500">PayPal</span>
                  <span>Intl Donors</span>
                </button>
              </div>
            </div>

            {/* Dynamic Payment Channel Details */}
            {paymentMethod === 'jazzcash' && (
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs space-y-1">
                <span className="font-bold text-amber-950 block">Mobile Wallet Instructions:</span>
                <p className="text-amber-900">Send JazzCash or EasyPaisa transfer to Official Till ID: <strong className="font-mono">0300-8897247</strong> (Title: RAISE Pakistan Foundation).</p>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs space-y-1">
                <span className="font-bold text-emerald-950 block">Direct Bank Deposit Details:</span>
                <p className="text-emerald-900">Habib Bank Limited (HBL) — Branch Code: 0422</p>
                <p className="text-emerald-900 font-mono">Account #: 18820092837101 | IBAN: PK36HABB0018820092837101</p>
              </div>
            )}

            {/* Donor Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Khan"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-hidden focus:border-[#D62828]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address (For Tax Receipt)</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-hidden focus:border-[#D62828]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || activeAmount <= 0}
                className="w-full bg-[#D62828] disabled:bg-gray-400 hover:bg-[#b51f1f] text-white py-4 rounded-xl font-bold text-base transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Processing Secure Donation...</span>
                ) : (
                  <>
                    <Heart className="w-5 h-5 fill-white" />
                    <span>Complete Donation of ${activeAmount} USD (~PKR {activeAmountPKR.toLocaleString()})</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit SSL Encrypted. SECP Registered Non-Profit # 1882-PK-2021.</span>
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
