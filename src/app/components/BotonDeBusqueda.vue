<template>
  <button @click="buscarAlumno" class="btn btn-primary btn-block">
    Buscar Alumno
  </button>
</template>

<script>
import BotonDeBusqueda from "@/components/BotonDeBusqueda.vue";
export default {
  name: "BotonDeBusqueda",
  props: {
    msg: String,
  },
  components: {
    BotonDeBusqueda,
  },
};
</script>

<style lang="scss" scoped>
</style>



