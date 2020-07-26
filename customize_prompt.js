// 配置选项
module.exports = [
  {
    type: "confirm",
    name: "microFE",
    message: "是否接入微前端？"
  },
  {
    type: "confirm",
    name: "mobile",
    message: "是否用于移动端？"
  },
  {
    type: "confirm",
    name: "weixin",
    message: "是否使用配置微信？",
    when: function (answers) {
      return answers.mobile
    }
  }
]
