import { ArrowDown, Flame } from 'lucide-react';

export default function Hero() {
  const handleScrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-cream to-cream px-4 pb-16 pt-12 sm:px-6 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-200/50 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-40 h-48 w-48 rounded-full bg-chili-100/60 blur-2xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-chili-500 shadow-sm">
          <Flame size={14} />
          Digoreng fresh, bukan gorengan kemarin
        </span>

        <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-brown-700 sm:text-4xl md:text-5xl">
          Gorengan Renyah & Hangat ala Dapoer Ummah, Siap Antar ke Rumah!
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm text-brown-500 sm:text-base">
          Bakwan, risol, tahu isi, sampai pisang goreng, semua dimasak dalam porsi kecil setiap
          hari supaya sampai ke rumahmu dalam keadaan paling nikmat.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleScrollToMenu}
            className="flex items-center gap-2 rounded-full bg-chili-500 px-7 py-3 font-semibold text-white shadow-warm transition hover:bg-chili-600 active:scale-95"
          >
            Pesan Sekarang
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
