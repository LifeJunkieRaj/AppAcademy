let bar = function() {
    console.log("Ramen");
  };

  let foo = function(cb) {
    console.log("Gazpacho");
    cb();
    console.log("Egusi");
  };

  console.log("Bisque");
  foo(bar);
  console.log("Pho");
