const BUSINESS = {
  name: 'Maruti Electricals',
  phone: 'ADD PHONE NUMBER',
  whatsapp: 'ADD WHATSAPP NUMBER',
  email: 'ADD BUSINESS EMAIL',
  address: 'Gangania Complex, M.G. Road, Sikanderpur, DLF, Gurugram, Haryana - 122002',
  experience: '30+ years'
};

const PRODUCTS = [
  ['House Wires','Wires & Cables','Everyday electrical wiring for residential and general requirements.','⌁',true],
  ['Power Cables','Wires & Cables','Power cable options for larger electrical and project requirements.','⌁',true],
  ['Modular Switches','Switches & Sockets','Clean modular switching solutions for homes, offices and commercial spaces.','⏻',true],
  ['Sockets','Switches & Sockets','Electrical sockets and modular accessories for common installation needs.','⌑',false],
  ['MCBs','MCBs & DBs','Circuit protection products for residential and commercial applications.','⛨',true],
  ['Distribution Boards','MCBs & DBs','Distribution board options for organized electrical protection and control.','▦',false],
  ['PVC Electrical Conduit Pipes','Pipes & Conduits','Conduit and pipe solutions for routing and protecting electrical wiring.','◉',true],
  ['LED Bulbs','Lighting','General LED lighting for homes, offices, shops and utility spaces.','☼',true],
  ['LED Panels','Lighting','Slim LED panel lighting for modern residential and commercial interiors.','▣',false],
  ['Ceiling Fans','Fans','Ceiling fan options for residential, office and commercial requirements.','✣',true],
  ['Modular Accessories','Accessories','Supporting modular accessories for electrical installations and finishing.','▤',false],
  ['Other Electrical Materials','Other','Additional electrical essentials for repairs, maintenance and project needs.','⌘',false]
].map((p,i)=>({id:i+1,name:p[0],category:p[1],description:p[2],icon:p[3],featured:p[4]}));

function brand(light=false){ return `<a class="brand-mark ${light?'brand-mark--light':''}" href="index.html"><span class="brand-script">Maruti</span><span class="brand-sub">ELECTRICALS</span></a>`; }
function header(active){ return `
<div class="utility-bar"><div class="container utility-inner"><span>${BUSINESS.experience} serving Sikanderpur</span><span class="utility-location">● Gurugram, Haryana</span></div></div>
<header class="site-header"><div class="container nav-inner"><div>${brand()}</div><nav class="desktop-nav">
${[['index.html','Home'],['products.html','Products'],['about.html','About Us'],['contact.html','Contact Us']].map(x=>`<a class="nav-link ${active===x[1]?'active':''}" href="${x[0]}">${x[1]}</a>`).join('')}
</nav><div class="nav-actions"><a class="btn btn-primary desktop-cta" href="contact.html">Enquire Now →</a><button class="menu-btn" id="menuBtn">☰</button></div></div>
<div class="mobile-panel" id="mobilePanel" hidden><div class="container mobile-links">${[['index.html','Home'],['products.html','Products'],['about.html','About Us'],['contact.html','Contact Us']].map(x=>`<a class="mobile-link ${active===x[1]?'active':''}" href="${x[0]}">${x[1]}</a>`).join('')}<a class="btn btn-primary mobile-enquire" href="contact.html">Enquire Now</a></div></div></header>`; }
function footer(){return `<footer class="footer"><div class="container footer-grid"><div class="footer-brand">${brand(true)}<p>Trusted electrical materials and solutions in Sikanderpur, Gurgaon.</p><span class="footer-pill">Serving Sikanderpur for 30+ years</span></div><div><h4>Quick Links</h4><a href="index.html">Home</a><a href="products.html">Products</a><a href="about.html">About Us</a><a href="contact.html">Contact Us</a></div><div><h4>Contact</h4><p>☎ ${BUSINESS.phone}</p><p>✉ ${BUSINESS.email}</p><p>⌖ Sikanderpur, Gurugram, Haryana</p></div></div><div class="container footer-bottom"><span>© 2026 Maruti Electricals. All rights reserved.</span><span>Catalogue & enquiry website</span></div></footer><button class="whatsapp-float placeholder" title="Add WhatsApp number in app.js">◉</button>`;}
function productCard(p,compact=false){return `<article class="product-card ${compact?'product-card--compact':''}" data-product="${p.id}"><button class="product-visual" data-open="${p.id}"><span style="font-size:${compact?54:70}px;position:relative;z-index:2">${p.icon}</span><span class="visual-grid"></span></button><div class="product-copy"><span class="eyebrow">${p.category}</span><h3>${p.name}</h3>${compact?'':`<p>${p.description}</p>`}<div class="product-actions"><button class="text-link" data-open="${p.id}">View Details →</button><button class="mini-enquire" data-enquire="${p.id}">Enquire</button></div></div></article>`;}
function modal(p){return `<div class="modal-backdrop" id="modal"><div class="product-modal"><button class="modal-close" id="modalClose">×</button><div class="modal-visual"><span style="font-size:120px">${p.icon}</span></div><div class="modal-copy"><span class="eyebrow">${p.category}</span><h2>${p.name}</h2><p>${p.description}</p><div class="price-note">Price on Enquiry</div><button class="btn btn-primary" data-enquire="${p.id}">Enquire about this product →</button></div></div></div>`;}

function boot(){
  document.getElementById('menuBtn')?.addEventListener('click',()=>{const p=document.getElementById('mobilePanel'); p.hidden=!p.hidden;});
  document.body.addEventListener('click',(e)=>{
    const open=e.target.closest('[data-open]'); if(open){const p=PRODUCTS.find(x=>x.id===+open.dataset.open); document.getElementById('modalRoot').innerHTML=modal(p); return;}
    if(e.target.id==='modalClose'||e.target.id==='modal'){document.getElementById('modalRoot').innerHTML=''; return;}
    const enq=e.target.closest('[data-enquire]'); if(enq){const p=PRODUCTS.find(x=>x.id===+enq.dataset.enquire); sessionStorage.setItem('marutiEnquiryProduct',p.name); location.href='contact.html';}
  });
}
document.addEventListener('DOMContentLoaded',boot);
