exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('make').unique().notNullable();
      tbl.string('model').unique().notNullable();
      tbl.string('color').unique().notNullable();
        
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
  