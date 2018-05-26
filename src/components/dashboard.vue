<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md12>
        <v-breadcrumbs>
          <v-icon slot="divider">forward</v-icon>
          <v-breadcrumbs-item>
            {{ name}}
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-flex>
      <v-flex xs12 md12>
        <v-toolbar color="blue">
          <v-toolbar-title class="white--text">Ahorros</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container
            fluid
            style="min-height: 0;"
            grid-list-lg
          >
            <v-layout row wrap>
              <v-flex xs12>
                <v-card color="white" class="white--text">
                  <ahorro-chart></ahorro-chart>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12 md12>
        <v-toolbar color="blue">
          <v-toolbar-title class="white--text">CTS</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container
            fluid
            style="min-height: 0;"
            grid-list-lg
          >
            <v-layout row wrap>
              <v-flex xs12>
                <v-card color="white" class="white--text">
                  <cts-chart></cts-chart>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12 md12>
        <v-toolbar color="blue">
          <v-toolbar-title class="white--text">Prestamos</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container
            fluid
            style="min-height: 0;"
            grid-list-lg
          >
            <v-layout row wrap>
              <v-flex xs12>
                <v-card color="white" class="white--text">
                  <prestamos-chart></prestamos-chart>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import VueChartJs from 'vue-chartjs'

  Vue.component('ahorro-chart', {
    extends: VueChartJs.Pie,
    data: function () {
      return {
        datacollection: {
          labels: ['Saldo Disponinible', 'No Disponible'],
          datasets: [
            {
              label: 'Saldos',
              backgroundColor: ['#4ea24e', '#f87979'],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [8000, 2000]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          tooltips: {
            enabled: true,
            mode: 'single'
          },
          responsive: true,
          height: 200,
          maintainAspectRatio: false,
          pieceLabel: {
            mode: 'percentage',
            precision: 1
          }
        }
      }
    },
    mounted () {
      // this.chartData is created in the mixin
      const render = () => this.renderChart(this.datacollection, this.options)
      setTimeout(function() {
        render()
      }, 500)
    }
  })

  Vue.component('cts-chart', {
    extends: VueChartJs.Pie,
    data: function () {
      return {
        datacollection: {
          labels: ['Saldo No Disponible', 'Saldo Disponible'],
          datasets: [
            {
              label: 'Saldos',
              backgroundColor: ['#4ea24e', '#f87979'],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [20000, 800]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          tooltips: {
            enabled: true,
            mode: 'single'
          },
          responsive: true,
          height: 200,
          maintainAspectRatio: false,
          pieceLabel: {
            mode: 'percentage',
            precision: 1
          }
        }
      }
    },
    mounted () {
      // this.chartData is created in the mixin
      const render = () => this.renderChart(this.datacollection, this.options)
      setTimeout(function() {
        render()
      }, 500)
    }
  })

  Vue.component('prestamos-chart', {
    extends: VueChartJs.HorizontalBar,
    data: function () {
      return {
        datacollection: {
          labels: ['BCP', 'BBVA', 'Interbank'],
          datasets: [
            {
              label: 'Deuda',
              backgroundColor: ['#8aa7c5', '#3ee9f0', '#69ad65'],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [5000, 3000, 1000]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          tooltips: {
            enabled: true,
            mode: 'single'
          },
          responsive: true,
          height: 200,
          maintainAspectRatio: false,
          pieceLabel: {
            mode: 'percentage',
            precision: 1
          }
        }
      }
    },
    mounted () {
      // this.chartData is created in the mixin
      const render = () => this.renderChart(this.datacollection, this.options)
      setTimeout(function() {
        render()
      }, 500)
    }
  })

  export default {
    name: "dashboard",
    data () {
      return {
        name: "Dashboard"
      }
    }
  }
</script>
