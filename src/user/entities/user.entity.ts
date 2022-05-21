import { AbstractEntity } from "src/common/entities";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('users')
export class User extends AbstractEntity {

    @Column()
    phone: string;

    @Column()
    name: string;

    @Column({ default: true })
    isEnabled: boolean;
}
