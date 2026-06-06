 import {
 collection,
 addDoc,
 getDocs,
 doc,
 updateDoc,
} from 'firebase/firestore';

import { db }
from '../Firebase';

import { Habit }
from '../types/Habit';

export const saveHabit =
async (
 userId: string,
 habit: Habit
) => {

 await addDoc(
   collection(
     db,
     'users',
     userId,
     'habits'
   ),
   habit
 );
};

export const loadHabits =
async (
 userId: string
) => {
//inshallah
 const snapshot =
   await getDocs(
     collection(
       db,
       'users',
       userId,
       'habits'
     )
   );

 return snapshot.docs.map(
   doc => ({
     firestoreId: doc.id,
     ...doc.data(),
   })
 );
};
export const completeHabitInFirestore =
async (
  userId: string,
  firestoreId: string
) => {

  await updateDoc(
    doc(
      db,
      'users',
      userId,
      'habits',
      firestoreId
    ),
    {
      completed: true,
      progress: 100,
    }
  );
};
