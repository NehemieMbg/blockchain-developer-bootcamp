async function main() {
	console.log(`Preparing deployment...\n`)

	// Fetch contract to deploy
	const Token = await ethers.getContractFactory('Token')
	const Exchange = await ethers.getContractFactory('Exchange')

	const accounts = await ethers.getSigners()

	console.log(`Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n`)

	// Deploy contract
	const Emerys = await Token.deploy('Emerys', 'EMRS', '150000000')
	await Emerys.deployed()
	console.log(`EMRS Deployed to: ${Emerys.address}`)

	const mETH = await Token.deploy('mETH', 'mETH', '1000000')
	await mETH.deployed()
	console.log(`mETH Deployed to: ${mETH.address}`)

	const mDAI = await Token.deploy('mDAI', 'mDAI', '1000000')
	await mDAI.deployed()
	console.log(`mDAI Deployed to: ${mDAI.address}`)

	const exchange = await Exchange.deploy(accounts[1].address, 1)
	await exchange.deployed()
	console.log(`Exchange Deploy to: ${exchange.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
