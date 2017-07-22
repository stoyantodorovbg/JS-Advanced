/**
 * Created by Stoyan on 8.7.2017 г..
 */
function getReadyForWork(worker) {
    if (worker.handsShaking == true) {
        worker.bloodAlcoholLevel += worker.weight * worker.experience * 0.1;
        worker.handsShaking = false
    }

    return worker;

}

console.log(getReadyForWork({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
));
