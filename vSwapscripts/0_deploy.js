
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance before:", (await deployer.getBalance()).toString());
    //Deploy idoplatform
    const factory  = await ethers.getContractFactory("UniswapV3Factory");
    UniswapV3Factory = await factory.deploy();
    await UniswapV3Factory.deployed();
    console.log("Contract address:", UniswapV3Factory.address);
    await hre.run("verify:verify", {
      address: UniswapV3Factory.address,
      constructorArguments: [],
    });
    console.log("Account balance after:", (await deployer.getBalance()).toString());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });