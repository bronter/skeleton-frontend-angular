export default class FooController {
  constructor($scope) {
    this.scope = $scope;
    $scope.foo = "foo";
    $scope.toggle = this.toggle.bind(this);
  }

  toggle() {
    const foo = this.scope.foo;
    this.scope.foo = foo === "foo" ? "bar" : "foo";
  }
};
