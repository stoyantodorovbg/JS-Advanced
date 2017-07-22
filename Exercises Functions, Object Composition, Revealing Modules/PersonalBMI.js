/**
 * Created by Stoyan on 3.7.2017 г..
 */
function printInfo(name, age, weight, height) {

    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: findBmi(weight, height),
        status: findStatus(findBmi(weight, height))
    };

    if (obj.status === 'obese') {
        obj.recommendation = 'admission required';
    }

    return obj;

    function findBmi (weight, height) {
        return Math.round(weight / Math.pow((height / 100), 2));
    }

    function findStatus(bmi) {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25 && bmi >= 18.5) {
            return 'normal';
        } else if (bmi < 30 && bmi >= 25) {
            return 'overweight';
        } else if (bmi >= 30) {
            return 'obese';
        }

    }
}

console.log(printInfo('Peter', 29, 75, 182));
