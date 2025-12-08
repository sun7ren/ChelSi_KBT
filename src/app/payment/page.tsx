'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/components/ui/AuthLayout';

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!cardNumber || !expiryDate || !cvv || !amount) {
      setError('Harap isi semua kolom.');
      return;
    }

    // Simulate payment processing
    // In a real app, integrate with payment gateway like Stripe
    alert('Payment processed successfully!');
    router.push('/logged_in'); // Or wherever after payment
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <div className="mb-10 text-left">
          <h2 className="font-bold text-4xl text-blue-900">
            Detail Pembayaran
          </h2>
          <p className="text-gray-600 mt-3">
            Masukkan informasi pembayaran Anda untuk melanjutkan.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Paket Langganan</h3>
          <ul className="space-y-2 mt-3">
            <li className="text-gray-700">Harian: Rp 5.000</li>
            <li className="text-gray-700">Bulanan: Rp 155.000</li>
            <li className="text-gray-700">Tahunan: Rp 1.860.000</li>
          </ul>
        </div>

        <form onSubmit={handlePayment} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center text-sm">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-gray-700 font-semibold">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="100.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="bg-white w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardNumber" className="text-gray-700 font-semibold">
              Card Number
            </Label>
            <Input
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              className="bg-white w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex space-x-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="expiryDate" className="text-gray-700 font-semibold">
                Expiry Date
              </Label>
              <Input
                id="expiryDate"
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
                className="bg-white w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2 flex-1">
              <Label htmlFor="cvv" className="text-gray-700 font-semibold">
                CVV
              </Label>
              <Input
                id="cvv"
                type="text"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                className="bg-white w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-800 text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors text-base"
          >
            Pay Now
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
}
