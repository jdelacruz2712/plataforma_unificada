<template>
  <v-container>
  <v-layout>
      <v-flex>
          <v-container grid-list-xl="" text-xs-center="">
            <v-layout row='', wrap='', fill-height=''>
              <v-flex sm4="" , row='', wrap=''>
                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Numero Cuenta</v-list-tile-title>
                    <v-list-tile-sub-title>{{ nrocuenta}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>



                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Producto</v-list-tile-title>
                    <v-list-tile-sub-title>{{ producto }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Saldo</v-list-tile-title>
                    <v-list-tile-sub-title>{{ saldo }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-avatar
                  size="110px"
                  color="grey lighten-4"
                >
                  <img src="@/assets/bcp.png" alt="avatar">
                </v-avatar>
              </v-flex>
               <v-flex>
                <v-data-table
                  :headers="headers_bcp"
                  :items="desserts_bcp"
                  hide-actions
                  class="elevation-1 "
                >
                  <template slot="items" slot-scope="props">
                    <td>{{ props.item.fecha }}</td>
                    <td>{{ props.item.descripcion }}</td>
                    <td>{{ props.item.importe }}</td>
                  </template>
                  <template slot="no-data">
                    <v-alert :value="true" color="error" icon="warning">
                      Sorry, nothing to display here :(
                    </v-alert>
                  </template>
                </v-data-table>
              </v-flex>
            </v-layout>
          </v-container>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
    name: "movimientos_BCP",
    data () {
      return {
        title : 'Banco de Credito del Perú',
        nrocuenta: '123-3612-341',
        banco: 'BCP',
        producto: 'Prestamo personal',
        tasa: '15.45%',
        saldo: 'S/ 10234',
        headers_bcp: [
          { text: 'Fecha Transación', value: 'fecha', sortable: false , align: 'center',},
          { text: 'Descripción', value: 'descripcion', sortable: false, align: 'center', },
          { text: 'Importe', value: 'importe', sortable: false, align: 'center', }
        ],
        desserts_bcp: [
          {
          fecha: '31-01-2018',
          descripcion: 'Retiro Cajero',
          importe: '-800'
        },
        {
          fecha: '05-02-2018',
          descripcion: 'Retiro Agente',
          importe: '-200'
        },
        {
          fecha: '15-02-2018',
          descripcion: 'Transfenrecia Banc',
          importe: '+3500'
        },
        {
          fecha: '28-02-2018',
          descripcion: 'Retiro cajero',
          importe: '-1200'
        },
        {
          fecha: '15-03-2018',
          descripcion: 'Deposito',
          importe: '+3200'
        },
        {
          fecha: '25-03-2018',
          descripcion: 'Retiro Agente',
          importe: '-200'
        },
        {
          fecha: '10-04-2018',
          descripcion: 'Retiro Agente',
          importe: '-300'
        }
        ]
      }
    }
}
</script>