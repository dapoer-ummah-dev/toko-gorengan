import { Clock, Droplet, Flame, Home } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'Digoreng Fresh Setiap Hari',
    description: 'Semua gorengan dimasak sesuai jadwal produksi harian, bukan stok kemarin.',
  },
  {
    icon: Droplet,
    title: 'Minyak Baru, Bukan Bekas',
    description: 'Kami selalu pakai minyak baru supaya rasa gorengan tetap ringan dan renyah.',
  },
  {
    icon: Clock,
    title: 'Waktu Antar Mengikuti Produksi',
    description:
      'Pesanan diproses begitu gorengan matang, jadi sampai ke rumah dalam keadaan hangat.',
  },
  {
    icon: Home,
    title: 'Dibuat di Dapur Rumahan',
    description: 'Diracik langsung oleh Dapoer Ummah, bukan hasil produksi massal pabrik.',
  },
];

export default function InfoSection() {
  return (
    <section className="bg-brown-700 px-4 py-12 text-cream sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Kenapa Pilih Dapoer Ummah?
          </h2>
          <p className="mt-1 text-sm text-brown-100">
            Gorengan rumahan yang dibuat dengan bahan dan proses yang kami percaya sendiri.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl bg-brown-800/60 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-brown-900">
                <Icon size={18} />
              </span>
              <h3 className="mt-3 font-display text-sm font-bold">{title}</h3>
              <p className="mt-1 text-xs text-brown-100/90">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
