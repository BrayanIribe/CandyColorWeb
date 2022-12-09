<template>
  <div style="background-color: rgba(0, 0, 0, 0.1); min-height: 100vh">
    <IHomeHeader />
    <div class="container">
      <div class="row">
        <div class="col-sm-12 mt-5 mb-5">
          <h1 v-if="$usuario">Bienvenido, {{ $usuario.nombre }}</h1>
          <small class="text-muted"
            >Este es el resumen de tu negocio del día de hoy.</small
          >
        </div>
        <div class="col-sm-12">
          <h4 class="mb-4">Ventas y ganancias del día</h4>
          <div class="card shadow p-3 border-none">
            <ILineGraph
              :chart-data="gananciasChartData"
              :options="gananciasChartOptions"
              :height="100"
              :render="renderGraphs"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import IHomeHeader from "@/components/IHomeHeader";
import ILineGraph from "./../components/ILineGraph";

export default {
  components: { IHomeHeader, ILineGraph },
  data() {
    return {
      renderGraphs: false,
      gananciasChartData: {
        labels: [],
        datasets: [
          {
            key: "ventas",
            label: "Ventas",
            borderColor: "#007bff",
            fill: false,
            data: [],
          },
          {
            key: "utilidades",
            label: "Utilidades",
            borderColor: "#28a745",
            fill: false,
            data: [],
          },
        ],
      },
      gananciasChartOptions: {
        tooltips: {
          enabled: true,
          boxWidth: 0,
          boxHeight: 0,
        },
      },
    };
  },
  methods: {
    async fetch() {
      const response = await this.$api.reportes.dashboard();
      if (response.status !== 200) return;

      const dashboard = response.data;
      this.renderGraphs = false;
      this.gananciasChartData.datasets.find((e) => e.key === "ventas").data = [
        ...dashboard.ventas,
      ];
      this.gananciasChartData.datasets.find(
        (e) => e.key === "utilidades"
      ).data = [...dashboard.utilidades];
      this.gananciasChartData.labels = dashboard.labels.map((e) =>
        // new moment(e).format("dddd DD/MM/YYYY h:mm:ss a")
        new moment(e).format("h:mm:ss a")
      );

      this.forceRenderGraphs();
    },
    async forceRenderGraphs() {
      this.renderGraphs = false;
      await new Promise((solve) => setTimeout(solve, 10));
      this.renderGraphs = true;
    },
  },
  created() {
    this.fetch();
    setInterval(this.fetch, 10 * 1000);
  },
};
</script>

<style>
.i-m-container {
  width: 100vw;
  height: 90vh;
  background-color: #eff0f2;
  padding: 1rem;
}

.i-m-container img {
  max-height: 100%;
}
</style>