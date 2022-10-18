/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2ff9ced0c9ede346',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd90f39edfad26c37f76599bd6217f8ea',

  PROVINCE: '浙江',
  CITY: '诸暨',

  USERS: [
    {
      // 想要发送的人的名字
      name: '洋洋',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZkPt6qT0zXufkSyhKcK4MS1gsfU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'lsH5TfO9vA4QXiGKtMKD3CF4KzeWXXNpJirCi9l3uV4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-23',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2001', date: '09-23',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2001', date: '09-02',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '09-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-07' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-07' },
      ],
    },
  ],

TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '483a127dc95ac2aaeb615eb6fc1614a5',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  
  },
  

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '4zO3f2y664fH2EKP-xgE76qCofQujdNy7ZOy0sw6D_8',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZkPt6qT0zXufkSyhKcK4MS1gsfU',
    }
  ],

}

module.exports = USER_CONFIG

