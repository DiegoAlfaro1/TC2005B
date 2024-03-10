const contactos = [];

module.exports = class Contacto{
    constructor(name_contacto,email_contacto){
        this.name = name_contacto;
        this.email = email_contacto;
    }

    save(){
        contactos.push({
            name: this.name_contacto,
            email: this.email_contacto,
        })
    }

    static fetchAll(){
        return contactos;
    }
}