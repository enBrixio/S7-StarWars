// Importa las funciones necesarias de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../services/index.js";
// TODO: Agrega los SDKs para los productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa la Autenticación de Firebase y obtiene una referencia al servicio
const auth = getAuth(app);

export { auth, app };
