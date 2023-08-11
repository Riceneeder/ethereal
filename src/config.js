/**
 * 博客配置文件，没有说明的就是必填项
 * @type {Object}
 * @property {String} title         博客标题
 * @property {String} subtitle      博客副标题
 * @property {String} description   博客描述
 * @property {String} keywords      博客关键字
 * @property {String} favicon       博客图标 180x180
 * @property {String} favicon16     博客图标 16x16
 * @property {String} favicon32     博客图标 32x32
 * @property {String} createdTime   博客创建时间
 * @property {String} icp           ICP 备案号
 * @property {String} icpLink       ICP 备案链接
 * @property {String} beian         [选填] 公安备案号 '京公网安备 00000000000000号'
 * @property {String} beianLink     [选填] 公安备案链接 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=00000000000000'
 * @property {String} username      GitHub 用户名
 * @property {String} repository    GitHub 仓库名
 * @property {String} friendsRepo   友链仓库名
 * @property {String} author        博客作者
 * @property {String} email         博客作者邮箱
 * @property {String} link          个人链接
 * @property {String} github        GitHub 链接
 * @property {String} name          友链名称
 * @property {String} url           友链链接
 * @property {String} avatar        友链头像
 * @property {String} desc          友链描述
 * @property {String} pageSize      文章列表每页显示文章数
 * @property {String} defaultCover  文章默认封面图
 */
export default {
  // 博客基础配置
  title: 'Riceneeder',
  subtitle: '人是铁饭是钢',
  description: 'Riceneeder\'s blog',
  keywords: 'Riceneeder, blog, TCM, Python, JavaScript',
  favicon: '//q1.qlogo.cn/g?b=qq&nk=845541909&s=100',
  favicon16: '//q1.qlogo.cn/g?b=qq&nk=845541909&s=100',
  favicon32: '//q1.qlogo.cn/g?b=qq&nk=845541909&s=100',
  createdTime: '2022-08-11',
  icp: '',
  icpLink: '',
  beian: '',
  beianLink: '',
  // 关于页二维码
  alipay_qr: '',
  // GitHub Issues 配置
  username: 'Riceneeder',
  repository: 'Riceneeder',
  friendsRepo: 'friends',
  // 您的信息
  author: 'Riceneeder',
  email: '845541909@qq.com',
  link: '//gankun.cn.ma',
  github: '//github.com/Riceneeder',
  // 友链信息
  name: 'Riceneeder',
  url: '//gankun.cn.ma',
  avatar: '//q1.qlogo.cn/g?b=qq&nk=845541909&s=100',
  desc: 'Riceneeder\'s blog',
  // 文章相关
  pageSize: 12,
  defaultCover: '//download.gankun.cn.ma/api/raw/?path=/%E5%9B%BE%E7%89%87/%E7%81%AB%E7%83%A7%E4%BA%91.webp',
  // 图片加载失败时显示，请将图片下载至你自己的存储空间，并使用自己的 CDN 引入
  errorImg: '//cdn.wallleap.cn/img/pic/cover/image_processing20200524-7638-6itpxj.gif',
  // 评论配置
  utterances: {
    code: `<script src="https://utteranc.es/client.js"
      repo="Riceneeder/blog-comments"
      issue-term="title"
      label="Comment"
      theme="github-light"
      crossorigin="anonymous"
      async>
    </script>`,
  },
  twikoo: {
    src: '//cdn.staticfile.org/twikoo/1.6.7/twikoo.all.min.js',
  },
}
