var request = require('request');

let endpoint = "http://k8s-api-admanage-722963cf63-07b91371adcfddaf.elb.us-east-1.amazonaws.com/admanager/creative?campaign=5f6413c9612b1a0015099993_170034|"
//dummy middle text = "5bc0e10e25c7d7796ebe8fc0_BZVKTzzvKk1EtzFO:a:VB8z4SeYi0sA7Dcc"
let end_string = "|dsp-5f6415539290720015d69d84|64a660e906d46a27ea43e666";


let dummy = '5e56893e6c71d40018de3ad1_29876';
let dummy2 = '5f6413c9612b1a0015099993_480795';

let pasteHere = [
    "5e56893e6c71d40018de3ad1_29876",
    "5e56893e6c71d40018de3ad1_29816",
    "5e56893e6c71d40018de3ad1_26525",
    "5e56893e6c71d40018de3ad1_29655",
    "5e56893e6c71d40018de3ad1_29828",
    "5e56893e6c71d40018de3ad1_30933",
    "5e56893e6c71d40018de3ad1_29972"
]

//let w=0;
async function getBidResponses(a) {
    for (w in a) {
        var options = {
          'method': 'GET',
          'url': `http://k8s-api-admanage-722963cf63-07b91371adcfddaf.elb.us-east-1.amazonaws.com/admanager/creative?campaign=5f6413c9612b1a0015099993_170034|${a[w]}|dsp-5f6415539290720015d69d84|64a660e906d46a27ea43e666`,
          'headers': {
          }
        };
        try {
            let response = await request(options, function (error, response) {
              if (error) throw new Error(error);
              console.log(response.body);
              console.log(w);
              console.log(a[w]);
              w--;
            });
        } catch (e) {
            console.error(e)
        }
//        console.log(w)
    }
}
getBidResponses(pasteHere);
