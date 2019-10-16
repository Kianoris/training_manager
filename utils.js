import { AsyncStorage } from 'react-native';

const getNewKey = () => {
    return Math.random().toString(36).substring(2, 15) + Date.now().toString(36).substring(2, 15);
};

export const getTrainings = async () => {
    try {
        return JSON.parse((await AsyncStorage.getItem('trainings')) || '[]');
    } catch (e) {
        console.log('Error while attempting to get trainings', e);
    }
};

export const addNewTraining = async () => {
    try {
        const trainings = await getTrainings();
        const id = getNewKey();
        trainings.push({id});
        await AsyncStorage.setItem(`trainings`, JSON.stringify(trainings));
        return id;
    } catch (e) {
        console.log('Error while attempting to add new training', e);
    }
};

export const saveTrainings = async (data) => {
    try {
        const trainings = await getTrainings();

        trainings.forEach((training, i) => {
            if (!!data[training.id]) {
                trainings.splice(i, 1, {...trainings[i], name: data[training.id].name.trim()});
            }
        });

        await AsyncStorage.setItem(`trainings`, JSON.stringify(trainings));
        return trainings;
    } catch (e) {
        console.log('Error while attempting to save trainings', e);
        return [];
    }
};

export const deleteTraining = async (id) => {
    try {
        const trainings = await getTrainings();
        trainings.forEach((training, i) => {
            if (training.id === id) {
                trainings.splice(i, 1);
            }
        });
        await AsyncStorage.setItem(`trainings`, JSON.stringify(trainings));
        return trainings;
    } catch (e) {
        console.log('Error while attempting to delete training', e);
        return [];
    }
};

export const getExercises = async (trainingId) => {
    try {
        const trainings = await getTrainings();
        return (trainings.find(training => training.id === trainingId) || {exercises: []}).exercises || [];
    } catch (e) {
        console.log('Error while attempting to get exercises', e);
    }
};

export const addNewExercise = async (trainingId) => {
    try {
        const trainings = await getTrainings();
        const currentTraining = trainings.find(training => training.id === trainingId) || {};
        const id = getNewKey();
        const defaultSet = {
            repeats: '0',
            weight: '0',
            execute: '0',
            rest: '0'
        };
        const exercise = {
            id,
            name: 'New Ex',
            sets: [defaultSet]
        };
        if (!!currentTraining.exercises) {
            currentTraining.exercises.push(exercise);
        } else {
            currentTraining.exercises = [exercise];
        }

        trainings.forEach((training, i) => {
            if (trainingId === training.id) {
                trainings.splice(i, 1, currentTraining);
            }
        });

        await AsyncStorage.setItem(`trainings`, JSON.stringify(trainings));
        return exercise;
    } catch (e) {
        console.log('Error while attempting to add new exercise', e);
    }
};

export const deleteExercise = async (trainingId, exerciseId) => {
    try {
        const trainings = await getTrainings();
        const currentTraining = trainings.find(training => training.id === trainingId) || {};
        currentTraining.exercises.forEach((ex, i) => {
            if (ex.id === exerciseId) {
                currentTraining.exercises.splice(i, 1);
            }
        });

        await AsyncStorage.setItem(`trainings`, JSON.stringify(trainings));
        return currentTraining.exercises;
    } catch (e) {
        console.log('Error while attempting to delete exercise', e);
    }
};

export const saveExercises = async (trainingId, data) => {
    try {
        const trainings = await getTrainings();
        const currentTraining = trainings.find(training => training.id === trainingId) || {};

        currentTraining.exercises.forEach((ex, i) => {
            if (!!data[ex.id]) {
                currentTraining.exercises.splice(
                    i, 1, {
                        ...currentTraining.exercises[i],
                        ...data[ex.id]
                    }
                );
            }
        });

        await AsyncStorage.setItem(`trainings`, JSON.stringify(trainings));
        return currentTraining.exercises;
    } catch (e) {
        console.log('Error while attempting to save exercises', e);
    }
};

export const addNewSet = async (trainingId, exId) => {
    try {
        const trainings = await getTrainings();
        const currentTraining = trainings.find(training => training.id === trainingId) || {};
        const defaultSet = {
            repeats: '0',
            weight: '0',
            execute: '0',
            rest: '0'
        };

        currentTraining.exercises.forEach((ex, i) => {
            if (ex.id === exId) {
                if (!!currentTraining.exercises[i].sets) {
                    currentTraining.exercises[i].sets.push(defaultSet);
                } else {
                    currentTraining.exercises[i].sets = [defaultSet];
                }
            }
        });

        await AsyncStorage.setItem(`trainings`, JSON.stringify(trainings));
        return currentTraining.exercises;
    } catch (e) {
        console.log('Error while attempting to add new set', e);
    }
};

export const deleteSet = async (trainingId, exId, setIndex) => {
    try {
        const trainings = await getTrainings();
        const currentTraining = trainings.find(training => training.id === trainingId) || {};

        currentTraining.exercises.forEach((ex, i) => {
            if (ex.id === exId) {
                currentTraining.exercises[i].sets.splice(setIndex, 1);
            }
        });

        await AsyncStorage.setItem(`trainings`, JSON.stringify(trainings));
        return currentTraining.exercises;
    } catch (e) {
        console.log('Error while attempting to delete set', e);
    }
};
