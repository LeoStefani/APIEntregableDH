module.exports = function(sequelize, dataTypes) {

    let alias = "Actor";

    let cols = {
        id:{
            type: dataTypes.INTEGER(10).UNSIGNED, 
            primaryKey: true,
            autoIncrement: true,
        },
        first_name:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        last_name:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        rating:{
            type: dataTypes.DECIMAL(3,1),
        },
        favorite_movie_id:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }       
        
    };

    let config = {
        tableName: "actors",
        timestamps: true,
        underscored: true
           }

    let Actor = sequelize.define(alias, cols, config);

    return Actor;

}