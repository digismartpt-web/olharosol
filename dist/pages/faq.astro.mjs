/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dvld-7Qp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DjKcoFGd.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const faqSection = {
    questions: [
        {
            question: "Como posso fazer uma reserva?",
            answer: "Pode fazer uma reserva através do nosso formulário online na página inicial ou ligando para o 252 996 426."
        },
        {
            question: "Quais são os horários de funcionamento?",
            answer: "Estamos abertos de terça a sábado, das 12h às 15h para almoço e das 19h às 22h para jantar. Encerramos aos domingos e segundas."
        },
        {
            question: "O restaurante tem estacionamento?",
            answer: "Sim, dispomos de um parque de estacionamento privativo para os nossos clientes."
        }
    ]
};

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Questions fr\xE9quentes", "description": "ED\xE9couvrez les r\xE9ponses aux questions les plus courantes et contactez-nous pour toute information compl\xE9mentaire. ", "data-astro-cid-6kmwghhu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-20" data-astro-cid-6kmwghhu> <!-- Hero Section --> <section class="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800" data-astro-cid-6kmwghhu> <div class="container mx-auto px-4" data-astro-cid-6kmwghhu> <div class="max-w-3xl mx-auto text-center" data-astro-cid-6kmwghhu> <h1 class="text-4xl md:text-5xl font-bold text-white mb-6" data-astro-cid-6kmwghhu>
Perguntas Frequentes
</h1> <p class="text-xl text-gray-300" data-astro-cid-6kmwghhu>
Découvrez les réponses aux questions les plus courantes et contactez-nous pour toute information complémentaire.
</p> </div> </div> </section> <!-- FAQ Section --> <section class="py-20" data-astro-cid-6kmwghhu> <div class="container mx-auto px-4" data-astro-cid-6kmwghhu> <div class="max-w-4xl mx-auto" data-astro-cid-6kmwghhu> <div class="grid gap-6" data-astro-cid-6kmwghhu> ${faqSection.questions.map((faq, index) => renderTemplate`<div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-astro-cid-6kmwghhu> <details class="group" data-astro-cid-6kmwghhu> <summary class="flex items-center justify-between p-6 cursor-pointer" data-astro-cid-6kmwghhu> <h2 class="text-xl font-semibold text-gray-900" data-astro-cid-6kmwghhu>${faq.question}</h2> <span class="relative flex-shrink-0 ml-4" data-astro-cid-6kmwghhu> <svg class="w-6 h-6 text-primary transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6kmwghhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-6kmwghhu></path> </svg> </span> </summary> <div class="px-6 pb-6 text-gray-600" data-astro-cid-6kmwghhu> <p data-astro-cid-6kmwghhu>${faq.answer}</p> </div> </details> </div>`)} </div> <!-- Contact CTA --> <div class="mt-16 text-center" data-astro-cid-6kmwghhu> <div class="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8" data-astro-cid-6kmwghhu> <h2 class="text-2xl font-bold mb-4" data-astro-cid-6kmwghhu>Vous n’avez pas trouvé ce que vous cherchiez ?</h2> <p class="text-gray-600 mb-8" data-astro-cid-6kmwghhu>
Notre équipe est à votre disposition pour répondre à toutes vos questions.
</p> <a href="/contact" class="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105" data-astro-cid-6kmwghhu>
Contactez-nous.
</a> </div> </div> </div> </div> </section> </div> ` })} `;
}, "C:/Users/Alice/Downloads/domhenrique-main/src/pages/faq.astro", void 0);

const $$file = "C:/Users/Alice/Downloads/domhenrique-main/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Faq,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
