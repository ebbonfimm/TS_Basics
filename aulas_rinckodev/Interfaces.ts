// Interfaces - conhecido como Contrato
// Aula https://www.youtube.com/watch?v=YwtudT9ji0A

// declare global {
//     interface console {
//         sayHello(): void
//     }
// }

// Object.assign(console, {
//     sayHello(){
//         console.log("Hello");
//     }
// })

// console.sayHello();

interface UserWallet {
    coins?: number;
    credits?: number;
}

interface User {
    name: string,
    createdAt: Date;
    wallet?: UserWallet
}

interface User {
    talk(): void
}

function createUser(name: string): User {
    return { name, createdAt: new Date(),
        talk() {
            console.log("Eu sou", name)
        }
    }
}

// Espalhamento?
function updateWallet(user: User, wallet: UserWallet) {
    user.wallet = {...user.wallet, ...wallet}
}

const weedub = createUser("weedub")

const weedub_wallet: UserWallet = { coins: 10 }

updateWallet(weedub, weedub_wallet)


interface Admin extends User{
    // name: string,
    // createdAt: Date;
    // wallet?: UserWallet;
    ban(user: User): void;
    kick(user: User): void;
}

function promoteUser(user: User): Admin {
    return {
        ...user,
        ban(userToBan) {
            console.log(userToBan, "foi banido por", this.name)
        },
        kick(userToKick) {
            console.log(userToKick, "foi expulso por", this.name)
        }
    }
}

const admWeedub = promoteUser(weedub)

admWeedub.kick(weedub)


function adminAction(admin: Admin): string {
    return ""
}

// adminAction(weedub)
adminAction(admWeedub)