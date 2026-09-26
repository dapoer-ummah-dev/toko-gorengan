import { ChefHat, Clock, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function Navbar({ onCartClick }) {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-brown-100 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-cream shadow-warm">
            <ChefHat size={20} strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-bold text-brown-700 sm:text-xl">
            Dapoer Ummah
          </span>
        </div>

        <div className="hidden items-center gap-1.5 rounded-full bg-brown-50 px-3 py-1.5 text-xs font-medium text-brown-600 md:flex">
          <Clock size={14} />
          <span>Jam Operasional: Menyesuaikan Jadwal Produksi Harian</span>
        </div>

        <button
          type="button"
          onClick={onCartClick}
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brown-700 text-cream transition hover:bg-brown-800 active:scale-95"
          aria-label="Buka keranjang belanja"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-chili-500 px-1 text-[11px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-1.5 border-t border-brown-100 bg-brown-50 px-4 py-1.5 text-center text-[11px] font-medium text-brown-600 md:hidden">
        <Clock size={12} className="shrink-0" />
        <span>Jam Operasional: Menyesuaikan Jadwal Produksi Harian</span>
      </div>
    </header>
  );
}
