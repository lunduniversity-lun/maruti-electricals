const BUSINESS = {
  name: 'Maruti Electricals',
  phone: 'ADD PHONE NUMBER',
  whatsapp: 'ADD WHATSAPP NUMBER',
  email: 'ADD BUSINESS EMAIL',
  address: 'Gangania Complex, M.G. Road, Sikanderpur, DLF, Gurugram, Haryana - 122002',
  experience: '30+ years'
};

// Generic Unsplash photos used as temporary catalogue imagery.
// Replace these URLs with your own product photos whenever ready.
const IMAGES = {
  wires: 'https://images.unsplash.com/photo-1761507320645-b11a00bfcc34?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  protection: 'https://images.unsplash.com/photo-1576446470246-499c738d1c8e?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  fan: 'https://images.unsplash.com/photo-1551207005-3b305412e532?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  socket: 'https://images.unsplash.com/photo-1553879449-b80070c922d2?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  lighting: 'https://images.unsplash.com/photo-1602353923226-b3c58fb179a0?auto=format&fit=crop&fm=jpg&q=80&w=1200'
};
const GENERIC_DETAILS = ['Multiple variants available','Retail and bulk quantities on enquiry','Current availability may vary'];
const PRODUCTS = [
  ['House Wires','Wires & Cables','General-purpose house wiring options for residential upgrades, new installations and everyday electrical work.','⌁',true,IMAGES.wires],
  ['Power Cables','Wires & Cables','Cable options for larger electrical loads, commercial work and project-based requirements.','⌁',true,IMAGES.wires],
  ['Modular Switches','Switches & Sockets','Modern modular switching products for homes, offices, shops and commercial interiors.','⏻',true,IMAGES.socket],
  ['Sockets','Switches & Sockets','Common modular socket and outlet options for practical residential and commercial installations.','⌑',false,IMAGES.socket],
  ['MCBs','MCBs & DBs','Circuit-protection products for common residential, office and commercial electrical requirements.','⛨',true,IMAGES.protection],
  ['Distribution Boards','MCBs & DBs','Distribution solutions for organized circuit protection and electrical control across varied installations.','▦',false,IMAGES.protection],
  ['PVC Electrical Conduit Pipes','Pipes & Conduits','Conduit and routing products used to guide and protect electrical wiring during installation work.','◉',true,IMAGES.wires],
  ['LED Bulbs','Lighting','General lighting options for homes, offices, shops, utility spaces and routine replacement needs.','☼',true,IMAGES.lighting],
  ['LED Panels','Lighting','Clean, low-profile panel lighting options for contemporary residential and commercial spaces.','▣',false,IMAGES.lighting],
  ['Ceiling Fans','Fans','Ceiling fan options for bedrooms, living spaces, offices, shops and other everyday requirements.','✣',true,IMAGES.fan],
  ['Modular Accessories','Accessories','Supporting modular accessories and finishing components for neat, complete electrical installations.','▤',false,IMAGES.socket],
  ['Other Electrical Materials','Other','Additional electrical essentials for repairs, maintenance, routine purchases and project requirements.','⌘',false,IMAGES.protection]
].map((x,i)=>({id:i+1,name:x[0],category:x[1],description:x[2],icon:x[3],featured:x[4],image:x[5],brand:'Multiple brands available',details:GENERIC_DETAILS}));

function brand(light=false){ return `<a class="brand-mark ${light?'brand-mark--light':''}" href="index.html"><span class="brand-script">Maruti</span><span class="brand-sub">ELECTRICALS</span></a>`; }
function header(active){ return `
<div class="utility-bar"><div class="container utility-inner"><span>${BUSINESS.experience} serving Sikanderpur</span><span class="utility-location">● Gurugram, Haryana</span></div></div>
<header class="site-header"><div class="container nav-inner"><div>${brand()}</div><nav class="desktop-nav">
${[['index.html','Home'],['products.html','Products'],['about.html','About Us'],['contact.html','Contact Us']].map(x=>`<a class="nav-link ${active===x[1]?'active':''}" href="${x[0]}">${x[1]}</a>`).join('')}
</nav><div class="nav-actions"><a class="btn btn-primary desktop-cta" href="contact.html">Enquire Now →</a><button class="menu-btn" id="menuBtn">☰</button></div></div>
<div class="mobile-panel" id="mobilePanel" hidden><div class="container mobile-links">${[['index.html','Home'],['products.html','Products'],['about.html','About Us'],['contact.html','Contact Us']].map(x=>`<a class="mobile-link ${active===x[1]?'active':''}" href="${x[0]}">${x[1]}</a>`).join('')}<a class="btn btn-primary mobile-enquire" href="contact.html">Enquire Now</a></div></div></header>`; }
function footer(){return `<footer class="footer"><div class="container footer-grid"><div class="footer-brand">${brand(true)}<p>Trusted electrical materials and practical product support in Sikanderpur, Gurgaon.</p><span class="footer-pill">Serving Sikanderpur for 30+ years</span></div><div><h4>Quick Links</h4><a href="index.html">Home</a><a href="products.html">Products</a><a href="about.html">About Us</a><a href="contact.html">Contact Us</a></div><div><h4>Contact</h4><p>☎ ${BUSINESS.phone}</p><p>✉ ${BUSINESS.email}</p><p>⌖ Sikanderpur, Gurugram, Haryana</p></div></div><div class="container footer-bottom"><span>© 2026 Maruti Electricals. All rights reserved.</span><span>Catalogue & enquiry website</span></div></footer><button class="whatsapp-float placeholder" title="Add WhatsApp number in app.js">◉</button>`;}
function productCard(p,compact=false){return `<article class="product-card ${compact?'product-card--compact':''}" data-product="${p.id}"><button class="product-visual" data-open="${p.id}"><span class="product-fallback" style="font-size:${compact?54:70}px">${p.icon}</span><img src="${p.image}" alt="Generic ${p.name} reference image" loading="lazy" onerror="this.style.display='none'"><span class="visual-grid"></span></button><div class="product-copy"><span class="eyebrow">${p.category}</span><h3>${p.name}</h3><p class="${compact?'compact-description':''}">${p.description}</p><div class="product-actions"><button class="text-link" data-open="${p.id}">View Details →</button><button class="mini-enquire" data-enquire="${p.id}">Enquire</button></div></div></article>`;}
function modal(p){return `<div class="modal-backdrop" id="modal"><div class="product-modal"><button class="modal-close" id="modalClose">×</button><div class="modal-visual"><span class="product-fallback" style="font-size:120px">${p.icon}</span><img src="${p.image}" alt="Generic ${p.name} reference image" onerror="this.style.display='none'"></div><div class="modal-copy"><span class="eyebrow">${p.category}</span><h2>${p.name}</h2><p>${p.description}</p><div class="detail-row"><span>Brand</span><strong>${p.brand}</strong></div><div class="spec-list">${p.details.map(x=>`<div>${x}</div>`).join('')}</div><div class="price-note">Price on Enquiry</div><button class="btn btn-primary" data-enquire="${p.id}">Enquire about this product →</button></div></div></div>`;}

function boot(){
  document.getElementById('menuBtn')?.addEventListener('click',()=>{const p=document.getElementById('mobilePanel'); p.hidden=!p.hidden;});
  document.body.addEventListener('click',(e)=>{
    const open=e.target.closest('[data-open]'); if(open){const p=PRODUCTS.find(x=>x.id===+open.dataset.open); document.getElementById('modalRoot').innerHTML=modal(p); return;}
    if(e.target.id==='modalClose'||e.target.id==='modal'){document.getElementById('modalRoot').innerHTML=''; return;}
    const enq=e.target.closest('[data-enquire]'); if(enq){const p=PRODUCTS.find(x=>x.id===+enq.dataset.enquire); sessionStorage.setItem('marutiEnquiryProduct',p.name); location.href='contact.html';}
  });
}
document.addEventListener('DOMContentLoaded',boot);
