Repository for the study of the programming language: JavaScript

Four simple API's within the CRUD standard (Create, Read, Update, Delete) with the theme from the Japanese anime "One Piece"

GET api CURL: 

curl -X GET "http://localhost:3000/onepiece/elements"
curl -X GET "http://localhost:3000/onepiece/concepts"
curl -X GET "http://localhost:3000/onepiece/character"


POST api CURL:

curl -X POST "http://localhost:3000/onepiece/elements" \
-H "Content-Type: application/json" \
-d '{"elements": ["New Element 1", "New Element 2", "New Element 3"]}'

curl -X POST "http://localhost:3000/onepiece/concepts" \
-H "Content-Type: application/json" \
-d '{"concepts": ["New Concept 1", "New Concept 2"]}'

curl -X POST "http://localhost:3000/onepiece/characters" \
-H "Content-Type: application/json" \
-d '{"characters": ["New Character 1", "New Character 2"]}'

PUT api CURL: 

curl -X PUT "http://localhost:3000/joyboy/elements/Akuma%20no%20mi" \
-H "Content-Type: application/json" \
-d '{"elements": "Marijoesi"}'

curl -X PUT "http://localhost:3000/joyboy/concepts/Haki" \
-H "Content-Type: application/json" \
-d '{"concepts": "Observation Haki"}'

curl -X PUT "http://localhost:3000/joyboy/characters/Shirahoshi" \
-H "Content-Type: application/json" \
-d '{"characters": "Silver Reyleigh"}'

DELETE api CURL: 

curl -X DELETE "http://localhost:3000/onepiece" \
-H "Content-Type: application/json" \
-d '{"type": "elements", "name": "Akuma no mi"}'

curl -X DELETE "http://localhost:3000/onepiece" \
-H "Content-Type: application/json" \
-d '{"type": "concepts", "name": "Haki"}'

curl -X DELETE "http://localhost:3000/onepiece" \
-H "Content-Type: application/json" \
-d '{"type": "characters", "name": "Shirahoshi"}'

