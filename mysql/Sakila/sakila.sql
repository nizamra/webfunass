--1. What query would you run to get all the customers inside city_id = 312? Your query should return customer first name, last name, email, and address.
select customer.first_name,customer.last_name,customer.email,address.address
from customer join address on address.address_id=customer.address_id
where address.city_id=312;


--2. What query would you run to get all comedy films? Your query should return film title, description, release year, rating, special features, and genre (category).
SELECT * FROM film 
JOIN film_category ON film.film_id = film_category.film_id 
JOIN category ON category.category_id = category.category_id
where category.name="comedy"


--3. What query would you run to get all the films joined by actor_id=5? Your query should return the actor id, actor name, film title, description, and release year.
SELECT actor.actor_id, actor.first_name,film.title, film.description, film.release_year FROM film 
JOIN film_actor ON film.film_id = film_actor.film_id 
JOIN actor ON actor.actor_id = film_actor.actor_id
where actor.actor_id=5


--4. What query would you run to get all the customers in store_id = 1 and inside these cities (1, 42, 312 and 459)? Your query should return customer first name, last name, email, and address.
SELECTcustomer.first_name,customer.last_name,customer.email,address.address
from customer join address on address.address_id=customer.address_id
where store_id=1 and (address.city_id=1 or address.city_id=42 or address.city_id=312 or address.city_id=459);


--5. What query would you run to get all the films with a "rating = G" and "special feature = behind the scenes", joined by actor_id = 15? Your query should return the film title, description, release year, rating, and special feature. Hint: You may use LIKE function in getting the 'behind the scenes' part.
SELECT * from film
JOIN film_actor ON film.film_id = film_actor.film_id 
JOIN actor ON actor.actor_id = film_actor.actor_id
where  actor.actor_id=15 and film.rating="G" and film.special_features="behind the scenes";




--6. What query would you run to get all the actors that joined in the film_id = 369? Your query should return the film_id, title, actor_id, and actor_name.
SELECT film.film_id,film.title,actor.actor_id,actor.first_name FROM film 
JOIN film_actor ON film.film_id = film_actor.film_id 
JOIN actor ON actor.actor_id = film_actor.actor_id
where film.film_id=369;


--7. What query would you run to get all drama films with a rental rate of 2.99? Your query should return film title, description, release year, rating, special features, and genre (category).
SELECT film.title,film.description,film.release_year,film.rating,film.special_features,category.name as genere FROM film 
JOIN film_category ON film.film_id = film_category.film_id 
JOIN category ON category.category_id = category.category_id
where category.name="Drama" and rental_rate=2.99;




--8. What query would you run to get all the action films which are joined by SANDRA KILMER? Your query should return film title, description, release year, rating, special features, genre (category), and actor's first name and last name.
SELECT film.title,film.description,film.release_year,film.rating,film.special_features,category.name,actor.first_name,actor.last_name FROM film 
JOIN film_category ON film.film_id = film_category.film_id 
JOIN category ON category.category_id = category.category_id
JOIN film_actor ON film.film_id = film_actor.film_id 
JOIN actor ON actor.actor_id = film_actor.actor_id
where actor.first_name="SANDRA" and actor.last_name="KILMER" and category.name="action";








