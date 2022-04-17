const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What is your Password?", function(input){
	tokens = input.split(' ');
	
	password = tokens[0];

    if (password.length >= 10){
        console.log("   _____ _                           _____                                    _ ");
        console.log("  / ____| |                         |  __ `                                  | |");
        console.log(" | (___ | |_ _ __ ___  _ __   __ _  | |__) |_ _ ___ _____      _____  _ __ __| |");
        console.log("  `___ `| __| `__/ _ `| `_ ` / _` | |  ___/ _` / __/ __` ' /' / / _ `| '__/ _` |");
        console.log("  ____) | |_| | | (_) | | | | (_| | | |  | (_| '__ `__ `` V  V / (_) | | | (_| |");
        console.log(" |_____/ '__|_|  '___/|_| |_|`__, | |_|   `__,_/___/___/ `_/'_/ '___/|_|  `__,_|");
        console.log("                              __/ |                                             ");
        console.log("                             |___/                                              ");

        
    } else {
        console.log("   _____ _                              _____                                    _ \n" +
        "  / ____| |                            |  __ `                                  | |\n" +
        " | |    | |__   __ _ _ __   __ _  ___  | |__) |_ _ ___ _____      _____  _ __ __| |\n" +
        " | |    | '_ ` / _` | '_ ` / _` |/ _ ` |  ___/ _` / __/ __` ` /` / / _ `| '__/ _` |\n" +
        " | |____| | | | (_| | | | | (_| |  __/ | |  | (_| `__ `__ `` V  V / (_) | | | (_| |\n" +
        "  `_____|_| |_|`__,_|_| |_|`__, |'___| |_|   `__,_|___/___/ `_/`_/ '___/|_|  `__,_|\n" +
        "                            __/ |                                                  \n" +
        "                           |___/                                                   \n");
    }
    reader.close()

});