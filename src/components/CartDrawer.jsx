import { useState } from 'react';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { formatRupiah } from '../utils/formatCurrency.js';

// Nomor WhatsApp dummy - ganti dengan nomor asli Dapoer Ummah
const WHATSAPP_NUMBER = '6281234567890';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, cartTotal, clearCart } =
    useCart();

  const [buyer, setBuyer] = useState({
    name: '',
    whatsapp: '',
    address: '',
    note: '',
  });
  const [formError, setFormError] = useState('');

  const handleChange = (field) => (event) => {
    setBuyer((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleScrollToMenu = () => {
    onClose();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buildWhatsAppMessage = () => {
    const itemLines = cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} x${item.quantity} = ${formatRupiah(
            item.price * item.quantity
          )}`
      )
      .join('\n');

    return [
      'Halo Dapoer Ummah, saya mau pesan:',
      '',
      itemLines,
      '',
      `Total: ${formatRupiah(cartTotal)}`,
      '',
      `Nama: ${buyer.name}`,
      `No. WhatsApp: ${buyer.whatsapp}`,
      `Alamat: ${buyer.address}`,
      `Catatan: ${buyer.note || '-'}`,
      '',
      'Mohon konfirmasi pesanan saya. Terima kasih!',
    ].join('\n');
  };

  const handleSendOrder = () => {
    if (!buyer.name.trim() || !buyer.whatsapp.trim() || !buyer.address.trim()) {
      setFormError('Nama, nomor WhatsApp, dan alamat wajib diisi ya.');
      return;
    }
    setFormError('');

    const message = buildWhatsAppMessage();
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-brown-900/40 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-brown-100 px-4 py-4">
          <h2 className="font-display text-lg font-bold text-brown-700">Keranjang Kamu</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-brown-500 hover:bg-brown-50"
            aria-label="Tutup keranjang"
          >
            <X size={20} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brown-50 text-brown-300">
              <ShoppingBag size={28} />
            </span>
            <p className="text-sm text-brown-500">
              Keranjang masih kosong, yuk pilih gorengan favoritmu!
            </p>
            <button
              type="button"
              onClick={handleScrollToMenu}
              className="rounded-full bg-brown-700 px-5 py-2.5 text-sm font-semibold text-cream hover:bg-brown-800"
            >
              Tutup
            </button>
          </div>
        ) : (
          <>
            <div className="cart-scroll flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl bg-white p-2.5 ring-1 ring-brown-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-brown-700">{item.name}</p>
                    <p className="text-xs text-brown-400">{formatRupiah(item.price)} / pcs</p>

                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-brown-50 text-brown-600 hover:bg-brown-100"
                        aria-label={`Kurangi jumlah ${item.name}`}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-5 text-center text-sm font-semibold text-brown-700">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-brown-50 text-brown-600 hover:bg-brown-100"
                        aria-label={`Tambah jumlah ${item.name}`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm font-bold text-chili-500">
                      {formatRupiah(item.price * item.quantity)}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-brown-300 hover:text-chili-500"
                      aria-label={`Hapus ${item.name} dari keranjang`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={clearCart}
                className="text-xs font-medium text-brown-400 underline-offset-2 hover:underline"
              >
                Kosongkan keranjang
              </button>

              <div className="space-y-3 rounded-xl bg-white p-3.5 ring-1 ring-brown-100">
                <p className="text-sm font-semibold text-brown-700">Data Pengiriman</p>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-brown-500" htmlFor="buyer-name">
                    Nama
                  </label>
                  <input
                    id="buyer-name"
                    type="text"
                    value={buyer.name}
                    onChange={handleChange('name')}
                    placeholder="Nama lengkap kamu"
                    className="w-full rounded-lg border border-brown-100 px-3 py-2 text-sm outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-brown-500" htmlFor="buyer-whatsapp">
                    Nomor WhatsApp
                  </label>
                  <input
                    id="buyer-whatsapp"
                    type="tel"
                    value={buyer.whatsapp}
                    onChange={handleChange('whatsapp')}
                    placeholder="08xxxxxxxxxx"
                    className="w-full rounded-lg border border-brown-100 px-3 py-2 text-sm outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-brown-500" htmlFor="buyer-address">
                    Alamat Pengiriman
                  </label>
                  <textarea
                    id="buyer-address"
                    rows={2}
                    value={buyer.address}
                    onChange={handleChange('address')}
                    placeholder="Nama jalan, nomor rumah, patokan"
                    className="w-full resize-none rounded-lg border border-brown-100 px-3 py-2 text-sm outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-brown-500" htmlFor="buyer-note">
                    Catatan Tambahan
                  </label>
                  <textarea
                    id="buyer-note"
                    rows={2}
                    value={buyer.note}
                    onChange={handleChange('note')}
                    placeholder="Contoh: pedas terpisah, tanpa saus, dll (opsional)"
                    className="w-full resize-none rounded-lg border border-brown-100 px-3 py-2 text-sm outline-none focus:border-amber-500"
                  />
                </div>

                {formError && <p className="text-xs font-medium text-chili-500">{formError}</p>}
              </div>
            </div>

            <div className="border-t border-brown-100 bg-white px-4 py-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-brown-500">Total Pesanan</span>
                <span className="font-display text-lg font-bold text-brown-700">
                  {formatRupiah(cartTotal)}
                </span>
              </div>
              <button
                type="button"
                onClick={handleSendOrder}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-warm transition hover:bg-green-700 active:scale-95"
              >
                Kirim Pesanan via WhatsApp
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
