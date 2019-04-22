class Model {
  static doQuery(query) {
    return global.db.query(query)
    .then(result => {
      return result;
    })
    .catch(error => {
      return error.message;
    });
  }

  static async loadAll() {
    const dbQuery = `SELECT * FROM ${this.table()}`;
    const response = await this.doQuery(dbQuery);
    const classObjects = response.map(data => {
      const obj = new this();
      obj.data = data;
      return obj;
    });
    return classObjects;
  }

  delete() {
    const dbQuery = `DELETE FROM ${this.constructor.table()} WHERE ${this.pk} = ${this.data.id}`;
    return Model.doQuery(dbQuery);
  }
}

module.exports = Model;

