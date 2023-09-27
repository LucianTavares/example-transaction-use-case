import {InputCreateUserDto, OutputCreateUserDto} from "./create-user-dto";
import User from "../../../domain/entity/user";
import {TransactionInterface} from "../../../@common/domain/transaction-interface";

export default class CreateUserUsecase {

    private transaction: TransactionInterface

    private userRepository: UserRepositoryInterface

    constructor(userRepository: UserRepositoryInterface) {
        this.userRepository = userRepository
    }

    public setTransaction(transaction: TransactionInterface): void {
        this.transaction = transaction
    }

    const keycloakGateway = new KeycloakGateway('https://seu-servidor-keycloak.com');

    async create(input: InputCreateUserDto): Promise<OutputCreateUserDto> {

        const user = new User(input.name, input.cpf)

        this.transaction.do(async (transaction) => {

            await this.transaction.start(transaction)
            await this.keycloakGateway.login('seu_usuario', 'sua_senha');
            await this.userRepository.create(user)
            await this.transaction.commit()
        })

        return user
    }

}