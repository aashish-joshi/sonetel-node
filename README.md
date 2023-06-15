# Sonetel-Node

Sonetel-Node is a NodeJS library which provides a wrapper for using Sonetel's REST API's. It is written in TypeScript and can be installed using NPM.

This library supports the following functions:

1. Generate tokens for API authentication
2. View and update account information
3. Manage phone numbers, user accounts, voice apps and call recordings
4. Make phone calls
5. View usage records
6. Use the Text-to-speech service
7. Personalize suggested answers provided by our AI


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
await sonetel.generateToken();
await sonetel.getAccount();
await sonetel.listUsers();
```

## Documentation

For detailed API documentation, please visit the [Sonetel-Node documentation website](https://your-documentation-website.com).

## Contributing

If you want to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This code is licensed under the [MIT License](LICENSE).