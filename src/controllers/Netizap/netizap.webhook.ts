import { Config } from '@controllers/Netizap/netizap.config';

namespace Netizap{
  export class Webhook extends Config{
    constructor(line: string) {
      super(line);
      console.log(`webhook`);
    }
    test() {
      console.log("test");
    }
  }
}
 
module.exports = Netizap;
module.exports.Webhook = Netizap.Webhook;
module.exports.Config = Config;
export default Netizap;