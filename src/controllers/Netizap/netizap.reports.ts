import { Config } from '@controllers/Netizap/netizap.config';

namespace Netizap{
  export class Reports extends Config{
    constructor(config) {
      super(config.line, config.port, config.app, config.accessKey);
      this.entidade = "reports";
    }
  }
}
 
module.exports = Netizap;
module.exports.Reports = Netizap.Reports;
module.exports.Config = Config;
export default Netizap;