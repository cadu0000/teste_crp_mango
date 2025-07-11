export class User {
    constructor(
        public readonly id: number,
        public readonly userName: string,
        public readonly email: string,
        public readonly password: string,
    ) {}

    static create(props: User): User {
        return new User(props.id, props.userName, props.email, props.password);
    }
    
    getId(): number {
        return this.id;
    }

    getUserName(): string {
        return this.userName;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }
}