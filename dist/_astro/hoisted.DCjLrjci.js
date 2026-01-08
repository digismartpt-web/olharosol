import{o as J,s as K,a as D,b as Q,d as G,c as I,e as g,q as M,w as U,f as P,g as X,h as Y,i as Z,j as _}from"./firebase.CHVcsD2z.js";import"./hoisted.BB7YPW27.js";const q=document.getElementById("login-view"),N=document.getElementById("dashboard-view"),ee=document.getElementById("login-form"),te=document.getElementById("logout-btn"),f=document.getElementById("reservations-list"),H=document.getElementById("settings-form"),$=document.getElementById("tables-list"),F=document.getElementById("add-table-btn");let o=[],R=1;function ae(a){const e=document.createElement("div");e.className="flex items-center gap-2 p-2 bg-gray-50 rounded border",e.dataset.tableId=a.id;const t=a.combinable!==!1;return e.innerHTML=`
          <input type="text" 
                 value="${a.name}" 
                 placeholder="Mesa 1" 
                 class="table-name flex-1 px-2 py-1 border rounded text-sm"
                 data-table-id="${a.id}">
          <input type="number" 
                 value="${a.capacity}" 
                 min="1" 
                 max="20" 
                 placeholder="Cap." 
                 class="table-capacity w-16 px-2 py-1 border rounded text-sm"
                 data-table-id="${a.id}">
          <span class="text-xs text-gray-500">pessoas</span>
          <label class="flex items-center gap-1 text-xs text-gray-600 cursor-pointer" title="Pode ser combinada com outras mesas">
              <input type="checkbox" 
                     class="table-combinable"
                     data-table-id="${a.id}"
                     ${t?"checked":""}>
              <span>Combinável</span>
          </label>
          <button type="button" 
                  class="remove-table-btn text-red-500 hover:text-red-700 px-2"
                  data-table-id="${a.id}">
              ×
          </button>
      `,e}function T(){$.innerHTML="",o.length===0?$.innerHTML='<p class="text-sm text-gray-400 italic">Nenhuma mesa configurada. Clique em "Adicionar Mesa".</p>':o.forEach(a=>{$.appendChild(ae(a))}),document.querySelectorAll(".remove-table-btn").forEach(a=>{a.addEventListener("click",e=>{const t=e.target.dataset.tableId;o=o.filter(s=>s.id!==t),T()})})}F&&F.addEventListener("click",()=>{const a={id:`t${R++}`,name:`Mesa ${o.length+1}`,capacity:4,combinable:!0};o.push(a),T()});J(D,a=>{a?(q.classList.add("hidden"),N.classList.remove("hidden"),se()):(q.classList.remove("hidden"),N.classList.add("hidden"))});ee.addEventListener("submit",async a=>{a.preventDefault();const e=document.getElementById("email").value,t=document.getElementById("password").value;try{await K(D,e,t)}catch{document.getElementById("login-error").classList.remove("hidden")}});te.addEventListener("click",()=>Q(D));let l=[],r=1;const h=8;let m=new Date().toISOString().split("T")[0];const d=document.getElementById("filter-date"),u=document.getElementById("btn-show-all"),x=document.getElementById("btn-prev"),E=document.getElementById("btn-next"),ne=document.getElementById("page-info"),j=document.getElementById("btn-delete-day");d&&(d.value=m);d&&d.addEventListener("change",a=>{m=a.target.value,r=1,C(),V()});u&&u.addEventListener("click",()=>{m=null,d&&(d.value=""),r=1,C(),V()});j&&j.addEventListener("click",async()=>{if(!m){alert("Por favor selecione uma data específica para eliminar as reservas.");return}const a=l.length;if(a===0){alert("Não há reservas para eliminar nesta data.");return}try{const e=l.map(t=>G(I(g,"reservations",t.id)));await Promise.all(e),alert(`✅ ${a} reserva(s) eliminada(s) com sucesso.`)}catch(e){console.error("Error deleting reservations:",e),alert("Erro ao eliminar as reservas.")}});x&&x.addEventListener("click",()=>{r>1&&(r--,k())});E&&E.addEventListener("click",()=>{const a=Math.ceil(l.length/h);r<a&&(r++,k())});function V(){m?(u.classList.remove("bg-primary","text-white"),u.classList.add("bg-gray-200","text-gray-700"),d.classList.add("border-primary","ring-1","ring-primary")):(u.classList.add("bg-primary","text-white"),u.classList.remove("bg-gray-200","text-gray-700"),d.classList.remove("border-primary","ring-1","ring-primary"))}let S=null;function C(){S&&S();let a;m?a=M(P(g,"reservations"),U("date","==",m)):a=M(P(g,"reservations"),X("date","desc")),S=Y(a,e=>{l=[],e.forEach(t=>{l.push({id:t.id,...t.data()})}),l.sort((t,s)=>t.date!==s.date?s.date.localeCompare(t.date):t.time.localeCompare(s.time)),k()},e=>{console.error("Firestore Subscribe Error:",e),f.innerHTML=`<p class="text-red-500 text-center py-4">Erro ao carregar reservas: ${e.message}</p>`})}function k(){f.innerHTML="";const a=(r-1)*h,e=a+h,t=l.slice(a,e),s=Math.ceil(l.length/h)||1;if(ne.textContent=`Página ${r} de ${s} (${l.length} total)`,x.disabled=r===1,E.disabled=r===s,x.classList.toggle("opacity-50",r===1),E.classList.toggle("opacity-50",r===s),t.length===0){f.innerHTML='<p class="text-gray-500 text-center italic py-8">Nenhuma reserva encontrada para este filtro.</p>';return}t.forEach(n=>{const c=new Date(n.date+"T"+n.time)<new Date,y=c?"border-gray-300 bg-gray-50 opacity-75":"border-primary bg-white",p=c?'<span class="text-gray-500">Passado</span>':'<span class="text-green-600 font-bold">Confirmado</span>',v=document.createElement("div");v.className=`flex justify-between items-center p-4 rounded-lg border-l-4 shadow-sm ${y}`;const B=n.assignedTableName?`<span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">📍 ${n.assignedTableName}</span>`:"";v.innerHTML=`
        <div>
          <div class="font-bold text-lg text-gray-800 flex items-center gap-2">
             ${n.time} 
             <span class="text-sm font-normal text-gray-500">(${n.date})</span>
             ${B}
          </div>
          <div class="text-gray-800 font-medium">${n.name}</div>
          <div class="text-sm text-gray-500 flex items-center gap-2 mt-1">
            <span class="bg-gray-200 px-2 rounded-full text-xs font-bold text-gray-700">${n.guests} Pessoas</span>
            <span>${n.phone}</span>
          </div>
        </div>
        <div class="text-right flex flex-col items-end gap-2">
           <div class="text-xs uppercase tracking-wide bg-gray-100 px-2 py-1 rounded">${p}</div>
           <a href="mailto:${n.email}" class="text-xs text-primary hover:underline">${n.email}</a>
           <button 
              class="delete-btn text-red-500 hover:text-red-700 text-xs flex items-center gap-1 mt-1 transition-colors"
              data-id="${n.id}"
              title="Supprimer cette réservation"
           >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Eliminar
           </button>
        </div>
      `,f.appendChild(v)}),document.querySelectorAll(".delete-btn").forEach(n=>{n.addEventListener("click",async b=>{const c=b.currentTarget.getAttribute("data-id");if(!(!c||!confirm(`⚠️ IMPORTANTE: Não se esqueça de ligar ao cliente para informá-lo do cancelamento!

Deseja eliminar esta reserva?`)))try{await G(I(g,"reservations",c))}catch(p){console.error("Error deleting reservation:",p),alert("Erro ao eliminar a reserva.")}})})}function se(){C(),re()}function re(){const a=I(g,"settings","general");_(a).then(e=>{if(e.exists()){const t=e.data();document.getElementById("max-guests").value=t.maxGuests||8,document.getElementById("min-advance").value=t.minAdvance||30,document.getElementById("res-duration").value=t.resDuration||60;const s=t.closedDays||[0,1];document.querySelectorAll('input[name="closed"]').forEach(n=>{n.checked=s.includes(parseInt(n.value))}),t.vacationStart&&(document.getElementById("vacation-start").value=t.vacationStart),t.vacationEnd&&(document.getElementById("vacation-end").value=t.vacationEnd),document.getElementById("lunch-start").value=t.lunchStart||12,document.getElementById("lunch-end").value=t.lunchEnd||15,document.getElementById("dinner-start").value=t.dinnerStart||19,document.getElementById("dinner-end").value=t.dinnerEnd||22,t.tables&&Array.isArray(t.tables)&&(o=t.tables,R=Math.max(...o.map(n=>parseInt(n.id.replace("t",""))),0)+1,T())}})}document.getElementById("clear-vacation")?.addEventListener("click",()=>{document.getElementById("vacation-start").value="",document.getElementById("vacation-end").value=""});H.addEventListener("submit",async a=>{a.preventDefault();const e=H.querySelector('button[type="submit"]'),t="Salvar Configuração";e.disabled=!0,e.innerHTML='<span class="animate-pulse">A guardar...</span>',e.classList.add("opacity-75","cursor-not-allowed");const s=document.getElementById("max-guests").value,n=document.getElementById("min-advance").value,b=document.getElementById("res-duration").value,c=document.getElementById("vacation-start").value,y=document.getElementById("vacation-end").value,p=document.getElementById("lunch-start").value,v=document.getElementById("lunch-end").value,B=document.getElementById("dinner-start").value,O=document.getElementById("dinner-end").value,W=Array.from(document.querySelectorAll('input[name="closed"]:checked')).map(i=>parseInt(i.value));if(o.length===0){alert("É necessário configurar pelo menos 1 mesa."),e.disabled=!1,e.textContent=t,e.classList.remove("opacity-75","cursor-not-allowed");return}const L=[];document.querySelectorAll(".table-name").forEach(i=>{const w=i.dataset.tableId,z=document.querySelector(`.table-capacity[data-table-id="${w}"]`),A=document.querySelector(`.table-combinable[data-table-id="${w}"]`);L.push({id:w,name:i.value||`Mesa ${L.length+1}`,capacity:parseInt(z.value)||4,combinable:A?A.checked:!0})}),o=L;try{const i={maxGuests:parseInt(s),minAdvance:parseInt(n),resDuration:parseInt(b),closedDays:W,vacationStart:c,vacationEnd:y,lunchStart:parseInt(p),lunchEnd:parseInt(v),dinnerStart:parseInt(B),dinnerEnd:parseInt(O),tables:o,tableMode:"advanced"};await Z(I(g,"settings","general"),i),e.textContent="Guardado com Sucesso! ✅",e.classList.remove("bg-gray-800","hover:bg-gray-700"),e.classList.add("bg-green-600","hover:bg-green-700","transition-all"),setTimeout(()=>{e.disabled=!1,e.textContent=t,e.classList.remove("opacity-75","cursor-not-allowed","bg-green-600","hover:bg-green-700"),e.classList.add("bg-gray-800","hover:bg-gray-700")},2e3)}catch(i){console.error(i),e.textContent="Erro ao guardar ❌",setTimeout(()=>{e.disabled=!1,e.textContent=t},2e3)}});
