-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: gbank
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bank_accounts`
--

DROP TABLE IF EXISTS `bank_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bank_accounts` (
  `account_num` varchar(20) NOT NULL,
  `card_num` varchar(15) DEFAULT NULL,
  `owner_id` varchar(20) DEFAULT NULL,
  `method_id` int DEFAULT NULL,
  `exp` date DEFAULT NULL,
  `balance` double DEFAULT '0',
  PRIMARY KEY (`account_num`),
  KEY `account_method_idx` (`method_id`),
  KEY `account_client_idx` (`owner_id`),
  CONSTRAINT `account_client` FOREIGN KEY (`owner_id`) REFERENCES `clients_info` (`id`),
  CONSTRAINT `account_method` FOREIGN KEY (`method_id`) REFERENCES `payment_methods` (`method_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank_accounts`
--

LOCK TABLES `bank_accounts` WRITE;
/*!40000 ALTER TABLE `bank_accounts` DISABLE KEYS */;
INSERT INTO `bank_accounts` VALUES ('55566677788','9988776666','271222123',1,'2027-07-01',1000000000),('77722299991','6652525252','123456789',2,'2033-08-01',6666666666);
/*!40000 ALTER TABLE `bank_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients_info`
--

DROP TABLE IF EXISTS `clients_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients_info` (
  `id` varchar(20) NOT NULL,
  `client_name` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone_num` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `psword` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients_info`
--

LOCK TABLES `clients_info` WRITE;
/*!40000 ALTER TABLE `clients_info` DISABLE KEYS */;
INSERT INTO `clients_info` VALUES ('123456789','Eden Truong','49 Mac Dinh Chi','0987654321','clag@gmail.com','$2b$10$nVLgBjcfRiF5ZRJDdh5O4ui5SWM.35MHI9TtyrO1.TPlW6iayuSkq'),('271222123','Chau Nguyen','27 Nguyen Van Cu','23188734891','chau@gmail.com','$2b$10$PcCqQ9t/Q0GWcE15z6zv7.e248gebNZoptqTd2XHWMDuNnF/SEXIS');
/*!40000 ALTER TABLE `clients_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(100) DEFAULT NULL,
  `lat` decimal(10,0) DEFAULT NULL,
  `lng` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Ben Thanh Market',11,107),(2,'Tocotoco Bubble Tea',11,107),(3,'GeoComply',11,107),(4,'Nha tho Duc Ba',11,107);
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_methods` (
  `method_id` int NOT NULL AUTO_INCREMENT,
  `method_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
INSERT INTO `payment_methods` VALUES (1,'Credit Card'),(2,'Debit Card'),(3,'Mobile Payment'),(4,'e-Wallet');
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provinces_cities`
--

DROP TABLE IF EXISTS `provinces_cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provinces_cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pc_name` varchar(45) DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `long` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provinces_cities`
--

LOCK TABLES `provinces_cities` WRITE;
/*!40000 ALTER TABLE `provinces_cities` DISABLE KEYS */;
INSERT INTO `provinces_cities` VALUES (1,'Ho Chi Minh',10.8167,106.633),(2,'Binh Duong',11.3254,106.477),(3,'Ben Tre',10.2434,106.376);
/*!40000 ALTER TABLE `provinces_cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account_num` varchar(20) DEFAULT NULL,
  `des` longtext,
  `time` datetime DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `location_id` int DEFAULT NULL,
  `money_in` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `transaction_account_idx` (`account_num`),
  KEY `transaction_location_idx` (`location_id`),
  CONSTRAINT `transaction_account` FOREIGN KEY (`account_num`) REFERENCES `bank_accounts` (`account_num`),
  CONSTRAINT `transaction_location` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,'55566677788','Grab 123123 VN','2022-08-14 00:00:00',50000,2,0),(2,'55566677788','CHUYEN TIEN NHA','2022-07-31 00:00:00',4000000,3,0),(3,'55566677788','NAP TIEN DIEN THOAI','2022-09-25 00:00:00',100000,2,0),(4,'55566677788','TRA TIEN DIEN','2022-06-29 00:00:00',650000,1,0);
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-29 21:53:11
