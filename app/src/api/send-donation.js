import { web3 } from '@project-serum/anchor'
import { Connection } from '@solana/web3.js'
import { useWorkspace } from '@/composables'
import bs58 from 'bs58'


const clusterUrl = process.env.VUE_APP_CLUSTER_URL
const commitment = 'confirmed'

export const sendDonation = async (amount) => {

    console.log('amount');
    console.log(amount);

    const { wallet } = useWorkspace()

    console.log('this was called');
    const connection = new Connection(clusterUrl, commitment);
    const from = web3.Keypair.generate();
    console.log('till here');
    console.log(connection);
    const airdropSignature = await connection.requestAirdrop(
        from.publicKey,
        amount*2, // 10000000 Lamports in 1 SOL
      );
      console.log('till here2');

    await connection.confirmTransaction(airdropSignature);
    console.log('1');
    console.log(from);
    console.log('2');

    const to = wallet.value;
    const to2 = bs58.decode("BKTStFYc813Drfj7h3LovRPEkQGWpPaRZK19qKfLsuie");
    const to3 = new web3.PublicKey("BKTStFYc813Drfj7h3LovRPEkQGWpPaRZK19qKfLsuie");

    console.log(to.publicKey);
    console.log(to2);
    console.log(to3);

    const transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to3,
        lamports: amount,
      }),
    );
  
    // Sign transaction, broadcast, and confirm
    const signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [from],
    );
    console.log('SIGNATURE', signature);
}
