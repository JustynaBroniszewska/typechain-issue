import { MockProvider } from 'ethereum-waffle'
import { Example__factory } from './build/types'

async function test() {
  const [wallet] = new MockProvider().getWallets()
  const contract = await new Example__factory(wallet).deploy()
  const numbers = await contract.getNumbers()
  const { 0: _a, 1: _b } = numbers
  const [numA, numB] = [numbers[0], numbers[1]]
  // const [a, b] = numbers /* <- this line doesn't work */
}

test()
