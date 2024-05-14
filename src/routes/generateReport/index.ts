import { FastifyPluginAsync } from "fastify";

const generateReport: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.route({
    method: "POST",
    url: "/",
    schema: {},
    handler: async (request, reply) => {
      return { hello: "world" };
    },
  });
};

export default generateReport;
