var APP_DATA = {
  "scenes": [
    {
      "id": "0-church-square",
      "name": "Church Square",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.470653080638872,
        "pitch": 0.07089632804082058,
        "fov": 1.2933209261323464
      },
      "linkHotspots": [
        {
          "yaw": 2.8656369881424038,
          "pitch": -0.0013278295450405153,
          "rotation": 0,
          "target": "1-street_01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-street_01",
      "name": "Street_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.2160348676065933,
        "pitch": -0.11278961279221456,
        "fov": 1.2933209261323464
      },
      "linkHotspots": [
        {
          "yaw": -0.6380635993547727,
          "pitch": 0.03641624031976676,
          "rotation": 0,
          "target": "0-church-square"
        },
        {
          "yaw": -3.0738798597557224,
          "pitch": 0.04910707817556137,
          "rotation": 0,
          "target": "3-entrance"
        },
        {
          "yaw": 2.335959128244622,
          "pitch": 0.014977425245756848,
          "rotation": 0,
          "target": "2-street_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-street_02",
      "name": "Street_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7787528178487335,
        "pitch": 0.2094664237569699,
        "fov": 1.2933209261323464
      },
      "linkHotspots": [
        {
          "yaw": -1.2784585877151926,
          "pitch": 0.1125136238853841,
          "rotation": 0,
          "target": "1-street_01"
        },
        {
          "yaw": -1.8453747793505482,
          "pitch": 0.10293141637922432,
          "rotation": 0,
          "target": "3-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.0335384527026754,
        "pitch": 0.009667681096475533,
        "fov": 1.2933209261323464
      },
      "linkHotspots": [
        {
          "yaw": -0.3445138231474303,
          "pitch": 0.18265713327150124,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 2.414427833644644,
          "pitch": 0.15691778626655228,
          "rotation": 0,
          "target": "1-street_01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2282227442180229,
        "pitch": 0.12890241461967378,
        "fov": 1.2933209261323464
      },
      "linkHotspots": [
        {
          "yaw": -2.763436938456511,
          "pitch": 0.11759751531604579,
          "rotation": 0,
          "target": "3-entrance"
        },
        {
          "yaw": -1.5069312681547302,
          "pitch": 0.10019197162115923,
          "rotation": 0,
          "target": "5-toilet"
        },
        {
          "yaw": -1.9972008386568252,
          "pitch": 0.07080173779537269,
          "rotation": 0,
          "target": "6-loft_01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.5513575809563207,
        "pitch": 0.22585719865612397,
        "fov": 1.2933209261323464
      },
      "linkHotspots": [
        {
          "yaw": 1.079608355542657,
          "pitch": 0.2204956220048686,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-loft_01",
      "name": "Loft_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9969074685223589,
        "pitch": 0.050945974178857156,
        "fov": 1.2933209261323464
      },
      "linkHotspots": [
        {
          "yaw": -0.07885077468166202,
          "pitch": 0.6113298000430394,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -2.0949027897484562,
          "pitch": 0.06673191286277103,
          "rotation": 0,
          "target": "9-bathroom"
        },
        {
          "yaw": -0.5979428282144283,
          "pitch": 0.19090898415183233,
          "rotation": 0,
          "target": "7-loft_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-loft_02",
      "name": "Loft_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10388533957440593,
          "pitch": 0.07532983521927505,
          "rotation": 0,
          "target": "9-bathroom"
        },
        {
          "yaw": -0.8410423019940687,
          "pitch": 0.10831167118517548,
          "rotation": 0,
          "target": "6-loft_01"
        },
        {
          "yaw": 1.2624748786189368,
          "pitch": 0.098945129190394,
          "rotation": 0,
          "target": "8-bedroom"
        },
        {
          "yaw": 1.5596693017879772,
          "pitch": 0.10051217242151722,
          "rotation": 0,
          "target": "10-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.674588526238775,
        "pitch": 0.0759974092567024,
        "fov": 1.2933209261323464
      },
      "linkHotspots": [
        {
          "yaw": 2.230038196776049,
          "pitch": 0.08224899111246842,
          "rotation": 0,
          "target": "7-loft_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.48811224498762584,
        "pitch": 0.02823486819689336,
        "fov": 1.2933209261323464
      },
      "linkHotspots": [
        {
          "yaw": 1.980475329693487,
          "pitch": 0.15022043326224122,
          "rotation": 0,
          "target": "6-loft_01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.5637957718800877,
        "pitch": 0.024098010886287824,
        "fov": 1.2933209261323464
      },
      "linkHotspots": [
        {
          "yaw": -0.1483583050433488,
          "pitch": 0.04647196661474595,
          "rotation": 0,
          "target": "7-loft_02"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
