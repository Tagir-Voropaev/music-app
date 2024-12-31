import { Column, DataType, Table, Model, AllowNull } from "sequelize-typescript";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs > {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    password: string;

    
}