export default function($scope) {
  $scope.foo = "foo";
  $scope.toggle = () => {
    $scope.foo = $scope.foo === "foo" ? "bar" : "foo";
  };
};
