define({ "api": [
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "get",
    "url": "/promos/:pid/courses",
    "title": "getCourses",
    "description": "<p>récupère la liste de tous les cours associés à une promo</p>",
    "name": "getCourses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>Id de la promo</p>"
          }
        ]
      }
    },
    "group": "Cours",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "courses[]",
            "optional": false,
            "field": "courses",
            "description": "<p>liste des cours</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n [\n     {\n         \"promoId\" : \"5b9ea41a4e2d37b1400c7b7a\",\n         \"title\" : \"Cours 1\",\n         \"teacher\" : \"Thomas Bourdeau'huy\",\n         \"start_time\" : \"2017-05-05T11:30:00Z\",\n         \"end_time\" : \"2017-05-05T13:30:00Z\"\n         \"attendees\": [\n                  {\n                     \"id\" : \"5a9edz41a4e7d37b1400c7b7a\",\n                     \"ishere\" : \"true\",\n                     \"comments\" : \"TRop de retard, attention à lui\"\n                  },\n                  {\n                     \"id\" : \"5a9edz41a4e7d37b1400c7b7v\",\n                     \"ishere\" : \"false\",\n                     \"comments\" : \"\"\n                  }\n                 ],\n         \"_id\": \"5a9ea41a4e7d37b1400c7b7e\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Mongoose",
            "description": "<p>Error</p>"
          }
        ]
      }
    },
    "filename": "src/api/courses/index.js",
    "groupTitle": "Cours",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/promos/:pid/courses"
      }
    ]
  },
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "post",
    "url": "/promos/:pid/courses",
    "title": "postCourses",
    "description": "<p>Crée un cours associé à une promo, date au format ISO8601</p>",
    "name": "postCourses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>Id de la promo</p>"
          }
        ]
      }
    },
    "group": "Cours",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\n    body:\n [\n     {\n         \"title\" : \"Cours 2\",\n         \"teacher\" : \"Thomas Bourdeau'huy\",\n         \"start_time\" : \"2017-05-05T11:30:00Z\",\n         \"end_time\" : \"2017-05-05T13:30:00Z\"\n         \"attendees\": [\n                  {\n                     \"id\" : \"5a9edz41a4e7d37b1400c7b7a\",\n                     \"ishere\" : \"true\",\n                     \"comments\" : \"TRop de retard, attention à lui\"\n                  },\n                  {\n                     \"id\" : \"5a9edz41a4e7d37b1400c7b7v\",\n                     \"ishere\" : \"false\",\n                     \"comments\" : \"\"\n                  }\n                 ]\n     }\n ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>API response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n success : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Missing",
            "description": "<p>Fields</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Mongoose",
            "description": "<p>Error</p>"
          }
        ]
      }
    },
    "filename": "src/api/courses/index.js",
    "groupTitle": "Cours",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/promos/:pid/courses"
      }
    ]
  },
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "put",
    "url": "/promos/courses/:cid",
    "title": "putCourses",
    "description": "<p>Modifier la présence des élèves à un cours, id promo non nécess</p>",
    "name": "putCourses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": "<p>Id du cours</p>"
          }
        ]
      }
    },
    "group": "Cours",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\n    body:\n [\n     {\n         \"title\" : \"Cours Modifié\",\n         \"teacher\" : \"Thomas Bourdeau'Modif\",\n         \"start_time\" : \"2017-05-05T11:30:00Z\",\n         \"end_time\" : \"2017-05-05T13:30:00Z\"\n         \"attendees\": [\n                  {\n                     \"id\" : \"5a9edz41a4e7d37b1400c7b7a\",\n                     \"ishere\" : \"true\",\n                     \"comments\" : \"TRop de retard, attention à lui\"\n                  },\n                  {\n                     \"id\" : \"5a9edz41a4e7d37b1400c7b7v\",\n                     \"ishere\" : \"true\",\n                     \"comments\" : \"Ce crétin s'est présenté en retard\"\n                  }\n                 ]\n     }\n ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>API response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n success : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Missing",
            "description": "<p>Fields</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Mongoose",
            "description": "<p>Error</p>"
          }
        ]
      }
    },
    "filename": "src/api/courses/index.js",
    "groupTitle": "Cours",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/promos/courses/:cid"
      }
    ]
  }
] });
