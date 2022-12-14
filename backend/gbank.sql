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
INSERT INTO `bank_accounts` VALUES ('23973987411',NULL,'271222123',2,'2027-06-01',5000000000),('55566677788','9988776666','271222123',1,'2027-07-01',1000000000),('77722299991','6652525252','123456789',2,'2033-08-01',6666666666);
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
INSERT INTO `clients_info` VALUES ('123456789','Eden Truong','49 Mac Dinh Chi','0987654321','clag@gmail.com','$2b$10$nVLgBjcfRiF5ZRJDdh5O4ui5SWM.35MHI9TtyrO1.TPlW6iayuSkq'),('271222123','Chau Nguyen','27 Nguyen Van Cu','23188734891','chau@gmail.com','$2b$10$PcCqQ9t/Q0GWcE15z6zv7.e248gebNZoptqTd2XHWMDuNnF/SEXIS'),('77766612312','Nguy???n Thu Th???o Ch??u','119/3/40/4 Ho??ng Hoa Th??m, t??? 96, khu 7','0377921967','nttchau@gmail.com','$2b$10$YaPYxkkdXzFwlz0KIzH2NuUeUZXYJjMRqWPktLCOcy5dRuTh6CAwi');
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
  `location_address` varchar(100) DEFAULT NULL,
  `lat` decimal(15,7) DEFAULT NULL,
  `lng` decimal(15,7) DEFAULT NULL,
  `pc_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `locations_pc_idx` (`pc_id`),
  CONSTRAINT `locations_pc` FOREIGN KEY (`pc_id`) REFERENCES `provinces_cities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Ben Thanh Market','Le Loi Street, Ben Thanh Ward, District 1, Ho Chi Minh City',10.7731913,106.6979350,1),(2,'Tocotoco Bubble Tea','11 Su Van Hanh Street, Ward 12, District 10, HCMC',10.7709975,106.6694916,1),(3,'GeoComply','49 Mac Dinh Chi, Da Kao Ward, District 1, HCMC',10.7863269,106.6976925,1),(4,'Saigon Notre Dame Cathedral','01 Cong xa Paris Ben Nghe Ward, District 1, Ho Chi Minh City',10.7802924,106.6987164,1),(5,'Becamex Tower',' 230 Binh Duong Highway, Phu Hoa ward, Thu Dau Mot City, Binh Duong Province',10.9765900,106.6704718,2),(6,'Hung Vuong High School for The Gifted',' 593 Binh Duong Highway, Hiep Thanh ward, Thu Dau Mot City, Binh Duong Province',10.9920078,106.6576713,2),(7,'Ben Tre High School for The Gifted',' 21 Le Quy Don, Ward 2, B???n Tre City',10.2628741,106.3828230,3),(8,'Tan Son Nhat International Airport','Truong Son street, Ward 2, Tan Binh district, HCMC',10.8189919,106.6586080,1),(9,'KFC Huynh Tan Phat','719 Huynh Tan Phat, Phu Thuan ward, District 7, HCMC',10.7405416,106.7306096,1);
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
  `latitude` decimal(15,7) DEFAULT NULL,
  `longtitude` decimal(15,7) DEFAULT NULL,
  `isoCode` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provinces_cities`
--

LOCK TABLES `provinces_cities` WRITE;
/*!40000 ALTER TABLE `provinces_cities` DISABLE KEYS */;
INSERT INTO `provinces_cities` VALUES (1,'Ho Chi Minh',10.8167000,106.6333008,'VN-SG'),(2,'Binh Duong',11.3254004,106.4769974,'VN-57'),(3,'Ben Tre',10.2433996,106.3756027,'VN-50');
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
  `ts` datetime DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `location_id` int DEFAULT NULL,
  `money_in` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `transaction_account_idx` (`account_num`),
  KEY `transaction_location_idx` (`location_id`),
  CONSTRAINT `transaction_account` FOREIGN KEY (`account_num`) REFERENCES `bank_accounts` (`account_num`),
  CONSTRAINT `transaction_location` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,'55566677788','GRAB 123 VN','2022-08-14 13:00:00',50000,2,0),(2,'55566677788','HOUSING PAYMENT','2022-07-31 17:29:00',4000000,3,0),(3,'55566677788','PAYMENT OF TELEPHONE CHARGES','2022-09-25 20:20:00',100000,2,0),(4,'55566677788','PAYING THE ELECTRIC BILL','2022-06-29 09:00:12',650000,1,0),(5,'55566677788','YOGA CLASS','2022-06-25 13:17:11',3500000,5,0),(7,'23973987411','PAYING TUITION FEE','2022-09-15 09:00:17',450000,6,0),(8,'23973987411','BOOKING KOREA AIRLINE TICKET','2022-07-27 16:16:16',25000000,8,0),(9,'23973987411','BUYING CHANEL BAG','2022-08-02 19:48:19',9308000,5,0),(10,'55566677788','TRANSFER TO EDEN','2022-07-15 14:32:02',25000,3,0),(11,'55566677788','BUYING FRIED CHICKEN','2022-06-01 19:03:00',250000,9,0),(12,'55566677788','TRANSFER TO TAM','2022-07-22 20:03:12',10000000,2,0),(13,'23973987411','TRANSFER TO TIEN','2022-06-19 22:28:01',550000,3,0);
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

-- Dump completed on 2022-10-01  8:22:57
