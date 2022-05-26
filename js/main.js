const API = "https://api.github.com/users/";

// Se corto la funcion y se pega en el metodo

const app1 = Vue.createApp({
    data() {
        return {
          message: 'Hola aprendiz',
          busqueda : null,
          result : null,
          error : null
        }
      },
    // La palabra ya no es necesaria ya que se usa un meotod
      methods: {
        async Buscar(){
          // esta supeditado depende del error
          this.result = this.error = null
          try {
            const response = await fetch(API + this.busqueda)
            if (!response.ok) throw new Error("Usuario no encontrado")
            //console.log(response)
            //ahora quiero traer la info en formato json
            const data = await response.json()
            console.log(data)
            this.result = data //cambiar true por data
          } catch (error) {
            this.error = error
          } 
          // Tan pronto que termine el proceso , limpia haciendo vaica la busqueda 
          finally {
            this.busqueda = null
          }
        }        
      }
}) // Montamos esta informacion en el html o en el div app