<template>
    <div class="container">

      <div class="row pt-5">

        <div class="col-md-7">
          <table class="table table-bordered">
            <paginate ref="paginator" name="alumnos" :list="alumnos" :per="5" tag="tbody">
            <thead>
              <tr>
                <th>Apellidos</th>
                <th>Nombres</th>
                <th>DNI</th>
                <th>PASA a / VIENE de</th>
                <th>Otro Colegio</th>
                <th>Curso</th>                  
                <th>Fecha</th>              
              </tr>
            </thead>
            
            <tbody>             
              <tr v-for="alumno in paginated('alumnos')">                
                <td>{{alumno.apellido}}</td>
                <td>{{alumno.nombre}}</td>
                <td>{{alumno.dni}}</td>
                <td> 
                  <div v-if="alumno.ingresa===true"> VIENE DE </div> 
                  <div v-else-if="alumno.ingresa===false">PASA A</div>
                </td>                
                <td>{{alumno.colegio}}</td>
                <td>{{alumno.cursoPertenece}}</td>                
                <td>{{alumno.fecha}}</td>
                <td><button @click="deleteAlumno(alumno._id)" class="btn btn-danger">Borrar</button></td>
                 <td><button @click="editAlumno(alumno._id)" class="btn btn-success">Editar</button></td>
              </tr>

            </tbody>

              </paginate>
              <paginate-links
                for="alumnos"
                :show-step-links="true"
                :simple="{
                    prev: 'Anterior',
                    next: 'Siguiente'  
                }"
                :classes="{
                  'ul': 'pagination', 
                  'li': 'page-item', 
                  'a': 'page-link'
                }"
               ></paginate-links>
          </table>
        </div>    

      </div>
    </div>
</template>

<script>
export default {
    props: ['alumnos'],
    data() {
        return {
            mensaje: 'Esta es la tabla donde se muestran todos los alumnos'
        }
    },
    methods: {
        
    }
}
</script>