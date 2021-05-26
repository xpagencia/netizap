import { Config, RequestZap } from '@controllers/Netizap/netizap.config';

namespace Netizap{
  export class Reports extends Config{
    constructor(config: Config) {
      super(config.line, config.port, config.app, config.accessKey);
      this.entidade = "reports";
    }

    requests_start = async () => {
      let url = this.url.replace('{metodo}', 'requests_start');
      let request = new RequestZap();
      return await request.get(`${url}`);
    }

    status = async () => {
      let url = this.url.replace('{metodo}', 'status');
      let request = new RequestZap();
      return await request.get(`${url}`);
    }

    statistics_for_day = async (gestor: boolean = false) => {
      let url = this.url.replace('{metodo}', 'statistics_for_day');
      let request = new RequestZap();
      return await request.get(`${url}&gestor=${gestor}`);
    }
  }
}
 
module.exports = Netizap;
module.exports.Reports = Netizap.Reports;
module.exports.Config = Config;
export default Netizap;