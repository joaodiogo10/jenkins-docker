import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

// Define the structure of a To-Do item
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


let todos : Todo[] = [];
let idCounter = 1;

export default async function todoRoutes(fastify: FastifyInstance) {

  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    return todos;
  });


  fastify.get('/:id', async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const todo = todos.find(t => t.id === parseInt(request.params.id));
    if (!todo) {
      return reply.status(404).send({ message: 'Todo not found' });
    }
    
    return todo;
  });

  fastify.put('/:id', async (request: FastifyRequest<{ Params: { id: string }, Body: { title?: string, completed?: boolean } }>, reply: FastifyReply) => {
    const todo = todos.find(t => t.id === parseInt(request.params.id));
    if (!todo) {
      return reply.status(404).send({ message: 'Todo not found' });
    }

    const { title, completed } = request.body;
    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    return todo;
  });

  fastify.delete('/:id', async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const index = todos.findIndex(t => t.id === parseInt(request.params.id));
    if (index === -1) {
      return reply.status(404).send({ message: 'Todo not found' });
    }

    todos.splice(index, 1);
    return reply.status(204).send();
  });

  fastify.post('/', async (request: FastifyRequest<{ Body: { title: string } }>, reply: FastifyReply) => {
    const { title } = request.body;
    const newTodo: Todo = { id: idCounter++, title, completed: false };
    todos.push(newTodo);
    return reply.status(201).send(newTodo);
  });
}

