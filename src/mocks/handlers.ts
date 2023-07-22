import { rest } from 'msw';
import { getIceBreakersMSW, getIcebreakersIndexMock, getUsersIndexMock, getUsersShowMock } from '../client/apis/generated';

export const handlers = [
  rest.get('/api/p/users', (_req, res, ctx) => {
    return res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json(getUsersIndexMock())
    );
  }),
  rest.get('/api/p/users/:id', (req, res, ctx) => {
    console.info(req)
    return res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json(getUsersShowMock(req.params.id))
    );
  })
]
