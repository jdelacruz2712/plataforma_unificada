<template>
  <v-container>
  <v-layout>
      <v-flex>
      <saldo-bcp></saldo-bcp>
      <saldos-interbank></saldos-interbank>
      <saldos-scotiabank></saldos-scotiabank>
      </v-flex>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import saldoBcp from '@/components/saldos/saldos_bcp'
import saldosInterbank from '@/components/saldos/saldos_interbank'
import saldosScotiabank from '@/components/saldos/saldos_scotiabank'

export default {
    name: "saldos_movimientos",
    data () {
      return {
        title : 'BCP'
      }
    },

    components: {saldoBcp, saldosInterbank, saldosScotiabank}
}
</script>