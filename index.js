var request = require('request');
var fs = require('fs');




// paste value obtained from lookerScript.js
let pasteHere = [
"6163ee8d2e2c3200179604b9_767cdc8a3e7126857d67c37a9a982570",
"6163ee8d2e2c3200179604b9_52a03e45c55453a99250fc8fcd38f038",
"6163ee8d2e2c3200179604b9_84d98c4271af5907776705bad8ecdfe3c680de96c742e4f53c391b5dbd3795b78c1c724fcde2f7f6fa352b61d08f3b87",
"6163ee8d2e2c3200179604b9_388244406f1115cfd88022d2962fedaf3778b10a626fd8d2b76f1e740609307d9daab4d83611e4eec21ed401268207fb",
"6163ee8d2e2c3200179604b9_b4ba2cb722c5af8937c998285ee0677b"
];

var obj = {
    bidResArr: []
}


async function getBidResponses(a) {
    for (let w = 0; w<a.length; w++){
        var options = {
          'method': 'GET',
          'url': `http://k8s-api-admanage-ec9a86a9e2-b2b9a77bec01c992.elb.us-east-1.amazonaws.com/admanager/creative?campaign=5f6413c9612b1a0015099993_170034|${a[w]}|dsp-5f6415539290720015d69d84|64a660e906d46a27ea43e666`,
          'headers': {
          }
        };
        try {
            var response = await request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(w)
//              console.log(a[w]);
              if(response.body.length > 70) {
                  obj.bidResArr.push(JSON.stringify(response.body));
                  fs.writeFile(`WebServer/bid_responses/_br_${w}.json`,response.body,(err)=>{console.log(err)});
                  fs.writeFile(`WebServer/bid_responses/br_${w}_${a[w]}.html`,`<html> <meta name="viewport" content="width=device-width, initial-scale=1" /> <script> function myFunction() {
                    // Get the text field
                    var copyText = document.getElementById("myInput").innerText;
                  
                     // Copy the text inside the text field
                    navigator.clipboard.writeText(${JSON.stringify(response.body)});
                  } </script <body> <!-- The text field -->
                  <p id="myInput"" style="display: none">${response.body} </p>
                  
                  <!-- The button used to copy the text -->
                  <button onclick="myFunction()">Copy text</button> </body></html>`,(err)=>{console.log(err)});
                } else {console.log('too short!')}
            });
        } catch (e) {
            console.error(e)
        }
    }
}

getBidResponses(pasteHere).then((()=>{console.log('all done!')}));
    



