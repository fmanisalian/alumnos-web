<template>
  <!--<h1>Hola mundo del fullstack javascript, con mevn!</h1>-->
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/">Pases e Ingresos de Alumnos</a>
    </nav>
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
                    <option v-bind:key="curso.id" v-for="curso in cursos">
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
              <tr v-bind:key="alumno.id" v-for="alumno in paginated('alumnos')">                
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
  </div>
</template>

<script>
class Alumno {
  constructor(apellido, nombre, dni, colegio, ingresa, cursoPertenece, fecha){
      this.apellido = apellido,
      this.nombre = nombre,
      this.dni = dni,
      this.colegio = colegio,
      this.ingresa = ingresa,
      this.cursoPertenece = cursoPertenece,
      this.fecha = fecha
  }
}

class Curso {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class User {
  constructor(name, email, password, fechaRegistro) {
    this.name = name,
    this.email = email,
    this.password = password,
    this.fechaRegistro = fechaRegistro
  }
}

class Admin {
    constructor(name, dni, telefono, tipo) {
        this.name = name,
        this.dni = dni,
        this.telefono = telefono,
        this.tipo = tipo
    }
}

export default {
  data(){
    return{
      alumno: new Alumno(),
      alumnos: [],
      edit: false,
      alumnoToEdit: '',
      paginate: ['alumnos'],
      seleccionado: "1º A (TM)",
      curso: new Curso(),
      cursos: [],
      //date: new Date(2019, 10, 08)
      date: new Date(),
      user: new User(),
      users: [],
      admin: new Admin(),
      admins: []
    }
  },
  
  created(){
    this.getAlumnos();
    this.getCursos(); 
    this.getUsers(); 
    this.getAdmins(); 
  },

  methods:{
    sendAlumno() {
      if (this.edit === false) {
        fetch('/alumnos', {
          method: 'POST',
          body: JSON.stringify(this.alumno),
          headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
      })
      .then(res => res.json())
      //.then(data => console.log(data)
      .then(data => {
        this.getAlumnos();   
        this.getCursos();
        //this.curso = new Curso();
        seleccionado = "1º A (TM)";             
      })

      } else {
          fetch('/alumnos/' + this.alumnoToEdit, {
            method: 'PUT',
            body: JSON.stringify(this.alumno),
            headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(data => {
            this.getAlumnos();
            //this.edit === false;            
            this.edit = !this.edit;
            this.getCursos();
            //this.curso = new Curso();
            seleccionado = "1º A (TM)";
          })
        }
      this.Alumno = new Alumno();  
      //Para limpiar la pantalla:
      this.alumno.apellido = '';
      this.alumno.nombre = '';
      this.alumno.dni = '';
      this.alumno.cursoPertenece;
      this.alumno.ingresa = false;
      this.alumno.colegio = '';
      this.alumno.fecha = Date(); 
    },

    getAlumnos(){
      fetch('/alumnos')
        .then(res => res.json())
        //.then(data => console.log(data));
        .then(data => {
          this.alumnos = data;
          console.log(this.alumnos);
        });
    },

    getCursos() {
      fetch("/cursos")
        .then(res => res.json())
        .then(data => {
          this.cursos = data;
        });
    },   
    
    getUsers(){
      fetch("/users")
        .then(res => res.json())
        .then(data => {
          this.users = data;
        });
    },

    getAdmins(){
      fetch("/admins")
        .then(res => res.json())
        .then(data => {
          this.admins = data;
        });
    },   

    deleteAlumno(_id){
      //console.log(_id);
      fetch('/alumnos/' + _id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'          
        }
      })
      .then(res => res.json())
      .then(data => {
        this.getAlumnos();
      })      
    },

    editAlumno(_id){
      //console.log(id);
      fetch('/alumnos/' + _id)
        .then(res => res.json())
        .then(data => {
          this.alumno = new Alumno(data.apellido, data.nombre, data.dni, data.colegio, data.ingresa, data.cursoPertenece, data.fecha);
          this.alumnoToEdit = data._id;
          this.edit = true;
        })
    }
  }
}
</script>