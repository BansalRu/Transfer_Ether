const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

const ether = tokens

describe('FlashLoan', () => {
    let token, flashLoan, flashLoanReceiver

    beforeEach(async () => {
        accounts = await ethers.getSigners()
        deployer = accounts[0]
    })

    const FlashLoan = await ethers.getContractFactory('FlashLoan')
    const FlashLoanReceiver = await ethers.getContractFactory('FlashLoanReceiver')
    const Token = await ethers.getContractFactory('Token')


    token = await Token.deploy('Rupin Academy', 'RA', '1000000')
    flashLoan = await FlashLoan.deploy(token.address)

    let transaction = await token.connect(deployer).approve(flashLoan.address, tokens(1000000))
    await transaction.wait()

    flashLoanReceiver = await FlashLoanReceiver.deploy(flashLoan.address)

    describe('Deployement', () => {
        it('sends token', async() => {
            expect(await token.balanceOf(flashLoan.address)).to.equal(tokens(1000000))
        })
    })
})