-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2024 at 04:42 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trabalho_faculdade_land_page`
--

-- --------------------------------------------------------

--
-- Table structure for table `trabalho_faculdade_land_page`
--

CREATE TABLE `trabalho_faculdade_land_page` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trabalho_faculdade_land_page`
--

INSERT INTO `trabalho_faculdade_land_page` (`id`, `nome`, `telefone`, `email`, `endereco`, `cpf`, `data`) VALUES
(26, 'pirulito', '69123456789', 'pirulito@gmail.com', 'centro', '123.456.789-12', '0000-00-00'),
(27, 'pirulito', '69123456789', 'pirulito@gmail.com', 'centro', '123.456.789-12', '0000-00-00'),
(28, 'pirulito', '69123456789', 'pirulito@gmail.com', 'centro', '123.456.789-12', '0000-00-00'),
(29, 'pirulito', '69123456789', 'pirulito@gmail.com', 'centro', '123.456.789-12', '0000-00-00'),
(30, 'pirulito', '69123456789', 'pirulito@gmail.com', 'centro', '123.456.789-12', '0000-00-00'),
(31, '', '', '', '', '', '0000-00-00'),
(32, 'warzone', '69123456789', 'warzone@gmail.com', 'centro', '123.456.789-12', '0000-00-00'),
(33, 'patata', '69123456789', 'patata@gmail.com', 'centro', '123.456.789-12', '0000-00-00'),
(34, '', '', '', '', '', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trabalho_faculdade_land_page`
--
ALTER TABLE `trabalho_faculdade_land_page`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_nome` (`nome`),
  ADD KEY `idx_cpf` (`cpf`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trabalho_faculdade_land_page`
--
ALTER TABLE `trabalho_faculdade_land_page`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
