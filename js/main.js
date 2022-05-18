const API = "https://api.github.com/users/";

async function Buscar(){
    const response = await fetch(API+"KevinnnnnnG")
    //ahora quiero traer la info en formato json
    const data = await response.json()
    console.log(data)
}

const app = Vue.createApp({
    data() {
        return {
          message: 'Hola aprendiz'
        }
      }
}) // Montamos esta informacion en el html o en el div app