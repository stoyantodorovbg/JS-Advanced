/**
 * Created by Stoyan on 8.7.2017 г..
 */
function configurate(car) {
    let engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    let carriages = [
            { type: 'hatchback', color: car.color },
            { type: 'coupe', color: car.color }

    ];

    let result = {
        model: car.model,
        engine: choiceEngine(car.power),
        carriage: choiceCarriage(car.carriage),
        wheels: choiceWheels(car.wheelsize)
    };

    return result;

    function choiceEngine(power) {
        for (let engine of engines) {
            if (engine.power >= power) {
                return engine;
            }
        }
    }

    function choiceCarriage(carriage) {
        for (let item of carriages) {
            if (item.type == carriage) {
                return item;
            }
        }
    }

    function choiceWheels(size) {
        if (size % 2 == 0) {
            size--;
        }
        return [size, size, size, size];
    }
}

console.log(configurate(
    {
        model: 'Ferrari',
        power: 200,
        color: 'red',
        carriage: 'coupe',
        wheelsize: 21
    }
));