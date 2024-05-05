CREATE TABLE Billett(
                        id INT AUTO_INCREMENT,
                        epost VARCHAR(255) NOT NULL,
                        telefonnr VARCHAR(255) NOT NULL,
                        fornavn VARCHAR(255) NOT NULL,
                        etternavn VARCHAR(255) NOT NULL,
                        antall VARCHAR(255) NOT NULL,
                        film VARCHAR(255) NOT NULL,
                        primary key (id)
);