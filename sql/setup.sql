DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    -- file_name text NOT NULL
    quantity INTEGER CHECK {quantity > 0}
    -- name VARCHAR(512) NOT NULL
);