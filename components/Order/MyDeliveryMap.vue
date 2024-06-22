<template>
  <div class="delivery__map" id="mapContainer" ref="mapContainer"></div>
</template>

<script>
export default {
  props: {
    arrPlacemarkAndInfo: Array,
    changeMap: {},
  },
  data() {
    return {
      sizeEl: "",
      useCursor: useCursor(),
      placeMarksArr: [],
      mapYandex: [],
    };
  },
  mounted() {
    ymaps.ready(() => {
      const objSett = this.arrPlacemarkAndInfo[0];
      let map = new ymaps.Map("mapContainer", {
        center: [objSett.location.latitude, objSett.location.longitude],
        zoom: 11,
        controls: [],
        suppressMapOpenBlock: true,
        activeIdx: 0,
      });
      this.arrPlacemarkAndInfo.forEach((el, idx) => {
        const adressText = el?.location?.address
          ? `<p style="margin-bottom:10px; font-size:16px"><span style="font-weight:800">Адрес: </span>${el?.location?.address}</p>`
          : "";
        const noteText = el?.note
          ? `<p style="margin-bottom:20px; font-size:15px;text-align:justify">${el?.note}</p>`
          : "";
        const phoneText = el?.phones[0].number
          ? `<p style="margin-bottom:5px; font-size:15px"><span style="font-weight:800">Телефон: </span>${el?.phones[0].number}</p>`
          : "";
        const workTimeText = el?.work_time
          ? `<p style="margin-bottom:15px; font-size:15px"><span style="font-weight:800">Режим работы: </span>${el?.work_time.replace(
              ",",
              "<br>"
            )}</p>`
          : "";

        const workMail = el?.email
          ? `<p style="margin-bottom:15px; font-size:15px"><span style="font-weight:800">Почта: </span>${el?.email}</p>`
          : "";

        const customContent =
          '<div style="min-width:400px;max-width: 600px; padding:10px;">' +
          `<h3 style="font-size:22px; margin-bottom:10px">${el.location.city}</h3>` +
          adressText +
          noteText +
          phoneText +
          workMail +
          workTimeText +
          `<button data-cursor-class="animateCursor" class="selectPVZButton" style="padding:10px;background:black;color:white;"
              data-map-index=${idx}>Выбрать данный ПВЗ</button>`;
        ("</div>");
        const placemark = new ymaps.Placemark(
          [el.location.latitude, el.location.longitude],
          {
            balloonContent: customContent,
          },
          {
            preset: "islands#circleIcon",
          }
        );
        this.placeMarksArr.push(placemark);
        map.geoObjects.add(placemark);
        this.mapYandex = map;
        placemark.events.add("click", (e) => {
          setTimeout(() => {
            const btn = document.querySelector(".selectPVZButton");
            this.useCursor = true;
            btn.addEventListener("click", () => {
              this.$emit("loadMap", el, true);
              placemark.balloon.close();
            });
          }, 0);
        });
      });
    });
  },
  methods: {},
  watch: {
    changeMap(val) {
      // if (val) {
      //   const [targetPlacemark] = this.placeMarksArr.filter((placemark) => {
      //     const [lati, long] = Array.from(placemark.geometry.getCoordinates());
      //     if (
      //       lati === val.location.latitude &&
      //       long === val.location.longitude
      //     ) {
      //       return placemark;
      //     }
      //   });
      //   const coordinates = targetPlacemark.geometry.getCoordinates();
      //   this.mapYandex.setCenter(coordinates, 16, { checkZoomRange: true });
      //   this.$emit("changeVal");
      // }
    },
  },
};
</script>

<style scoped>
.delivery__map {
  position: relative;
  width: 100%;
  height: 500px;
  margin-bottom: 35px;
  z-index: 15;
}
</style>
