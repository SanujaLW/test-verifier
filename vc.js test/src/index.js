const fixtures = require( "./__fixtures__");

const jsonld = require('jsonld');

const jsonldSig = require('jsonld-signatures');

const mattrbls = require("@mattrglobal/bls12381-key-pair");

const mattrblsSig = require("@mattrglobal/jsonld-signatures-bbs");

const ed25519Sig = require('@transmute/ed25519-signature-2018');

const vcjs = require('@transmute/vc.js');

const Verifier = require('@diwala-internal/verifier').default;

const NRIS = require('@diwala-internal/nris').default;

const runner = async () => {
  const kms =  {
    keyCryptoPath: ''
  }
  const mongo =  {
    url: ''
  }

  const operation = new NRIS(mongo, kms);

  const suite = await operation.getPublicSignerSuiteForDid('did:key:z5TcCKfym9h8Vr6dmAgaebq4DBwxKM5Lm9pvt4E8JBqQz43HvtC3zGLrcyC3233fQz8h1T6w8kDzFepmAHA9cCYxTB2Gv3oSn5iazjj8wvYBweH8CQ5VnMoVnHS6Gqnchu5YBUnhRsUAfNymtG9CRfkC97TpbBQ6b1A2AfDvmC8tdYcLkDDA2Ehti5cY27PzG6DLGKF3P');
  
  console.log(suite)

  const verifier = new Verifier(mongo, kms);

  console.log(jsonld);

  console.log(jsonldSig);

  console.log(mattrbls);

  console.log(mattrblsSig);

  console.log(ed25519Sig);

  console.log(vcjs);

  const promises = fixtures.presentationCreate.items.map(async (vp) => {
    try {
      const result = await verifier.verifyPresentation(vp, {challenge: '123'});
      return result;
    }
    catch(err) {
      console.log(err)
    }
    return {}
  });
  
  const results = await Promise.all(promises);

  console.log(results);
}

runner();