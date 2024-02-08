// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAcMOx-_WWdKtHZkHxsuEj7EiNqZVk-Rrw",
//   authDomain: "cheezious-backend-admin.firebaseapp.com",
//   projectId: "cheezious-backend-admin",
//   storageBucket: "cheezious-backend-admin.appspot.com",
//   messagingSenderId: "256064544043",
//   appId: "1:256064544043:web:1985e86e947f8ebc0bb96e",
//   measurementId: "G-P2QG9JEN48",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDk_n4p1Yd1a4EZC5Ms9wrv_9bxvoB27uc",
  authDomain: "cheezious-dev.firebaseapp.com",
  projectId: "cheezious-dev",
  storageBucket: "cheezious-dev.appspot.com",
  messagingSenderId: "1041791921692",
  appId: "1:1041791921692:web:1b9de64637a42b8f7d79d9",
  measurementId: "G-TY1L0PW3RP",
};

// {
//   "type": "service_account",
//   "project_id": "cheezious-dev",
//   "private_key_id": "c804d33779bb013a8ea360b82e73cdec6eb19f95",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxt15YjUdiP8EY\ntTF9vmHxVmHI8nL2byo9mpYOvc6vs8SwCaTb82OVArVkMcr3IbrvxP0Fc9/Er+W0\npO2MCtCh3QfQRbalaDc1sNHS8ouxlJ8HhANKX/Cn3At39M7YQQX9rvbSFfD+T8MS\nhsLdE1lx+VsBuxlq0LVx6KtyqoJCbaqE+efifuU2rB82bysLH4QS8i1r2cLkbIeE\nbqFmIRARvS00BUvhl0lyhNd++anetY+PRBJJUF76BMU2dPXEyN5ap0L1oJ/C58nR\na9CdYj7FGfQKw+lPWUE0UBS/gqPYoNygltEVc/XvXyHDuv9gQSLPHshoMsEMFnnh\nFoA7EiMJAgMBAAECggEAAkJDZ7q7+oq26Jp8+40s74VajtROE8XL8qaBW8Sb2O3f\nBSHKP6VzUZSMO67KVqPOHXgSgzw6zuQxdj9WaZ5FkpkdnU8ViDqv4PXTZOwCTIqI\nDu9ln09i3q9UUf0BmAwTiGrt5jOzMXhQEW83ENpLG8DAoGABbbMja0Q60aVLLI70\nznuADTNkOzfq0djRTXr+/uPl7lR9skQm+DBVQDTCjZKjy8HRjr5v0lkc9101nbnb\n4gh3acvY7/UyfFGV4srbYr2eRKBiisRhhdUmvKVeouBB6qEpIXJpCQaWLS0qnlMA\n3PHS1jklUXJH0QeFCQOdu4cPBiEZoV8uU/3ea+OsBQKBgQD2N3uRSCY5+UwxnHGX\nGCWh5Ec5R7jcxsLicgWyRziOLkOhSnwX/n1/mx1hifwKIZSki0W5wX23xZZ/6zZ9\na6Hvb56ZwAfjrt2bGhr/SgjzGOI0ZbE8n5/tcOO0wYYmQa+/I1t0o0Rv1XrB4JGv\nWDRzJgq568FlCB20F1bOCaIC0wKBgQC4xxlfTMPKtOCvSZVZd1cp0s+UfloNhx74\nQGpV6II+LN2e2CMTI1U8O03bOhWZ62NrgoDSJlJGJo9TRbC7On+x4m11z6wLUiSF\n7h6MjCu5nmu//KLh+VCwcN6jD7Sj2qtLmoYbliXUmASQCrPlOfFpi/JjjolnjHsr\ndXtX6hxBMwKBgAXKFjC7VpLEZuM/v3gDDFd7K6WQJyuhzNFQRwwDGrRVKCfxvWs/\nA6ptdkpl2TRPx9P6pmAQyaj5j2lgmX5nen5LzJnm5wiWgwVznrDkB8PXkPIUdg9r\n3XHS1rfYWRQrNTu0VCEw+Zn7lhBa/HH4C/utKFFo1rpOb4xdhCACH/obAoGBAJvg\n4oeh495CnvVg9wxFgBO5UwKrYN7eqYK2HL6iahV3lfKl1VkUypgIU5LoukZh7DpL\nGs+uImQprWmLdh9Mp2LyaHMlobbfMg6GJeFdcpmhiraosuQ9hhOC9F7NJg/ArhcW\noaHuFbX2FItLbB2ptv3aYL4aBdKEEXhFIKu2xOU/AoGANrDhvU27DFUNKQS8EqDs\ngK5KYbGvjenyI12SrY8rC7O75WGWRWEf1tkV+/bHJol/FYB1LtLAqfqXAG+vvI8X\n0ILqtYIG/mhgM3oZfDXqHUVyf76iNssH0pdltg7aCB1uhJkU/+qUImM80c4xQCIQ\nF2IpcQoup7JrGT6QCqW3riU=\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-pd5vd@cheezious-dev.iam.gserviceaccount.com",
//   "client_id": "110253582452362209629",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pd5vd%40cheezious-dev.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
// }

export const firebaseAppInit = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
};
