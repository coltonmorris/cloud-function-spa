import * as functions from "firebase-functions"

const about_me = functions.https.onRequest((request, response) => {
  response.send("About colton")
})

export { about_me }

