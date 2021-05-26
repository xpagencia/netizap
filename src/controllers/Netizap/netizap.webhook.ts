import { Config, RequestZap } from '@controllers/Netizap/netizap.config';

namespace Netizap{
  export class Webhook extends Config{
    constructor(config: Config) {
      super(config.line, config.port, config.app, config.accessKey);
      this.entidade = "webhook";
    }

    authorize = async (enable: boolean, urlCallback: string, method: string = "post") => {
      let url = this.url.replace('{metodo}', 'authorize');
      let request = new RequestZap();
      return await request.post(`${url}`, {enable, method, url: urlCallback});
    }

    list = async (protocol: string) => {
      let url = this.url.replace('{metodo}', 'list');
      let request = new RequestZap();
      return await request.get(`${url}`);
    }
  }
}
 
module.exports = Netizap;
module.exports.Webhook = Netizap.Webhook;
module.exports.Config = Config;
export default Netizap;