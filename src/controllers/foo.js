export default class FooController {  
  constructor($scope) {
    $scope.foo = "foo";
    $scope.toggle = () => {
      $scope.foo = $scope.foo === "foo" ? "bar" : "foo";
    };
  };
}
