/* eslint-disable no-redeclare */
// initial map setup
var userCoords = [52.336300948670285, 4.883351168595792];
var map = L.map('map').setView(userCoords, 13);
L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1Ijoiam9ubmEtdmlzc2VyIiwiYSI6ImNsM2hocG01bjFieHIzZXBya3ZyZGlzdHIifQ.JufH8HEp6qLJANvF9gsg-A',
  }
).addTo(map);

//Function when client allows to share their location
function redrawMap() {
  console.log('redrawing map');
  setTimeout(() => {
    map.invalidateSize(true);
    map.setView(userCoords, 15);
    L.marker(userCoords).addTo(map);
  }, 300);
}

//Function when client block to share their location
function disableMap() {
  console.log('removing map');
  setTimeout(() => {
    map.setView(userCoords, 13);
    document.querySelector('#dropdown').classList.remove('hidden');
    document.querySelector('#map').classList.remove('hidden');
    document.querySelector('#map').classList.add('hidden');
  }, 300);
}

//Geolocation
function getUserLocationAndSetMap() {
  // get user location + ask for permission. Upon denial, remove map, show dropdown
  navigator.geolocation.getCurrentPosition(
    (position) => {
      userCoords = [position.coords.latitude, position.coords.longitude];
      redrawMap();
    },
    (err) => {
      disableMap();
      alert(
        // eslint-disable-next-line quotes
        "You've denied access to your location. Don't worry, that's ok! ;) just choose a location from the dropdown instead :)"
      );
    }
  );
}

// remove event listeners on each reload to prevent multi-trigger behavior
window.removeEventListener('load', getUserLocationAndSetMap);
window.addEventListener('load', getUserLocationAndSetMap);

function onPopupClick(shelter) {
  window.location.href = `${window.location.origin}/shelter-overview?shelter=${shelter}`;
}

function onPopupHover(polygon, event) {
  if (!polygon._popup.isOpen()) {
    polygon._popup.toggle();
  }
  if (event.latlng) {
    polygon._popup.setLatLng(event.latlng);
  }
}

function onPopupOut(polygon) {
  if (polygon._popup.isOpen()) {
    polygon._popup.toggle();
  }
}
// kruisje.... poooff :)
const polygonPopupOptions = {
  closeButton: false
};

/****VONDEL****/
let pVondel = L.polygon([
  [52.35636188129635, 4.854871821755217],
  [52.360101380791214, 4.8698913052360275],
  [52.35996929922463, 4.870050135716776],
  [52.36027840283789, 4.8712419354454735],
  [52.36021442613469, 4.871306143512158],
  [52.36092207353298, 4.8743550990709785],
  [52.360862225233625, 4.874807934909705],
  [52.360670297381965, 4.875375669394078],
  [52.36081888675934, 4.875618984173095],
  [52.36072808219986, 4.87592650703976],
  [52.36078173946248, 4.876186718678432],
  [52.36073014594192, 4.876595622682058],
  [52.360793461840565, 4.8767931859933675],
  [52.360948241999715, 4.876681666719651],
  [52.36107206573666, 4.877185193137339],
  [52.36079965305732, 4.877381196709325],
  [52.361863150925885, 4.881377537827364],
  [52.36164233563943, 4.882104102792484],
  [52.36147311196275, 4.88225617452937],
  [52.360132324236496, 4.877042037912834],
  [52.35966666456771, 4.8758264697118605],
  [52.35941151848734, 4.875979521401691],
  [52.35921194774994, 4.875098440044087],
  [52.35884311844432, 4.875284583988415],
  [52.35875217376101, 4.874949524883652],
  [52.358461654768725, 4.875098440041324],
  [52.35806755637317, 4.873898845710354],
  [52.35698743118578, 4.86956733162298],
  [52.35659079328092, 4.868421512201769],
  [52.35624744713891, 4.867100963576184],
  [52.35579522153511, 4.866968594540408],
  [52.35517119315709, 4.867373974691848],
  [52.35484275362949, 4.867092690505135],
  [52.354900862338994, 4.866997550265512],
  [52.35478969778449, 4.866724539143113],
  [52.35502465890016, 4.866637671967804],
  [52.355118137706405, 4.866352251248933],
  [52.35507266155507, 4.86585173085787],
  [52.35517088537613, 4.865207901600025],
  [52.35564730435139, 4.863926405936386],
  [52.35573805024777, 4.862570620645117],
  [52.35562358289305, 4.861724759051148],
  [52.355384340620574, 4.8611669948848935],
  [52.354820035800024, 4.860417632363911],
  [52.35481962935312, 4.857534475848453],
  [52.354916852962, 4.857274963160882],
  [52.35457282784995, 4.8568028943797925],
  [52.35449419316263, 4.856330825598704],
  [52.354592486499925, 4.855606629173169],
  [52.35640998111026, 4.854812663037852],
]).addTo(map);
pVondel
  .bindPopup('Go to Vondel dog shelter', polygonPopupOptions)
  .addEventListener('click', (e) => {
    onPopupClick('Vondel');
  })
  .addEventListener('mouseover', (e) => {
    onPopupHover(pVondel, e);
  }).addEventListener('mouseout', (e) => {
    onPopupOut(pVondel);
  });

/****OOSTER****/
let pOoster = L.polygon([
  [52.36053591833311, 4.91589796022504],
  [52.36076507495321, 4.916971571177306],
  [52.360166719056494, 4.917370266506666],
  [52.36042484967198, 4.918616395305071],
  [52.360698565078785, 4.920114760121752],
  [52.36145278571653, 4.919561497687969],
  [52.36177997853649, 4.920656611982671],
  [52.361885005844435, 4.920575830576069],
  [52.362185764485744, 4.921665076648146],
  [52.36130122316589, 4.9226621801161965],
  [52.36136487679931, 4.923376183516489],
  [52.361689508909194, 4.923967711885452],
  [52.3601116003994, 4.925108445246264],
  [52.36001611720668, 4.92502245213601],
  [52.359449579349445, 4.922906500440722],
  [52.35838702799652, 4.918646954897779],
  [52.35819287103981, 4.917732300893611],
  [52.35819287103981, 4.917651519487009],
  [52.35818173086092, 4.917502985932933],
  [52.35828517527117, 4.917372693341639],
  [52.35912418503151, 4.916823221698602],
  [52.3595475008343, 4.916552213106264],
  [52.36053097827726, 4.915903355997164],
]).addTo(map);
pOoster
  .bindPopup('Go to Ooster dog shelter', polygonPopupOptions)
  .addEventListener('click', (e) => {
    onPopupClick('Ooster');
  })
  .addEventListener('mouseover', (e) => {
    onPopupHover(pOoster, e);
  }).addEventListener('mouseout', (e) => {
    onPopupOut(pOoster);
  });

/****WESTER****/
let pWester = L.polygon([
  [52.388550265219756, 4.847348328843289],
  [52.38866601573259, 4.850071858387191],
  [52.38887899588321, 4.850504285083578],
  [52.38889657682179, 4.868614589149536],
  [52.388373251484374, 4.872369791568167],
  [52.38793339498575, 4.875502988556028],
  [52.38730832822102, 4.878431351834668],
  [52.3863035727502, 4.881564548775146],
  [52.385747937785204, 4.881458338709367],
  [52.38577108938172, 4.881299023610699],
  [52.385831283475795, 4.881215572844729],
  [52.38584054409837, 4.880039675687891],
  [52.385747937785204, 4.875411951393238],
  [52.38572015585435, 4.875389192035556],
  [52.38571552553066, 4.8750553889716794],
  [52.38573404682245, 4.8750326296718685],
  [52.385724786177526, 4.87496435177244],
  [52.38568311325136, 4.87494159247263],
  [52.385682097887674, 4.874731695437532],
  [52.38572223110452, 4.874711012776745],
  [52.3856131316654, 4.868747007454938],
  [52.385638378737426, 4.868705642133363],
  [52.385597983415266, 4.866960025562877],
  [52.38558283515991, 4.866926933305616],
  [52.38557273632013, 4.865537058500679],
  [52.38554243978693, 4.865206135928075],
  [52.38549699494812, 4.865048947706088],
  [52.38547174779525, 4.864577383040127],
  [52.38553739036269, 4.864312644982045],
  [52.38543663455462, 4.858087634716142],
  [52.385689390901874, 4.857634862855386],
  [52.385820823630546, 4.8567679703902815],
  [52.385780382832635, 4.856298633705351],
  [52.38638119502277, 4.8485411892321615],
  [52.38635423483718, 4.84774607767181],
  [52.386613725940144, 4.847398216364156],
  [52.38855480582557, 4.847348521891699],
]).addTo(map);

pWester
  .bindPopup('Go to Wester dog shelter', polygonPopupOptions)
  .addEventListener('click', (e) => {
    onPopupClick('Wester');
  })
  .addEventListener('mouseover', (e) => {
    onPopupHover(pWester, e);
  }).addEventListener('mouseout', (e) => {
    onPopupOut(pWester);
  });