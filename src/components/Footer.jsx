import { Clock, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brown-100 bg-cream-soft px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <span className="font-display text-lg font-bold text-brown-700">Dapoer Ummah</span>

        <div className="flex items-center gap-1.5 text-xs text-brown-500">
          <Clock size={14} />
          <span>Jam Operasional: Menyesuaikan Jadwal Produksi Harian</span>
        </div>

        <p className="flex items-center gap-1 text-xs text-brown-400">
          Dibuat dengan
          <Heart size={12} className="fill-chili-500 text-chili-500" />
          oleh Dapoer Ummah
        </p>

        <p className="text-xs text-brown-300">
          © {year} Dapoer Ummah. Semua hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
