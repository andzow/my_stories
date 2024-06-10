<template>
  <table class="table__item">
    <thead>
      <tr>
        <th v-for="header in uniqueHeaders" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in arrTable" :key="row.name" class="table__item_tr">
        <td v-for="header in uniqueHeaders" :key="header">
          {{ getValue(row.arrSettings, header) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    arrTable: Array,
  },
  data() {
    return {};
  },
  computed: {
    uniqueHeaders() {
      const headers = new Set();
      this.arrTable.forEach((item) => {
        item.arrSettings.forEach((setting) => {
          headers.add(setting.name);
        });
      });
      return Array.from(headers);
    },
  },
  methods: {
    getValue(settings, header) {
      const setting = settings.find((s) => s.name === header);
      return setting ? setting.value : "-";
    },
  },
};
</script>

<style scoped>
.table__item {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 50px;
}
.table__item thead {
  border-top: 1px solid #d2bcae;
}

.table__item tr {
  border-bottom: 1px solid #d2bcae;
}
.table__item tbody tr:last-child {
  border-bottom: none;
}
.table__item th,
.table__item td {
  padding: 12px 0 12px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  min-width: 50px;
  color: var(--brown);
}
</style>
