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
                    <td class="indigo--text">
                      <v-btn color="red" dark @click.native.stop="dialog = true">
                        <v-icon dark center>visibility</v-icon>
                      </v-btn>

                    </td>
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

 <v-layout row justify-center>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar card dark color="red">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Movimientos Scotiabank</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right offset-y>
            <v-btn slot="activator" dark icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="(item, i) in items" :key="i" @click="">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-card-text>
          <v-list three-line subheader>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Utlimos Movimientos</v-list-tile-title>
                <v-list-tile-sub-title>Si necesita informacion de mas de 30 días, porfavor contactar con su banco</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>


            <movimientos-scotiabank></movimientos-scotiabank>
          </v-list>
        </v-card-text>

        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
  </v-layout>
</v-container>
</template>

<script>
import movimientosScotiabank from '@/components/movimientos/movimientos_scotiabank'

export default {
  components: { movimientosScotiabank },
    name: "saldos_Scotiabank",
    data () {
      return {
        title : 'Scotiabank',
        dialog: false,
        items: [
          {
            title: 'Descargar PDF'
          },
          {
            title: 'Imprimir'
          },
          {
            title: 'Compartir'
          }],
        headers_bcp: [
          { text: 'Numero Cuenta', value: 'nrocuenta', sortable: false , align: 'center',},
          { text: 'Producto', value: 'producto', sortable: false, align: 'center', },
          { text: 'Tasa', value: 'tasa', sortable: false, align: 'center', },
          { text: 'Saldo', value: 'saldo', sortable: false, align: 'center', },
          { text: 'Option', sortable: false, align: 'center', }
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
