<template>
  <div>
    <v-layout row justify-center>
      <v-btn color="primary" dark @click.stop="dialog = true">Movimientos</v-btn>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon dark @click.native="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Movimientos BCP</v-toolbar-title>
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


              <movimientos-bcp></movimientos-bcp>
            </v-list>
          </v-card-text>

          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import movimientosBcp from '@/components/movimientos/movimientos_bcp'

  export default {
    components: { movimientosBcp },
    data () {
      return {
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
      }
    }
  }
</script>