CREATE TABLE custormer (
  surr_id int primary key,
  custormer_id varchar default 'N/A' NOT NULL,
  customer_name varchar default 'N/A' NOT NULL,
  segment varchar default 'N/A' NOT NULL,
  age int default '0' NOT NULL,
  city varchar default 'N/A' NOT NULL,
  state_name varchar default 'N/A' NOT NULL,
  country varchar default 'N/A' NOT NULL,
  postal_code varchar default 'N/A' NOT NULL,
  region varchar default 'N/A' NOT NULL,
);
