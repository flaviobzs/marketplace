// import Sequelize from 'sequelize';
import mongoose from 'mongoose';

// import databaseConfig from '../config/database';

// const models = [];

class Database {
  constructor() {
    // this.init();
    this.mongo();
  }

  // init() {
  //   this.connection = new Sequelize(databaseConfig);

  //   models
  //     .map(model => model.init(this.connection))
  //     .map(model => model.associate && model.associate(this.connection.models));
  // }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/marketplace',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
  }
}

export default new Database();
