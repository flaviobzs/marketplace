import Ad from '../models/Ad';
import User from '../models/User';
import Mail from '../services/Mail';

class PurchaseController {
  async store(req, res) {
    const { ad, content } = req.body;

    const purchaseAd = await Ad.findById(ad).populate('author');
    const user = await User.findById(req.userId);

    await Mail.sendMail({
      from: '"Flávio Santos" <flaviobs@fbs.com.br>',
      to: purchaseAd.author.email,
      subject: `Solicitação de compra: ${purchaseAd.title}`,
      html: `<p> teste: ${content} </p>`,
    });

    return res.send();
  }
}

export default new PurchaseController();
