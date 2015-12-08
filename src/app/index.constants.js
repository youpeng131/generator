/* global malarkey:false, toastr:false, moment:false */
(function () {
  'use strict';

  angular
    .module('angularApp')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('apiHost', 'http://127.0.0.1')
    .constant('APP', {
      "head_apps": {
        "apps": {
          "per_page": 10,
          "from": 1,
          "to": 1,
          "data": [
            {
              "id": 1,
              "collect_count": 0,
              "max_version": {
                "version": "1.0.2",
                "id": 1,
                "version_status": 0,
                "summary": "游戏简介"
              },
              "browse_count": 10,
              "avg_score": 3,
              "user_id": 1,
              "max_version_id": 1,
              "image": "assets\/images\/apply-list.png",
              "app_platforms": [
                {
                  "platform_id": 4,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 4,
                    "name": "ios",
                    "icon": "fa fa-apple"
                  }
                },
                {
                  "platform_id": 5,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 5,
                    "name": "android",
                    "icon": "fa fa-android"
                  }
                },
                {
                  "platform_id": 2,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 2,
                    "name": "mac",
                    "icon": "icon-finder"
                  }
                },
                {
                  "platform_id": 1,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 1,
                    "name": "windows",
                    "icon": "fa fa-windows"
                  }
                }
              ],
              "name": "SuperRPG121",
              "download_count": 161
            },
            {
              "id": 2,
              "collect_count": 0,
              "max_version": {
                "version": "1.0.2",
                "id": 1,
                "version_status": 0,
                "summary": "游戏简介"
              },
              "browse_count": 10,
              "avg_score": 0.5,
              "user_id": 1,
              "max_version_id": 1,
              "image": "assets\/images\/apply-list.png",
              "app_platforms": [
                {
                  "platform_id": 4,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 4,
                    "name": "ios",
                    "icon": "fa fa-apple"
                  }
                },
                {
                  "platform_id": 5,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 5,
                    "name": "android",
                    "icon": "fa fa-android"
                  }
                },
                {
                  "platform_id": 2,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 2,
                    "name": "mac",
                    "icon": "icon-finder"
                  }
                },
                {
                  "platform_id": 1,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 1,
                    "name": "windows",
                    "icon": "fa fa-windows"
                  }
                }
              ],
              "name": "SuperRPG125",
              "download_count": 110
            },
            {
              "id": 3,
              "collect_count": 0,
              "max_version": {
                "version": "1.0.2",
                "id": 1,
                "version_status": 0,
                "summary": "游戏简介"
              },
              "browse_count": 10,
              "avg_score": 2,
              "user_id": 1,
              "max_version_id": 1,
              "image": "assets\/images\/apply-list.png",
              "app_platforms": [
                {
                  "platform_id": 4,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 4,
                    "name": "ios",
                    "icon": "fa fa-apple"
                  }
                },
                {
                  "platform_id": 5,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 5,
                    "name": "android",
                    "icon": "fa fa-android"
                  }
                },
                {
                  "platform_id": 2,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 2,
                    "name": "mac",
                    "icon": "icon-finder"
                  }
                },
                {
                  "platform_id": 1,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 1,
                    "name": "windows",
                    "icon": "fa fa-windows"
                  }
                }
              ],
              "name": "SuperRPG14",
              "download_count": 360
            }
          ],
          "next_page_url": null,
          "total": 1,
          "current_page": 1,
          "last_page": 1,
          "prev_page_url": null
        }
      },
      "foot_apps": {
        "apps": {
          "per_page": 10,
          "from": 1,
          "to": 1,
          "data": [
            {
              "id": 1,
              "collect_count": 0,
              "max_version": {
                "version": "1.0.2",
                "id": 1,
                "version_status": 0,
                "summary": "游戏简介"
              },
              "browse_count": 10,
              "avg_score": 0,
              "user_id": 1,
              "max_version_id": 1,
              "image": "assets\/images\/apply-list.png",
              "app_platforms": [
                {
                  "platform_id": 4,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 4,
                    "name": "ios",
                    "icon": "fa fa-apple"
                  }
                },
                {
                  "platform_id": 5,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 5,
                    "name": "android",
                    "icon": "fa fa-android"
                  }
                },
                {
                  "platform_id": 2,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 2,
                    "name": "mac",
                    "icon": "icon-finder"
                  }
                },
                {
                  "platform_id": 1,
                  "app_description_id": 1,
                  "max_version_id": 1,
                  "platform": {
                    "id": 1,
                    "name": "windows",
                    "icon": "fa fa-windows"
                  }
                }
              ],
              "name": "SuperRPG12",
              "download_count": 160
            }
          ],
          "next_page_url": null,
          "total": 1,
          "current_page": 1,
          "last_page": 1,
          "prev_page_url": null
        }
      },
      "apps": {
        "per_page": 10,
        "from": 1,
        "to": 1,
        "data": [
          {
            "id": 1,
            "collect_count": 0,
            "max_version": {
              "version": "1.0.2",
              "id": 1,
              "version_status": 0,
              "summary": "游戏简介"
            },
            "browse_count": 10,
            "avg_score": 0,
            "user_id": 1,
            "max_version_id": 1,
            "image": "assets\/images\/apply-list.png",
            "app_platforms": [
              {
                "platform_id": 4,
                "app_description_id": 1,
                "max_version_id": 1,
                "platform": {
                  "id": 4,
                  "name": "ios",
                  "icon": "fa fa-apple"
                }
              },
              {
                "platform_id": 5,
                "app_description_id": 1,
                "max_version_id": 1,
                "platform": {
                  "id": 5,
                  "name": "android",
                  "icon": "fa fa-android"
                }
              },
              {
                "platform_id": 2,
                "app_description_id": 1,
                "max_version_id": 1,
                "platform": {
                  "id": 2,
                  "name": "mac",
                  "icon": "icon-finder"
                }
              },
              {
                "platform_id": 1,
                "app_description_id": 1,
                "max_version_id": 1,
                "platform": {
                  "id": 1,
                  "name": "windows",
                  "icon": "fa fa-windows"
                }
              }
            ],
            "name": "SuperRPG12",
            "download_count": 160
          }
        ],
        "next_page_url": null,
        "total": 1,
        "current_page": 1,
        "last_page": 1,
        "prev_page_url": null
      },
      "characters": [
        {
          "id": 1,
          "name": "动作冒险"
        },
        {
          "id": 2,
          "name": "角色扮演"
        }
      ],
      "setting": [
        {
          "name": "UserMainPageTopImage",
          "img": "assets\/images\/head-bg.png"
        },
        {
          "name": "UserMainPageMiddleImage",
          "img": "assets\/images\/head-bg.png"
        }
      ],
      "platforms": [
        {
          "id": 1,
          "name": "windows",
          "icon": "fa fa-windows"
        },
        {
          "id": 2,
          "name": "mac",
          "icon": "icon-finder"
        },
        {
          "id": 3,
          "name": "linux",
          "icon": "fa fa-linux"
        },
        {
          "id": 4,
          "name": "ios",
          "icon": "fa fa-apple"
        },
        {
          "id": 5,
          "name": "android",
          "icon": "fa fa-android"
        }
      ]
    })
    .constant('DETAIL',
    {
      "app": {
        "id": 1,
        "collect_count": 0,
        "max_version": {
          "summary": "游戏简介",
          "version_status": 0,
          "id": 1,
          "app_images": [
            {
              "image": "assets\/images\/img-big.png",
              "app_version_id": 1
            },
            {
              "image": "assets\/images\/img-big.png",
              "app_version_id": 1
            },
            {
              "image": "assets\/images\/img-big.png",
              "app_version_id": 1
            },
            {
              "image": "assets\/images\/img-big.png",
              "app_version_id": 1
            },
            {
              "image": "assets\/images\/img-big.png",
              "app_version_id": 1
            },
            {
              "image": "assets\/images\/img-big.png",
              "app_version_id": 1
            },
            {
              "image": "assets\/images\/img-big.png",
              "app_version_id": 1
            }
          ],
          "app_version_platforms": [
            {
              "id": 1,
              "glasses": [
                {
                  "name": "CardBoard"
                },
                {
                  "name": "唯镜"
                }
              ],
              "app_version_id": 1,
              "play_modes": [
                {
                  "name": "单人"
                },
                {
                  "name": "多人"
                }
              ],
              "prevent_dizziness": 6,
              "op_types": [
                {
                  "name": "头控"
                },
                {
                  "name": "手势"
                }
              ],
              "platform": {
                "id": 4,
                "name": "ios"
              },
              "image_quality_id": 1,
              "image_quality": {
                "id": 1,
                "name": "优秀"
              },
              "platform_id": 4,
              "os_type_id": 1,
              "op_difficulty_id": 1,
              "op_difficulty": {
                "id": 1,
                "name": "困难"
              },
              "os_type": {
                "id": 1,
                "name": "IOS 9"
              }
            },
            {
              "id": 2,
              "glasses": [

                {
                  "name": "魔镜"
                },
                {
                  "name": "gearvr"
                }
              ],
              "app_version_id": 1,
              "play_modes": [
                {
                  "name": "单人"
                },
                {
                  "name": "多人"
                }
              ],
              "prevent_dizziness": 6,
              "op_types": [
                {
                  "name": "头控"
                },
                {
                  "name": "手势"
                }
              ],
              "platform": {
                "id": 5,
                "name": "android"
              },
              "image_quality_id": 1,
              "image_quality": {
                "id": 1,
                "name": "优秀"
              },
              "platform_id": 5,
              "os_type_id": 2,
              "op_difficulty_id": 1,
              "op_difficulty": {
                "id": 1,
                "name": "困难"
              },
              "os_type": {
                "id": 2,
                "name": "Android 4"
              }
            },
            {
              "id": 3,
              "glasses": [
                {
                  "name": "CardBoard"
                },
                {
                  "name": "gearvr"
                }
              ],
              "app_version_id": 1,
              "play_modes": [
                {
                  "name": "单人"
                },
                {
                  "name": "多人"
                }
              ],
              "prevent_dizziness": 6,
              "op_types": [
                {
                  "name": "头控"
                },
                {
                  "name": "手势"
                }
              ],
              "platform": {
                "id": 2,
                "name": "mac"
              },
              "image_quality_id": 1,
              "image_quality": {
                "id": 1,
                "name": "优秀"
              },
              "platform_id": 2,
              "os_type_id": 3,
              "op_difficulty_id": 1,
              "op_difficulty": {
                "id": 1,
                "name": "困难"
              },
              "os_type": {
                "id": 3,
                "name": "OS 10"
              }
            },
            {
              "id": 4,
              "glasses": [
                {
                  "name": "唯镜"
                },
                {
                  "name": "魔镜"
                }
              ],
              "app_version_id": 1,
              "play_modes": [
                {
                  "name": "单人"
                },
                {
                  "name": "多人"
                }
              ],
              "prevent_dizziness": 6,
              "op_types": [
                {
                  "name": "头控"
                },
                {
                  "name": "手势"
                }
              ],
              "platform": {
                "id": 1,
                "name": "windows"
              },
              "image_quality_id": 1,
              "image_quality": {
                "id": 1,
                "name": "优秀"
              },
              "platform_id": 1,
              "os_type_id": 4,
              "op_difficulty_id": 1,
              "op_difficulty": {
                "id": 1,
                "name": "困难"
              },
              "os_type": {
                "id": 4,
                "name": "Windows 8"
              }
            }
          ],
          "version": "1.0.2",
          "description": "这个游戏无与伦比"
        },
        "browse_count": 14,
        "avg_score": 0,
        "user_id": 1,
        "app_characters": [
          {
            "name": "动作冒险"
          },
          {
            "name": "角色扮演"
          }
        ],
        "max_version_id": 1,
        "image": "assets\/images\/apply-list.png",
        "app_platforms": [
          {
            "platform_id": 4,
            "app_description_id": 1,
            "max_version_id": 1,
            "platform": {
              "id": 4,
              "name": "ios",
              "icon": "fa fa-apple"
            }
          },
          {
            "platform_id": 5,
            "app_description_id": 1,
            "max_version_id": 1,
            "platform": {
              "id": 5,
              "name": "android",
              "icon": "fa fa-android"
            }
          },
          {
            "platform_id": 2,
            "app_description_id": 1,
            "max_version_id": 1,
            "platform": {
              "id": 2,
              "name": "mac",
              "icon": "icon-finder"
            }
          },
          {
            "platform_id": 1,
            "app_description_id": 1,
            "max_version_id": 1,
            "platform": {
              "id": 1,
              "name": "windows",
              "icon": "fa fa-windows"
            }
          }
        ],
        "user": {
          "id": 1,
          "name": "admin"
        },
        "name": "SuperRPG12",
        "download_count": 160
      }
    });
})();
