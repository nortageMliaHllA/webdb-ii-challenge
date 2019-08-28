
exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.string('vin', 25);
    });
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.dropColumn('vin');
  });
};
