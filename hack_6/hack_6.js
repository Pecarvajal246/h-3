/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* en donde se representan la clave y el valor
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};

foo=result.name[0].toUpperCase()+result.name.slice(1);
result.name=foo;
role=result.role.toUpperCase()
result.role=role
//export result
module.exports = result; 
