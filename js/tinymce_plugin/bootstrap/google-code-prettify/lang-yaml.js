<<<<<<< HEAD
var a=null;
PR.registerLangHandler(PR.createSimpleLexer([["pun",/^[:>?|]+/,a,":|>?"],["dec",/^%(?:YAML|TAG)[^\n\r#]+/,a,"%"],["typ",/^&\S+/,a,"&"],["typ",/^!\S*/,a,"!"],["str",/^"(?:[^"\\]|\\.)*(?:"|$)/,a,'"'],["str",/^'(?:[^']|'')*(?:'|$)/,a,"'"],["com",/^#[^\n\r]*/,a,"#"],["pln",/^\s+/,a," \t\r\n"]],[["dec",/^(?:---|\.\.\.)(?:[\n\r]|$)/],["pun",/^-/],["kwd",/^\w+:[\n\r ]/],["pln",/^\w+/]]),["yaml","yml"]);
=======
var a=null;
PR.registerLangHandler(PR.createSimpleLexer([["pun",/^[:>?|]+/,a,":|>?"],["dec",/^%(?:YAML|TAG)[^\n\r#]+/,a,"%"],["typ",/^&\S+/,a,"&"],["typ",/^!\S*/,a,"!"],["str",/^"(?:[^"\\]|\\.)*(?:"|$)/,a,'"'],["str",/^'(?:[^']|'')*(?:'|$)/,a,"'"],["com",/^#[^\n\r]*/,a,"#"],["pln",/^\s+/,a," \t\r\n"]],[["dec",/^(?:---|\.\.\.)(?:[\n\r]|$)/],["pun",/^-/],["kwd",/^\w+:[\n\r ]/],["pln",/^\w+/]]),["yaml","yml"]);
>>>>>>> 6de1edbfff1a6c6b67eaaada20d9102f6d002303
