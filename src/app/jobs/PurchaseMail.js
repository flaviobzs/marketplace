import Mail from '../services/Mail';

class PurchaseMail {
  get key() {
    return 'PurchaseMail';
  }

  async handle(job, done) {
    const { ad, user, content } = job.data;

    await Mail.sendMail({
      from: '"Flávio Santos" <flaviobs@fbs.com.br>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      // html: `<p> teste: ${content} </p>`,
      template: 'purchase',
      content: { user, content, ad },
    });

    return done();
  }
}

export default new PurchaseMail();
