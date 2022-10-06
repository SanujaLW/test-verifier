const key = require("./key.json")
const credential = require("./credential.json")
const credentialCreate = require("./credential-create.json")
const { documentLoader } = require("./documentLoader")

const presentation = require("./presentation")
const presentationCreate = require("./presentation-create.json")

const verifiableCredential = require("./verifiable-credential.json")
const frame = require("./frame.json")

const key1 = require("./key-1.json")
const credential1 = require("./credential-1.json")

module.exports = {
  key,
  credential,
  presentation,
  credentialCreate,
  presentationCreate,
  verifiableCredential,
  frame,
  key1,
  credential1,
  documentLoader
};
