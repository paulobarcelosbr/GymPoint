import Sequelize, {Model} from 'sequelize';
class Help_order extends Model{
  static init(sequelize){
    super.init(
      {
        question: Sequelize.STRING,
        answer: Sequelize.STRING,
        answer_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
      );
      return this;
  }
  static associate(models){

    this.belongsTo(models.Students,{ foreignKey : 'students_id', as:'Students'});
  }
}
export default Help_order;
