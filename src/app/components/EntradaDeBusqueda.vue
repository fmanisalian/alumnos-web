<template>
    <input type="text" v-model="alumno.dni" class="form-control" placeholder="Inserte el DNI del Alumno a buscar" />
</template>

<script>
import EntradaDeBusqueda from "@/components/EntradaDeBusqueda.vue";
export default {
  name: "EntradaDeBusqueda",
  props: {
    msg: String,
  },
  components: {
    EntradaDeBusqueda,
  },
};
</script>

<style lang="scss" scoped>
</style>