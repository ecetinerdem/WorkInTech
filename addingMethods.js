function carSimulator(marka, model, kilometre, fiyat) {
    const car = {
      marka: marka,
      model: model,
      kilometre: kilometre,
      fiyat: fiyat,
      depo: 50,
      getPrice: function () {
        return 'Arabanın güncel piyasa değeri ' + this.fiyat + " TL'dir.";
      },
      refuel: function (fuel) {
        this.depo = this.depo + fuel;
        if (this.depo > 100) {
          this.depo = 100;
        }
        return 'Depo %' + this.depo + ' doludur.';
      },
      drive: function (km) {
        this.kilometre += km;
        this.depo -= (km * 5) / 100;
        this.fiyat -= (km * 50) / 100;
        return "Araba'nın güncel kilometresi: " + this.kilometre;
      },
    };
  
    return car;
  }




