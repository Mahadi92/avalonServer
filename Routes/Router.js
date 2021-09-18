const CodeguardData = require('./CodeguardData/CodeguardData.router');
const Common = require('./Common/Common.router');
const Domain = require('./Domain/Domain.router');
const DynamicD = require('./DynamicD/DynamicD.router');
const Ecommerce = require('./Ecommerce/Ecommerce.router');
const Email = require('./Email/Email.router');
const Home = require('./Home/Home.router');
const HostFAQ = require('./HostFAQ/HostFAQ.router');
const Navbar = require('./Navbar/Navbar.router');
const PartnerProgram = require('./PartnerProgram/PartnerProgram.router');
const PlanAndPricing = require('./PlanAndPricing/PlanAndPricing.router');
const Protection = require('./Protection/Protection.router');
const Security = require('./Security/Security.router');
const Shared = require('./Shared/Shared.router');
const SitelockData = require('./SitelockData/SitelockData.router');
const SSL = require('./SSL/SSL.router');
const WordPress = require('./WordPress/WordPress.router');


appRoute.use('/codeguardData', CodeguardData)
appRoute.use('/common', Common)
appRoute.use('/domain', Domain)
appRoute.use('/dynamicD', DynamicD)
appRoute.use('/ecommerce', Ecommerce)
appRoute.use('/email', Email)
appRoute.use('/home', Home)
appRoute.use('/hostFAQ', HostFAQ)
appRoute.use('/navbar', Navbar)
appRoute.use('/partnerProgram', PartnerProgram)
appRoute.use('/planAndPricing', PlanAndPricing)
appRoute.use('/protection', Protection)
appRoute.use('/security', Security)
appRoute.use('/shared', Shared)
appRoute.use('/sitelockData', SitelockData)
appRoute.use('/ssl', SSL)
appRoute.use('/wordPress', WordPress)


module.exports = appRoute