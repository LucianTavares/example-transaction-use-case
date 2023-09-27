import {InputCreateUserDto, OutputCreateUserDto} from "./create-user-dto";
import User from "../../../domain/entity/user";
import {TransactionInterface} from "../../../@common/domain/transaction-interface";
import KeycloakConnect from "keycloak-connect";

export default class CreateUserUsecase {

    constructor(private userRepository: UserRepositoryInterface,
                private transaction: TransactionInterface,
                //private identityProviderHttp: IdentityProviderHttpInterface ----> Caso queira trabalhar de forma mais abstrata poder utilizar desta forma.
                private keycloakHttp: KeycloakConnect.Keycloak
    ) {
    }

    async execute(input: InputCreateUserDto): Promise<OutputCreateUserDto> {

        const user = new User(input.name, input.cpf)

        this.transaction.do(async (transaction) => {
            await this.userRepository.create(user)
            //await this.identityProviderHttp.create(user);
            await this.keycloakHttp.createUser(user);
        });

        return user
    }

}