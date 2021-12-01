import * as CryptoJS from "crypto-js";

{
  const sayHi = (name:string, age:number, gender:string):string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`
  }
  
  console.log(sayHi("lee", 25, "female"));
}

{
  // interface 는 자바스크립트에서 인식 못함
  // interface 쓸 때가 있고 class 쓸 때가 있음
  interface Human {
    name: string,
    age: number,
    gender: string
  }

  const person = {
    name: "lee",
    age: 25,
    gender: "female"
  }

  const sayHi = (obj: Human):string => {
    return `Hello ${obj.name}, you are ${obj.age}, you are a ${obj.gender}`
  }

  console.log(sayHi(person));
}

{
  // interface 대신 넣는 것이 class
  class Human {
    // ts의 class 는 이렇게 property를 정의해줘야한다.
    // public / private
    public name: string;
    public age: number;
    public gender: string;

    constructor(name:string, age:number, gender:string){
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }

  const lee = new Human("seungyeon", 25, "female");
  
  const sayHi = (obj: Human):string => {
    return `Hello ${obj.name}, you are ${obj.age}, you are a ${obj.gender}`
  }

  console.log(sayHi(lee));
}

{
  // Blockchain 만들면서 감 익히기
  class Block {
    static calculateBlockHash = (
      index: number,
      previousHash: string,
      timestamp: number,
      data: string
    ):string => {
      return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
    }

    static validateStructure = (aBlock:Block):boolean => 
      typeof aBlock.index === "number" && 
      typeof aBlock.hash === "string" && 
      typeof aBlock.previousHash === "string" &&
      typeof aBlock.timestamp === "number" &&
      typeof aBlock.data === "string";

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(
      index: number,
      hash: string,
      previousHash: string,
      data: string,
      timestamp: number
    ){
      this.index = index;
      this.hash = hash;
      this.previousHash = previousHash;
      this.data = data;
      this.timestamp = timestamp;
    }
  }

  const genesisBlock:Block = new Block(0, "20211130", "", "Hello", 1234);

  const blockchain:Block[] = [genesisBlock];

  const getBlockchain = ():Block[] => blockchain;

  const getLatestBlock = ():Block => blockchain[blockchain.length - 1];

  const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

  const createNewBlock = (data:string):Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex:number = previousBlock.index + 1;
    const newTimeStamp:number = getNewTimeStamp();
    const newHash:string = Block.calculateBlockHash(
      newIndex,
      previousBlock.hash,
      newTimeStamp,
      data
    );
    const newBlock:Block = new Block(
      newIndex, 
      newHash, 
      previousBlock.hash, 
      data, 
      newTimeStamp
    );

    addBlock(newBlock);

    return newBlock;
  }

  const getHashforBlock = (aBlock:Block):string => Block.calculateBlockHash(
    aBlock.index, 
    aBlock.previousHash, 
    aBlock.timestamp, 
    aBlock.data
  );

  const isBlockValid = (candidateBlock:Block, previousBlock:Block):boolean => {
    if(!Block.validateStructure(candidateBlock)){
      return false;
    } else if(previousBlock.index + 1 !== candidateBlock.index){
      return false;
    } else if(previousBlock.hash !== candidateBlock.previousHash){
      return false;
    } else if(getHashforBlock(candidateBlock) !== candidateBlock.hash){
      return false;
    } else {
      return true;
    }
  }

  const addBlock = (candidateBlock:Block):void => {
    if(isBlockValid(candidateBlock, getLatestBlock())){
      blockchain.push(candidateBlock);
    }
  }

  createNewBlock("second block");
  createNewBlock("third block");
  createNewBlock("forth block");

  console.log(blockchain);
}