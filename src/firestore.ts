import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./lib/firebase";

function sitesCollection(userId: string) {
  return collection(db, "users", userId, "sites");
}

function siteDoc(userId: string, siteId: string) {
  return doc(db, "users", userId, "sites", siteId);
}

export async function getAllSites(userId: string): Promise<Record<string, any>> {
  const snap = await getDocs(sitesCollection(userId));
  const sites: Record<string, any> = {};
  snap.forEach((d) => {
    const data = d.data();
    sites[d.id] = { ...data, siteId: d.id };
  });
  return sites;
}

export async function saveSite(
  userId: string,
  siteId: string | null,
  data: any
): Promise<string> {
  if (siteId) {
    const ref = siteDoc(userId, siteId);
    await setDoc(ref, { ...data, siteId });
    return siteId;
  }
  const ref = await addDoc(sitesCollection(userId), data);
  await updateDoc(ref, { siteId: ref.id });
  return ref.id;
}

export async function deleteSite(
  userId: string,
  siteId: string
): Promise<void> {
  await deleteDoc(siteDoc(userId, siteId));
}

export async function renameSiteDoc(
  userId: string,
  siteId: string,
  newName: string
): Promise<void> {
  await updateDoc(siteDoc(userId, siteId), {
    name: newName,
    updatedAt: Date.now(),
  });
}

export async function migrateSitesToFirestore(
  userId: string,
  localSites: Record<string, any>
): Promise<void> {
  const entries = Object.entries(localSites);
  for (const [name, siteData] of entries) {
    const data = { ...siteData, name };
    await addDoc(sitesCollection(userId), data).then((ref) =>
      updateDoc(ref, { siteId: ref.id })
    );
  }
}

// Expose to global scope for inline scripts
(window as any).__firestore = {
  getAllSites,
  saveSite,
  deleteSite,
  renameSiteDoc,
  migrateSitesToFirestore,
};
