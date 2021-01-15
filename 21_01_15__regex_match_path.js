let str = `<?php
define('DASH_DIALYSIS_JS54', '/md/nephro/mdPatientDashboardDialysisV101.js?version=1.1');
define(  'HP_ADDPATIENT8_JS', '/resources/js/hpAddPatientV182.js?version=1.1');
define('HP_TIENT_JS9'  , '/resources/js/hpAddPatientV182.js');
define( 'HP_ADDPATIENT_JS', '/resources/js/hpAddPatientV182.css');
define('HP_ADD420PATIENT_JS5','../../resources/js/hpAddPatientV182.css?version=10');
define(  'HP_kdik_JS' ,      '../../resources/js/hpAddPatientV182.css');
?>`

function pathFinding(str) {
    // return str.match(/(, +'|,')(.*)(\.js|\.css)/g);
    return str.matchAll(/(\( +'|\(')(.*)(',|' +,)('| +')(.*\.css|.*\.js)/g);
}

let matches = pathFinding(str)
// console.log(matches);
let res = {}
for (const match of matches) {
    res[match[2]] = match[5];
}
console.log(res);