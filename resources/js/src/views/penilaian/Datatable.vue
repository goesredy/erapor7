<template>
  <div>
    <b-row>
      <b-col md="4" class="mb-2">
        <v-select v-model="meta.per_page" :options="[10, 25, 50, 100]" @input="loadPerPage"></v-select>
      </b-col>
      <b-col md="4" offset-md="4">
        <b-form-input @input="search" placeholder="Cari data..."></b-form-input>
      </b-col>
    </b-row>
    <b-overlay :show="loading" rounded opacity="0.6" size="lg" spinner-variant="warning">
      <b-table responsive bordered striped :items="items" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" show-empty :busy="isBusy">
        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>
        <template v-slot:cell(nama_pd)="row">
          {{row.item.anggota_rombel.peserta_didik.nama}}
        </template>
        <template v-slot:cell(rombel)="row">
          {{row.item.anggota_rombel.rombongan_belajar.nama}}
        </template>
        <template v-slot:cell(dimensi_sikap)="row">
          {{(row.item.budaya_kerja) ? row.item.budaya_kerja.aspek : '-'}}
        </template>
        <template v-slot:cell(elemen_sikap)="row">
          {{row.item.elemen_budaya_kerja.elemen}}
        </template>
        <template v-slot:cell(opsi_sikap)="row">
          <b-badge variant="success" v-if="row.item.opsi_id">Positif</b-badge>
          <b-badge variant="danger" v-else>Negati</b-badge>
        </template>
        <template v-slot:cell(actions)="row">
          <b-dropdown id="dropdown-dropleft" dropleft text="Aksi" variant="primary" size="sm">
            <b-dropdown-item href="javascript:" @click="edit(row.item)"><font-awesome-icon icon="fa-solid fa-pencil" /> Edit</b-dropdown-item>
            <b-dropdown-item href="javascript:" @click="hapus(row.item.nilai_budaya_kerja_id)"><font-awesome-icon icon="fa-solid fa-trash" /> Hapus</b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
    </b-overlay>
    <b-row class="mt-2">
      <b-col md="6">
        <p>Menampilkan {{ (meta.from) ? meta.from : 0 }} sampai {{ meta.to }} dari {{ meta.total }} entri</p>
      </b-col>
      <b-col md="6">
        <b-pagination v-model="meta.current_page" :total-rows="meta.total" :per-page="meta.per_page" align="right" @change="changePage" aria-controls="dw-datatable"></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import _ from 'lodash' //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI
import { BRow, BCol, BFormInput, BTable, BSpinner, BPagination, BButton, BOverlay, BDropdown, BDropdownItem, BBadge } from 'bootstrap-vue'
import vSelect from 'vue-select'
export default {
  components: {
    vSelect,
    BRow,
    BCol,
    BFormInput,
    BTable,
    BSpinner,
    BPagination,
    BButton,
    BOverlay,
    BDropdown, BDropdownItem, BBadge,
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    meta: {
      required: true
    },
    isBusy: {
      type: Boolean,
      default: () => true,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    data_tingkat: {
      type: Array,
      //required: true
    },
    data_jurusan: {
      type: Array,
      //required: true
    },
    data_rombel: {
      type: Array,
      //required: true
    },
  },
  data() {
    return {
      sortBy: null,
      sortDesc: false,
    }
  },
  watch: {
    sortBy(val) {
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      })
    },
    sortDesc(val) {
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      })
    }
  },
  methods: {
    edit(item){
      this.$emit('edit', item)
    },
    hapus(nilai_budaya_kerja_id){
      this.$emit('hapus', nilai_budaya_kerja_id)
    },
    loadPerPage(val) {
      this.$emit('per_page', this.meta.per_page)
    },
    changePage(val) {
      this.$emit('pagination', val)
    },
    search: _.debounce(function (e) {
      this.$emit('search', e)
    }, 500),
  },
}
</script>