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
import {
  Frequency,
} from '../types/Habit';

type UpdateHabitData = {
  title: string;
  goal: string;
  frequency: Frequency;
  completed: boolean;
};

export const updateHabitInFirestore =
  async (
    userId: string,
    firestoreId: string,
    data: UpdateHabitData
  ) => {

    await updateDoc(
      doc(
        db,
        'users',
        userId,
        'habits',
        firestoreId
      ),
      data
    );
  };
// export const saveHabit =
// async (
//  userId: string,
//  habit: Habit
// ) => {

//  await addDoc(
//    collection(
//      db,
//      'users',
//      userId,
//      'habits'
//    ),
//    habit
//  );
// };
export const saveHabit =
    async (
    userId: string,
    habit: Habit
    ) => {

    const docRef =
        await addDoc(
        collection(
            db,
            'users',
            userId,
            'habits'
        ),
        habit
        );

    return docRef.id;
    };
export const loadHabits =
async (
 userId: string
): Promise<Habit[]> => {
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
    document => ({
      firestoreId:
        document.id,
      ...(document.data() as Omit<Habit, 'firestoreId'>),
    })
  );
};

export const completeHabitInFirestore =
//parameters
async (
  userId: string,
  firestoreId: string,
  streak: number
) => {
//pad naar gebruiker habit
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
      streak,
       lastCompletedDate:
      new Date()
        .toISOString()
        .split('T')[0],
    }
  );
};
