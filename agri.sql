-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2015 at 09:59 AM
-- Server version: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `agri`
--

-- --------------------------------------------------------

--
-- Table structure for table `manrique_uhera_gram`
--

CREATE TABLE IF NOT EXISTS `manrique_uhera_gram` (
  `land_er_slp` int(10) NOT NULL,
  `soil_text` varchar(50) NOT NULL,
  `drainage` varchar(50) NOT NULL,
  `water_logging` varchar(50) NOT NULL,
  `root_depth` int(10) NOT NULL,
  `cec_sub` int(10) NOT NULL,
  `base_sat` int(10) NOT NULL,
  `caco3` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `manrique_uhera_groundnut`
--

CREATE TABLE IF NOT EXISTS `manrique_uhera_groundnut` (
  `land_er_slp` int(10) NOT NULL,
  `soil_text` varchar(50) NOT NULL,
  `drainage` varchar(50) NOT NULL,
  `water_logging` varchar(50) NOT NULL,
  `root_depth` int(10) NOT NULL,
  `cec_sub` int(10) NOT NULL,
  `base_sat` int(10) NOT NULL,
  `caco3` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `manrique_uhera_sesame`
--

CREATE TABLE IF NOT EXISTS `manrique_uhera_sesame` (
  `land_er_slp` int(10) NOT NULL,
  `soil_text` varchar(50) NOT NULL,
  `drainage` varchar(50) NOT NULL,
  `water_logging` varchar(50) NOT NULL,
  `root_depth` int(10) NOT NULL,
  `cec` int(10) NOT NULL,
  `base_sat` int(10) NOT NULL,
  `caco3` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `manrique_uhera_wheat`
--

CREATE TABLE IF NOT EXISTS `manrique_uhera_wheat` (
  `land_er_slp` int(10) NOT NULL,
  `soil_text` varchar(50) NOT NULL,
  `drainage` varchar(50) NOT NULL,
  `water_loging` varchar(50) NOT NULL,
  `root_depth` int(10) NOT NULL,
  `cec` int(10) NOT NULL,
  `base_satu` int(10) NOT NULL,
  `caco3` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sys_model_gram`
--

CREATE TABLE IF NOT EXISTS `sys_model_gram` (
  `per_slope` int(10) NOT NULL,
  `rain` int(10) NOT NULL,
  `temp_mean` int(10) NOT NULL,
  `length_growing_short` int(10) NOT NULL,
  `length_growing_long` int(10) NOT NULL,
  `drain` varchar(50) NOT NULL,
  `texture` varchar(20) NOT NULL,
  `depth` int(10) NOT NULL,
  `caco3` int(10) NOT NULL,
  `gypsum` int(10) NOT NULL,
  `cec` int(10) NOT NULL,
  `base_sat` int(10) NOT NULL,
  `organic_carbon` int(10) NOT NULL,
  `ph` int(10) NOT NULL,
  `ec_dsm` int(10) NOT NULL,
  `na_conc` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sys_model_groundnut`
--

CREATE TABLE IF NOT EXISTS `sys_model_groundnut` (
  `per_slope` int(10) NOT NULL,
  `rain` int(10) NOT NULL,
  `temp_mean` int(10) NOT NULL,
  `length_growing_bunch` int(10) NOT NULL,
  `length_growing_spreading` int(10) NOT NULL,
  `drain` varchar(50) NOT NULL,
  `texture` varchar(20) NOT NULL,
  `depth` int(10) NOT NULL,
  `caco3` int(10) NOT NULL,
  `gypsum` int(10) NOT NULL,
  `cec` int(10) NOT NULL,
  `base_sat` int(10) NOT NULL,
  `organic_carbon` int(10) NOT NULL,
  `ph` int(10) NOT NULL,
  `ec_dsm` int(10) NOT NULL,
  `na_conc` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sys_model_sesame`
--

CREATE TABLE IF NOT EXISTS `sys_model_sesame` (
  `per_slope` int(10) NOT NULL,
  `rain` int(10) NOT NULL,
  `mean_temp` int(10) NOT NULL,
  `length_growing_early` int(10) NOT NULL,
  `length_growing_medium` int(10) NOT NULL,
  `length_growing_variety` int(10) NOT NULL,
  `drain` varchar(50) NOT NULL,
  `texture` varchar(20) NOT NULL,
  `depth` int(10) NOT NULL,
  `caco3` int(10) NOT NULL,
  `gypsum` int(10) NOT NULL,
  `cec` int(10) NOT NULL,
  `base_sat` int(10) NOT NULL,
  `organic_carbon` int(10) NOT NULL,
  `ph` int(10) NOT NULL,
  `ec_dsm` int(10) NOT NULL,
  `na_conc` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sys_model_wheat`
--

CREATE TABLE IF NOT EXISTS `sys_model_wheat` (
  `per_slope` int(10) NOT NULL,
  `rain` int(10) NOT NULL,
  `temp_mean` int(10) NOT NULL,
  `length_growing_season` int(10) NOT NULL,
  `drain` varchar(50) NOT NULL,
  `texture` varchar(20) NOT NULL,
  `depth` int(10) NOT NULL,
  `caco3` int(10) NOT NULL,
  `cec` int(10) NOT NULL,
  `base_sat` int(10) NOT NULL,
  `org_carbon` int(10) NOT NULL,
  `ph` int(10) NOT NULL,
  `ec` int(10) NOT NULL,
  `na_conc` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sys_model_wheat`
--

INSERT INTO `sys_model_wheat` (`per_slope`, `rain`, `temp_mean`, `length_growing_season`, `drain`, `texture`, `depth`, `caco3`, `cec`, `base_sat`, `org_carbon`, `ph`, `ec`, `na_conc`) VALUES
(45, 0, 0, 0, 'Moderate', 'si', 56, 89, 6, 0, 0, 90, 0, 0),
(45, 45, 67, 56, 'Moderate', 'si', 56, 89, 6, 0, 0, 90, 0, 0),
(45, 45, 67, 56, 'Moderate', 'si', 56, 89, 6, 45, 67, 90, 67, 0),
(45, 45, 67, 56, 'Moderate', 'si', 56, 89, 6, 45, 67, 90, 67, 0),
(45, 45, 67, 56, 'Moderate', 'si', 56, 89, 6, 45, 67, 90, 67, 0),
(45, 45, 21, 3, 'Imperfect', 'sf', 54, 3, 89, 67, 45, 3, 56, 78),
(1, 10, 22, 120, 'Moderate', 'scl', 10, 2, 5, 45, 3, 8, 10, 15),
(1, 10, 22, 120, 'Moderate', 'scl', 10, 2, 5, 45, 3, 8, 10, 15);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user`, `password`) VALUES
(1, 'admin', 'admin'),
(2, 'admin', 'admin');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
