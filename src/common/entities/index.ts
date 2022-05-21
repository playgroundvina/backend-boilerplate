import { ObjectIdColumn, ObjectID, Column, BeforeInsert, BeforeUpdate } from "typeorm";

import { getCurrentInSeconds } from "src/utils/helper";

export abstract class AbstractEntity {
    @ObjectIdColumn()
    public id: ObjectID;

    @Column({ type: 'number' })
    public createdAt: number;

    @Column({ type: 'number' })
    public updatedAt: number;

    @BeforeInsert()
    insertDates() {
        this.createdAt = getCurrentInSeconds();
        this.updatedAt = getCurrentInSeconds();
    }

    @BeforeUpdate()
    updateDates() {
        this.updatedAt = getCurrentInSeconds();
    }
}
