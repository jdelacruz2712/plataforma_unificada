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
        <v-card>
          <v-card-text>
            <div class="text-xs-right">
              <v-btn color="green" dark @click.native.stop="tarjetacredito = true"> Tarjeta de Credito
                <v-icon dark right>add</v-icon>
              </v-btn>
              <v-btn color="purple" dark @click.native.stop="prestamos = true"> Prestamos
                <v-icon dark right>add</v-icon>
              </v-btn>
              <v-btn color="orange" dark @click.native.stop="cts = true"> Transferir CTS
                <v-icon dark right>add</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
        <v-data-table
          :headers="tableSolicitudes.headers"
          :items="tableSolicitudes.data"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td v-html="props.item.id"></td>
            <td v-html="props.item.fecha"></td>
            <td v-html="props.item.tipo"></td>
            <td>
              <template v-if="props.item.estado === 'Esperando'">
                <span class="info--text">Esperando</span>
              </template>
              <template v-else-if="props.item.estado === 'Nueva Propuesta'">
                <span class="green--text">Nueva Propuesta</span>
              </template>
              <template v-else>
                <span class="red--text">Cancelada</span>
              </template>
            </td>
            <td>
              <template v-if="props.item.estado === 'Esperando'">
                <template v-if="props.item.tipo === 'Préstamo'">
                  <v-btn color="info" dark @click.native.stop="verprestamo = true" disabled>
                    <v-icon dark center>visibility</v-icon>
                  </v-btn>
                </template>
                <template v-else>
                  <v-btn color="info" dark @click.native.stop="vertc = true" disabled>
                    <v-icon dark center>visibility</v-icon>
                  </v-btn>
                </template>
                <v-btn color="red" dark @click.native.stop="cancelar = true">
                  <v-icon dark center>close</v-icon>
                </v-btn>
              </template>
              <template v-else-if="props.item.estado === 'Cancelada'">
                <template v-if="props.item.tipo === 'Préstamo'">
                  <v-btn color="info" dark @click.native.stop="verprestamo = true">
                    <v-icon dark center>visibility</v-icon>
                  </v-btn>
                </template>
                <template v-else>
                  <v-btn color="info" dark @click.native.stop="vertc = true">
                    <v-icon dark center>visibility</v-icon>
                  </v-btn>
                </template>
                <v-btn color="red" dark @click.native.stop="cancelar = true" disabled>
                  <v-icon dark center>close</v-icon>
                </v-btn>
              </template>
              <template v-else>
                <template v-if="props.item.tipo === 'Préstamo'">
                  <v-btn color="info" dark @click.native.stop="verprestamo = true">
                    <v-icon dark center>visibility</v-icon>
                  </v-btn>
                </template>
                <template v-else>
                  <v-btn color="info" dark @click.native.stop="vertc = true">
                    <v-icon dark center>visibility</v-icon>
                  </v-btn>
                </template>
                <v-btn color="red" dark @click.native.stop="cancelar = true">
                  <v-icon dark center>close</v-icon>
                </v-btn>
              </template>
            </td>
          </template>
        </v-data-table>
        <v-dialog v-model="tarjetacredito" persistent max-width="323px">
          <v-card>
            <v-card-title class="headline">Solicitar Tarjeta de Credito</v-card-title>
            <v-card-text>¿Estas seguro de generar una solicitud para una tarjeta de credito?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green" @click.native="tarjetacredito = false" dark>Si
                <v-icon dark right>check</v-icon>
              </v-btn>
              <v-btn color="red" @click.native="tarjetacredito = false" dark>No
                <v-icon dark right>close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="prestamos" persistent max-width="350px">
          <v-card>
            <v-card-title>
              <span class="headline">Solicitar de Prestamo</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field label="Cantidad" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-select
                      :items="['Soles (s/.)', 'Dolares ($)']"
                      label="Tipo de Moneda"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Plazos" hint="En cuantos meses vas a pagarlo" persistent-hint required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green" dark @click.native="prestamos = false">Solicitar
                <v-icon dark right>check</v-icon>
              </v-btn>
              <v-btn color="red" dark @click.native="prestamos = false">Cerrar
                <v-icon dark right>close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="cts" persistent max-width="380px">
          <v-card>
            <v-card-title class="headline">Solicitar Transferencia de CTS</v-card-title>
            <v-card-text>¿Estas seguro de generar una solicitud para recibir propuestas?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green" @click.native="cts = false" dark>Si
                <v-icon dark right>check</v-icon>
              </v-btn>
              <v-btn color="red" @click.native="cts = false" dark>No
                <v-icon dark right>close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="cancelar" persistent max-width="380px">
          <v-card>
            <v-card-title class="headline">Cancelar Solicitud</v-card-title>
            <v-card-text>¿Realmente deseas cancelar la solicitud?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green" @click.native="cancelar = false" dark>Si
                <v-icon dark right>check</v-icon>
              </v-btn>
              <v-btn color="red" @click.native="cancelar = false" dark>No
                <v-icon dark right>close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="vertc" persistent max-width="820px">
          <v-card>
            <v-card-title class="headline">Seleccione la mejor oferta</v-card-title>
            <v-card-text>
              <v-data-table
                :headers="tableDataSolicitudes.headers"
                :items="tableDataSolicitudes.data"
                hide-actions
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td v-html="props.item.banco"></td>
                  <td v-html="props.item.monto"></td>
                  <td>
                    <template v-if="props.item.estado === 'Aprobado'">
                      <span class="green--text">Aprobado</span>
                    </template>
                    <template v-else-if="props.item.estado === 'Pre-Aprobado'">
                      <span class="info--text">Pre-Aprobado</span>
                    </template>
                    <template v-else>
                      <span class="red--text">Negado</span>
                    </template>
                  </td>
                  <td v-html="props.item.vigencia"></td>
                  <td>
                    <template v-if="props.item.estado === 'Aprobado'">
                      <v-btn color="green" dark @click.native.stop="confirmarbanco = true">
                        <v-icon dark center>check</v-icon>
                      </v-btn>
                    </template>
                    <template v-else-if="props.item.estado === 'Pre-Aprobado'">
                      <v-btn color="info" dark> Acercarse al banco
                        <v-icon dark right>av_timer</v-icon>
                      </v-btn>
                    </template>
                    <template v-else>
                      <v-btn color="red" dark> Subasta Negada
                        <v-icon dark right>close</v-icon>
                      </v-btn>
                    </template>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green" @click.native="vertc = false" dark>Si
                <v-icon dark right>check</v-icon>
              </v-btn>
              <v-btn color="red" @click.native="vertc = false" dark>No
                <v-icon dark right>close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="verprestamo" persistent max-width="820px">
          <v-card>
            <v-card-title class="headline">Seleccione la mejor oferta</v-card-title>
            <v-card-text>
              <div class="text-xs-right">
                Monto : 3500, Plazo : 12 Meses
              </div>
              <v-data-table
                :headers="tableDataSolicitudes.headers"
                :items="tableDataSolicitudes.data"
                hide-actions
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td v-html="props.item.banco"></td>
                  <td v-html="props.item.monto"></td>
                  <td v-html="props.item.estado"></td>
                  <td v-html="props.item.vigencia"></td>
                  <td>
                    <template v-if="props.item.estado === 'Aprobado'">
                      <v-btn color="green" dark @click.native.stop="confirmarbanco = true">
                        <v-icon dark center>check</v-icon>
                      </v-btn>
                    </template>
                    <template v-else-if="props.item.estado === 'Pre-Aprobado'">
                      <v-btn color="info" dark> Acercarse al banco
                        <v-icon dark right>av_timer</v-icon>
                      </v-btn>
                    </template>
                    <template v-else>
                      <v-btn color="red" dark> Subasta Negada
                        <v-icon dark right>close</v-icon>
                      </v-btn>
                    </template>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green" @click.native="verprestamo = false" dark>Si
                <v-icon dark right>check</v-icon>
              </v-btn>
              <v-btn color="red" @click.native="verprestamo = false" dark>No
                <v-icon dark right>close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="confirmarbanco" persistent max-width="323px">
          <v-card>
            <v-card-title class="headline">Confirmar banco</v-card-title>
            <v-card-text>¿Deseas aceptar la oferta de esta banco?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green" @click.native="confirmarbanco = false; verprestamo = false; vertc = false" dark>Si
                <v-icon dark right>check</v-icon>
              </v-btn>
              <v-btn color="red" @click.native="confirmarbanco = false" dark>No
                <v-icon dark right>close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "solicitudes",
        data () {
          return {
            tarjetacredito: false,
            prestamos: false,
            cts: false,
            vertc: false,
            verprestamo: false,
            confirmarbanco: false,
            cancelar: false,
            name: "Subastas",
            tableSolicitudes: {
              headers: [
                { text: '#', value: 'id' },
                { text: 'Fecha Subasta', value: 'fecha' },
                { text: 'Tipo Subasta', value: 'tipo' },
                { text: 'Estado Subasta', value: 'estado' },
                { text: 'Acciones', value: '' }
              ],
              data: [
                {
                  id:1,
                  fecha: '02-03-2018',
                  tipo: 'Tarjeta de Crédito',
                  estado: 'Esperando',
                  monto : 0
                },
                {
                  id:2,
                  fecha: '05-05-2018',
                  tipo: 'Préstamo Efectivo',
                  estado: 'Nueva Propuesta',
                  monto : 5000
                },
                {
                  id:3,
                  fecha: '12-05-2018',
                  tipo: 'Préstamo',
                  estado: 'Cancelada',
                  monto : 3500
                },
                {
                  id:4,
                  fecha: '02-03-2018',
                  tipo: 'Tarjeta de Crédito',
                  estado: 'Nueva Propuesta',
                  monto : 0
                },
                {
                  id:5,
                  fecha: '05-05-2018',
                  tipo: 'Préstamo',
                  estado: 'Nueva Propuesta',
                  monto : 3000
                }
              ]
            },
            tableDataSolicitudes: {
              headers: [
                { text: 'Banco', value: 'banco' },
                { text: 'Monto', value: 'monto' },
                { text: 'Estado', value: 'estado' },
                { text: 'Vigencia', value: 'vigencia' },
                { text: 'Accion', value: '' }
              ],
              data: [
                {
                  banco: 'BCP',
                  monto: 5000,
                  estado: 'Aprobado',
                  vigencia: '31-may-2018'
                },
                {
                  banco: 'INTERBANK',
                  monto: 4000,
                  estado: 'Pre-Aprobado',
                  vigencia: '31-may-2018'
                },
                {
                  banco: 'SCOTIABANK',
                  monto: 4000,
                  estado: 'Negado',
                  vigencia: '-'
                },
                {
                  banco: 'BBVA',
                  monto: 3500,
                  estado: 'Aprobado',
                  vigencia: '31-may-2018'
                }
              ]
            }
          }
        }
    }
</script>

<style scoped>

</style>
