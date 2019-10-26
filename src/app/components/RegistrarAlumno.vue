<template>
    <div class="container">
      <div class="row pt-5">

        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="sendAlumno">
                <div class="form-group">                    
                    <fieldset>                                                                   
                      <span v-if="!alumno.ingresa" class="badge badge-warning">Requerido*</span>
                        <legend>Elige una de las dos opciones:</legend> 
                           <input type="radio" v-model="alumno.ingresa" id="i" name="ingresaOegresa" value='false' picked>
                            <label for="i">El Alumno PASA A otro colegio</label>                                                 
                    </fieldset>
                </div>           
                <div class="form-group">                    
                    <fieldset>    
                        <input type="radio" v-model="alumno.ingresa" id="e" name="ingresaOegresa" value='true' >                    
                        <label for="e">El Alumno VIENE DE otro colegio</label>
                    </fieldset>                 
                </div>  
                <div class="form-group"> 
                  <span v-if="!alumno.cursoPertenece" class="badge badge-warning">Requerido*</span>
                  <span>Curso Seleccionado: {{seleccionado = alumno.cursoPertenece}}</span>
                  <select v-model="alumno.cursoPertenece" class="form-control" v-bind:value="curso.value">
                    <option v-for="curso in cursos">
                      {{curso.nombre}}
                    </option>
                  </select>                  
                </div>                                                           
                <div class="form-group">
                  <span v-if="!alumno.apellido" class="badge badge-warning">Requerido*</span>
                    <input type="text" v-model="alumno.apellido" class="form-control" placeholder="Inserte los Apellidos del Alumno" />
                </div>
                <div class="form-group">
                  <span v-if="!alumno.nombre" class="badge badge-warning">Requerido*</span>
                    <input type="text" v-model="alumno.nombre" class="form-control" placeholder="Inserte los Nombres del Alumno" />                
                </div>
                <div class="form-group">
                  <span v-if="!alumno.dni" class="badge badge-warning">Requerido*</span>
                    <input type="text" v-model="alumno.dni" class="form-control" placeholder="Inserte el DNI del Alumno" />                
                </div>
                <div class="form-group">
                  <span v-if="!alumno.colegio" class="badge badge-warning">Requerido*</span>
                  <textarea v-model="alumno.colegio" cols="30" rows="2" placeholder="Inserte el número y nombre del otro Colegio" class="form-control"></textarea>
                </div>  
                <div class="form-group">
                  <input type="date" v-model="alumno.fecha" class="form-control" placeholder="Seleccione la Fecha" />
                  {{date}}
                </div>          
                <template v-if="edit === false">
                  <button class="btn btn-primary btn-block">Guardar</button>  
                </template>    
                <template v-else>
                  <button class="btn btn-primary btn-block">Actualizar</button> 
                </template>                                                                 
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
    props: ['alumnos'],
    data() {
        return {
            mensaje: 'Este es el formulario para agregar o modificar un alumno'
        }
    },
    methods: {
        
    }
}
</script>