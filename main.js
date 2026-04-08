//function calculate() {
//    var result1 = sum(2, 3);
//    var result2 = multiply(4, 5);
//
//    return result1 + result2;
//}

function calculate() {
    return MathUtils.sum(2, 3) + MathUtils.multiply(4, 5);
}


var ActionType = {
    FILTER_VIDEO: "FILTER_VIDEO",
    INSERT_VIDEO: "INSERT_VIDEO",
    REMOVE_VIDEO: "REMOVE_VIDEO",
    NONE: "NONE"
};

function decideAction(logsJSON) {

    var logs;

    try {
        logs = JSON.parse(logsJSON);
    } catch (e) {
        return JSON.stringify({
            action: ActionType.FILTER_VIDEO
        });
    }

    if (!logs || logs.length === 0) {
        return JSON.stringify({
            action: ActionType.FILTER_VIDEO
        });
    }

    var map = {};

    for (var i = 0; i < logs.length; i++) {

        var log = logs[i];

        if (!log || !log.category || typeof log.watchTime !== "number") continue;

        if (!map[log.category]) {
            map[log.category] = { high: 0, low: 0 };
        }

        // INSERT condition
        if (log.watchTime >= 5) {
            map[log.category].high++;

            if (map[log.category].high >= 3) {
                return JSON.stringify({
                    action: ActionType.INSERT_VIDEO,
                    category: log.category
                });
            }
        }

        // REMOVE condition
        if (log.watchTime < 3) {
            map[log.category].low++;

            if (map[log.category].low >= 3) {
                return JSON.stringify({
                    action: ActionType.REMOVE_VIDEO,
                    category: log.category
                });
            }
        }
    }

    // Default
    return JSON.stringify({
        action: ActionType.NONE
    });
}

// function calculate() {
//    var result1 = sum(2, 3);
//    var result2 = multiply(4, 5);

//    return result1 + result2;
// }

function calculate() {
   var result1 = sum(2, 3);
   var result2 = multiply(4, 5);

   return result1 + result2;
}

function calculate1() {
   var result1 = sum(2, 3);
   var result2 = multiply(4, 5);

   return result1 + result2;
}

function calculate2() {
   var result1 = sum(2, 3);
   var result2 = multiply(4, 5);

   return result1 + result2;
}
