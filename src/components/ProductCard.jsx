import { Plus } from 'lucide-react';
import { formatRupiah } from '../utils/formatCurrency.js';
import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brown-100 transition hover:shadow-warm">
      <div className="aspect-[4/3] w-full overflow-hidden bg-brown-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-3.5">
        <h3 className="font-display text-base font-bold text-brown-700">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-brown-400">{product.description}</p>

        <div className="mt-3 flex flex-1 flex-col justify-end gap-2">
          <span className="font-display text-base font-bold text-chili-500">
            {formatRupiah(product.price)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex items-center justify-center gap-1 rounded-full bg-amber-500 px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-amber-600 active:scale-95 sm:text-xs"
          >
            <Plus size={14} className="shrink-0" />
            <span>Tambah ke Keranjang</span>
          </button>
        </div>
      </div>
    </div>
  );
}
