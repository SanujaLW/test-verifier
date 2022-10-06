const { contexts } = require("./contexts")
const controller = ("./controller")

const contextResolver = async (iri) => {
  if (contexts[iri]) {
    return { document: contexts[iri] };
  }
  return undefined;
};

const documentLoader = async (iri) => {
  const context = await contextResolver(iri);
  if (context) {
    return context;
  }

  if (iri.startsWith(controller.id)) {
    return { document: controller };
  }

  const message = "Unsupported iri: " + iri;
  console.error(message);
  throw new Error(message);
};

module.exports = { documentLoader };
