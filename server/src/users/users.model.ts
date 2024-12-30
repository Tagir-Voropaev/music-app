import { Column, DataType, Table, Model, AllowNull } from "sequelize-typescript";


@Table({tableName: 'users'})
export class User extends Model<User, > {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    password: string;

    
}