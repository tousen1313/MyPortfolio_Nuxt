const PROFILE_NAME: String = `Tousen`
const PROFILE_JOB: String = `Job: Front-End Engineer`
const PROFILE_LOCATION: String = `Location: Nigata/Japan`

const PROFILE_MESSAGE: String = `
  I'm Tousen. 
  Interested in Front-End of web technology. 
  work while having fun!! 
  This is made with nuxt.js. 
  In the future, I am eager to work with more enthusiastic Front-End engineers. 
  I think developers can bring to a great experience for more people. 
  In order to reach my goal, I think it is essential to learn about React.js and Vue.js. 
  `

const SITE_DOMAIN: String = 'kokota_example.com'
const IPA: Object = {
  fe: '基本情報技術者試験',
  ap: '応用情報技術者試験',
  sa: 'システムアーキテクト試験',
  nw: 'ネットワークスペシャリスト試験',
  db: 'データベーススペシャリスト試験',
  pm: 'プロジェクトマネージャ試験'
}

export default (_context: any, inject: any) => {
  inject('PROFILE_NAME', PROFILE_NAME)
  inject('PROFILE_JOB', PROFILE_JOB)
  inject('PROFILE_LOCATION', PROFILE_LOCATION)
  inject('PROFILE_MESSAGE', PROFILE_MESSAGE)
  inject('SITE_DOMAIN', SITE_DOMAIN)
  inject('IPA', IPA)
}