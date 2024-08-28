-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2024 at 06:09 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `SPK_JST`
--

-- --------------------------------------------------------

--
-- Table structure for table `bobot`
--

CREATE TABLE `bobot` (
  `id` int(11) NOT NULL,
  `w1` float DEFAULT NULL,
  `w2` float DEFAULT NULL,
  `w3` float DEFAULT NULL,
  `w4` float DEFAULT NULL,
  `w5` float DEFAULT NULL,
  `w6` float DEFAULT NULL,
  `w7` float DEFAULT NULL,
  `w8` float DEFAULT NULL,
  `w9` float DEFAULT NULL,
  `w10` float DEFAULT NULL,
  `wb` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2y$10$E1Nrqh8he9/KxF0NOks1X.fFh6hv8uS.FB2ELKRVbS.FG63kOPmYm'),
(2, 'user', '$2y$10$TKre/6JvP7u8hNRTI/1P5eAl5N0DP/z1s6hP3Q7BqEsF0yHMezJae'),
(3, 'admin', '$2y$10$E1Nrqh8he9/KxF0NOks1X.fFh6hv8uS.FB2ELKRVbS.FG63kOPmYm'),
(4, 'user', '$2y$10$TKre/6JvP7u8hNRTI/1P5eAl5N0DP/z1s6hP3Q7BqEsF0yHMezJae'),
(5, 'admin', '$2y$10$7Q0xZF0.E8JhI1i9CfOZO.pRM5uFs.kUYQsR2FC5ZPv/hoqBf9eyG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bobot`
--
ALTER TABLE `bobot`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bobot`
--
ALTER TABLE `bobot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
