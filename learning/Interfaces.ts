// Interfaces

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