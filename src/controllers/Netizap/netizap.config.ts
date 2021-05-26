import request from '@libs/request';

namespace Netizap {
  export class Config {
    public line: string;
    public port: number;
    public app: string;
    public accessKey: string;
    #urlBase: string;

    constructor(line: string, port: number, app: string, accessKey: string) {
      this.line = line;
      this.port = port;
      this.app = app;
      this.accessKey = accessKey;
      this.#urlBase = `${process.env.NZ_URL}:${this.port}/{entidade}/{metodo}?line=${this.line}&accesskey=${this.accessKey}`;
    }

    set entidade(value: string) {
      this.#urlBase = this.#urlBase.replace('{entidade}', value);
    }

    get url() {
      return this.#urlBase;
    }
  }
  export class RequestZap {
    #headers: object;
    #accessKey: string;

    constructor(accessKey: string) {
      this.#accessKey = accessKey;
      this.#headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': "Basic dXNlcjphcGk="
      }
    }

    post = async (url: string, body: object = {}) => {
      let data = {
        'app': 'XPZap 0.0.0.1',
        'accesskey': this.#accessKey,
        'analyse': 'true'
      };

      return await request.post(url, data, this.#headers);
    };
    get = async (url: string) => {
      url += `&accesskey=${this.#accessKey}`;
      return await request.get(url, this.#headers);
    };
  }
}
 
module.exports = Netizap;
module.exports.Config = Netizap.Config;
module.exports.RequestZap = Netizap.RequestZap;
export default Netizap;