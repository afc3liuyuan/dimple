// Copyright: 2014 PMSI-AlignAlytics
// License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"
// Source: /src/objects/chart/methods/addCategoryAxis.js
// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-addCategoryAxis
(function () {
    "use strict";
    dimple.Chart.prototype.addCategoryAxis = function (position, categoryFields) {
        return this.addAxis(position, categoryFields, null);
    };
}());
