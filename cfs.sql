-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 20, 2019 at 05:01 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cfs`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'sam@gmail.com', 'test1234');

-- --------------------------------------------------------

--
-- Table structure for table `college`
--

CREATE TABLE `college` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(200) NOT NULL,
  `students` int(20) NOT NULL,
  `principal` varchar(200) NOT NULL,
  `founded` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `college`
--

INSERT INTO `college` (`id`, `name`, `description`, `address`, `phone`, `students`, `principal`, `founded`) VALUES
(2, 'College of Engineering, Aranmula', 'The College of Engineering, Aranmula is a college in Aranmula, Pathanamthitta, Kerala, India. It is affiliated with the Kerala Technological University.It was founded in 2014, as part of the Co-operative ... Wikipedia\n', 'Ikkara Junction, Aranmula, Kerala 689533', '04682319131', 800, 'Leo Hayes', 2000),
(16, 'College of Engineering, Perumon', 'The College of Engineering Perumon was started in 2000 under the Co-operative Academy of Professional Education Society. The society was formed to establish educational institutions to provide education and training, research and development, and consultancy. Wikipedia\n', 'Perumon, Perinad, Kollam, Kerala 691601\n', '04742550500', 1400, 'Dr. Z.A Zoya', 2000);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `college_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `name`, `content`, `time`, `college_id`) VALUES
(5, 'Ahammed Khaja Hussain', 'Good college... Average level of facilities and academics... A good place to be...\n', '2019-11-20 15:50:39', 16),
(6, 'Sheenu Hashim', 'COLLEGE OF ENGINEERING PERUMON.... Under the Co operative academy of professional education... Established by government of INDIA... college is easily accessible...situated near railway and about 5 km from kollam bypass.... Lots of parking space..', '2019-11-20 15:51:23', 16),
(7, 'Dr Nizamudheen Neerad', 'Superb campus. Dedicated teaching faculties and the institute believes that the true potentials of students cannot be realised through academics alone, so extra curricular activities are provided.', '2019-11-20 15:51:46', 16),
(8, 'Kevin Kev', 'Better educational institution for engineers\n', '2019-11-20 16:00:03', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `college`
--
ALTER TABLE `college`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`),
  ADD KEY `college_feedback` (`college_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `college`
--
ALTER TABLE `college`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `college_feedback` FOREIGN KEY (`college_id`) REFERENCES `college` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
