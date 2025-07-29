double luasLingkaran(double jari) {
  const double pi = 3.14;
  return pi * jari * jari;
}

void main() {
  double jari = 7; // contoh nilai jari-jari
  double luas = luasLingkaran(jari);
  print("Luas lingkaran dengan jari-jari $jari adalah $luas");
}