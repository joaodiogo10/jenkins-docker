import Fastify from 'fastify';
import todoRoutes from './routes/todoRoutes'

const fastify = Fastify({ logger: true });

fastify.register(todoRoutes, { prefix:  '/todos' });


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