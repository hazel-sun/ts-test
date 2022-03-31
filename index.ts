// 枚举
enum Color {
  RED,
  PINK,
  BLUE,
}
const enum Color1 {
  RED,
  PINK,
  BLUE,
}
// 类型断言
interface Student {
  name: string;
  speak(): string;
}
interface Teacher {
  name: string;
  talk(): string;
}
function isTeacher(people: Student | Teacher) {
  (people as Teacher).talk() //不报错
  return false;
}
// (people as Teacher).talk()
// (<Teacher>people).talk()