// ESM(ECMA Script Module) : 자바스크립트의 가져오기 내보내기 방식, 브라우저에서 사용되서 동작,

// import autoprefixer from 'autoprefixer'

// export {
//   plugins: [
//     autoprefixer
//   ]
// }

// CommonJS : Node JS 환경에서의 가져오기 내보내기 방식, 번들러를 이용해서 변환하는 용도

// 1> defalult
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer
  ]
}

// 2> 간소화

// module.exports = {
//   plugins: [
//     require('autoprefixer')
//   ]
// }