/* global malarkey:false, toastr:false, moment:false */
(function () {
  'use strict';

  angular
    .module('angularApp')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('apiHost', 'http://127.0.0.1')
    .constant('CONFIGS', {
      gameList: [
        {
          'id': 1,
          'name': '完美世界',
          'star_live': 0,
          'plat_form': ['windows'],
          'img': 'assets/images/apply-list.png',
          'downloadNum': 12345,
          'collectionNum': 424423,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658',
          'Screenshot': [
            {'img': 'assets/images/shot-screen.png'},
            {'img': 'assets/images/shot-screen.png'},
            {'img': 'assets/images/shot-screen.png'},
            {'img': 'assets/images/shot-screen.png'},
            {'img': 'assets/images/shot-screen.png'},
            {'img': 'assets/images/shot-screen.png'}
          ],
          'applyIntroduction': [{
            'title': '【不一样的双11-新人专享】',
            'child': [
              '11月2日10:00-11月5日09:59，新会员可以享受满39元限时包邮！还能领取60元红包!',
              '11月5日10:00-11月12日09:59，新会员可以享受满39元限时包邮！还能领取100元红包！'
            ]
          }, {
            'title': '11月最新劲爆活动一：面霜保湿时代',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日',
              '活动内容：最高满199-100，十大明星面霜5折封顶'
            ]
          }, {
            'title': '11月最新劲爆活动一:签到有礼！chocolate潮范随行杯免费送！',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日 ',
              '活动内容：【签到有礼】活动，新会员签到一次可获得100个唯品币，累计签到满7次有机会赢取CHOCOLATE:限量随行杯一个。'
            ]
          }],
          'relevantApply': [{
            'id': 11,
            'txt1': 'Dimensional',
            'txt2': 'Pre-Release',
            'plat_form': ['windows'],
            'img': 'assets/images/apply-list-new.png',
            'downloadNum': 223745,
            'collectionNum': 424423,
            'companyName': '北京完美世界网络技术有限公司',
            'type': '游戏',
            'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
          }
          ]
        },
        {
          'id': 2,
          'name': '英雄联盟',
          'star_live': 0.5,
          'plat_form': ['iphone', 'windows'],
          'img': 'assets/images/apply-list.png',
          'downloadNum': 12346,
          'collectionNum': 4234423,
          'companyName': '腾讯网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658',
          'Screenshot': [
            {'img': 'assets/images/shot-screen.png'},
            {'img': 'assets/images/shot-screen.png'},
            {'img': 'assets/images/shot-screen.png'},
            {'img': 'assets/images/shot-screen.png'}

          ],
          'applyIntroduction': [{
            'title': '【不一样的双12-新人专享】',
            'child': [
              '11月2日10:00-11月5日09:59，新会员可以享受满39元限时包邮！还能领取60元红包!',
              '11月5日10:00-11月12日09:59，新会员可以享受满39元限时包邮！还能领取100元红包！'
            ]
          }, {
            'title': '11月最新劲爆活动一：面霜保湿时代',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日',
              '活动内容：最高满199-100，十大明星面霜5折封顶'
            ]
          }, {
            'title': '11月最新劲爆活动一:签到有礼！chocolate潮范随行杯免费送！',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日 ',
              '活动内容：【签到有礼】活动，新会员签到一次可获得100个唯品币，累计签到满7次有机会赢取CHOCOLATE:限量随行杯一个。'
            ]
          }],
          'relevantApply': [{
            'id': 11,
            'txt1': 'Dimensional',
            'txt2': 'Pre-Release',
            'plat_form': ['windows'],
            'img': 'assets/images/apply-list-new.png',
            'downloadNum': 223745,
            'collectionNum': 424423,
            'companyName': '北京完美世界网络技术有限公司',
            'type': '游戏',
            'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
          },
            {
              'id': 12,
              'txt1': 'Dimensional',
              'txt2': 'Pre-Release',
              'plat_form': ['iphone', 'windows', 'android'],
              'img': 'assets/images/apply-list-new.png',
              'downloadNum': 62345,
              'collectionNum': 4249423,
              'companyName': '北京完美世界网络技术有限公司',
              'type': '游戏',
              'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
            }
          ]

        },
        {
          'id': 3,
          'name': '风暴英雄',
          'star_live': 5,
          'plat_form': ['iphone', 'windows'],
          'img': 'assets/images/apply-list.png',
          'downloadNum': 123471,
          'collectionNum': 4244263,
          'companyName': '暴雪网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658',
          'Screenshot': [{'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}],
          'applyIntroduction': [{
            'title': '【不一样的双13-新人专享】',
            'child': [
              '11月2日10:00-11月5日09:59，新会员可以享受满39元限时包邮！还能领取60元红包!',
              '11月5日10:00-11月12日09:59，新会员可以享受满39元限时包邮！还能领取100元红包！'
            ]
          }, {
            'title': '11月最新劲爆活动一：面霜保湿时代',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日',
              '活动内容：最高满199-100，十大明星面霜5折封顶'
            ]
          }, {
            'title': '11月最新劲爆活动一:签到有礼！chocolate潮范随行杯免费送！',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日 ',
              '活动内容：【签到有礼】活动，新会员签到一次可获得100个唯品币，累计签到满7次有机会赢取CHOCOLATE:限量随行杯一个。'
            ]
          }],
          'relevantApply': [{
            'id': 11,
            'txt1': 'Dimensional',
            'txt2': 'Pre-Release',
            'plat_form': ['windows'],
            'img': 'assets/images/apply-list-new.png',
            'downloadNum': 223745,
            'collectionNum': 424423,
            'companyName': '北京完美世界网络技术有限公司',
            'type': '游戏',
            'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
          },
            {
              'id': 12,
              'txt1': 'Dimensional',
              'txt2': 'Pre-Release',
              'plat_form': ['iphone', 'windows', 'android'],
              'img': 'assets/images/apply-list-new.png',
              'downloadNum': 62345,
              'collectionNum': 4249423,
              'companyName': '北京完美世界网络技术有限公司',
              'type': '游戏',
              'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
            },
            {
              'id': 88,
              'txt1': 'Dimensional',
              'txt2': 'Pre-Release',
              'plat_form': ['iphone', 'android'],
              'img': 'assets/images/apply-list-new.png',
              'downloadNum': 62345,
              'collectionNum': 4249423,
              'companyName': '北京完美世界网络技术有限公司',
              'type': '游戏',
              'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
            }
          ]

        },
        {
          'id': 4,
          'name': '我叫MT',
          'star_live': 1.5,
          'plat_form': ['iphone', 'android'],
          'img': 'assets/images/apply-list.png',
          'downloadNum': 1234855,
          'collectionNum': 5424423,
          'companyName': '北京乐动卓越科技有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658',
          'Screenshot': [{'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}],
          'applyIntroduction': [{
            'title': '【不一样的双14-新人专享】',
            'child': [
              '11月2日10:00-11月5日09:59，新会员可以享受满39元限时包邮！还能领取60元红包!',
              '11月5日10:00-11月12日09:59，新会员可以享受满39元限时包邮！还能领取100元红包！'
            ]
          }, {
            'title': '11月最新劲爆活动一：面霜保湿时代',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日',
              '活动内容：最高满199-100，十大明星面霜5折封顶'
            ]
          }, {
            'title': '11月最新劲爆活动一:签到有礼！chocolate潮范随行杯免费送！',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日 ',
              '活动内容：【签到有礼】活动，新会员签到一次可获得100个唯品币，累计签到满7次有机会赢取CHOCOLATE:限量随行杯一个。'
            ]
          }],
          'relevantApply': [{
            'id': 11,
            'txt1': 'Dimensional',
            'txt2': 'Pre-Release',
            'plat_form': ['windows'],
            'img': 'assets/images/apply-list-new.png',
            'downloadNum': 223745,
            'collectionNum': 424423,
            'companyName': '北京完美世界网络技术有限公司',
            'type': '游戏',
            'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
          },
            {
              'id': 12,
              'txt1': 'Dimensional',
              'txt2': 'Pre-Release',
              'plat_form': ['iphone', 'windows', 'android'],
              'img': 'assets/images/apply-list-new.png',
              'downloadNum': 62345,
              'collectionNum': 4249423,
              'companyName': '北京完美世界网络技术有限公司',
              'type': '游戏',
              'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
            }
          ]

        },
        {
          'id': 5,
          'name': '2048',
          'star_live': 2,
          'plat_form': ['iphone', 'android'],
          'img': 'assets/images/apply-list.png',
          'downloadNum': 12349,
          'collectionNum': 4244523,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658',
          'Screenshot': [{'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}],
          'applyIntroduction': [{
            'title': '【不一样的双15-新人专享】',
            'child': [
              '11月2日10:00-11月5日09:59，新会员可以享受满39元限时包邮！还能领取60元红包!',
              '11月5日10:00-11月12日09:59，新会员可以享受满39元限时包邮！还能领取100元红包！'
            ]
          }, {
            'title': '11月最新劲爆活动一：面霜保湿时代',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日',
              '活动内容：最高满199-100，十大明星面霜5折封顶'
            ]
          }, {
            'title': '11月最新劲爆活动一:签到有礼！chocolate潮范随行杯免费送！',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日 ',
              '活动内容：【签到有礼】活动，新会员签到一次可获得100个唯品币，累计签到满7次有机会赢取CHOCOLATE:限量随行杯一个。'
            ]
          }],
          'relevantApply': [{
            'id': 11,
            'txt1': 'Dimensional',
            'txt2': 'Pre-Release',
            'plat_form': ['windows'],
            'img': 'assets/images/apply-list-new.png',
            'downloadNum': 223745,
            'collectionNum': 424423,
            'companyName': '北京完美世界网络技术有限公司',
            'type': '游戏',
            'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
          },
            {
              'id': 12,
              'txt1': 'Dimensional',
              'txt2': 'Pre-Release',
              'plat_form': ['iphone', 'windows', 'android'],
              'img': 'assets/images/apply-list-new.png',
              'downloadNum': 62345,
              'collectionNum': 4249423,
              'companyName': '北京完美世界网络技术有限公司',
              'type': '游戏',
              'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
            }
          ]

        },
        {
          'id': 6,
          'name': '地下城与勇士',
          'star_live': 2.5,
          'plat_form': ['windows'],
          'img': 'assets/images/apply-list.png',
          'downloadNum': 123410,
          'collectionNum': 4245423,
          'companyName': '腾讯网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658',
          'Screenshot': [{'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}],
          'applyIntroduction': [{
            'title': '【不一样的双16-新人专享】',
            'child': [
              '11月2日10:00-11月5日09:59，新会员可以享受满39元限时包邮！还能领取60元红包!',
              '11月5日10:00-11月12日09:59，新会员可以享受满39元限时包邮！还能领取100元红包！'
            ]
          }, {
            'title': '11月最新劲爆活动一：面霜保湿时代',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日',
              '活动内容：最高满199-100，十大明星面霜5折封顶'
            ]
          }, {
            'title': '11月最新劲爆活动一:签到有礼！chocolate潮范随行杯免费送！',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日 ',
              '活动内容：【签到有礼】活动，新会员签到一次可获得100个唯品币，累计签到满7次有机会赢取CHOCOLATE:限量随行杯一个。'
            ]
          }],
          'relevantApply': [{
            'id': 11,
            'txt1': 'Dimensional',
            'txt2': 'Pre-Release',
            'plat_form': ['windows'],
            'img': 'assets/images/apply-list-new.png',
            'downloadNum': 223745,
            'collectionNum': 424423,
            'companyName': '北京完美世界网络技术有限公司',
            'type': '游戏',
            'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
          },
            {
              'id': 12,
              'txt1': 'Dimensional',
              'txt2': 'Pre-Release',
              'plat_form': ['iphone', 'windows', 'android'],
              'img': 'assets/images/apply-list-new.png',
              'downloadNum': 62345,
              'collectionNum': 4249423,
              'companyName': '北京完美世界网络技术有限公司',
              'type': '游戏',
              'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
            }
          ]

        },
        {
          'id': 7,
          'name': '星际争霸',
          'star_live': 3,
          'plat_form': ['iphone', 'windows'],
          'img': 'assets/images/apply-list.png',
          'downloadNum': 123411,
          'collectionNum': 4244243,
          'companyName': '暴雪网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658',
          'Screenshot': [{'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}],
          'applyIntroduction': [{
            'title': '【不一样的双17-新人专享】',
            'child': [
              '11月2日10:00-11月5日09:59，新会员可以享受满39元限时包邮！还能领取60元红包!',
              '11月5日10:00-11月12日09:59，新会员可以享受满39元限时包邮！还能领取100元红包！'
            ]
          }, {
            'title': '11月最新劲爆活动一：面霜保湿时代',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日',
              '活动内容：最高满199-100，十大明星面霜5折封顶'
            ]
          }, {
            'title': '11月最新劲爆活动一:签到有礼！chocolate潮范随行杯免费送！',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日 ',
              '活动内容：【签到有礼】活动，新会员签到一次可获得100个唯品币，累计签到满7次有机会赢取CHOCOLATE:限量随行杯一个。'
            ]
          }],
          'relevantApply': [{
            'id': 11,
            'txt1': 'Dimensional',
            'txt2': 'Pre-Release',
            'plat_form': ['windows'],
            'img': 'assets/images/apply-list-new.png',
            'downloadNum': 223745,
            'collectionNum': 424423,
            'companyName': '北京完美世界网络技术有限公司',
            'type': '游戏',
            'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
          },
            {
              'id': 12,
              'txt1': 'Dimensional',
              'txt2': 'Pre-Release',
              'plat_form': ['iphone', 'windows', 'android'],
              'img': 'assets/images/apply-list-new.png',
              'downloadNum': 62345,
              'collectionNum': 4249423,
              'companyName': '北京完美世界网络技术有限公司',
              'type': '游戏',
              'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
            }
          ]

        },
        {
          'id': 8,
          'name': '魔兽世界',
          'star_live': 3.5,
          'plat_form': ['iphone', 'windows'],
          'img': 'assets/images/apply-list.png',
          'downloadNum': 1234113,
          'collectionNum': 4242423,
          'companyName': '暴雪网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658',
          'Screenshot': [{'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}],
          'applyIntroduction': [{
            'title': '【不一样的双18-新人专享】',
            'child': [
              '11月2日10:00-11月5日09:59，新会员可以享受满39元限时包邮！还能领取60元红包!',
              '11月5日10:00-11月12日09:59，新会员可以享受满39元限时包邮！还能领取100元红包！'
            ]
          }, {
            'title': '11月最新劲爆活动一：面霜保湿时代',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日',
              '活动内容：最高满199-100，十大明星面霜5折封顶'
            ]
          }, {
            'title': '11月最新劲爆活动一:签到有礼！chocolate潮范随行杯免费送！',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日 ',
              '活动内容：【签到有礼】活动，新会员签到一次可获得100个唯品币，累计签到满7次有机会赢取CHOCOLATE:限量随行杯一个。'
            ]
          }],
          'relevantApply': [{
            'id': 11,
            'txt1': 'Dimensional',
            'txt2': 'Pre-Release',
            'plat_form': ['windows'],
            'img': 'assets/images/apply-list-new.png',
            'downloadNum': 223745,
            'collectionNum': 424423,
            'companyName': '北京完美世界网络技术有限公司',
            'type': '游戏',
            'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
          },
            {
              'id': 12,
              'txt1': 'Dimensional',
              'txt2': 'Pre-Release',
              'plat_form': ['iphone', 'windows', 'android'],
              'img': 'assets/images/apply-list-new.png',
              'downloadNum': 62345,
              'collectionNum': 4249423,
              'companyName': '北京完美世界网络技术有限公司',
              'type': '游戏',
              'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
            }
          ]

        },
        {
          'id': 9,
          'name': '暗黑3',
          'star_live': 4,
          'plat_form': ['iphone', 'windows'],
          'img': 'assets/images/apply-list.png',
          'downloadNum': 12355,
          'collectionNum': 4242423,
          'companyName': '暴雪网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658',
          'Screenshot': [{'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}],
          'applyIntroduction': [{
            'title': '【不一样的双19-新人专享】',
            'child': [
              '11月2日10:00-11月5日09:59，新会员可以享受满39元限时包邮！还能领取60元红包!',
              '11月5日10:00-11月12日09:59，新会员可以享受满39元限时包邮！还能领取100元红包！'
            ]
          }, {
            'title': '11月最新劲爆活动一：面霜保湿时代',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日',
              '活动内容：最高满199-100，十大明星面霜5折封顶'
            ]
          }, {
            'title': '11月最新劲爆活动一:签到有礼！chocolate潮范随行杯免费送！',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日 ',
              '活动内容：【签到有礼】活动，新会员签到一次可获得100个唯品币，累计签到满7次有机会赢取CHOCOLATE:限量随行杯一个。'
            ]
          }],
          'relevantApply': [{
            'id': 11,
            'txt1': 'Dimensional',
            'txt2': 'Pre-Release',
            'plat_form': ['windows'],
            'img': 'assets/images/apply-list-new.png',
            'downloadNum': 223745,
            'collectionNum': 424423,
            'companyName': '北京完美世界网络技术有限公司',
            'type': '游戏',
            'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
          },
            {
              'id': 12,
              'txt1': 'Dimensional',
              'txt2': 'Pre-Release',
              'plat_form': ['iphone', 'windows', 'android'],
              'img': 'assets/images/apply-list-new.png',
              'downloadNum': 62345,
              'collectionNum': 4249423,
              'companyName': '北京完美世界网络技术有限公司',
              'type': '游戏',
              'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
            }
          ]

        },
        {
          'id': 10,
          'name': '大唐无双',
          'star_live': 4.5,
          'plat_form': ['windows'],
          'img': 'assets/images/apply-list.png',
          'downloadNum': 13345,
          'collectionNum': 424323,
          'companyName': '网易网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658',
          'Screenshot': [{'img': 'assets/images/shot-screen.png'}, {'img': 'assets/images/shot-screen.png'}],
          'applyIntroduction': [{
            'title': '【不一样的双20-新人专享】',
            'child': [
              '11月2日10:00-11月5日09:59，新会员可以享受满39元限时包邮！还能领取60元红包!',
              '11月5日10:00-11月12日09:59，新会员可以享受满39元限时包邮！还能领取100元红包！'
            ]
          }, {
            'title': '11月最新劲爆活动一：面霜保湿时代',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日',
              '活动内容：最高满199-100，十大明星面霜5折封顶'
            ]
          }, {
            'title': '11月最新劲爆活动一:签到有礼！chocolate潮范随行杯免费送！',
            'child': [
              '活动时间：2015年10月31日-2015年11月19日 ',
              '活动内容：【签到有礼】活动，新会员签到一次可获得100个唯品币，累计签到满7次有机会赢取CHOCOLATE:限量随行杯一个。'
            ]
          }],
          'relevantApply': [{
            'id': 11,
            'txt1': 'Dimensional',
            'txt2': 'Pre-Release',
            'plat_form': ['windows'],
            'img': 'assets/images/apply-list-new.png',
            'downloadNum': 223745,
            'collectionNum': 424423,
            'companyName': '北京完美世界网络技术有限公司',
            'type': '游戏',
            'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
          },
            {
              'id': 12,
              'txt1': 'Dimensional',
              'txt2': 'Pre-Release',
              'plat_form': ['iphone', 'windows', 'android'],
              'img': 'assets/images/apply-list-new.png',
              'downloadNum': 62345,
              'collectionNum': 4249423,
              'companyName': '北京完美世界网络技术有限公司',
              'type': '游戏',
              'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
            }
          ]

        }
      ],
      newEst: [
        {
          'id': 11,
          'txt1': 'Dimensional',
          'txt2': 'Pre-Release',
          'plat_form': ['windows'],
          'img': 'assets/images/apply-list-new.png',
          'downloadNum': 223745,
          'collectionNum': 424423,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
        },
        {
          'id': 12,
          'txt1': 'Dimensional',
          'txt2': 'Pre-Release',
          'plat_form': ['iphone', 'windows', 'android'],
          'img': 'assets/images/apply-list-new.png',
          'downloadNum': 62345,
          'collectionNum': 4249423,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
        },
        {
          'id': 13,
          'txt1': 'Dimensional',
          'txt2': 'Pre-Release',
          'plat_form': ['iphone'],
          'img': 'assets/images/apply-list-new.png',
          'downloadNum': 12745,
          'collectionNum': 42434423,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
        },
        {
          'id': 14,
          'txt1': 'Dimensional',
          'txt2': 'Pre-Release',
          'plat_form': ['iphone'],
          'img': 'assets/images/apply-list-new.png',
          'downloadNum': 32345,
          'collectionNum': 4245423,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
        },
        {
          'id': 15,
          'txt1': 'Dimensional',
          'txt2': 'Pre-Release',
          'plat_form': ['windows', 'iphone'],
          'img': 'assets/images/apply-list-new.png',
          'downloadNum': 62345,
          'collectionNum': 4244823,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
        },
        {
          'id': 16,
          'txt1': 'Dimensional',
          'txt2': 'Pre-Release',
          'plat_form': ['iphone'],
          'img': 'assets/images/apply-list-new.png',
          'downloadNum': 82345,
          'collectionNum': 4244253,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
        },
        {
          'id': 17,
          'txt1': 'Dimensional',
          'txt2': 'Pre-Release',
          'plat_form': ['windows', 'iphone'],
          'img': 'assets/images/apply-list-new.png',
          'downloadNum': 12945,
          'collectionNum': 4247423,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
        },
        {
          'id': 18,
          'txt1': 'Dimensional',
          'txt2': 'Pre-Release',
          'plat_form': ['iphone'],
          'img': 'assets/images/apply-list-new.png',
          'downloadNum': 302345,
          'collectionNum': 4249423,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
        },
        {
          'id': 19,
          'txt1': 'Dimensional',
          'txt2': 'Pre-Release',
          'plat_form': ['windows', 'iphone'],
          'img': 'assets/images/apply-list-new.png',
          'downloadNum': 134545,
          'collectionNum': 4248623,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
        },
        {
          'id': 20,
          'txt1': 'Dimensional',
          'txt2': 'Pre-Release',
          'plat_form': ['windows'],
          'img': 'assets/images/apply-list-new.png',
          'downloadNum': 1662345,
          'collectionNum': 42004423,
          'companyName': '北京完美世界网络技术有限公司',
          'type': '游戏',
          'downloadUrl': 'http://img.hb.aicdn.com/0a067e459b62467c50579d0831330fb6eed23dcd84585-GmNZdy_fw658'
        }

      ]
    });
})();
