let baseUrl;
switch (location.hostname) {
  case 'localhost':
    baseUrl = 'https://test_iq.haizol.com/api';
    break;
  case 'test_iq.haizol.com':
    baseUrl = 'https://test_iq.haizol.com/api';
    break;
  case 'iq.haizol.com':
    baseUrl = 'https://iq.haizol.com/api';
    break;
}
const urls = {
  baseUrl,
};
export default urls;
