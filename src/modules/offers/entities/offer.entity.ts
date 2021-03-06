
import { AbstractEntity } from "src/common/entities"
import { Column, Entity, Index } from "typeorm"

@Entity('offer')
export class Offer extends AbstractEntity {
    @Column({ default: 0 })
    offerId: number
}
