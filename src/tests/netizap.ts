require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
    debug: process.env.DEBUG,
});

import Netizap from '@controllers/Netizap/netizap';

//const netizapConfig = new Netizap.Config("554187742447", 13142, "node", "KkZo2aB0Ak2DN5TQ6Avg");
const netizapConfig = new Netizap.Config("554730275676", 13140, "node", "yXF2uVAaLPwJLUNWEEO1");
console.log("urlbase", netizapConfig.url);

const services = new Netizap.Services(netizapConfig);
console.log("urlbase", services.url);
services.message_send("5547999748261", "apenas um teste de get do node", "node").then((o: any) => {
  let protocol = o.result;
  services.message_search(protocol).then((o: any) => {
    console.log(o)
  }).catch((err: any) => {console.error(err)});
}).catch((err: any) => { console.error(err) });

const reports = new Netizap.Reports(netizapConfig);
console.log("urlbase", reports.url);
console.log("fim");