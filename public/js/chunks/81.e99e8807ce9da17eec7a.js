(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"9fHp":function(t,e,a){"use strict";a("07d7"),a("FZtP");var r=a("LvDl"),n=a.n(r),s=a("oVt+"),i=a("sove"),o=a("R5cT"),l=a("KaE5"),c=a("AeMN"),_=a("JtJI"),d=a("GUe+"),u=a("mwM1"),p=a("Snq/"),b=a.n(p),m={components:{BRow:s.a,BCol:i.a,BFormInput:o.a,BTable:l.a,BSpinner:c.a,BPagination:_.a,BButton:d.a,BOverlay:u.a,vSelect:b.a},props:{items:{type:Array,required:!0},fields:{type:Array,required:!0},meta:{required:!0},isBusy:{type:Boolean,default:function(){return!0}}},data:function(){return{loading:!1,sortBy:null,sortDesc:!1}},watch:{sortBy:function(t){this.$emit("sort",{sortBy:this.sortBy,sortDesc:this.sortDesc})},sortDesc:function(t){this.$emit("sort",{sortBy:this.sortBy,sortDesc:this.sortDesc})}},methods:{getDetil:function(t,e){this.$emit("detil",{rombongan_belajar_id:t,ekstrakurikuler_id:e})},getDetilNilai:function(t){this.$emit("detil",t)},detilPkl:function(t){this.$emit("detil",t)},loadPerPage:function(t){this.$emit("per_page",this.meta.per_page)},changePage:function(t){this.$emit("pagination",t)},search:n.a.debounce((function(t){this.$emit("search",t)}),500),jumlahAspek:function(t){var e=0;return t.forEach((function(t,a){e=+t.aspek_budaya_kerja_count})),e},rowClass:function(t,e){if(t&&"row"===e)return t.induk_pembelajaran_id?"table-warning":void 0}}},k=a("KHd+"),h=Object(k.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",[a("b-col",{staticClass:"mb-2",attrs:{md:"4"}},[a("v-select",{attrs:{options:[10,25,50,100],searchable:!1,clearable:!1},on:{input:t.loadPerPage},model:{value:t.meta.per_page,callback:function(e){t.$set(t.meta,"per_page",e)},expression:"meta.per_page"}})],1),t._v(" "),a("b-col",{attrs:{md:"4","offset-md":"4"}},[a("b-form-input",{attrs:{placeholder:"Cari data..."},on:{input:t.search}})],1)],1),t._v(" "),a("b-overlay",{attrs:{show:t.loading,rounded:"",opacity:"0.6",size:"lg","spinner-variant":"warning"}},[a("b-table",{attrs:{responsive:"",bordered:"",striped:"",items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"show-empty":"",busy:t.isBusy,"tbody-tr-class":t.rowClass},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"}),t._v(" "),a("strong",[t._v("Loading...")])],1)]},proxy:!0},{key:"cell(kelas)",fn:function(e){return[t._v("\n        "+t._s(e.item.rombongan_belajar.nama)+"\n      ")]}},{key:"cell(dudi)",fn:function(e){return[t._v("\n        "+t._s(e.item.akt_pd.dudi.nama)+"\n      ")]}},{key:"cell(pks)",fn:function(e){return[t._v("\n        "+t._s(e.item.akt_pd.judul_akt_pd)+"\n      ")]}},{key:"cell(detil)",fn:function(e){return[a("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(a){return t.getDetilNilai(e.item.pembelajaran_id)}}},[t._v("Detil")])]}},{key:"cell(detil_pkl)",fn:function(e){return[a("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(a){return t.detilPkl(e.item.pkl_id)}}},[t._v("Detil")])]}},{key:"cell(detil_p5)",fn:function(e){return[a("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(a){return t.getDetil(e.item.projek.pembelajaran_id)}}},[t._v("Detil")])]}},{key:"cell(rombel_p5)",fn:function(e){return[t._v("\n        "+t._s(e.item.nama)+"\n      ")]}},{key:"cell(koordinator)",fn:function(e){return[t._v("\n        "+t._s(e.item.projek.guru.nama_lengkap)+"\n      ")]}},{key:"cell(tema_count)",fn:function(e){return[t._v("\n        "+t._s(e.item.projek.tema_count)+"\n      ")]}},{key:"cell(rencana_projek_count)",fn:function(e){return[t._v("\n        "+t._s(e.item.projek.rencana_projek_count.length)+"\n      ")]}},{key:"cell(aspek_projek_count)",fn:function(e){return[t._v("\n        "+t._s(t.jumlahAspek(e.item.projek.rencana_projek_count))+"\n      ")]}},{key:"cell(pembina)",fn:function(e){return[t._v("\n        "+t._s(e.item.wali_kelas.nama_lengkap)+"\n      ")]}},{key:"cell(detil_rombongan_belajar_id)",fn:function(e){return[a("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(a){return t.getDetil(e.item.rombongan_belajar_id,e.item.kelas_ekskul.ekstrakurikuler_id)}}},[t._v("Detil")])]}}])})],1),t._v(" "),a("b-row",{staticClass:"mt-2"},[a("b-col",{attrs:{md:"6"}},[a("p",[t._v("Menampilkan "+t._s(t.meta.from?t.meta.from:0)+" sampai "+t._s(t.meta.to)+" dari "+t._s(t.meta.total)+" entri")])]),t._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-pagination",{attrs:{"total-rows":t.meta.total,"per-page":t.meta.per_page,align:"right","aria-controls":"dw-datatable"},on:{change:t.changePage},model:{value:t.meta.current_page,callback:function(e){t.$set(t.meta,"current_page",e)},expression:"meta.current_page"}})],1)],1)],1)}),[],!1,null,null,null);e.a=h.exports},Hrou:function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var r=a("L3ns"),n=a("xjcK"),s=a("2C+6"),i=a("z3V6"),o=a("STsD"),l=a("Md8H"),c=a("kO/s"),_=a("jBgq"),d=a("SPl0"),u=a("cSte");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var k=Object(i.d)(Object(s.m)(b(b(b({},c.b),d.a),u.a)),n.rb),h=Object(r.c)({name:n.rb,mixins:[o.a,l.a,c.a,_.a,u.b,d.b],props:k,computed:{isTableSimple:function(){return!0}}})},gL3N:function(t,e,a){"use strict";a.r(e);a("rB9j"),a("hByQ");var r=a("IF94"),n=a("YZfj"),s=a("AeMN"),i=a("9fHp"),o=a("Hrou"),l=a("okd0"),c=a("C9gC"),_=a("Ki4g"),d=a("CAmi"),u=a("bPaI"),p=a("GUe+"),b={components:{BTableSimple:o.a,BTbody:l.a,BThead:c.a,BTr:_.a,BTd:d.a,BTh:u.a,BButton:p.a},props:{data_projek:{type:Array,required:!0}},methods:{detilProjek:function(t){this.$emit("detil_projek",t)}}},m=a("KHd+"),k=Object(m.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-table-simple",{attrs:{bordered:"",responsive:""}},[a("b-thead",[a("b-tr",[a("b-th",{staticClass:"text-center"},[t._v("No")]),t._v(" "),a("b-th",{staticClass:"text-center"},[t._v("Tema")]),t._v(" "),a("b-th",{staticClass:"text-center"},[t._v("Projek")]),t._v(" "),a("b-th",{staticClass:"text-center"},[t._v("Jumlah Sub Elemen")]),t._v(" "),a("b-th",{staticClass:"text-center"},[t._v("Detil")])],1)],1),t._v(" "),a("b-tbody",[t.data_projek.length?[t._l(t.data_projek,(function(e,r){return[a("b-tr",[a("b-td",{staticClass:"text-center"},[t._v(t._s(r+1))]),t._v(" "),a("b-td",[t._v(t._s(e.nama_mata_pelajaran))]),t._v(" "),a("b-td",[t._v(t._s(e.projek?e.projek.nama:"-"))]),t._v(" "),a("b-td",{staticClass:"text-center"},[t._v(t._s(e.projek?e.projek.aspek_budaya_kerja_count:"-"))]),t._v(" "),a("b-td",{staticClass:"text-center"},[e.projek?a("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(a){return t.detilProjek(e)}}},[t._v("Detil")]):t._e()],1)],1)]}))]:t._e()],2)],1)}),[],!1,null,null,null).exports,h=(a("TeQF"),a("07d7"),{components:{BTableSimple:o.a,BTbody:l.a,BThead:c.a,BTr:_.a,BTd:d.a,BTh:u.a,BButton:p.a},props:{data_rencana:{type:Object,required:!0},data_siswa:{type:Array,required:!0}},methods:{isGanjil:function(t){return t%2==0?"secondary":"warning"},getNilaiProjek:function(t,e){if(e.length){var a=e.filter((function(e){return e.aspek_budaya_kerja_id===t.aspek_budaya_kerja_id}));return a.length?a[0].opsi_budaya_kerja.nama:null}}}}),f=Object(m.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.data_rencana?a("b-table-simple",{attrs:{bordered:"",responsive:""}},[a("b-tr",[a("b-td",[t._v("Nama Projek")]),t._v(" "),a("b-td",[t._v(t._s(t.data_rencana.nama))])],1),t._v(" "),a("b-tr",[a("b-td",[t._v("Deskripsi Projek")]),t._v(" "),a("b-td",[t._v(t._s(t.data_rencana.deskripsi))])],1)],1):t._e(),t._v(" "),t.data_rencana?a("b-table-simple",{attrs:{bordered:"",stripped:"",responsive:""}},[a("b-thead",[a("b-tr",[a("b-th",{staticClass:"text-center"},[t._v("No")]),t._v(" "),a("b-th",{staticClass:"text-center"},[t._v("Nama Peserta Didik")]),t._v(" "),a("b-th",{staticClass:"text-center"},[t._v("NISN")]),t._v(" "),a("b-th",{staticClass:"text-center"},[t._v("Dimensi")]),t._v(" "),a("b-th",{staticClass:"text-center"},[t._v("Elemen")]),t._v(" "),a("b-th",{staticClass:"text-center"},[t._v("Sub Elemen")]),t._v(" "),a("b-th",{staticClass:"text-center"},[t._v("Nilai Projek")])],1)],1),t._v(" "),a("b-tbody",[t.data_siswa.length?[t._l(t.data_siswa,(function(e,r){return[a("b-tr",{attrs:{variant:t.isGanjil(r)}},[a("b-td",{staticClass:"text-center",staticStyle:{"vertical-align":"top"},attrs:{rowspan:t.data_rencana.aspek_budaya_kerja.length+1}},[t._v(t._s(r+1))]),t._v(" "),a("b-td",{staticStyle:{"vertical-align":"top"},attrs:{rowspan:t.data_rencana.aspek_budaya_kerja.length+1}},[t._v(t._s(e.nama))]),t._v(" "),a("b-td",{staticClass:"text-center",staticStyle:{"vertical-align":"top"},attrs:{rowspan:t.data_rencana.aspek_budaya_kerja.length+1}},[t._v(t._s(e.nisn))])],1),t._v(" "),t._l(t.data_rencana.aspek_budaya_kerja,(function(n,s){return[a("b-tr",{attrs:{variant:t.isGanjil(r)}},[a("b-td",[t._v(t._s(n.budaya_kerja.aspek))]),t._v(" "),a("b-td",[t._v(t._s(n.elemen_budaya_kerja.elemen))]),t._v(" "),a("b-td",[t._v(t._s(n.elemen_budaya_kerja.deskripsi))]),t._v(" "),a("b-td",[t._v(t._s(t.getNilaiProjek(n,e.anggota_rombel.nilai_budaya_kerja)))])],1)]}))]}))]:t._e()],2)],1):t._e()],1)}),[],!1,null,null,null).exports,v={components:{BCard:r.a,BCardBody:n.a,BSpinner:s.a,Datatable:i.a,DetilP5:k,DetilProjek:f},data:function(){return{title:"",data_rencana:null,data_siswa:[],opsi_budaya_kerja:[],data_projek:[],isBusy:!0,fields:[{key:"rombel_p5",label:"Rombel",sortable:!1,thClass:"text-center"},{key:"koordinator",label:"Koord Projek",sortable:!1,thClass:"text-center"},{key:"tema_count",label:"Jumlah Tema",sortable:!1,thClass:"text-center",tdClass:"text-center"},{key:"rencana_projek_count",label:"Jumlah Projek",sortable:!1,thClass:"text-center",tdClass:"text-center"},{key:"aspek_projek_count",label:"Jumlah Sub Elemen",sortable:!1,thClass:"text-center",tdClass:"text-center"},{key:"detil_p5",label:"Detil",sortable:!1,thClass:"text-center",tdClass:"text-center"}],items:[],meta:{},current_page:1,per_page:10,search:"",sortBy:"tingkat",sortByDesc:!1}},created:function(){this.loadPostsData()},methods:{loadPostsData:function(){var t=this;this.isBusy=!0;var e=this.current_page;this.$http.get("/progress/nilai-projek",{params:{user_id:this.user.user_id,sekolah_id:this.user.sekolah_id,semester_id:this.user.semester.semester_id,periode_aktif:this.user.semester.nama,page:e,per_page:this.per_page,q:this.search,sortby:this.sortBy,sortbydesc:this.sortByDesc?"DESC":"ASC"}}).then((function(e){var a=e.data.data;t.isBusy=!1,t.items=a.data,t.meta={total:a.total,current_page:a.current_page,per_page:a.per_page,from:a.from,to:a.to}})).catch((function(t){console.log(t)}))},handlePerPage:function(t){this.per_page=t,this.loadPostsData()},handlePagination:function(t){this.current_page=t,this.loadPostsData()},handleSearch:function(t){this.search=t,this.loadPostsData()},handleSort:function(t){t.sortBy&&(this.sortBy=t.sortBy,this.sortByDesc=t.sortDesc,this.loadPostsData())},HandleDetil:function(t){var e=this;this.$http.post("/progress/detil",{aksi:"projek",pembelajaran_id:t}).then((function(t){e.data_projek=t.data.tema,e.$refs["detil-p5"].show()})).catch((function(t){console.log(t)}))},detil:function(t){var e=this;this.$http.post("/progress/detil",{aksi:"rencana",rombongan_belajar_id:t.rombongan_belajar_id,rencana_budaya_kerja_id:t.projek.rencana_budaya_kerja_id}).then((function(t){var a=t.data;e.data_rencana=a.rencana,e.data_siswa=a.data_siswa,e.opsi_budaya_kerja=a.opsi_budaya_kerja,e.title="Detil Penilaian Projek ".concat(e.data_rencana.nama),e.$refs["detil-projek"].show()})).catch((function(t){console.log(t)}))},HandleDetilProjek:function(t){this.detil(t)}}},y=Object(m.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-body",[t.isBusy?a("div",{staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"}),t._v(" "),a("strong",[t._v("Loading...")])],1):a("div",[a("datatable",{attrs:{isBusy:t.isBusy,items:t.items,fields:t.fields,meta:t.meta},on:{per_page:t.handlePerPage,pagination:t.handlePagination,search:t.handleSearch,sort:t.handleSort,detil:t.HandleDetil}})],1)]),t._v(" "),a("b-modal",{ref:"detil-p5",attrs:{size:"xl",scrollable:"",title:"Detil Projek P5","ok-only":"","ok-title":"Tutup","ok-variant":"secondary"}},[a("detil-p5",{attrs:{data_projek:t.data_projek},on:{detil_projek:t.HandleDetilProjek}})],1),t._v(" "),a("b-modal",{ref:"detil-projek",attrs:{size:"xl",scrollable:"",title:t.title,"ok-only":"","ok-title":"Tutup","ok-variant":"secondary"}},[a("detil-projek",{attrs:{data_rencana:t.data_rencana,data_siswa:t.data_siswa}})],1)],1)}),[],!1,null,null,null);e.default=y.exports}}]);