const contactos = [];

module.exports = class Contacto{
    constructor(name_contacto,email_contacto){
        this.name = name_contacto;
        this.email = email_contacto;
    }

    save(){
        contactos.push({
            name: this.name,
            email: this.email,
        })
    }

    static fetchAll(){
        return contactos;
    }
}