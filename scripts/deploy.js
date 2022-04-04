async function main() {
    const Otaku = await ethers.getContractFactory("Otaku");
  
    // Start deployment, returning a promise that resolves to a contract object
    const otaku = await Otaku.deploy();
    console.log("Contract deployed to address:", otaku.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

//0x99C33C2dc12d95456bdeaC3197794B62A4f22d79