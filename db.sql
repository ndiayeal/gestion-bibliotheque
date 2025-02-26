CREATE DATABASE bibliotheque;
USE bibliotheque;

--table auteur
CREATE TABLE auteur (
		id INT PRIMARY KEY AUTO_INCREMENT,
		nom VARCHAR(100) NOT NULL,
		nationalite VARCHAR(100),
		date_naissance DATE,
		adresse VARCHAR(255)
		biographie TEXT
);

--table categorie
CREATE TABLE categorie (
		id INT PRIMARY KEY AUTO_INCREMENT,
		nom VARCHAR(100) NOT NULL,
		description TEXT
);

-- table livre
CREATE TABLE livre (
		id INT PRIMARY KEY AUTO_INCREMENT,
		titre VARCHAR(255) NOT NULL,
		description TEXT,
		date_publication DATE,
		nombre_pages INT,
		auteur_id INT,
		categorie_id INT,
		FOREIGN KEY (auteur_id) REFERENCES auteur(id),
		FOREIGN KEY (categorie_id) REFERENCES categorie(id)
);