import { PublicKey } from '@solana/web3.js';
import { completeMinting } from '../../utils/completeMinting';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { wallet, paymentTxId, mintIndex, lockId } = req.body;
    
    if (!wallet || !paymentTxId || mintIndex === undefined || !lockId) {
      return res.status(400).json({ 
        error: 'Missing required parameters. wallet, paymentTxId, mintIndex, and lockId are all required.' 
      });
    }

    let publicKey;
    try {
      publicKey = new PublicKey(wallet);
    } catch (err) {
      return res.status(400).json({ error: 'Invalid wallet address format' });
    }

    const result = await completeMinting(paymentTxId, mintIndex, lockId, publicKey);
    
    res.status(200).json(result);
  } catch (err) {
    console.error('Complete minting API error:', err);
    res.status(500).json({ error: err.message });
  }
}