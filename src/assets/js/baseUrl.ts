let baseUrl;
switch (location.hostname) {
  case 'localhost':
    baseUrl = 'https://xxxxx/api';
    break;
  case 'test_iq.haizol.com':
    baseUrl = 'https://xxxxx/api';
    break;
}
const urls = {
  baseUrl,
};
export default urls;
