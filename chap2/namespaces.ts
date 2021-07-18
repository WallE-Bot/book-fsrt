namespace A {
  class FirstClass {}
}

namespace B {
  class SecondClass {}
  // this will throw, outside namespace
  const test = new FirstClass();
}
