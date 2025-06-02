const ethers=require("ethers")

const provider=new ethers.JsonRpcProvider("https://data-seed-prebsc-2-s3.binance.org:8545/")

const query=async ()=>{
    let blockNum=await provider.getBlockNumber()
    console.log(blockNum)

    const balance=await provider.getBalance("0x8452203ba04A23F0d9D9F2e3B7C05F4948C99b37")
console.log(balance)  //big number

const ethFormatBal=ethers.formatEther(balance)
console.log(ethFormatBal)   //bal in ether

const balInWei=ethers.parseEther(ethFormatBal)
console.log(balInWei)   //ether -> wei



}

query()
