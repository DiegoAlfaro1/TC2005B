const usuarios = [] 

module.exports = class Usuarios {
    constructor(mi_nombre, mi_contrasena){
        this.nombre = mi_nombre;
        this.contrasena = mi_contrasena;
    }

    save() {
        usuarios.push({
            nombre: this.nombre,
            contrasena: this.contrasena
        });
    }   

    static fetchAll(){
        return usuarios;
    }
}