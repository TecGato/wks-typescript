import { Model, Column, Table, CreatedAt, UpdatedAt }  from "sequelize-typescript";

@Table
export class User extends Model<User> {
    @Column
    name!: string;

    @Column
    lastName!: string;

    @Column
    createdAt!: Date;

    @Column
    updatedAt!: Date;
}