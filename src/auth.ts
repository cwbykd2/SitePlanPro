import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

const overlay = document.getElementById("login-overlay") as HTMLDivElement;
const emailInput = document.getElementById("login-email") as HTMLInputElement;
const pwInput = document.getElementById("login-password") as HTMLInputElement;
const btn = document.getElementById("login-btn") as HTMLButtonElement;
const errEl = document.getElementById("login-error") as HTMLDivElement;

function showError(msg: string) {
  errEl.textContent = msg;
  pwInput.classList.add("shake");
  setTimeout(() => pwInput.classList.remove("shake"), 400);
}

async function attemptLogin() {
  const email = emailInput.value.trim();
  const password = pwInput.value;

  if (!email || !password) {
    showError("Please enter both email and password");
    return;
  }

  btn.disabled = true;
  btn.textContent = "Signing in...";
  errEl.textContent = "";

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    btn.disabled = false;
    btn.textContent = "Sign In";
    const code = error?.code || "";
    if (
      code === "auth/user-not-found" ||
      code === "auth/wrong-password" ||
      code === "auth/invalid-credential"
    ) {
      showError("Invalid email or password");
    } else if (code === "auth/invalid-email") {
      showError("Invalid email address");
    } else if (code === "auth/too-many-requests") {
      showError("Too many attempts. Try again later");
    } else {
      showError("Login failed: " + (error?.message || "Unknown error"));
    }
    pwInput.value = "";
    pwInput.focus();
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    overlay.classList.add("hidden");
  } else {
    overlay.classList.remove("hidden");
  }
});

btn.addEventListener("click", attemptLogin);

emailInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") pwInput.focus();
});

pwInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") attemptLogin();
});
