import { Nat8, Text } from "@dfinity/candid/lib/cjs/idl";
import { IDL, StableBTreeMap } from "azle";
import { Principal } from "@dfinity/principal";
import { nat32, nat64 } from "azle/experimental";

const Key: IDL.FixedNatClass = Nat8;
const Value: IDL.TextClass = Text;

type Key = typeof Key.checkType;
type Value = typeof Value.checkType;

export class StableStructure {
  accounts = StableBTreeMap<Key, Value>(0);

  //   get: () => {}
}

export type Account = {
  principal: Principal;
  balance: nat64;
};

export let userAccounts = StableBTreeMap<Principal, Account>(
  0 as nat32,
  100 as nat64,
  32 as nat32
);
