export type UserProps = {
    id: string
    name: string
    cpf: string
}

export default class User {

    private _id: string
    private _name: string
    private _cpf: string

    constructor(props: UserProps) {
        this._id = props.id
        this._name = props.name
        this._cpf = props.cpf
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }
}