const CONTACT_EMAIL = 'hello@discoverzimbabwe.example'; // replace before publishing

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

const animals = [
  ['African elephant','🐘','Big Five','Hwange, Mana Pools, Matusadona','Zimbabwe has one of the largest elephant populations in the world.'],
  ['Lion','🦁','Big Five','Hwange, Matusadona, Gonarezhou','Look for prides at waterholes at dawn and dusk.'],
  ['Leopard','🐆','Big Five','Matobo Hills, Gonarezhou, Hwange','Elusive and mostly nocturnal; Matobo is known for its leopards.'],
  ['Cape buffalo','🐃','Big Five','Hwange, Mana Pools, Gonarezhou','Large herds gather along rivers in the dry season.'],
  ['Black and white rhino','🦏','Big Five','Matobo, Hwange, Imire','Protected in guarded conservancies. Matobo offers guided rhino walks.'],
  ['Hippopotamus','🦛','Water & birds','Zambezi River, Lake Kariba, Mana Pools','Best seen from a boat or canoe.'],
  ['Nile crocodile','🐊','Water & birds','Lake Kariba, Zambezi, Save and Runde rivers','Sunning on sandbanks and shorelines.'],
  ['Giraffe','🦒','Plains game','Hwange, Matobo, Gonarezhou','Tall browsers that feed on acacia crowns.'],
  ['Plains zebra','🦓','Plains game','Hwange, Matobo, Chizarira','Often seen grazing beside wildebeest and impala.'],
  ['Sable antelope','🦌','Plains game','Hwange, Matobo, Chizarira','A striking antelope with long, curved horns.'],
  ['Greater kudu','🦌','Plains game','Gonarezhou, Matobo, Hwange','Spiral-horned antelope of woodland and hills.'],
  ['Impala','🦌','Plains game','Most national parks','Graceful and abundant; the most common antelope.'],
  ['Wildebeest','🐂','Plains game','Hwange, Matobo','Seen in herds on open grassland.'],
  ['Wild dog','🐕','Predators','Hwange, Mana Pools, Gonarezhou','One of Africa\'s most endangered predators. Zimbabwe is a stronghold.'],
  ['Cheetah','🐆','Predators','Matobo, Gonarezhou, private conservancies','Fast hunters of open country.'],
  ['Spotted hyena','🐺','Predators','Hwange, Matusadona','Active at night; listen for their calls.'],
  ['Warthog & baboon','🐗','Plains game','Everywhere','Easy to spot on drives and walks.'],
  ['African fish eagle','🦅','Water & birds','Lake Kariba, Zambezi, Victoria Falls','Its call is the sound of the Zambezi.'],
  ['Southern ground hornbill','🐦','Water & birds','Hwange, Gonarezhou','A large, endangered bird that walks the grasslands.'],
  ['Lilac-breasted roller','🐦','Water & birds','Hwange, Mana Pools, Matusadona','One of Africa\'s most colourful birds.'],
  ['Nyala & bushbuck','🦌','Plains game','Mana Pools, Gonarezhou','Shy antelope of riverine forest.'],
  ['Eland','🦌','Plains game','Hwange, Matobo, Gonarezhou','The largest antelope in Africa.']
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
  ['Victoria Falls','Hwange region (Zambezi)','About 1.7 km wide and over 100 m high, the Mosi-oa-Tunya, or "Smoke That Thunders", is one of the world\'s largest waterfalls and a UNESCO site. Try the rainforest walk, a sunset cruise or a helicopter flight.','Waterfall'],
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
function showAnimals(cat) {
  aGrid.innerHTML = '';
  animals.filter(a => cat === 'All' || a[2] === cat).forEach(a => aGrid.append(el(
    `<article class="tile"><span class="emoji" aria-hidden="true">${a[1]}</span><small>${esc(a[2])}</small><h4>${esc(a[0])}</h4><p>${esc(a[4])}</p><p class="where"><b>Where:</b> ${esc(a[3])}</p></article>`)));
  chips.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.textContent === cat)));
}
cats.forEach(c => { const b = el(`<button type="button">${c}</button>`); b.onclick = () => showAnimals(c); chips.append(b); });
showAnimals('All');

parks.forEach(p => document.getElementById('park-grid').append(el(
  `<article class="tile park"><h4>${esc(p[0])}</h4><p>${esc(p[1])}</p>${btn(p[0], 'Reserve a visit')}</article>`)));
sites.forEach(s => document.getElementById('site-grid').append(el(
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
