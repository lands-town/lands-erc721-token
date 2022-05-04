const { ethers } = require("hardhat");

async function main() {
  const LandsNFT = await ethers.getContractFactory("LandsNFT");
  const landsNFT = await LandsNFT.deploy("Landscape", "LANDS");

  await landsNFT.deployed();
  console.log("Contract successfully deployed: " + landsNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
