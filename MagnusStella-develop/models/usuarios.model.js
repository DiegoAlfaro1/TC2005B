const db = require('../util/database');

module.exports = class Usuarios {
    constructor(name, email, password, idUser, IdRol){
        this.nombre = name;
        this.email = email;
        this.contrasena = password;
        this.idUsuario = idUser;
        this.idRol = IdRol;
    }

    save() {
        const userData = {
            idUsuario: this.idUsuario,
            IdRol: this.idRol,
            Nombre: this.nombre,
            Contrasena: this.contrasena,
            Correo: this.email,
        }

        const values = Object.values(userData);
        //cambiar la columna constrasena a contrasena cuando se tenga la ultima version de la base de datos 
        db.execute('INSERT INTO usuario (idUsuario,IdRol,Nombre,Constraseña,Correo) VALUES (?,?,?,?,?)',values).then(result => {
                console.log('Usuario Guardado: ',result);
            }).catch(err => {
                console.log('Error guardando usuario: ',err);
            })
    }   

    static fetchAll(){
        db.execute('SELECT * FROM usuarios')
            .then(rows => {
                callback(rows);
            })
            .catch(err => {
                console.error('Error fetching users from database:', err);
                callback([]);
            });
    }
}