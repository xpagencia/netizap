import NetizapConfig from '@controllers/Netizap/netizap.config';
import NetizapServices from '@controllers/Netizap/netizap.services';
import NetizapReports from '@controllers/Netizap/netizap.reports';
import NetizapWebhook from '@controllers/Netizap/netizap.webhook';

module.exports = { NetizapConfig, NetizapServices, NetizapReports, NetizapWebhook };
module.exports.Config = NetizapConfig.Config;
module.exports.Services = NetizapServices.Services;
module.exports.Reports = NetizapReports.Reports;
module.exports.Webhook = NetizapWebhook.Webhook;
export default { NetizapConfig, NetizapServices, NetizapReports, NetizapWebhook };