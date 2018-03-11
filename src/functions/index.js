import { nextApp as next } from "./app/app"
import { mars } from "./worlds/mars"
import { jupiter } from "./worlds/jupiter"
import { about_me } from "./about_me/about_me"

/*
Namespace application services with function groups.
Partially deploy namespaces for independent service updates.
*/

// SSR Next.js app Cloud Function used by Firebase Hosting
// yarn deploy-app
const app = {
  next,
  // other Hosting dependencies
}


// Mircoservices that make up the Greetings service
// yarn deploy-functions
const greetings = {
  mars,
  jupiter,
  about_me,
  // other funcs
}

export { app, greetings }
