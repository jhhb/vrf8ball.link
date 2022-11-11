/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  RandomAnswer,
  RandomAnswerInterface,
} from "../../contracts/RandomAnswer";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subscriptionId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "vrfCoordinator",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "asker",
        type: "uint256",
      },
    ],
    name: "QuestionAnswered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asker",
        type: "address",
      },
    ],
    name: "QuestionAsked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "answer",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "askQuestion",
    outputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getUserStatus",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052619c40600260006101000a81548163ffffffff021916908363ffffffff1602179055506003600260046101000a81548161ffff021916908361ffff1602179055506001600260066101000a81548163ffffffff021916908363ffffffff1602179055503480156200007457600080fd5b506040516200176e3803806200176e83398181016040528101906200009a919062000191565b818073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508060018190555050505062000292565b6000815190506200015d8162000244565b92915050565b60008151905062000174816200025e565b92915050565b6000815190506200018b8162000278565b92915050565b600080600060608486031215620001ad57620001ac6200023f565b5b6000620001bd868287016200017a565b9350506020620001d0868287016200014c565b9250506040620001e38682870162000163565b9150509250925092565b6000620001fa826200020b565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600067ffffffffffffffff82169050919050565b600080fd5b6200024f81620001ed565b81146200025b57600080fd5b50565b620002698162000201565b81146200027557600080fd5b50565b62000283816200022b565b81146200028f57600080fd5b50565b60805160601c6114b7620002b76000396000818160ed015261014101526114b76000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631fe543e31461005157806392e065cc1461006d578063d1827e851461009d578063ea0d5dcd146100bb575b600080fd5b61006b60048036038101906100669190610dea565b6100eb565b005b61008760048036038101906100829190610d90565b6101ab565b6040516100949190610fbe565b60405180910390f35b6100a5610305565b6040516100b29190611040565b60405180910390f35b6100d560048036038101906100d09190610d90565b610574565b6040516100e29190610fbe565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461019d57337f00000000000000000000000000000000000000000000000000000000000000006040517f1cf993f4000000000000000000000000000000000000000000000000000000008152600401610194929190610f42565b60405180910390fd5b6101a782826105cb565b5050565b6060600160ff16600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610233576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022a90610fe0565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414156102b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90611020565b60405180910390fd5b6102fe600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546106fb565b9050919050565b600080339050600160ff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610391576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038890611000565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635d3b1d30600154600060149054906101000a900467ffffffffffffffff16600260049054906101000a900461ffff16600260009054906101000a900463ffffffff16600260069054906101000a900463ffffffff166040518663ffffffff1660e01b815260040161043e959493929190610f6b565b602060405180830381600087803b15801561045857600080fd5b505af115801561046c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104909190610dbd565b9150806003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160ff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508073ffffffffffffffffffffffffffffffffffffffff16827f92db6d934befa71283bdc1cb627d9edf688e5201768077e7d79e9a272b6afc8f60405160405180910390a35090565b60606000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506105c381610bd3565b915050919050565b60006003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600160148460008151811061061d5761061c6112bd565b5b602002602001015161062f919061122e565b61063991906110c8565b905080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260ff16600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080847fc20b398467992236b8620840c359274de29a5f112c4705e447a7b86bb483cc7060405160405180910390a350505050565b606060006040518061028001604052806040518060400160405280600e81526020017f4974206973206365727461696e2e00000000000000000000000000000000000081525081526020016040518060400160405280601381526020017f497420697320646563696465646c7920736f2e0000000000000000000000000081525081526020016040518060400160405280601081526020017f576974686f7574206120646f7562742e0000000000000000000000000000000081525081526020016040518060400160405280600f81526020017f59657320646566696e6974656c792e000000000000000000000000000000000081525081526020016040518060400160405280601481526020017f596f75206d61792072656c6f79206f6e2069742e00000000000000000000000081525081526020016040518060400160405280601181526020017f41732049207365652069742c207965732e00000000000000000000000000000081525081526020016040518060400160405280600c81526020017f4d6f7374206c696b656c792e000000000000000000000000000000000000000081525081526020016040518060400160405280600d81526020017f4f75746c6f6f6b20676f6f642e0000000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f5965732e0000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280601381526020017f5369676e7320706f696e7420746f207965732e0000000000000000000000000081525081526020016040518060400160405280601681526020017f5265706c792068617a792c2074727920616761696e2e0000000000000000000081525081526020016040518060400160405280601081526020017f41736b20616761696e206c617465722e0000000000000000000000000000000081525081526020016040518060400160405280601881526020017f426574746572206e6f742074656c6c20796f75206e6f772e000000000000000081525081526020016040518060400160405280601381526020017f43616e6e6f742070726564696374206e6f772e0000000000000000000000000081525081526020016040518060400160405280601a81526020017f436f6e63656e747261746520616e642061736b20616761696e2e00000000000081525081526020016040518060400160405280601281526020017f446f6e277420636f756e74206f6e2069742e000000000000000000000000000081525081526020016040518060400160405280600f81526020017f4d79207265706c79206973206e6f2e000000000000000000000000000000000081525081526020016040518060400160405280601281526020017f4d7920736f757263657320736179206e6f2e000000000000000000000000000081525081526020016040518060400160405280601481526020017f4f75746c6f6f6b206e6f7420736f20676f6f642e00000000000000000000000081525081526020016040518060400160405280600e81526020017f5665727920646f75627466756c2e000000000000000000000000000000000000815250815250905080600184610bb5919061111e565b60148110610bc657610bc56112bd565b5b6020020151915050919050565b6060600060405180606001604052806040518060400160405280600481526020017f4e4f4e450000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600781526020017f52554e4e494e470000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f52414e00000000000000000000000000000000000000000000000000000000008152508152509050808360038110610ca657610ca56112bd565b5b6020020151915050919050565b6000610cc6610cc184611080565b61105b565b90508083825260208201905082856020860282011115610ce957610ce8611320565b5b60005b85811015610d195781610cff8882610d66565b845260208401935060208301925050600181019050610cec565b5050509392505050565b600081359050610d3281611453565b92915050565b600082601f830112610d4d57610d4c61131b565b5b8135610d5d848260208601610cb3565b91505092915050565b600081359050610d758161146a565b92915050565b600081519050610d8a8161146a565b92915050565b600060208284031215610da657610da561132a565b5b6000610db484828501610d23565b91505092915050565b600060208284031215610dd357610dd261132a565b5b6000610de184828501610d7b565b91505092915050565b60008060408385031215610e0157610e0061132a565b5b6000610e0f85828601610d66565b925050602083013567ffffffffffffffff811115610e3057610e2f611325565b5b610e3c85828601610d38565b9150509250929050565b610e4f81611152565b82525050565b610e5e81611164565b82525050565b6000610e6f826110ac565b610e7981856110b7565b9350610e898185602086016111ca565b610e928161132f565b840191505092915050565b6000610eaa6037836110b7565b9150610eb582611340565b604082019050919050565b6000610ecd6037836110b7565b9150610ed88261138f565b604082019050919050565b6000610ef06057836110b7565b9150610efb826113de565b606082019050919050565b610f0f8161116e565b82525050565b610f1e8161119c565b82525050565b610f2d816111a6565b82525050565b610f3c816111b6565b82525050565b6000604082019050610f576000830185610e46565b610f646020830184610e46565b9392505050565b600060a082019050610f806000830188610e55565b610f8d6020830187610f33565b610f9a6040830186610f06565b610fa76060830185610f24565b610fb46080830184610f24565b9695505050505050565b60006020820190508181036000830152610fd88184610e64565b905092915050565b60006020820190508181036000830152610ff981610e9d565b9050919050565b6000602082019050818103600083015261101981610ec0565b9050919050565b6000602082019050818103600083015261103981610ee3565b9050919050565b60006020820190506110556000830184610f15565b92915050565b6000611065611076565b905061107182826111fd565b919050565b6000604051905090565b600067ffffffffffffffff82111561109b5761109a6112ec565b5b602082029050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006110d38261119c565b91506110de8361119c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156111135761111261125f565b5b828201905092915050565b60006111298261119c565b91506111348361119c565b9250828210156111475761114661125f565b5b828203905092915050565b600061115d8261117c565b9050919050565b6000819050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b60005b838110156111e85780820151818401526020810190506111cd565b838111156111f7576000848401525b50505050565b6112068261132f565b810181811067ffffffffffffffff82111715611225576112246112ec565b5b80604052505050565b60006112398261119c565b91506112448361119c565b9250826112545761125361128e565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f5468652072657175657374656420616464726573732069732063757272656e7460008201527f6c792061736b696e672e20506c6561736520776169742e000000000000000000602082015250565b7f596f75206d757374207761697420666f7220796f75722063757272656e74207160008201527f75657374696f6e20746f20626520616e7377657265642e000000000000000000602082015250565b7f546865207265717565737465642061646472657373206d75737420666972737460008201527f2063616c6c202361736b5175657374696f6e20697473656c66206265666f726560208201527f20616e20616e7377657220697320636f6d70757465642e000000000000000000604082015250565b61145c81611152565b811461146757600080fd5b50565b6114738161119c565b811461147e57600080fd5b5056fea2646970667358221220c53469d8e212d4e7fbfd90ebb1a3d975432e61a985a0542b00d476c4a13abe1f64736f6c63430008070033";

type RandomAnswerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RandomAnswerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RandomAnswer__factory extends ContractFactory {
  constructor(...args: RandomAnswerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _subscriptionId: PromiseOrValue<BigNumberish>,
    vrfCoordinator: PromiseOrValue<string>,
    _keyHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RandomAnswer> {
    return super.deploy(
      _subscriptionId,
      vrfCoordinator,
      _keyHash,
      overrides || {}
    ) as Promise<RandomAnswer>;
  }
  override getDeployTransaction(
    _subscriptionId: PromiseOrValue<BigNumberish>,
    vrfCoordinator: PromiseOrValue<string>,
    _keyHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _subscriptionId,
      vrfCoordinator,
      _keyHash,
      overrides || {}
    );
  }
  override attach(address: string): RandomAnswer {
    return super.attach(address) as RandomAnswer;
  }
  override connect(signer: Signer): RandomAnswer__factory {
    return super.connect(signer) as RandomAnswer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RandomAnswerInterface {
    return new utils.Interface(_abi) as RandomAnswerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RandomAnswer {
    return new Contract(address, _abi, signerOrProvider) as RandomAnswer;
  }
}