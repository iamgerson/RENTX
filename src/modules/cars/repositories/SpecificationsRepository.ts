import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";



class SpecificationsRepository implements ISpecificationsRepository {
    

    create({ description, name }: ICreateSpecificationDTO): void{
        throw new Error("Method not implemented.")
    }
}

export { SpecificationsRepository };