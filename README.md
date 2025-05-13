# efty-pay-nodejs-sdk
The Efty Pay Node.js SDK for Efty Pay; Efty's online transaction service designed to ensure secure and transparent buying and selling of domain names. It acts as a trusted intermediary to safeguard both the buyer and seller's interests during the transaction process.

The Efty Pay production URLs:

- SDK use (over gRPC): *api.eftypay.com:443*
- API use (over REST): *https://api.eftypay.com*

## Table of Contents

- [Efty Pay Node.js SDK](#efty-pay-nodejs-sdk)
- [Requirements](#requirements)
- [Getting started](#getting-started)
  - [Install the SDK](#install-the-sdk)
  - [Authentication](#authentication)
  - [Quickstarts](#quickstarts)
  - [Troubleshooting](#troubleshooting-support)
- [API resource documentation](#api-resource-documentation)
- [License](#license)

## Requirements
- Node.js 14 or higher
- npm or yarn
- Efty Pay API access credentials; please fill out the [access request form](https://forms.gle/fk85K45eThgepi1Q8) to obtain early access.

## Getting started

### Install the SDK

You can include the SDK from our public GitHub repository by adding it to your `package.json`.

Run the following command to install the SDK:
```bash
npm install git+https://github.com/eftybv/efty-pay-nodejs-sdk.git#v1.0.0
```
Or, if you are using yarn:
```bash
yarn add git+https://github.com/eftybv/efty-pay-nodejs-sdk.git#v1.0.0
```

### Authentication
The methods in the SDK require you to pass an auth token that contains a JWT. Below is an example of how to generate the token and pass it into the request.

Token generation:
```js
const jwt = require('jsonwebtoken');

function generateToken() {
    const apiKey = "YOUR_API_KEY";
    const apiSecret = "YOUR_API_SECRET";
    const integratorId = "YOUR_INTEGRATOR_ID";

    const payload = {
        iat: Math.floor(Date.now() / 1000),
        sub: apiKey,
        exp: Math.floor(Date.now() / 1000) + 600,
        type: 2,
        iid: integratorId
    };

    return jwt.sign(payload, apiSecret, { algorithm: 'HS256' });
}
```

Injecting the token in the gRPC client:
```js
// examples/createTransaction.js
const grpc = require('@grpc/grpc-js');
const { generateToken } = require('./helpers');
const { Id, TransactionsClient } = require('efty-pay-nodejs-sdk');
require('dotenv').config();

console.log('Getting transaction...');

// Create gRPC client
const client = new TransactionsClient(
        process.env.EFTY_PAY_API_URL,
        grpc.credentials.createSsl()
);

// Prepare metadata with JWT token
const metadata = new grpc.Metadata();
metadata.add('Authorization', generateToken());

console.log(metadata);

// Create an Id object
const transactionId = new Id();
transactionId.setId('1IOefXThiDx5OV6YGAwrs8');

// Call getTransaction
client.getTransactionById(transactionId, metadata, (err, response) => {
  if (err) {
    console.error('Error fetching transaction:', err);
  } else {
    console.log('Transaction details:', response.toObject());
  }
});
```

## Quickstarts
You can now use the SDK in your project. For our quickstart and examples, please visit our [Efty Pay Node.js Quickstart repository](https://github.com/eftybv/efty-pay-nodejs-quickstart).

## Troubleshooting & Support
- If you encounter any issues, ensure that the package name is correctly specified.
- You can also specify a version constraint (e.g., `^1.0` or `main`) if you need a specific version of the SDK. It's strongly recommended to always use the latest version.
- If you run into any other issues, contact us at [api@efty.com](api@efty.com).

## API resource documentation
The Efty Pay API resource documentation can be found at [https://docs.eftypay.com](https://docs.eftypay.com)

## License
This project is licensed under the MIT License. See the LICENSE file for details.