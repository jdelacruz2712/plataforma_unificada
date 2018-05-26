<template>
  <v-container>
  <v-layout>
      <v-flex>
        <v-card>
          <v-toolbar color="red" dense="" card="">
            <v-toolbar-title class="body-2 white--text">{{ title }}</v-toolbar-title>
          </v-toolbar>
          <v-container grid-list-xl="" text-xs-center="">
            <v-layout row='', wrap='', fill-height=''>
              <v-flex sm2="" , row='', wrap=''>
                <v-avatar
                  size="128px"
                  color="grey lighten-4"
                >
                  <img src="@/assets/scotiabank.png" alt="avatar">
                </v-avatar>
              </v-flex>
               <v-flex>
                <v-data-table
                  :headers="headers_bcp"
                  :items="desserts_bcp"
                  hide-actions
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <td>{{ props.item.nrocuenta }}</td>
                    <td>{{ props.item.producto }}</td>
                    <td>{{ props.item.tasa }}</td>
                    <td>{{ props.item.saldo }}</td>
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
        </v-card>
      </v-flex>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
    name: "saldos_Scotiabank",
    data () {
      return {
        title : 'Scotiabank',
        headers_bcp: [
          { text: 'Numero Cuenta', value: 'nrocuenta', sortable: false , align: 'center',},
          { text: 'Producto', value: 'producto', sortable: false, align: 'center', },
          { text: 'Tasa', value: 'tasa', sortable: false, align: 'center', },
          { text: 'Saldo', value: 'saldo', sortable: false, align: 'center', }
        ],
        desserts_bcp: [
          {
              nrocuenta: '149-3890-2345',
              producto: 'Tarjeta VISA',
              tasa: '-',
              saldo: 'S/ 7500.00'
            },
            {
              nrocuenta: '193-3289-122',
              producto: 'Ahorro',
              tasa: '1.45%',
              saldo: 'S/ 150'
            },
            {
              nrocuenta: '193-3245-123',
              producto: 'CRM Visa',
              tasa: '-',
              saldo: 'S/ 2500'
            }
        ]
      }
    }
}
</script>