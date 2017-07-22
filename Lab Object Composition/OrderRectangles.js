/**
 * Created by Stoyan on 5.7.2017 г..
 */
function orderRects (rectData) {
    let result = [];
    for (let [width, height] of rectData) {
        let rectObj = create(width, height);
        result.push(rectObj);
    }

    result.sort((a, b) => a.compareTo(b));

    return result;

    function create(width, height) {

        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function(other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };

        return rect;
    }
}

console.log(orderRects([[10,5], [3,20], [5,12]]));
