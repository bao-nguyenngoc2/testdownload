function filterVideos(videosJSON, logsJSON) {

    var videos = JSON.parse(videosJSON);
    var logs = JSON.parse(logsJSON);

    // 1. Lấy danh sách category từ logs
    var categorySet = new Set();

    logs.forEach(function(log) {
        if (log.category) {
            categorySet.add(log.category);
        }
    });

    // 2. Filter videos theo category
    var result = videos.filter(function(video) {
        return categorySet.has(video.category);
    });

    return JSON.stringify(result);
}
    
function filterLogs(logsJSON, minWatchTime) {

    var logs = JSON.parse(logsJSON);

    var countMap = {};

    logs.forEach(function(log) {
        if (log.watchTime > minWatchTime) {
            countMap[log.category] = (countMap[log.category] || 0) + 1;
        }
    });

    var result = [];

    for (var category in countMap) {
        if (countMap[category] > 3) {
            result.push({
                category: category,
                count: countMap[category]
            });
        }
    }

    return JSON.stringify(result);
}

function sum(a, b) {
   return a + b;
}

function multiply(a, b) {
   return a * b;
}

var MathUtils = {
    sum: function(a, b) {
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};

function multiply1(a, b) {
   return a * b;
}

function multiply2(a, b) {
   return a * b;
}

function multiply3(a, b) {
   return a * b;
}
