// este archivo sirve como registro de los cambios de la BD
exports.up = function(knex) {
  // aqui voy a escribir  los cambios que quiero hacer a mi base de datos 
  return  knex.schema.createTable('users', function (table) {
      table.increments() // esto es el id y aparte el primary_key
      table.string('first_name', 150)
      table.string('last_name',150)
      table.string('email', 150)
      table.date('birth_date') // 1993-03-28
      table.enu('gender',['male', 'female', 'other'])
  })
};

exports.down = function(knex) {
  // aqui voy a a escribir  codigo que revierta los cambios de arriba
  return knex.schema.dropTableIfExists('users')
};
