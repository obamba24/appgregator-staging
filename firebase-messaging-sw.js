import { getMessaging, getToken } from "firebase/messaging";
import {db,auth} from "./src/Config/firebase"
import { doc,setDoc ,arrayUnion} from "firebase/firestore";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
const currentUser=auth.currentUser;

const saveToken = "";
getToken(messaging, { vapidKey: 'BFglq0yTRFfrFPbL0DPkSMn1jFmnAQquPC8nwx2aB_EqKrEwgnqKATQ244g41bbcfB09N3Hmp4T4BY91FMuNImo' })
.then((currentToken) => {

  if (currentToken) {
	setDoc(doc(db, "appgregator_user", currentUser), {
		webToken: arrayUnion(currentToken)
	  }, { merge: true });

	console.log(currentToken,'this is messaging token')
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

export {saveToken}