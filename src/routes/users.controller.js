import express from "express";
import authTokenMiddleware from "../middleware/authToken.middleware.js";
import standardResponseMiddleware from "../middleware/standardResponse.middleware.js";

const router = express.Router();

router.use(authTokenMiddleware);
router.use(standardResponseMiddleware);

router.get('/', (req, res) => {
  const { search, age, name } = req.query;
  console.log('QUERY PARAMS: ', { search, age, name })
  res.send({ id: 1, name: 'Joe', email: 'joe@mail.com' });
});

router.post('/', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send(data);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.headers['user-agent']);
  res.send({ id });
});

export default router;

// CRUD: Create, Read, Update, Delete

// POST /users -> 201 Create -> User Object
// GET /users -> 200 Ok -> Users Array
// GET /users/:id -> 200 Ok -> User Object
// PUT /users/:id -> 200 Ok -> User Object
// DELETE /users/:id -> 204 Empty -> Empty