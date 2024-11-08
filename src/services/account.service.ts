import { Principal } from "@dfinity/principal";
import { Account, userAccounts } from "../stableStructure";

export function createUserAccount(username: string): string {
  const userPrincipal = Principal.fromText(username);

  if (userAccounts.containsKey(userPrincipal)) {
    return "Account already exists for this user";
  }

  const account: Account = {
    principal: userPrincipal,
    balance: 0n,
  };

  userAccounts.insert(userPrincipal, account);
  return `Account created for user: ${userPrincipal.toText()}`;
}

export async function transferICP(
  sender: string,
  receiver: string,
  amount: number
): Promise<string> {
  const senderPrincipal = Principal.fromText(sender);
  const receiverPrincipal = Principal.fromText(receiver);

  const result = await ledger;
}

export async function getBalance(user: string): Promise<number> {
  const userPrincipal = Principal.fromText(user);
  const balance = await ledger;
  return balance;
}
