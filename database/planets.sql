
CREATE SCHEMA IF NOT EXISTS solar_system;
USE solar_system;

create table planets (
	id INT NOT NULL AUTO_INCREMENT,
	Planet VARCHAR(50) NOT NULL,
	Description TEXT NOT NULL,
	Tempeture INT NOT NULL,
	Rotation FLOAT NOT NULL,
	Revolution FLOAT NOT NULL,
	Radius FLOAT NOT NULL,
	PRIMARY KEY (id)
);

insert into planets ( Planet, Description, Tempeture, Rotation, Revolution, Radius ) 
values 
('Mercury', 'The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days. ', 200, 58.6, 87.97, 2439.7 ),
('Venus', 'Spinning in the opposite direction to most planets, Venus is the hottest planet, and one of the brightest objects in the sky. ', 471, 243, 224.7, 6051.8 ),
('Earth', 'The place we call home, Earth is the third rock from the sun and the only planet with known life on it - and lots of it too!', 16, 0.99, 365.26, 6378.1 ),
('Mars', 'The red planet is dusty, cold world with a thin atmosphere and is home to four NASA robots. ', -28, 1.03, 1.88, 3396.2 ),
('Jupiter', 'Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth.', -108, 0.41, 11.86, 71492.8 ),
('Saturn', 'The most recognizable planet with a system of icy rings, Saturn is a very unique and interesting planet ', -138, 0.45,29.46, 60268 ),
('Uranus', 'Uranus has a very unique rotation--it spins on its side at an almost 90-degree angle, unlike other planets. ', -195, 0.72, 84.01, 25559 ),
('Neptune', 'Neptune is now the most distant planet and is a cold and dark world nearly 3 billion miles from the Sun. ', -201, 0.67, 164.79, 24764 );



---------------------------------------
Planet 		Rotation Period Revolution Period

Mercury 	58.6 days 			87.97 days
Venus 		243 days 			224.7 days
Earth 		0.99 days			365.26 days
Mars 		1.03 days 			1.88 years
Jupiter 	0.41 days 			11.86 years
Saturn 		0.45 days 			29.46 years
Uranus 		0.72 days 			84.01 years
Neptune 	0.67 days 			164.79 years
Pluto 		6.39 days 			248.59 years

-----------------------------------------------


Mercury  200 °C
Venus    471 °C
Earth 	 16 °C
Mars 	-28 °C
Jupiter -108 °C
Saturn 	-138 °C
Uranus 	-195 °C
Neptune -201 °C
Pluto 	-233 °C


-----------------------------------------------

	Mercury 	2439.7
	Venus 		6051.8
 	Earth 		6378.1
 	Mars 		3396.2
 	Jupiter 	71492
 	Saturn 		60268
 	Uranus 		25559
 	Neptune 	24764
 	Pluto 		1195

('Pluto', 'Pluto will always be the ninth planet to us! Smaller than Earth`s moon, Pluto was a planet up until 2006 and has five of its own moons! ', -233, 6.39, 248.59, 1195 );