function echo(string) {
    console.log(string.toUpperCase() + "..." + string + "..." + string.toLowerCase());
    // return (`${highEcho} ...${string}... ${lowEcho}`);
  }

  echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
  echo("hey"); // => prints "HEY ... hey ... hey"
  echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
