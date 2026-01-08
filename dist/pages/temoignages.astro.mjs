/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dvld-7Qp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DjKcoFGd.mjs';
export { renderers } from '../renderers.mjs';

const $$Temoignages = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Propriet\xE1ria",
      content: "Uma equipa profissional e atenta.",
      rating: 5
    },
    {
      name: "Jean Martin",
      role: "Arquiteto",
      content: "Trabalho regularmente com a Alusteel para os meus projetos. A sua expertise e reatividade s\xE3o essenciais.",
      rating: 5
    },
    {
      name: "Sophie Lambert",
      role: "Decoradora de interiores",
      content: "Produtos de alta qualidade e um servi\xE7o ao cliente impec\xE1vel. Recomendo !",
      rating: 5
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Testemunhos", "description": "Descubra as opini\xF5es dos nossos clientes satisfeitos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-20"> <!-- Hero Section --> <section class="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
O que dizem os nossos clientes
</h1> <p class="text-xl text-gray-300">
Descubra os testemunhos dos nossos clientes satisfeitos.
</p> </div> </div> </section> <!-- Testimonials Section --> <section class="py-20"> <div class="container mx-auto px-4"> <div class="grid md:grid-cols-3 gap-8"> ${testimonials.map((testimonial) => renderTemplate`<div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"> <div class="flex items-center mb-6"> <div> <h3 class="font-bold text-lg">${testimonial.name}</h3> <p class="text-gray-600">${testimonial.role}</p> </div> </div> <div class="flex mb-4"> ${[...Array(testimonial.rating)].map(() => renderTemplate`<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-gray-600 italic">"${testimonial.content}"</p> </div>`)} </div> <!-- Call to Action --> <div class="mt-20 text-center"> <h2 class="text-3xl font-bold mb-8">Partilhe também a sua experiência</h2> <a href="/contact" class="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
Deixar um testemunho
</a> </div> </div> </section> </div> ` })}`;
}, "C:/Users/Alice/Downloads/domhenrique-main/src/pages/temoignages.astro", void 0);

const $$file = "C:/Users/Alice/Downloads/domhenrique-main/src/pages/temoignages.astro";
const $$url = "/temoignages";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Temoignages,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
