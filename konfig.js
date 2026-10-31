/* Mit RTK: fælles opsætning for alle sider (gennemgangen 14. oktober, trin 4).
   Adressen til motoren og Firebase står kun her. Ingen hemmeligheder: Firebase-nøglen er offentlig
   og beskyttes af reglerne i Firestore. Indlæses før konto.js og sidens eget script.
   Miljøet vælges efter adressen (31. oktober 2026): mitrtk.dk er produktion, alt andet (test.mitrtk.dk
   og lokale test) er test. Indtil produktionsmotoren har en adresse, kører mitrtk.dk på testen. */
(function () {
  var MILJOER = {
    test: {
      motor: 'https://script.google.com/macros/s/AKfycbz_-LFD4pLRRxJjBI1kosmF3e0rKs8xPzZmgm4JLzl9oK6CQiMQrz-qPjxpvscDpn0r/exec',
      firebase: {
        apiKey: 'AIzaSyDn-RtvKrm2g2D1HY7KLx6XXFXQDZZgcD4', authDomain: 'mitrtk-282fa.firebaseapp.com', projectId: 'mitrtk-282fa',
        storageBucket: 'mitrtk-282fa.firebasestorage.app', messagingSenderId: '1093255886930', appId: '1:1093255886930:web:0139ea144939078093078b'
      },
      vapid: 'BHqx6aBwsxJg2-BMVlnkDteTMUWU268HoU_9xBRyOCR9JVKPqy3AojTskwDeTSisoCv7yYfdjsTu_y2aSxed_DM'
    },
    produktion: {
      motor: '',
      firebase: {
        apiKey: 'AIzaSyBJVywXgGl_0HzWR3B7rWbdnJXy2zBEvJk', authDomain: 'mit-rtk.firebaseapp.com', projectId: 'mit-rtk',
        storageBucket: 'mit-rtk.firebasestorage.app', messagingSenderId: '2375479119', appId: '1:2375479119:web:7d02fabbb85dab278f1f3a'
      },
      vapid: 'BBikwBL7KsoEE0gN35iQVqzvYpdCUka7S6v228I5NrH5U3j0pZ-8rFWEZiPa6k2vOEdcmW-myCXJ16kf-y2o2vc'
    }
  };
  var vaert = String(location.hostname || '').toLowerCase();
  var miljoe = (vaert === 'mitrtk.dk' || vaert === 'www.mitrtk.dk') && MILJOER.produktion.motor ? 'produktion' : 'test';
  var m = MILJOER[miljoe];
  window.RTK_KONFIG = Object.freeze({
    miljoe: miljoe,
    motor: m.motor,
    firebaseVersion: '12.19.0',
    firebase: Object.freeze(m.firebase),
    vapid: m.vapid
  });
})();
