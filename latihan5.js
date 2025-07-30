class Student {
  constructor(name, nim, department, year) {
    this.name = name;
    this.nim = nim;
    this.department = department;
    this.year = year;
  }

  introduce() {
    console.log(`Halo, saya ${this.name}, mahasiswa ${this.department} angkatan ${this.year}.`);
  }

  isSenior() {
    return this.year < 2025;
  }
}


const mahasiswa1 = new Student("Hanseen", "2203010012", "Informatika", 2022);


mahasiswa1.introduce();


if (mahasiswa1.isSenior()) {
  console.log("Mahasiswa ini adalah senior.");
} else {
  console.log("Mahasiswa ini belum senior.");
}
