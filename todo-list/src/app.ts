import Fastify from 'fastify';
import firstRoute from './our-first-route'

const fastify = Fastify({ logger: true });

fastify.register(firstRoute)

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host:'0.0.0.0' });
    console.log('Server listening on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();