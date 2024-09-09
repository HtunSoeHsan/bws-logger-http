# bws-logger-http

BWS Logger Module - HTTP

- create .npmrc file in root
- copy and paste this

```@htunsoehsan:registry=https://npm.pkg.github.com/
    //npm.pkg.github.com/:_authToken=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
```

- install package
  `npm install @htunsoehsan/bws-logger-http@1.0.3`

### Usage

    ```
    var { BWSLOGGER} = require("@htunsoehsan/bws-logger-http");

    //check connection
    const bws = new BWSLOGGER({
    Apikey: "$2b$10$8QIW9nUajKxBHjrSiO9i5.z69rSxjshrEtD5gRvO5VmHiVcufsDQW",

});
const access = await bws
.auth()
.then((data) => console.log(data))
.catch((err) => console.log(err));

// set log lavel
bws.config({
info: "cF8tBxxz6GLmDNaZ1uahKL",
debug: "tCuC5Ne4ZZWqCMv5A6LmwH",
error: "2UBCLr5w3rzcAA6npRSKge",
});

// log
bws.error({ errorId: "error1", data: "hsh"});

```

```
