import 'dart:io';

void main() {
  
  stdout.write("Masukkan sebuah angka: ");
  int angka = int.parse(stdin.readLineSync()!);

  
  if (angka % 2 == 0) {
    print("Angka $angka adalah GENAP.");
  } else {
    print("Angka $angka adalah GANJIL.");
  }
}