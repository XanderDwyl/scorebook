
const constants = {
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:8080',
  env: process.env.REACT_APP_ENV || 'dev',
  maintenance: process.env.REACT_APP_MAINTENANCE || false,
  stripe_publish_key: process.env.REACT_APP_STRIPE_PUBLISH_KEY || 'pk_test_YuVFEuBE7qFzZ0wrP6Qua2Cf',

  keywords: 'scoreboard, score, boardleague, league',
  ogtitle: 'SCOREBOARD',
  ogtype: 'website',
  ogdescription: 'Ease the scoring and league management',
  ogsitename: 'SCOREBOARD',
};

export default constants;
