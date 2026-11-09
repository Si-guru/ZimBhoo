const CONTACT_EMAIL = 'hello@discoverzimbabwe.example'; // replace before publishing

document.head.append(Object.assign(document.createElement('link'), {rel: 'stylesheet', href: 'animals.css'}));

const menu = document.querySelector('.menu'), nav = document.querySelector('nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu.textContent = open ? '×' : '☰';
});
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = '☰';
}));

// [name, emoji, category, where, description, photo]
const animals = [
  ['African elephant','🐘','Big Five','Hwange, Mana Pools, Matusadona','Zimbabwe has one of the largest elephant populations in the world.','elephant.jpg'],
  ['Lion','🦁','Big Five','Hwange, Matusadona, Gonarezhou','Look for prides at waterholes at dawn and dusk.','lion.jpg'],
  ['Leopard','🐆','Big Five','Matobo Hills, Gonarezhou, Hwange','Elusive and mostly nocturnal; Matobo is known for its leopards.','leopard.jpg'],
  ['Cape buffalo','🐃','Big Five','Hwange, Mana Pools, Gonarezhou','Large herds gather along rivers in the dry season.','buffalo.jpg'],
  ['Black and white rhino','🦏','Big Five','Matobo, Hwange, Imire','Protected in guarded conservancies. Matobo offers guided rhino walks.','rhino.jpg'],
  ['Hippopotamus','🦛','Water & birds','Zambezi River, Lake Kariba, Mana Pools','Best seen from a boat or canoe.','hippo.jpg'],
  ['Nile crocodile','🐊','Water & birds','Lake Kariba, Zambezi, Save and Runde rivers','Sunning on sandbanks and shorelines.','crocodile.jpg'],
  ['Giraffe','🦒','Plains game','Hwange, Matobo, Gonarezhou','Tall browsers that feed on acacia crowns.','giraffe.jpg'],
  ['Plains zebra','🦓','Plains game','Hwange, Matobo, Chizarira','Often seen grazing beside wildebeest and impala.','zebra.jpg'],
  ['Sable antelope','🦌','Plains game','Hwange, Matobo, Chizarira','A striking antelope with long, curved horns.','sable.jpg'],
  ['Greater kudu','🦌','Plains game','Gonarezhou, Matobo, Hwange','Spiral-horned antelope of woodland and hills.','kudu.jpg'],
  ['Impala','🦌','Plains game','Most national parks','Graceful and abundant; the most common antelope.','impala.jpg'],
  ['Wildebeest','🐂','Plains game','Hwange, Matobo','Seen in herds on open grassland.','wildebeest.jpg'],
  ['Wild dog','🐕','Predators','Hwange, Mana Pools, Gonarezhou','One of Africa\'s most endangered predators. Zimbabwe is a stronghold.','wilddog.jpg'],
  ['Cheetah','🐆','Predators','Matobo, Gonarezhou, private conservancies','Fast hunters of open country.','cheetah.jpg'],
  ['Spotted hyena','🐺','Predators','Hwange, Matusadona','Active at night; listen for their calls.','hyena.jpg'],
  ['Warthog','🐗','Plains game','Hwange, Mana Pools, Matobo','Easy to spot on drives, trotting with tails held high.','warthog.jpg'],
  ['Olive baboon','🐒','Plains game','Mana Pools, Hwange, Matobo','Clever, social and always watching from the roadside.','baboon.jpg'],
  ['African fish eagle','🦅','Water & birds','Lake Kariba, Zambezi, Victoria Falls','Its call is the sound of the Zambezi.','eagle.jpg'],
  ['Southern ground hornbill','🐦','Water & birds','Hwange, Gonarezhou','A large, endangered bird that walks the grasslands.','hornbill.jpg'],
  ['Lilac-breasted roller','🐦','Water & birds','Hwange, Mana Pools, Matusadona','One of Africa\'s most colourful birds.','roller.jpg'],
  ['Nyala & bushbuck','🦌','Plains game','Mana Pools, Gonarezhou','Shy antelope of riverine forest.','bushbuck.jpg'],
  ['Eland','🦌','Plains game','Hwange, Matobo, Gonarezhou','The largest antelope in Africa.','eland.jpg']
];
const parks = [
  ['Hwange National Park','Zimbabwe\'s largest park, with huge elephant herds and waterhole viewing.'],
  ['Mana Pools National Park','A UNESCO site where you can walk among wildlife on the Zambezi floodplain.'],
  ['Matobo National Park','Rhinos, leopards and sheer granite hills, with rock art.'],
  ['Gonarezhou National Park','Wild country in the southeast, with the red Chilojo Cliffs.'],
  ['Lake Kariba and Matusadona','Boat safaris, houseboats and game along the shoreline.'],
  ['Victoria Falls National Park','Birdlife, bush walks and elephant crossings near the falls.']
];
const sites = [
  ['Victoria Falls','Hwange region (Zambezi)','About 1.7 km wide and over 100 m high, the Mosi-oa-Tunya, or "Smoke That Thunders", is one of the world\'s largest waterfalls and a UNESCO site. Try the rainforest walk, a sunset cruise or a helicopter flight.','Waterfall',[['victoria-falls.jpg','Victoria Falls from the air','The Zambezi pours into the gorge along a 1.7 km edge. A helicopter flight is the best way to see the whole sweep.'],['victoria-falls-bridge.jpg','Victoria Falls Bridge','The 1905 arch bridge spans the Batoka Gorge on the border between Zimbabwe and Zambia. Spray from the falls often paints a rainbow beneath it.']]],
  ['Great Zimbabwe','Masvingo','The remains of a medieval stone city built by the ancestors of the Shona between the 11th and 15th centuries. The Great Enclosure and Hill Complex are UNESCO-listed and gave the country its name.','Heritage'],
  ['Mutarazi Falls','Eastern Highlands (Nyanga)','At about 760 m, Mutarazi is the highest waterfall in Zimbabwe and among the tallest in Africa. Walk the cliff-edge trail and enjoy views over the gorge.','Waterfall'],
  ['Matobo Hills','Near Bulawayo','Balancing granite boulders, San rock paintings and the grave of Cecil Rhodes at World\'s View. A UNESCO site of deep spiritual meaning.','Hills'],
  ['Lake Kariba','Zambezi Valley','One of the world\'s largest man-made lakes, known for houseboats, fishing and the drowned-tree sunsets.','Lake'],
  ['Mount Nyangani','Nyanga','At 2,592 m, the highest peak in Zimbabwe. Cool air, pine forest and waterfalls make Nyanga a popular highland escape.','Mountain'],
  ['Chimanimani Mountains','Eastern Highlands','Quartzite peaks, rivers and rare plants, loved by hikers on the Mozambique border.','Mountain'],
  ['Khami Ruins','Near Bulawayo','A 15th-century stone capital with beautiful dry-stone terraces, and another UNESCO site.','Heritage'],
  ['Chinhoyi Caves','Chinhoyi','A deep, still, cobalt-blue pool inside a limestone cave. Visitors swim and dive here.','Cave'],
  ['Chilojo Cliffs','Gonarezhou','Sandstone cliffs glowing red at sunrise above the Runde River.','Cliffs'],
  ['Bvumba Mountains','Mutare','Misty gardens and forest birds on a cool ridge.','Mountain'],
  ['Mana Pools','Zambezi Valley','Floodplains and river channels, ideal for canoe trips and walks, and a UNESCO site.','River']
];
const tribes = [
  ['Shona','Central, north and east','Zimbabwe\'s largest group. Famous for mbira music and stone sculpture, and the builders of Great Zimbabwe.','Sculpture and mbira workshops'],
  ['Ndebele','Matabeleland, Bulawayo','Known for painted homesteads, beadwork and powerful song and dance traditions.','Beadwork and village visit'],
  ['Kalanga','Matobo and the southwest','Keepers of ancient traditions linked to the Matobo Hills and rainmaking shrines.','Cultural walk in Matobo'],
  ['Venda','Beitbridge and the south','Skilled potters and storytellers, with strong traditions of the Domba dance.','Pottery and storytelling'],
  ['Shangani (Tsonga)','Chiredzi and the southeast','Known for the vibrant Xibelani dance, music and agriculture near Gonarezhou.','Music and dance evening'],
  ['Ndau','Chipinge and Chimanimani','Highland communities with rich farming, music and dance traditions.','Farm and food experience'],
  ['Nambya','Hwange','People of the Hwange area with deep ties to the land and a long royal history.','Hwange village experience'],
  ['Sena and Hlengwe','Zambezi Valley and Lowveld','Smaller communities with unique languages and strong river and farming traditions.','Local market and meal']
];

const dests = [
  ...parks.map(p => p[0]),
  ...sites.map(s => s[0]),
  'Tonga community, Binga and Lake Kariba',
  ...tribes.map(t => t[0] + ' community visit')
];

const el = (h) => { const t = document.createElement('template'); t.innerHTML = h.trim(); return t.content.firstChild; };
const esc = (s) => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const btn = (d, label) => `<button class="reserve-btn mini" data-dest="${esc(d)}">${label || 'Reserve a place'} ↗</button>`;

const cats = ['All', ...new Set(animals.map(a => a[2]))];
const chips = document.querySelector('.chips'), aGrid = document.getElementById('animal-grid');
let shown = [];
function showAnimals(cat) {
  aGrid.innerHTML = '';
  shown = animals.filter(a => cat === 'All' || a[2] === cat);
  shown.forEach((a, i) => {
    const img = a[5];
    aGrid.append(el(img
      ? `<article class="tile animal" data-i="${i}" tabindex="0" role="button" aria-label="View ${esc(a[0])} photo"><div class="pic"><img src="images/${img}" alt="${esc(a[0])}" loading="lazy"><span class="zoom" aria-hidden="true">⤢</span><div class="cap"><small>${esc(a[2])}</small><h4>${esc(a[0])}</h4></div></div><div class="body"><p>${esc(a[4])}</p><p class="where"><b>Where:</b> ${esc(a[3])}</p></div></article>`
      : `<article class="tile animal noimg" data-i="${i}"><span class="emoji" aria-hidden="true">${a[1]}</span><small>${esc(a[2])}</small><h4>${esc(a[0])}</h4><p>${esc(a[4])}</p><p class="where"><b>Where:</b> ${esc(a[3])}</p></article>`));
  });
  chips.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.textContent === cat)));
}
cats.forEach(c => { const b = el(`<button type="button">${c}</button>`); b.onclick = () => showAnimals(c); chips.append(b); });
showAnimals('All');

// Photo lightbox
const lb = el(`<dialog id="photo" aria-label="Wildlife photo"><button class="x" aria-label="Close">×</button><div class="lb"><img alt=""><div class="info"></div></div><div class="nav"><button class="prev" aria-label="Previous photo">‹</button><button class="next" aria-label="Next photo">›</button></div></dialog>`);
document.body.append(lb);
let cur = 0, list = [];
function showPhoto(k) {
  cur = (k + list.length) % list.length;
  const a = list[cur];
  const img = lb.querySelector('img'); img.src = 'images/' + a.img; img.alt = a.name;
  const links = a.reserve ? [[a.reserve]] : parks.filter(p => a.where.split(',').some(t => p[0].includes(t.trim()))).slice(0, 3);
  lb.querySelector('.info').innerHTML = `<p class="eyebrow">${esc(a.cat).toUpperCase()}</p><h3>${esc(a.name)}</h3><p>${esc(a.desc)}</p><p><b>${a.reserve ? 'Where' : 'Where to see it'}:</b> ${esc(a.where)}</p><div class="btns">${links.map(p => `<button data-park="${esc(p[0])}">Reserve ${esc(p[0].replace(' National Park',''))} ↗</button>`).join('')}</div>`;
}
aGrid.addEventListener('click', e => {
  const t = e.target.closest('.animal:not(.noimg)'); if (!t) return;
  const withImg = shown.filter(a => a[5]); list = withImg.map(a => ({img: a[5], name: a[0], cat: a[2], desc: a[4], where: a[3]})); showPhoto(withImg.indexOf(shown[+t.dataset.i])); lb.showModal();
});
aGrid.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.animal:not(.noimg)')) { e.preventDefault(); e.target.click(); } });
lb.querySelector('.x').onclick = () => lb.close();
lb.querySelector('.prev').onclick = () => showPhoto(cur - 1);
lb.querySelector('.next').onclick = () => showPhoto(cur + 1);
lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') showPhoto(cur - 1); if (e.key === 'ArrowRight') showPhoto(cur + 1); });
lb.querySelector('.info').addEventListener('click', e => {
  const b = e.target.closest('[data-park]'); if (!b) return;
  lb.close(); openReserve(b.dataset.park, null);
});

parks.forEach(p => document.getElementById('park-grid').append(el(
  `<article class="tile park"><h4>${esc(p[0])}</h4><p>${esc(p[1])}</p>${btn(p[0], 'Reserve a visit')}</article>`)));
sites.forEach((s, si) => document.getElementById('site-grid').append(el(
  s[4] ? `<article class="tile site gal" data-s="${si}" tabindex="0" role="button" aria-label="View ${esc(s[0])} photos"><div class="pic"><img src="images/${s[4][0][0]}" alt="${esc(s[4][0][1])}" loading="lazy"><span class="zoom" aria-hidden="true">⤢</span><span class="count">${s[4].length} photos</span></div><div class="body"><small>${esc(s[3])} · ${esc(s[1])}</small><h4>${esc(s[0])}</h4><p>${esc(s[2])}</p>${btn(s[0])}</div></article>` :
  `<article class="tile site"><small>${esc(s[3])} · ${esc(s[1])}</small><h4>${esc(s[0])}</h4><p>${esc(s[2])}</p>${btn(s[0])}</article>`)));
tribes.forEach(t => document.getElementById('tribe-grid').append(el(
  `<article class="tile"><small>${esc(t[1])}</small><h4>${esc(t[0])}</h4><p>${esc(t[2])}</p><p class="where"><b>Experience:</b> ${esc(t[3])}</p>${btn(t[0] + ' community visit')}</article>`)));

const dlg = document.getElementById('reserve'), form = document.getElementById('rform');
const select = form.elements.dest;
select.innerHTML = '<option value="">Choose a destination</option>' + dests.map(d => `<option>${esc(d)}</option>`).join('');
form.elements.date.min = new Date().toISOString().split('T')[0];
let opener = null;
function openReserve(dest, from) {
  opener = from; select.value = dests.includes(dest) ? dest : '';
  dlg.showModal();
}
document.addEventListener('click', e => {
  const b = e.target.closest('.reserve-btn');
  if (b) openReserve(b.dataset.dest, b);
});
dlg.querySelector('.close').onclick = () => dlg.close();
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener('close', () => opener && opener.focus());
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const f = new FormData(form);
  const body = `Destination: ${f.get('dest')}\nName: ${f.get('name')}\nEmail: ${f.get('email')}\nPreferred date: ${f.get('date')}\nGuests: ${f.get('guests')}\nNotes: ${f.get('notes') || '-'}`;
  location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Reservation request: ' + f.get('dest'))}&body=${encodeURIComponent(body)}`;
  dlg.close();
});

const siteGrid = document.getElementById('site-grid');
siteGrid.addEventListener('click', e => {
  const t = e.target.closest('.gal'); if (!t || e.target.closest('.reserve-btn')) return;
  const s = sites[+t.dataset.s];
  list = s[4].map(p => ({img: p[0], name: p[1], cat: s[3], desc: p[2], where: s[0] + ', ' + s[1], reserve: s[0]}));
  showPhoto(0); lb.showModal();
});
siteGrid.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.gal')) { e.preventDefault(); e.target.click(); } });
