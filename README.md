# Sonetel-Node

Sonetel-Node is a NodeJS library which provides a wrapper for using Sonetel's REST API's. It is written in TypeScript and can be installed using NPM. This library supports the following endpoints:

1. Generate JWT - /SonetelAuth/beta/oauth/token
2. View and update account information - /account/{accountId}
3. View and manage user accounts - /account/{accountId}/user

## Installation

You can install this library using NPM by running the following commands:

```shell
npm i sonetel-node
```

## Usage

First, you need to import `Sonetel` class from the library:

```ts
import { Sonetel } from "sonetel-node";
```

Then, you need to initialize an instance:

```ts
const sonetel = new Sonetel({
  username: "your-email-address",
  password: "your-sonetel-password",
});
```

Now, you can use any endpoint that is supported by this library:

```ts
await sonetel.generateJWT();
await sonetel.getAccountInfo();
await sonetel.manageUserAccounts();
```

## Documentation

For detailed API documentation, please visit the [Sonetel-Node documentation website](https://your-documentation-website.com).

## Contributing

If you want to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This code is licensed under the [MIT License](LICENSE).