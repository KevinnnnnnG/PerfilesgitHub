const API = "https://api.github.com/users/";

// Se corto la funcion y se pega en el metodo

const app1 = Vue.createApp({
    data() {
        return {
          message: 'Hola aprendiz',
          busqueda : null,
          result : null,
          error : null,
          favoritos: new Map() // Se creo un Map para guardar
        }
      },

      created() {
        const FavoritosGuardados = JSON.parse(window.localStorage.getItem("misfavoritos"))
       /*if (FavoritosGuardados.length){
          // recorremos el map con un nuevo nombre
          const favoritosnew = new Map(FavoritosGuardados.map)
       } */
        //console.log(FavoritosGuardados)
        //console.log("estoy en CREATED")
      },

      computed:{
        estaFavoritos(){
          return this.favoritos.has(this.result.id);
        },
        TodosFavoritos (){
          // Pasamos la informaion a un autentico array
          return Array.from(this.favoritos.values());
          // el metodo values() traera los valores sin las clave
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
        }, // Aqui se cerro el metodo buscar   
          addFavorito(){
            this.favoritos.set(this.result.id , this.result)
            this.actualizarStorage()
          },

          RemoveraFavorito(){
            this.favoritos.delete(this.result.id )
            this.actualizarStorage()
          },
          actualizarStorage(){
            window.localStorage.setItem('misfavoritos', JSON.stringify (this.TodosFavoritos))
          }
      }
}) // Montamos esta informacion en el html o en el div app