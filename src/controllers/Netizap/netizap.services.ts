import { Config, RequestZap } from '@controllers/Netizap/netizap.config';

namespace Netizap{
  export class Services extends Config{
    constructor(config: Config) {
      super(config.line, config.port, config.app, config.accessKey);
      this.entidade = "services";
    }

    message_send = async (destiny: string, text: string, reference: string = "message_send", analyse: boolean = true) => {
      let url = this.url.replace('{metodo}', 'message_send');
      let request = new RequestZap();
      return await request.post(`${url}&destiny=${destiny}&text=${text}&reference=${reference}`, { analyse });
    }

    message_search = async (protocol: string) => {
      let url = this.url.replace('{metodo}', 'message_search');
      let request = new RequestZap();
      return await request.get(`${url}&protocol=${protocol}`);
    }
  }
}
 
module.exports = Netizap;
module.exports.Services = Netizap.Services;
module.exports.Config = Config;
export default Netizap;