// 枚举
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["PINK"] = 1] = "PINK";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
function isTeacher(people) {
    people.talk(); //不报错
    return false;
}
// (people as Teacher).talk()
// (<Teacher>people).talk()
