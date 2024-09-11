import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ChecklistItem } from 'src/app/shared/interfaces/checklist-item';

import {
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { FirestoreUtils } from '../../../../shared/firestore-utils';

import { Omit2 } from 'src/app/shared/type.utils';

type Set = {
  userId: string;
  checklistId: ChecklistItem['id'];
  data: Omit2<ChecklistItem, 'id' | 'checklistId' | 'checked'>;
};

type Updates = {
  userId: string;
  id: ChecklistItem['id'];
  data: Partial<Omit2<ChecklistItem, 'id' | 'checklistId'>>;
};

@Injectable({
  providedIn: 'root',
})
export class ChecklistItemDataService {
  firestore = inject(Firestore);
  firestoreUtils = inject(FirestoreUtils);

  // #region \\\\\\ for jasmine tests //////
  // These are here so Jasmine can spyOn them.
  // https://jasmine.github.io/tutorials/module_mocking#angular
  collectionPath(userId: string) {
    //
    const path = `/AngularFireUsers/${userId}/ChecklistItems`;

    return path;
  }
  // #endregion

  private getfirestoreDocCollectionRef(userId: string) {
    const collectionReference = collection(
      this.firestore,
      this.collectionPath(userId)
    ) as CollectionReference<ChecklistItem>;

    return collectionReference;
  }

  public getData$(userId: string): Observable<ChecklistItem[]> {
    //
    const firestoreDocQuery = query(this.getfirestoreDocCollectionRef(userId));

    return collectionData(firestoreDocQuery);
  }

  public async set(itemToSet: Set) {
    //
    const item: ChecklistItem = {
      ...itemToSet.data,
      id: this.createId(),
      checklistId: itemToSet.checklistId,
      checked: false,
    };

    await setDoc(
      doc(this.getfirestoreDocCollectionRef(itemToSet.userId), item.id),
      item
    );

    return item.id;
  }

  public update(update: Updates) {
    //
    void updateDoc(
      doc(this.getfirestoreDocCollectionRef(update.userId), update.id),
      update.data
    );
  }

  public async remove(id: string, userId: string): Promise<void> {
    //
    const documentReference = doc(
      this.getfirestoreDocCollectionRef(userId),
      id
    );
    await deleteDoc(documentReference);
  }

  public async removeItemsForChecklist(
    checklistId: string,
    userId: string
  ): Promise<void> {
    //
    const q = query(
      this.getfirestoreDocCollectionRef(userId),
      where('checklistId', '==', checklistId)
    );

    const querySnapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    querySnapshot.forEach(async (doc) => {
      console.log(doc.id, ' => ', doc.data());
      await this.remove(doc.id, userId);
    });
  }

  private createId(): string {
    //
    const result = this.firestoreUtils.createId();

    return result;
  }
}
