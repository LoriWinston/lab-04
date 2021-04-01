DROP TABLE IF EXISTS orders;

-- INT or INTEGER or SERIAL -> 32bit number
-- BIGINT or BIGINTEGER or BIGSERIAL -> 64bit number
CREATE TABLE orders (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  quantity INTEGER CHECK (quantity > 0)
);
CREATE TABLE todos (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    todo_item TEXT NOT NULL,
    date BIGINT NOT NULL,
    importance TEXT NOT NULL
);