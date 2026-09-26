/**
 * Helper untuk memformat angka menjadi format mata uang Rupiah.
 * Contoh: formatRupiah(2000) -> "Rp2.000"
 */
const rupiahFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatRupiah(value) {
  return rupiahFormatter.format(value);
}
