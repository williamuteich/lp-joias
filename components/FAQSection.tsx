const faqs = [
  {
    question: "Como funciona a Pagina de Homenagem que ganho de presente?",
    answer:
      "Na compra de qualquer par de aliancas em nossa loja fisica, voce ganha um cupom exclusivo para resgatar 7 dias gratis de uma pagina de homenagem personalizada para o seu amor. Voce pode criar a pagina facilmente, definindo o nome de voces, escolhendo o estilo visual (Player Spotify ou Story Instagram), escrevendo uma carta de amor especial, selecionando a musica do casal (basta copiar um link da musica no YouTube) e configurando a data especial do relacionamento para exibir um calendario e um contador de tempo automatico de relacionamento.",
  },
  {
    question: "Como faco para renovar ou manter a pagina no ar apos os 7 dias?",
    answer:
      "Caso queira manter a sua homenagem ativa apos o periodo gratuito de 7 dias, voce podera fazer a renovacao diretamente no painel administrativo da sua pagina. La estarao disponiveis opcoes de renovacao para escolher conforme sua preferencia pelo periodo de 1 dia, 7 dias ou 30 dias adicionais.",
  },
  {
    question: "As joias sao em que material?",
    answer:
      "Trabalhamos com pecas em aco cirurgico com 10x banho em ouro 18k e tambem opcoes em prata, pensadas para presenca e durabilidade.",
  },
  {
    question: "Tem opções para namoro, noivado e casamento?",
    answer:
      "Sim. A vitrine foi pensada para quem quer presentear em datas românticas, mas também para quem quer uma peça marcante para uso próprio.",
  },
  {
    question: "Vocês vendem pronta entrega?",
    answer:
      "Sim, o atendimento é presencial. A pessoa escolhe a peça na hora e já sai com uma opção pronta para presentear.",
  },
  {
    question: "A prata também está disponível?",
    answer:
      "Sim. Além do banho em ouro 18k, também temos opções em prata para quem prefere um visual mais clássico e versátil.",
  },
  {
    question: "Posso comprar pelo WhatsApp?",
    answer:
      "Pode. O WhatsApp é ideal para tirar dúvidas rápidas, consultar disponibilidade e confirmar o melhor horário para passar na loja.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "A loja costuma trabalhar com as opções mais comuns do varejo local. No WhatsApp, você pode confirmar o método ideal antes de ir até o atendimento.",
  },
  {
    question: "As peças têm garantia?",
    answer:
      "Há garantia contra defeitos de fabricação, conforme as condições da loja. O ideal é confirmar o prazo de cada peça no atendimento.",
  },
  {
    question: "Vocês ajudam a escolher presente?",
    answer:
      "Sim. Esse é exatamente o tipo de apoio que melhora a conversão: a equipe pode orientar na escolha pelo estilo, ocasião e preferência de cor.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section">
      <div className="container-shell">
        <div className="mb-14">
          <div className="section-kicker">FAQ</div>
          <h2 className="section-title">
            Dúvidas que costumam <span className="text-gradient-gold italic">travar a compra</span>
          </h2>
          <p className="section-copy">
            Ajuste fino para o novo assunto: aqui a página tira as objeções mais comuns de quem está comprando joias
            para presentear ou usar no dia a dia.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item group px-6 py-5">
              <summary className="flex items-center justify-between gap-4 text-left text-xl font-medium text-[hsl(var(--foreground))]">
                <span>{faq.question}</span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[hsl(var(--secondary)/0.72)] text-2xl leading-none text-[hsl(var(--primary))] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pt-4 text-base leading-8 text-[hsl(var(--muted-foreground))]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}